import React, {useEffect } from 'react';
import './reset.css'
import './login.scss'
import Footer from "./Footer"
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';

function AskForm(props){
  let history = useHistory()
   useEffect(()=>{
        const form = document.querySelector(".js-form"),
        input = form.querySelector("input"),
        gretting = document.querySelector(".js-grettings"),
        log = document.querySelector(".gretting_wrap"),
        out = log.querySelector(".out")

        const USER_ID = "currentUser"
    
        function saveName(text) {
          localStorage.setItem(USER_ID, text);
        }
    
        function askForName() {
          form.addEventListener("submit",handleSubmit)
        }
    
        function handleSubmit(event) {
          event.preventDefault();
          const currentValue = input.value;
          paintGretting(currentValue);
          saveName(currentValue);
        }
    
        function paintGretting(text) {
          gretting.innerText = `${text} 님 반갑습니다`
          form.classList.add("none")
          log.classList.add("height")
          history.push('/')
          props.dispatch({type:"로그인성공"})
          const thisDay = new Date();
          const findyear = thisDay.getFullYear();
          const findmonth = thisDay.getMonth();
          const findDay = thisDay.getDate();
          let saveDay = {
            findyear : findyear,
            findmonth : findmonth,
            findDay : findDay
          }
          props.dispatch({type:"첫로그인",payload7:saveDay})
        }
    
        function loadName() {
            let currentUser = localStorage.getItem(USER_ID);
                if (currentUser === null) {
                    askForName();
                } else {
                    paintGretting(currentUser);
                }
        }
    
        const init  = () =>{ loadName() }
        
        init();

        }) 
    return(
        <div className="center_wrap">
         <div className="gretting_wrap">
         <h4 class="js-grettings grettings"> </h4>
         </div>
         <form class="js-form form">
          <input type="text" placeholder="사용 할 닉네임을 적어주세요."/>
          <p className="resign">(재지정하는 경우 1일째로 다시시작합니다)</p>
         </form>
         <Footer></Footer>
        </div>
    )
}

function 로그인공장(state) {
  return {
      state : state.reducer6,
      state2 : state.reducer11
  }
}

export default connect(로그인공장)(AskForm);