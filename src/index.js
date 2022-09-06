import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import MyDatas from './MyDatas';
import NavBar from './NavBar';
import MyTest from './MyTest';
import './axiosData/global';
import MyFormData from './MyFormData';
import FullFormFunction from './FullFormFunction';
import BasicForm from './BasicForm';
import SignupForm from './SignupForm';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import MyAnotherExample from './MyAnotherExample';
import MyHome from './MyHome';
import MyReducerData from './MyReducerData';
import MyMemoSource from './MyMemoSource';
import ShowMoreTextToggle from './ShowMoreTextToggle';
import DataUseRef from './DataUseRef';

import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import CounterRedux from './CounterRedux';
import CounterReduxWay2 from './CounterReduxWay2';
import CounterReduxWay3 from './CounterReduxWay3';
import PlaceHolder from './PlaceHolder';
import MyUserImage from './MyUserImage';
const root
 = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <MyUserImage/>

    <BrowserRouter >
    <Link to="/">Default</Link>
    <Link to="/home">Home</Link>
    <Link to="/reducerExample">ReducerExample</Link>
    <Link to="/mymemo">ReducerExample</Link>

    <Routes>

    <Route path='/' element={<MyTest/>}/>

    <Route path='/home/:invoiceId' element={<MyHome/>}/>

    <Route path='/reducerExample' element={<MyReducerData/>} />


    <Route path='/mymemo' element={<MyMemoSource/>} />

    <Route path='/userRef' element={<DataUseRef/>} />

    <Route path='/counter' element={<Counter/>}/>
    </Routes>

    



   {/* <ShowMoreTextToggle text="This is the valueThis is the valueThis is the valueThis is the valueThis is the valueThis is the valueThis is the valueThis is the valueThis is the valueThis is the valueThis is the valueThis is the value"></ShowMoreTextToggle>

<CounterRedux></CounterRedux>
<CounterReduxWay2></CounterReduxWay2>
<CounterReduxWay3></CounterReduxWay3> */}

<PlaceHolder></PlaceHolder>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
