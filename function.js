'use strict';

setTimeout(function() { 
  // alert("my message <h1>test</h1>");   
  console.log("added notification");
  addNotification('title', 'message');
  
}, 2000);

var notify = function (title, message) {
  console.log("called notify");
  
	var dtNow = new Date();
  
	var dtNow1 = new Date();	dtNow1.setSeconds(dtNow1.getSeconds() + 5);		var dts1 = Math.floor(dtNow1);
	var dtNow2 = new Date();	dtNow2.setSeconds(dtNow2.getSeconds() + 10);	var dts2 = Math.floor(dtNow2);
	var dtNow3 = new Date();	dtNow3.setSeconds(dtNow3.getSeconds() + 15);	var dts3 = Math.floor(dtNow3);
	var dtNow4 = new Date();	dtNow4.setSeconds(dtNow4.getSeconds() + 20);	var dts4 = Math.floor(dtNow4);
  
  var notification1 = new Notification(title, {
      body: "BODY",
      timestamp: dts1
  });
  
  var notification2 = new Notification(title, {
      body: "BODY",
      timestamp: dts2
  });
  
  var notification3 = new Notification(title, {
      body: "BODY",
      timestamp: dts3
  });
  
  var notification4 = new Notification(title, {
      body: "BODY",
      timestamp: dts4
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

