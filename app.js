const  express=require('express');
const app = express();


const  postRoute = require('./routes/post')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use('/pp',postRoute);
/*
var mongo = require('mongoosedb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
*/
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
*/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
const conn = mongoose.connection
conn.on('open',function () {
  console.log('connected')
})


//Routes
app.get('/',(req,res,)=>{
    res.send('we are at home')
})

app.listen(3000);