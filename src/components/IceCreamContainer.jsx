import React from 'react'
import { useSelector } from 'react-redux';

const IceCreamContainer = () => {
  const all = useSelector((state)=>state.numOfIce)
  console.log(all)
  return (
    <div>
        Number of Ice Cream {all}
    </div>
  )
}

export default IceCreamContainer