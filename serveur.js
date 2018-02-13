#!/usr/bin/env node

var Twitter = require('twitter');
const program = require('commander')


var twitter = new Twitter({
    consumer_key: 'y7UVM1GSCsEePysM1d9b81Kjd',
    consumer_secret: '1yncOY2g3PoF2bXowZmk6UcIaoRTYp5XVWRUqMPmDhBYgklVTo',
    access_token_key: '379700834-ehvg47TIcNZnKkrjJX0Ik6E0fFj4duIgSRbnpXRi',
    access_token_secret: 'pYfPfJLicHcVnivOoBunR8E3Ujvr6NhmaJJ9DuWpyJMcx'
});

program
 .version('1.0.0')
 .option('-h, --hashtag [hashtag]', 'Hashtag recherché')

 program.parse(process.argv)


 if (program.hashtag){
    var params = {
        q: `${program.hashtag}`,
        count: 3
        }
        twitter.get('search/tweets', params,searchedData);
    
        function searchedData(err, data, response) {
            console.log(data);
            }
 }


/*var params = {
    q: 'test',
    count: 100
    }
    twitter.get('search/tweets', params,searchedData);

    function searchedData(err, data, response) {
        console.log(data);
        }*/