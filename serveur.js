#!/usr/bin/env node

var Twitter = require('twitter');
const program = require('commander');
var config = require('./config');
var express = require('express');
mongoose = require('mongoose');
http = require('http');
const pug = require('pug')

var twitter = new Twitter(config);
var app = express()
var port = process.env.PORT || 81
// mongoose.connect('mongodb://localhost/node_twitter')

let contain = {/* user: "name", id: "id", text: "text", create: "created_at"*/}
let tweets = [contain]
const tplIndexPath = './index.pug'
const renderIndex = pug.compileFile(tplIndexPath)

program
 .version('1.0.0')
 .option('-h, --hashtag [hashtag]', 'Hashtag recherché')
 .option('-c, --console [hashtag]', 'Hashtag recherché en console')
 program.parse(process.argv)

 

if (program.hashtag){
    var params = {
        q: `${program.hashtag}`,
        count: 3000
        }
        twitter.get('search/tweets', params,searchedData);
    
        function searchedData(err, data, response) 
        {
            app.get('/', (req, res) =>  {
                const obj = data.statuses.map(elem => (
                {
                    user: elem.user.name,
                    id: elem.id,
                    text: elem.text,
                    create: elem.created_at
                }))
                const html = renderIndex({
                    "tweets": obj
                    })
                res.write(html)
                //res.json(obj)
            })
        }
 }
 else if(program.console){
    var params = {
        q: `${program.hashtag}`,
        count: 3000
        }
        twitter.get('search/tweets', params,searchedData);
    
        function searchedData(err, data, response) {
            const obj = data.statuses.map(elem => ({
                user: elem.user.name,
                id: elem.id,
                text: elem.text,
                create: elem.created_at
            }))
            console.log(obj);
            }
            }
 


 var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
  });

 


  var io = require('socket.io').listen(server);

 
/*var params = {
    q: 'test',
    count: 100
    }
    twitter.get('search/tweets', params,searchedData);

    function searchedData(err, data, response) {
        console.log(data);
        }*/