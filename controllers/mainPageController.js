app.controller('mainPageController', ['$scope','Tweets', function ($scope, Tweets) {

    /*var users = new Users();
    users.getUsersList().then(function () {
        $scope.userList = users.userList;
        //users.findUser('Bret');
    });*/
    var tweets = new Tweets();
    tweets.getTweetsList().then(function () {
      $scope.tweetsList = tweets.tweetsList;
    })
    tweets.getGroupedTweets().then(function(){
      //$scope.groupedTweets = tweets.groupedTweets;
      var data = tweets.formatData(tweets.groupedTweets);
      makeHeapmap(data);
    })
  
    $scope.update = function(username){
      //console.log($scope.username);
      tweets.getGroupedTweets($scope.username).then(function(){
        //$scope.groupedTweets = tweets.groupedTweets;
        var data = tweets.formatData(tweets.groupedTweets);
        makeHeapmap(data);
      })
      tweets.getTweetsList(username).then(function () {
        $scope.tweetsList = tweets.tweetsList;
      })
    }
    /*
    var posts = new Posts();
    posts.getPostList().then(function () {
        console.log(posts.getPostByUser(1));
    })*/

}]);