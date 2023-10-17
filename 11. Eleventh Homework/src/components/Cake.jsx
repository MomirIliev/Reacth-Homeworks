import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes } from "./../actions/CakeActions";
import { useState } from "react";

export const Cake = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);
  const [numCakes, setNumCakes] = useState("");
  const [refilCakes, setRefillCakes] = useState("");

  function buyCakesHandler(e) {
    if (e) {
      setNumCakes(e.target.value);
      // e.target.value = "";
    }
  }

  function restockCakesHandler(e) {
    if (e) {
      setRefillCakes(e.target.value);
    }
  }

  return (
    <div id="buyCake">
      <h2>Cakes:{cakes}</h2>
      <label htmlFor="buyCake">How many cakes would you want to buy? </label>
      <input
        type="number"
        value={numCakes}
        // disabled={cakes < 1}
        onChange={buyCakesHandler}
        // onClick={() => {
        //   dispatch(buyCake(1));
        // }}
      />
      <button
        disabled={cakes < 2}
        onClick={() => {
          dispatch(buyCake(numCakes));
          setNumCakes("");
        }}
      >
        Buy Cakes
      </button>
      <label htmlFor="restockCakes">Refill suplies with cakes: </label>
      <input
        id="restockCakes"
        onChange={restockCakesHandler}
        type="number"
        value={refilCakes}
      />
      <button
        disabled={cakes < 3}
        onClick={() => {
          dispatch(restockCakes(refilCakes));
          setRefillCakes("");
        }}
      >
        Restock Cakes
      </button>
    </div>
  );
};
