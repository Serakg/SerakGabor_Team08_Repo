var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    adatbazis.collection("Helsinki").drop(function(err, res){
        if(err) throw err;
        console.log("A collection törlése sikerült!");
        db.close();
    });
});