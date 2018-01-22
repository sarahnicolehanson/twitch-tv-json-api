//https://wind-bow.gomix.me/twitch-api
//["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

$(function(){
  
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?').done(function(data){
    //console.log(data);
     if (data.stream === null) {
        $("#fcc").html("freeCodeCamp is currently offline");
        $("#fcc").css("color", "yellow");
      } else {
        $("#fcc").html("freeCodeCamp is currently live");
        $("#fcc").css("color", "green");
      }
    }
  );
  for (var i = 0; i < users.length; i++) {
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        users[i] +
        "?callback=?",
      function(data) {
        if (data.stream != null) {
          $("#user").append(
            "<div class='channels'><img src=" +
              data.stream.channel.logo +
              ">" +
              "<h3><a href=" +
              data.stream.channel.url +
              " target='_blank'></h3><ul class='list-unstyled'><li>" +
              data.stream.channel.display_name +
              " is online now<a/></li><li>Playing: " +
              data.stream.channel.game +
              "</li></div><br>"
          );
        } else {
          var chUrl = data._links.channel;
          var chName = chUrl.match(/([^\/]*)\/*$/)[1];

          $("#user")
            .append("<h3>" + chName + " is offline" + "</h3>")
            .css("color", "yellow");
        }
      }
    );
  }   
});