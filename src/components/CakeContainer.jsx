import React from "react";

const CakeContainer = () => {
  return(
   <div>
        <h2>Number of Cakes</h2>
        <button>Buy Cake</button>
  </div>
  )
};

const mapStateToProps = state=>{
  return {
    numberOfCakes: state.numberOfCakes

  }
}

export default CakeContainer;
