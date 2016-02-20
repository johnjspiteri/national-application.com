# nationalrx

Database Initialization Notes:

Use the following script to setup collections in MongoDB

mongoimport -u worker -p nat1onal --db national --collection pharmacies --drop --file /Users/jj/Development/nationalrxcard.com/data/pharmacies.json &&

mongoimport -u worker -p nat1onal --db national --collection accounts --drop --file /Users/jj/Development/nationalrxcard.com/data/accounts.json &&

mongoimport -u worker -p nat1onal --db national --collection users --drop --file /Users/jj/Development/nationalrxcard.com/data/users.json


mongoimport -h ds055505.mongolab.com:55505 -d national -c pharmacies -u worker -p nat10nal --file /Users/jj/Development/nationalrxcard.com/server/data/pharmacies.json

mongoimport -h ds055505.mongolab.com:55505 -d national -c members -u worker -p nat10nal --file /Users/jj/Development/nationalrxcard.com/server/data/members.json

mongoimport -h ds055505.mongolab.com:55505 -d national -c accounts -u worker -p nat10nal --file /Users/jj/Development/nationalrxcard.com/server/data/accounts.json

mongoimport -h ds055505.mongolab.com:55505 -d national -c users -u worker -p nat10nal --file /Users/jj/Development/nationalrxcard.com/server/data/users.json