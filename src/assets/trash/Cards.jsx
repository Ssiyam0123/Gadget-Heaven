import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleCard from './SingleCard';

export default function Cards() {
    const [data, setData] =useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then((res)=> res.json())
        .then ((data) => setData(data))
    },[])
    console.log(data)
  return (
    <div className='grid grid-cols-3 gap-5'>
       {
        data.map((card,i)=> <SingleCard card={card} key={i}></SingleCard>)
       }
    </div>
  )
}
