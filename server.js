const MONGOCLIENT = require('mongodb').MongoClient;

const URL = 'mongodb://127.0.0.1:27017';
const DBNAME = 'game-of-thrones'
let db;

MONGOCLIENT.connect(URL, {useNewUrlParser: true}, (err, client) => {
  if(err) return console.log(err);

  db = client.db(DBNAME)
  console.log('DB', db.collection);
  console.log(`Connected MongoDB: ${URL}`)
  console.log(`Database: ${DBNAME}`)
});