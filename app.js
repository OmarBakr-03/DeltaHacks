// var getCurrentTab = async function () {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);

//     return tab;
// }

// var getTopCom =  function(videoId){
//     $(document).ready(function(){
//         var x="";
//         var api_key = "AIzaSyB8nyLsuLck9coNJI0zBYA_54SdMUgX3lc";
//         var url = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key="+api_key+"&videoId="+videoId+"&maxResults=100";
//         $.get(url,function(data){
//             x = data.items[0].snippet.topLevelComment.snippet.textDisplay;
//         })
//         return x;
//       })
// }

var createEvents = function(){
    document.querySelector('.extension_button').addEventListener('click', function(event){
        if(document.querySelector('.ext_nav').style.display=="block"){
            document.querySelector('.ext_nav').style.display="none";
        }
        else{
            document.querySelector('.ext_nav').style.display="block";
        }
        });
}

var createEvent = function(){
    document.querySelector('.ext_button').addEventListener('click', function(event){
        if(document.querySelector('.top_com').style.display=="block"){
            document.querySelector('.top_com').style.display="none";
        }
        else{
            document.querySelector('.top_com').style.display="block";
        }
        });
}

// var vid = getCurrentTab();
// var topc = getTopCom(vid);


var nav_ext = document.createElement('div');
nav_ext.className='ext_nav';
nav_ext.innerHTML = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">'
+'<div class="navbar-nav">'
+'<a class="nav-item nav-link " href="/#">Overall Reception: Excellent</a>'
+'</div>'
+'</nav>';
nav_ext.style.display="none";
document.body.appendChild(nav_ext);


var top_ext = document.createElement('div');
top_ext.className="top_com";
top_ext.innerHTML = '<h1>Top Comment</h1>'
+'<p>The top comment from this Youtube video is:</p>'
+'<br>'
+'<br>'
+'<p>This video was really cool and well received by the viewers';
top_ext.style.display="none";
document.body.appendChild(top_ext);

// var h = document.createElement('div'); // Create the H1 element 
// h.className="ext_header";
// h.innerHTML = '<h1>Commento</h1>'
// +'<p style="font-style:italic;">Commento helps you to extract net comment reaction to Youtube videos!</p>'
// +'<a href="#"><button>Overall Comments</button></a>';
// h.style.display="none";

// document.body.appendChild(h);



var extButton = document.createElement('div');
// var elem = document.createElement('img');
// elem.src="./logof.png";
extButton.className="extension_button";
extButton.innerHTML="<";
// extButton.appendChild(elem);
document.body.appendChild(extButton);


var extButtonn = document.createElement('div');
extButtonn.className="ext_button";
extButtonn.innerHTML="^";
document.body.appendChild(extButtonn);

createEvents();
createEvent();



