# nationalrx

Database Initialization Notes:

username: 'admin@nationalrxcard.com'
password 'nat10nal'

Use the following script to setup collections in MongoDB

mongoimport --db card --collection pharmacies --drop --file ~/Development/nationalrxcard.com/server/data/pharmacies.json && mongoimport --db card --collection members --drop --file ~/Development/nationalrxcard.com/server/data/members.json && mongoimport --db card --collection accounts --drop --file ~/Development/nationalrxcard.com/server/data/accounts.json && mongoimport --db card --collection users --drop --file ~/Development/nationalrxcard.com/server/data/users.json

OpenShift database population
mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c locations  --drop --file repo/server/data/pharmacies.json

mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c members --drop --file repo/server/data/members.json

mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c accounts  --drop --file repo/server/data/accounts.json

mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c users  --drop --file  repo/server/data/users.json