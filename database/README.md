# National RX Card Database Commands

**Connect to remote Triton database container**
mongo 72.2.114.111:27017 -u "worker" -p "Sup3rP0w3r" --authenticationDatabase "admin"
mongo 72.2.114.111:27017 -u "admin" -p "M@sterP0w3r" --authenticationDatabase "admin"

**Export remote Triton database collection**

Load pharmacies:
mongoimport --host 72.2.114.111 --port 27017 -u "admin" -p "M@sterP0w3r" --authenticationDatabase "admin" --db card --collection pharmacies --drop --file data/pharmacies.json

Load members:
mongoimport --host 72.2.114.111 --port 27017 -u "admin" -p "M@sterP0w3r" --authenticationDatabase "admin" --db card --collection members --drop --file data/members.json

Load accounts:
mongoimport --host 72.2.114.111 --port 27017 -u "admin" -p "M@sterP0w3r" --authenticationDatabase "admin" --db card --collection accounts --drop --file data/accounts.json

Load users:
mongoimport --host 72.2.114.111 --port 27017 -u "admin" -p "M@sterP0w3r" --authenticationDatabase "admin" --db card --collection users --drop --file data/users.json

**MongoDB commands**
