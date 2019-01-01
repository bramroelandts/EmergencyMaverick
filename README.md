# EmergencyMaverick

## Creators
This project was built within 36 hours at the Finnish hackathon [Junction 2018](https://hackjunction.com/). Our team became 2nd in Intel's `Bluetooth Mesh` challenge, 3rd in Ericsson's `Saved by IoT` challenge and won the `Smart Cloud` track, bringing us to the grand finale. This project was created by:
- [Jaya Kumar Bidari](https://github.com/jbidari15)
- [Martin Meisalu](https://www.linkedin.com/in/mmeisalu/)
- [Sergey Zakrytnoy](https://github.com/szakrytnoy)
- [Bram Roelandts](https://github.com/brammahh)
- [Mykola Volodymyrovych Dolhyi](https://github.com/klokik)

## About

EmergencyMaverick is an emergency network for natural disasters, based upon `Bluetooth Mesh`.

The goal of our project is to make a decentralized energy neutral chatting network based on hardware that would operate in areas where infrastructure is down.  This is usually due to hurricane, earthquake or volcano activity. We have created a solution that can be set up within hours of the accident and is cost efficient to deploy.

Our solution allows people to send messages to each other, receive important information from local authorities or rescue workers and notify their family about their safety. 

The network architecture is based on `Bluetooth` nodes. These nodes are simple-design mobile phone-like devices with small screens and support for `Bluetooth Mesh` technology.
These low-cost devices (~ $3.5 per unit) are deployed over populated area by drones to achieve efficient distribution and excellent coverage of the area.  The example use case of deployment in an Indonesian village has been researched. We do graph optimization for cost-efficient distribution of the devices across the area that would secure stable coverage.

We have a 3D printed sample of the device with a Phytec Reel Board at the core, running a modified version of the latest [Zephyr project](https://github.com/zephyrproject-rtos/zephyr). The `Bluetooth Mesh` decentralized network is deployed and can be tested for the use cases specified on the demo web page.  Data is gathered by the gateway, an Intel NUC, and stored in backend. Frontend website is implemented in JavaScript and React and backend using Node.js and MongoDB.


## Web interface
Check out the live web interface on [Heroku](https://obscure-lowlands-25171.herokuapp.com/demo).
