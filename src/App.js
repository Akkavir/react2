import React, { createContext, useState } from 'react';
import Con1 from './Con1';
import MyContext from './MyContext';
import { CounterProv} from './CountProv';
//import {CounterProvider } from './CounterProvider';
import Cnd from './Cnd';

import { Provider } from 'react-redux';
import store from './store';
import Rcnd from './Rcnd';



function App(props) {

  const [value, setValue] = useState(0);

  return (
    <>
    <p> Simple context provider as state</p>
    <MyContext.Provider value={{ value, setValue }}>
      <Con1/>
    </MyContext.Provider>

    <br/><br/><br/>
    Redux style using useReducer
    <CounterProv>
     <p>
     <Cnd/>
     </p>
    </CounterProv>
  
    <p> Usage of Redux</p>
    <Provider store={store}>
    <Rcnd/>
   </Provider>


  
    </>
    );
}

export default App;