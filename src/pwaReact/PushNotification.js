import React, { useEffect } from 'react'
import firebase from 'firebase';
import { firebaseApp } from '../firebase';
export default function PushNotification() {
// useEffect(()=>{
//     const messaging=firebaseApp.messaging()
//     messaging.requestPermission().then((token)=>{
//         return messaging.getToken()
//     })
//     .then((token)=>{
//         console.log('token',token)
//     })
//     .catch((err)=>{
//         console.log('err',err)
//     })
// },[firebaseApp])
  useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })
    return (
        <div>
     push       
        </div>
    )
}
