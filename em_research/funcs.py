from math import sin, cos, sqrt, atan2, radians
import pandas as pd
import numpy as np
import networkx as nx

def get_graph(distances, operating_range):
    num_nodes = len(distances)
    
    G=nx.Graph()
    G.add_nodes_from(range(1, num_nodes + 1))
    
    edges_list = []
    for i in range(num_nodes):
        for j in range(i):
            if distances[i, j] <= operating_range:
                edges_list.append((i + 1, j + 1))
    G.add_edges_from(edges_list)
    return G

def get_distances(coord):
    num_households = len(coord) #How many households there are
    distances = np.zeros((num_households, num_households)) #Initialize matrix of distances

    for i in range(num_households):
        for j in range(i):
            x1 = coord['x'].iloc[i]
            x2 = coord['x'].iloc[j] 
            y1 = coord['y'].iloc[i]
            y2 = coord['y'].iloc[j] 
            distances[i, j] = calculate_distance(x1, y1, x2, y2)
    return distances

def calculate_distance(x1, y1, x2, y2):
    R = 6373.0 #Radius of earth in km
    
    x1 = radians(x1)
    x2 = radians(x2)
    y1 = radians(y1)
    y2 = radians(y2)
    
    dlon = y2 - y1
    dlat = x2 - x1
    
    a = sin(dlat / 2)**2 + cos(x1) * cos(x2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    
    distance = R * c * 1000
    
    return distance