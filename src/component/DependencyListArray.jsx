import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const DependencyListArray = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    if(data >= 1){
      document.title = `Chats (${data})`
    }else{
      document.title = `Chats`;
    }
  }, [data]);



  return (<div>
    <h1>{data}</h1>
    <button onClick={() => setData(data+1)}>Click</button>
  </div>
  )
};



export default DependencyListArray;
