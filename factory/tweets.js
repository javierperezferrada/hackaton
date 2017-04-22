app.factory('Tweets', function ($http) {

  function Tweets() {
    this.tweetsList = [];
    this.groupedTweets = [];
  }

  Tweets.prototype.getTweetsList = function (username) {
    if(username==undefined){
      var self = this; //Js callbacks change "this" reference
      var root = 'http://172.16.115.137:3000';
      //var root = 'http://api.sophia-project.info/v2/articles';
      //console.log(root);
      return $http({
        method: 'GET',
        url: root +'/getTweetList',
        //url: root +'/category/unclassified/begin',
      }).then(function(response){
        //console.log(response);
        self.tweetsList = response.data;
        return response;
      });
    }else{
      var self = this; //Js callbacks change "this" reference
      var root = 'http://172.16.115.137:3000';
      //var root = 'http://api.sophia-project.info/v2/articles';
      //console.log(root);
      return $http({
        method: 'GET',
        url: root +'/getTweetList?username='+username,
        //url: root +'/category/unclassified/begin',
      }).then(function(response){
        //console.log(response);
        self.tweetsList = response.data;
        return response;
      });
    }
  }
  
  Tweets.prototype.getGroupedTweets = function (username) {
    console.log(username);
    if(username==undefined){
      var self = this; //Js callbacks change "this" reference
      var root = 'http://172.16.115.137:3000';
      //var root = 'http://api.sophia-project.info/v2/articles';
      //console.log(root);
      return $http({
        method: 'GET',
        url: root +'/getGroupedTweets',
        //url: root +'/category/unclassified/begin',
      }).then(function(response){
        //console.log(response);
        self.groupedTweets = response.data;
        return response;
      });
    }else{
      var self = this; //Js callbacks change "this" reference
      var root = 'http://172.16.115.137:3000';
      //var root = 'http://api.sophia-project.info/v2/articles';
      //console.log(root);
      return $http({
        method: 'GET',
        url: root +'/getGroupedTweets?username='+username,
        //url: root +'/category/unclassified/begin',
      }).then(function(response){
        console.log(response);
        self.groupedTweets = response.data;
        return response;
      });
    }
    
  }
  
  Tweets.prototype.formatData = function (param) {
      var data = param.map(function(d){
        return {day:d._id.day, hour:d._id.hour, value: d.count};
      });
      return data;
  }

  /*Users.prototype.findUser = function(username){
    var self = this;
    var found = self.userList.filter(function(d){
      return d.username == username;
    })
    return found;
  }*/

  return Tweets
})