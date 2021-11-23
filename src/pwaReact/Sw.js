import React from 'react'

export default function Sw() {
    if('ServiceWorker' in navigator){
       navigator.serviceWorker.register('../../pwaReact/Sw.js') 
       .then(()=>console.log('wow'))
         .catch(()=>console.log('bad'))
       
    }
    else{
        console.log('not availabe')
    }
    return (
        <div>
            sw
        </div>
    )
}
