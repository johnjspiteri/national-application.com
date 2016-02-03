# nationalrx

Database Initialization Notes:

Use the following script to setup collections in MongoDB

mongoimport -u worker -p nat1onal --db national --collection pharmacies --drop --file data/pharmacies.json &&
mongoimport -u worker -p nat1onal --db national --collection accounts --drop --file data/accounts.json &&
mongoimport -u worker -p nat1onal --db national --collection users --drop --file data/users.json &&