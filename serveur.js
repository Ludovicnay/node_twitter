#!/usr/bin/env node

var Twitter = require('twitter');
const program = require('commander');
var config = require('./config');
streamHandler = require('./utils/streamHandler');



var twitter = new Twitter(config);

const inquirer = require('inquirer')
//  let tweets = [contain]


program
 .version('1.0.0')
 .option('-h, --hashtag [hashtag]', 'Hashtag recherché')
 .option('-c, --console [hashtag]', 'Hashtag recherché en console')
 .option('-s, --stream [hashtag]', 'Streaming sur le hashtag')
 .option('-u, --user , écoute le hashtag user')
 program.parse(process.argv)

 

if(program.console){
    var params = {
        q: `${program.hashtag}`,
        count: 30
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
 else if(program.stream){
    var params = {
        q: `${program.hashtag}`,
        count: 30
        }
        console.log('test1');
           var stream = twitter.stream('statuses/filter', params)
           console.log('test2');
            stream.on('tweet', function (tweet) {
                console.log('test3');
              console.log(tweet)
    });
}
else if(program.user){
    inquirer.prompt([
        {
        type: 'input',
        message: 'Entrez le #',
        name: 'hashtag'
        }, 
        {
        type: 'input',
        message: 'Entrez le nombre de ligne désiré',
        name: 'count'
        }
    ]).then((answers) => {
    var params = {
        q: answers.hashtag,
        count: answers.count
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
    })
}
    



    
