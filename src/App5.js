//lists rendering
import React from 'react'
function salad()
{
const fruits=[
    {id:1,name:"apple"},
    {id:2,name:"orange"},
    {id:3,name:"banana"}]
const style={
    color:'red'
}
    return (
        <div>
            <ol>
                {
                    fruits.map((fruit,index)=>(
                        <li style={style} key={index} id={index}>{fruit.name}</li>
                    ))
                }
            </ol>
        </div>
    );
}
export  default salad;


