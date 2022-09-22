import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { topla, cikar } from "./counterSlice";
function counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return <div>
    <div>
        <button onClick={()=>dispatch(topla())}>
            topla
        </button>
        <span>{count}</span>
        <button onClick={()=>dispatch(cikar())}>
            cikar
        </button>
    </div>
  </div>;
}

export default counter;
