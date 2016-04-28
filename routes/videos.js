var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testDb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('connected using mongoose!');
});

var Schema = mongoose.Schema;
var videoSchema = new Schema({
    title: String,
    description: String
});
var Video = mongoose.model('Video', videoSchema);

router.get('/', function(req, res){
    Video.find({}).find(function(err, videos){
        console.log(videos);
        var results = [];
        res.send(results);
    });
});

// router.post('/', function(req, res){
//     var collection = db.get('videos');
//     collection.insert({
//         title: req.body.title,
//         description: req.body.description
//     }, function(err, video){
//         if (err) throw err;
//         res.json(video);
//     });
// });

module.exports = router;