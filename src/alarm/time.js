// import React, { useState } from 'react'
// import moment from 'moment'
// export default function Time() {


//   var startTime = "15:30:00";
//   var startFormat = moment(startTime, "HH:mm:ss").format("hh:mm A");
//   var endTime = "15:30:00";
//   var endFormat = moment(endTime, "HH:mm:ss").format("hh:mm A");
// startFormat.

//  const [starting, setstarting] = useState()
//  const [ending, setending] = useState()
//    const hourdiv = (parseInt(ending && ending.slice(0,3))- parseInt(starting && starting.slice(0,3)))
//    const minutesdiv = (parseInt(ending && ending.slice(4,6))- parseInt(starting && starting.slice(4,6)))
//     const division=12
// var h = hourdiv, m = minutesdiv, s = 24;
// var startintTime=parseInt(starting && starting.slice(0,3))
// var startingminutes=parseInt(starting && starting.slice(4,6))
// var secsSinceMidnight = (h*3600) + (m*60) + s;
// var oneTwelth = secsSinceMidnight / division;
// h = Math.floor(oneTwelth / 3600);
// m = Math.floor( (oneTwelth % 3600) / 60);
// s = Math.floor( (oneTwelth % 3600) % 60);
//  var t=[]
//  const hourdivsion=h
//  const mindivsion=m
//  const secdivsion=s
//  for(var i=0;i<=division;i++){
//    t.push(`${startintTime}:${startingminutes}:${s}`)
//     h=h+hourdivsion
//     startingminutes=startingminutes+mindivsion
//     s=s+secdivsion
//     if(startingminutes>60){
//       startintTime=startintTime+1
//       startingminutes=startingminutes-60
//     }
//     if(s>60){
//       startingminutes=startingminutes+1
//       s=s-60
//     }
//  }
//  console.log(t)
//   return (
//          <div>
//            start At  <input valu={starting} onChange={(e)=>setstarting(e.target.value)} type="time" />
//            end At  <input value={ending} onChange={(e)=>setending(e.target.value)} type="time" />
//            <input type='number'/>
//          </div>
//     )
// }
