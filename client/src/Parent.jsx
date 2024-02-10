import React, { useState } from 'react'

const Parent = () => {

    const [ data, setdata] =  useState(" ")
  return (
    <div>
        
 <Child1 data = {data} />
<Child2 data1 = {data} />        
    </div>
  )
}
const Child1 = ({data}) => {
    const [ data1 , setdata] =  useState(" ")
   const textchange = (e)=>{
    setdata(e.target.value);
    console.log('====================================');
    console.log(data1);
    console.log('====================================');
   }
  return (
    <div>child1
   <input type='text' onChange={(e)=>textchange(e)} name='input'/>
      
    </div>
  )
}
const Child2 = ({data1}) => {

    console.log('====================================');
    console.log(data1);
    console.log('====================================');
  return (
    <div>child2


    </div>
  )
}

export default Parent