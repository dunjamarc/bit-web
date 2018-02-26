/* var hello = function() {
           
    console.log("Browser is running on " + window.navigator.platform + " platform");
    console.log("Browser version is " + navigator.appVersion);
    console.log("Browser company is " + navigator.vendor);

}

hello();

var isOnline = function(){
    if(navigator.onLine){
        console.log("online");
    } else {
        console.log("offline");
    }
}
isOnline();

var widthAndHeight = function(){
    console.log("Current browser width and height is "+ screen.availWidth +" and " + screen.availHeight);
    console.log("Max possible browser height is " + screen.height);
}

widthAndHeight(); 

var urlInfo = function(){
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.search);
}
urlInfo();

var reloadPage = function(){
    console.log(location.reload());
    
}
reloadPage();

var redirectPage = function(url){
    location.href = url;
}
redirectPage("https://www.blic.rs");  */

var storage = sessionStorage;

var save_data = function(key, value){
    storage.setItem(key, value);
}
var get_data = function(keyname) {
    var value = storage.getItem(keyname);
        if(value == null){
    console.log("No data");
    } else {
        console.log(value);
    }
}
save_data("stevan", 10);

get_data("stevan");
