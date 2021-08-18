import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore,combineReducers} from "redux"

let defaults = [{
  toggle : false,
  saveData : "data",
  defaultState : [],
  firstlogin : [],
  first : "first"
}]

let toggles =[{
  NotiToggle : false,
  NavToggle : false,
  Nobell : false,
  update : false,
  rankToggle : false,
  loginToggle :false
}]

let checkTime =[{
  defaultTime : [],
  checkText :[],
  dateSave : "dateSave",
  checktxt :"textSave"
}]

let listData = [{
  profileId : "id",
  listValue : ["1"]
}]

let DayCount = [{
  dayText : [],
  dayDate : [],
  dayName : "day",
  daytxt : "txt"
}]

function reducer(state = defaults, action) {
  if(action.type === "에디터열기"){
    let copy = [...defaults]
    copy[0].toggle = true
    return copy
  } else if (action.type === "에디터닫기") {
    let copy2 = [...defaults]
    copy2[0].toggle = false
    copy2[0].defaultState.push(action.payload)
    localStorage.setItem(copy2[0].saveData,JSON.stringify(copy2[0].defaultState))
    return copy2
  } else {
    return state
  }
}

function reducer2(state = toggles, action2) {
  if(action2.type ==="알림열기"){
    let copy3 = [...toggles]
    copy3[0].NotiToggle = true
    return copy3
  } else if (action2.type === "알림닫기") {
    let copy4 = [...toggles]
    copy4[0].NotiToggle = false
    return copy4
  }else{
    return state
  }
}

function reducer3(state = checkTime, action3) {
  if(action3.type === "날짜전송"){
    let copy5 = [...checkTime]
    copy5[0].defaultTime.push(action3.payload2)
    return copy5
  } else {
    return state
  }
}

function reducer4(state = toggles, action4) {
  if(action4.type === "알림보기"){
    let copy6 = [...toggles]
    copy6[0].Nobell = true
    return copy6
  } else if(action4.type==="알림끄기") {
    let copy8 = [...toggles]
    copy8[0].Nobell = false
    return copy8
  }else {
    return state
  }
}

function reducer5(state = checkTime, action5) {
  if(action5.type === "텍스트보내기"){
    let copy7 = [...checkTime]
    copy7[0].checkText.push(action5.payload3)
    return copy7
  } else{
    return state
  }
}

function reducer6(state = toggles, action6) {
  if(action6.type === "로그인성공"){
    let copy9 = [...toggles]
    copy9[0].update = true
    return copy9
  } else {
    return state
  }
}

function reducer7(state = toggles, action7) {
  if(action7.type === "등급표열기"){
    let copy10 = [...toggles]
    copy10[0].rankToggle = true
    return copy10
  } else if (action7.type === "등급표닫기"){
    let copy11 = [...toggles]
    copy11[0].rankToggle = false
    return copy11
  } else {
    return state
  }
}

function reducer8(state = listData, action8) {
  if(action8.type === "id값전송"){
    let copy12 = [...listData]
    copy12[0].listValue.unshift(action8.payload4)
    localStorage.setItem(copy12[0].profileId,copy12[0].listValue)
    return copy12
  } else {
    return state
  }
}

function reducer9(state = DayCount, action9) {
  if(action9.type === "디데이전송"){
    let copy13 = [...DayCount]
    copy13[0].dayDate.push(action9.payload5)
    console.log(copy13[0].dayDate)
    localStorage.setItem(copy13[0].dayName,JSON.stringify(copy13[0].dayDate))
    return copy13
  } else {
    return state
  }
}

function reducer10(state = DayCount, action10) {
  if(action10.type === "남은일정내용전송"){
    let copy14 = [...DayCount]
    copy14[0].dayText.push(action10.payload6)
    console.log(copy14[0].dayText)
    localStorage.setItem(copy14[0].daytxt,JSON.stringify(copy14[0].dayText))
    return copy14
  } else {
    return state
  }
}

function reducer11(state = defaults, action11) {
  if(action11.type === "첫로그인"){
    let copy15 = [...defaults]
    copy15[0].firstlogin.unshift(action11.payload7)
    localStorage.setItem(copy15[0].first,JSON.stringify(copy15[0].firstlogin))
    return copy15
  } else {
    return state
  }
}

let store = createStore(combineReducers({reducer,reducer2,reducer3,reducer4,reducer5,reducer6,reducer7,reducer8,reducer9,reducer10,reducer11}))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
