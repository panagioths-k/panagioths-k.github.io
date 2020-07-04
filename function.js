'use strict';

setTimeout(function() { 
  // alert("my message <h1>test</h1>");   
  console.log("added notification");
  addNotification('title', 'message');
  
}, 2000);

var notify = function (title, message) {
  console.log("called notify");
  var notification = new Notification(title, {
      body: "BODY",
      // timestamp: '1593710923108'
  });
};

var addNotification = function(title, message) {
  if ( window.Notification ) {
    if ( Notification.permission === 'granted' ) {
      console.log("already granted");
      notify(title, message);
    }
    else if ( Notification.permission !== 'denied' ) {
      Notification.requestPermission(function (permission) {
          if ( permission === 'granted' ) {
            console.log("granted permission");
            notify(title, message);
          }
      });
    }
  };
}

