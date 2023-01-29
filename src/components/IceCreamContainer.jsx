import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buyIceCream } from './../redux/IceCream/IceCreamAction';

const IceCreamContainer = () => {
  const all = useSelector((state)=> state.ice.numOfIce)
  const dispatch = useDispatch()
  const handlebuyIce = ()=>{
dispatch(buyIceCream())
  }
  return (
    <>

    
    <div>
        Number of Ice Cream {all}
    </div>
    <button onClick={handlebuyIce}>buy ice </button>
    </>
  )
}

export default IceCreamContainer