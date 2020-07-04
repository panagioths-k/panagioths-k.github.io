'use strict';

setTimeout(function() { 
  // alert("my message <h1>test</h1>");   
  console.log("added notification");
  addNotification('title', 'message');
  
}, 2000);

var notify = function (title, message) {
  console.log("called notify");
  
	var dtNow = new Date();
  
	var dtNow1 = new Date();	dtNow1.setSeconds(dtNow1.getSeconds() + 10);		var dts1 = Math.floor(dtNow1);
	var dtNow2 = new Date();	dtNow2.setMinutes(dtNow2.getMinutes() + 1);			var dts2 = Math.floor(dtNow2);
  
  var notification1 = new Notification(title, {
      body: "BODY 1",
      timestamp: dts1
  });
  
  var notification2 = new Notification(title, {
      body: "BODY 2",
      timestamp: dts2
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

