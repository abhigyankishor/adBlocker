//console.log("my script works!");

chrome.webRequest.onBeforeRequest.addListener(function(details)){
  console.log("blocking:", details.url);
  return {cancel : true};
},
{urls: ["://*.youtube.com/"]},
["blocking"]
