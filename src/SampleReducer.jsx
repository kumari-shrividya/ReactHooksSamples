import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCRIMENT":
      return { count: state.count + 1 };
    case "DECRIMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const SampleReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>count:{state.count}</p>
      <button onClick={() => dispatch({ type: "INCRIMENT" })}>Incriment</button>
      <button onClick={() => dispatch({ type: "DECRIMENT" })}>DECRIMENT</button>
    </>
  );
};
export default SampleReducer;