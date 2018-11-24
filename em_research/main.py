import networkx as nx
import pandas as pd
from funcs import get_distances, get_graph
import gmplot 
import numpy as np
import matplotlib.pyplot as plt

coord = pd.read_excel('./data/coordinates.xlsx', index_col = 0)
distances = get_distances(coord)
operating_range = 60

#Get the graph and draw the node representation
G = get_graph(distances, operating_range)
nx.draw_networkx(G, with_labels = True, node_size = 250, node_color = '#bed2e7')
plt.savefig('./png/graph_network.png')
        
#Find separate subgraphs in our network to do the deployment further                 
sub_graphs = nx.connected_component_subgraphs(G)
sub_graphs_nodes = []
for i, sg in enumerate(sub_graphs):    
    nodes_list = list(sg.nodes(data = False))
    sub_graphs_nodes.append(nodes_list) #List of lists of nodes in subgraphs
    
num_sub_graphs = len(sub_graphs_nodes)
tech_nodesX = np.zeros((num_sub_graphs, num_sub_graphs))
tech_nodesY = np.zeros((num_sub_graphs, num_sub_graphs))

for i in range(num_sub_graphs):
    print(sub_graphs_nodes[i])
    av_coord_i = coord.loc[sub_graphs_nodes[i]].mean()
    
    for j in range(i):
        av_coord_j = coord.loc[sub_graphs_nodes[j]].mean()
        
        tech_node_x = (av_coord_i['x'] + av_coord_j['x'])/2
        tech_node_y = (av_coord_i['y'] + av_coord_j['y'])/2
        
        tech_nodesX[i, j] = tech_node_x
        tech_nodesY[i, j] = tech_node_y
                 
""" THIS IS THE FIRST PART OF VISUALIZATION """

#Start the gmplot process (plotting in google maps)
x_center = coord['x'].mean()
y_center = coord['y'].mean()
my_gmap = gmplot.GoogleMapPlotter(x_center, y_center, 25)
my_gmap.apikey = 'AIzaSyAjUF4WXTtXH73I4AAyX7PmJE-wciPOGFk'

initial_x = coord['x'].tolist()
initial_y = coord['y'].tolist()

#Plot the heatmap BEFORE adding new "Technical" nodes
my_gmap.heatmap(initial_x, initial_y, radius = operating_range) 
my_gmap.draw('./gmaps/heatmap_before.html')

additional_x = list(tech_nodesX.reshape(-1,))
additional_x = list(filter(lambda a: a != 0, additional_x))
x_list = additional_x + coord['x'].tolist()

additional_y = list(tech_nodesY.reshape(-1,))
additional_y = list(filter(lambda a: a != 0, additional_y))
y_list = additional_y + coord['y'].tolist()

#Plot the heatmap after adding new "Technical" nodes
my_gmap.heatmap(x_list, y_list, radius = operating_range) 
my_gmap.draw('./gmaps/heatmap_extended.html')

""" THIS IS THE SECOND PART OF VISUALIZATION """

nodes_gmap = gmplot.GoogleMapPlotter(x_center, y_center, 25)
nodes_gmap.apikey = 'AIzaSyAjUF4WXTtXH73I4AAyX7PmJE-wciPOGFk'

# scatter method of map object  
# scatter points on the google map 
nodes_gmap.scatter(initial_x, initial_y, 'b', 
                size = 5, marker = False)
nodes_gmap.scatter(additional_x, additional_y, 'r', 
                size = 5, marker = False)
nodes_gmap.draw('./gmaps/map_nodes.html')