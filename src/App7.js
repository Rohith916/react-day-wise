import React, { useEffect } from "react";
import { useState } from "react";
   const LifeCycle =()=>{
    const[resourceType,setResourceType]=useState("details are gonna change here");
    console.log("components mounted",resourceType);
    useEffect(()=>{
      console.log("updatedd",resourceType);
      return()=>{

        console.log("unMounted",resourceType);
      }
    },[resourceType])
  return(
    <div>
      <button onClick={()=>setResourceType(" no posts")}>postslabel</button>
      <button onClick={()=>setResourceType("Rohit,sanjai ,ranga")}>userlabel</button>
      <button onClick={()=>setResourceType("Ranga hi ,sanjai hi")}>messagelabel</button>
      <h4>{resourceType}</h4>
    </div>
  ) 
  }
  export default LifeCycle
