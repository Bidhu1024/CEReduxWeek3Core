import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from './../redux/cakes/CakeActions';

const HooksCakeContainer = () => {
  const cakes = useSelector((state) => state.cake.numOfCakes);

  const dispatch = useDispatch()
  const handleCake = () =>{
dispatch(buyCake())
  }
  return <div>Number of Cakes {cakes}
  <button onClick={handleCake}> Buy Cake</button>
  </div>;
};

export default HooksCakeContainer;
