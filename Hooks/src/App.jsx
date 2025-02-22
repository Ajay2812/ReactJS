/*
import Hook1 from "./Components/UseEffect/hook1";
import HookMouse from "./Components/UseEffect/hook2";
import HookMouse2 from "./Components/UseEffect/hook3";
import Hook4 from "./Components/UseEffect/hook4";
import ComponentC from './Components/UseContext/contextC'
import React from 'react'
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

export default function App(){
  return(
    <>
    <UserContext.Provider value={'Ajay'}>
      <ChannelContext.Provider value={'Evolution'}>
        <ComponentC/>
      </ChannelContext.Provider>
    </UserContext.Provider>
    </>
  )
}
*/
            //Reducer
/*
import ComponentA from "./Components/useReducer/ComponentA";
import ComponentB from "./Components/useReducer/ComponentB";
import ComponentC from "./Components/useReducer/ComponentC";
import React from "react";

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = React.useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
      <>
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </>
    </CountContext.Provider>
  );
}
*/

import Memo from "./Components/useMemo/memo";
import FetchOne from "./Components/useReducer/fetch1";
import FetchTwo from "./Components/useReducer/fetch2";
import UseRef from "./Components/useRef/useRef";
import USEREF from "./Components/useRef/useRef2";
export default function App(){
  return(
    //<FetchOne/>
    //<FetchTwo/>
    //<Memo/>
    //<UseRef/>
    <USEREF/>
  )
}