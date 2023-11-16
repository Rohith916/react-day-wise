import  React from "react";
import { useState } from "react";
   const LifeCycle =()=>{
    const[resourceType,setResourceType]=useState("details are gonna change here");
    console.log("components mounted")
  return(
    <div>
      <button onClick={()=>setResourceType(" no posts")}>postslabel</button>
      <button onClick={()=>setResourceType("Rohit,sanjai ,ranga")}>userlabel</button>
      <button onClick={()=>setResourceType("Ranga hi ,sanjai hi")}>messagelabel</button>
        \
      <h2>{resourceType}</h2>
    </div>
  ) 
  }
  export default LifeCycle
