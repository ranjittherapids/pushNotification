// importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');
// firebase.initializeApp({
//     messagingSenderId: "703166302773",
//   });

  importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');
 
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function(registration) {
          console.log('Registration successful, scope is:', registration.scope);
        }).catch(function(err) {
         console.log('Service worker registration failed, error:', err);
        });
     }
  firebase.initializeApp({
    messagingSenderId: "703166302773",
    })
 
 const initMessaging = firebase.messaging()

//   messaging.onBackgroundMessage((payload)=>{
// console.log(payload,'payload')
// const notificationTitle=payload.notification.title;
// const notificationOptions={
//     body:payload.notification.body,
    
// }
// return self.ServiceWorkerRegistration.showNotification(notificationOptions,notificationTitle)
//   })