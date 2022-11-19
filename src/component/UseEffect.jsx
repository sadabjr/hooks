import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// const UseEffect = () => {

//     const [data, setData]=useState(0)

//     useEffect(() =>{
//         console.log("useEffect")
//     })

//   return (
//     <div>
//         <h1>{data}</h1>
//         <button onClick={() => setData(data+1)}>Click</button>
//     </div>
//   )
// }
const UseEffect = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    if(data >= 1){
      document.title = `Chats (${data})`
    }else{
      document.title = `Chats`;
    }
  });



  return (<div>
    <h1>{data}</h1>
    <button onClick={() => setData(data+1)}>Click</button>
  </div>
  )
};



export default UseEffect;
