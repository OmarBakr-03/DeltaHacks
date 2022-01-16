$(document).ready(function(){

    $("form").submit(function(event){
      
      event.preventDefault();
  
      var videoId = $("#videoId").val();
  
      var result = "";
  
      var api_key = "AIzaSyB8nyLsuLck9coNJI0zBYA_54SdMUgX3lc";
  
      var url = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key="+api_key+"&videoId="+videoId+"&maxResults=100";
  
      $.get(url,function(data){
        console.log(data);
        var x = data.items[0].snippet.topLevelComment.snippet.textDisplay
      })
    })
})