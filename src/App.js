import React, {useState,useEffect} from 'react';
import { Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './reset.css';
import './loading.scss';
import './App.scss';
import './editor.scss'

import Header from './header'
import Introduce from './introduce';
import AskForm from './login';
import Clock from './clock'
import Loading from './loading'
import Editor from './editor'
import Calendar from './calendar';
import MainFooter from './main_footer'
import Notification from './Notification'
import Mypage from './Mypage'
import Profile from './profile'
import login from './login';

function App(props) {
  let [LoadingState,Loading변경] = useState(false);
  // 로딩 state
  const USER_ID = "currentUser"
  let currentUser = localStorage.getItem(USER_ID);
  // 회원정보 탐색
  // 시간

  let [plusDay,setplusDay] = useState(1)

  const point = "rank"

  let loadedPoint = +localStorage.getItem(point)

  let [rank,setrank] = useState(0)

  let [parcent,setparcent] = useState(0)

  let [addToggle,setAddToggle] = useState(false)

  let [resets,setresets] = useState(false)

  const loadedTodos = localStorage.getItem(props.reducer[0].saveData)
  const parsedTodos = JSON.parse(loadedTodos);

  const parcentName = "parcent"

  const loadedParcent = +localStorage.getItem(parcentName)


  const loadedDay = localStorage.getItem(props.reducer7[0].first)
  const parsedDay = JSON.parse(loadedDay)

  // 사용한 날 
  var countDownDate = new Date();
  countDownDate.setHours(24,0,0,0); // 내일 자정


  var timer = setInterval(function() {
    // 현재 날짜와 시간
    var now = new Date().getTime();
    // 현재 시각과 카운트다운 시각과의 차이
    var distance = countDownDate - now;
      
    // 시간, 분, 초 계산
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // 카운트 다운 끝나면 0으로 새로운 값 처리
    if (distance < 0) {
      clearInterval(timer);
      setparcent(0)
      localStorage.removeItem("data")
      localStorage.removeItem("parcent")
    }
  }, 1000);

  return (
    <div className="App">

      {
        useEffect(()=>{
          var now = new Date();
          let start = new Date(
            loadedDay == null
            ? 0
            : `${parsedDay[0].findyear},${parsedDay[0].findmonth+1},${parsedDay[0].findDay-1}`
            );
          // getFullYear의 달은 0부터 시작하므로 3월은 2 

          var diff = (now - start) 

          var oneDay = 1000 * 60 * 60 * 24;
          var counter = Math.floor(diff / oneDay);
          //하루 라는 뜻
    
          var countDay = counter

          setplusDay(countDay)
        })
      }
      {
        useEffect(()=>{
          setTimeout(() => {
            Loading변경(true)
            //여기에 한번 더 써준 이유는 한번 실행하고 setinterval을 쓸려고
          }, 3000);
        },[])
      }

      {
        useEffect(()=>{
          var timer = setInterval(function() {
            // 현재 날짜와 시간
            var now = new Date().getTime();
            // 현재 시각과 카운트다운 시각과의 차이
            var distance = countDownDate - now;
              
            // 시간, 분, 초 계산
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // 카운트 다운 끝나면 0으로 새로운 값 처리
            if (distance === 0) {
              clearInterval(timer);
              setparcent(0)
              localStorage.removeItem("data")
              localStorage.removeItem("parcent")
            }
          }, 1000);
        },[])
      }

    {
      useEffect(()=>{
        setInterval(() => {
          var now = new Date();

          let start = new Date(`${parsedDay[0].findyear},${parsedDay[0].findmonth+1},${parsedDay[0].findDay-1}`);

          var diff = (now - start) 

          var oneDay = 1000 * 60 * 60 * 24;

          var counter = Math.floor(diff / oneDay);
          //하루 라는 뜻
    
          var countDay = counter

          setplusDay(countDay)
        },36000);
      },[])
    }

    {
      useEffect(()=>{
        loadedParcent == null
        ? setparcent(0)
        : setparcent(loadedParcent)
        
        loadedPoint == null
        ? setrank(0)
        : setrank(loadedPoint)
      },[])
    }


    <Route exact path="/">
    {
       LoadingState === false && props.reducer6[0].update === false
       ? <Loading></Loading>
       : currentUser === null
       ? <AskForm></AskForm>
       : <div>
         {/* div을 쓴 이유는 footer가 100프로가 되야하는데 in_wrap 안에 있으면 90퍼의 정보를 상속받아서 그럼 */}
       <div className="wrap">
          <header className="main_header">
            <Clock></Clock>
            <Link to="/Mypage" className="main_nav"><img src="./img/nav.svg" alt="nav"></img></Link>
            <Header></Header>
          </header>
          <section className="section01">
            <div className="s1_wrap">
            <div className="s1_txt_wrap">
            <p className="today">오늘 하루</p>
            <p className="parcent">
              {
                  parcent > 100
                  ? setparcent(100)
                  : parcent
              }%</p>
            <p className="caption">완벽한 하루를 보내셨습니다!</p>
            </div>
            {
              parcent === 0
              ? <img src="/img/wow.svg" alt="준비"></img>
              : parcent === 25
              ? <img src="/img/ready.svg" alt="하는중" className="ing"></img>
              : parcent === 50
              ? <img src="/img/50.svg" alt="하는중" className="wow1"></img>
              : parcent === 75
              ? <img src="/img/75.svg" alt="하는중" className="wow2"></img>
              : parcent === 100 
              ? <img src="/img/ing.svg" alt="하는중" className="wow3"></img>
              : <img src="/img/ing.svg" alt="하는중" className="wow4"></img>
            }
            </div>
            <div className="race">
              <p className="member">{currentUser}</p>
              <div className="member_caption">님은 {plusDay}일째 완벽한 하루를 사용중!!
             </div>
            </div>
          </section>

          <section className="section02">
            <div className="in_s2">
              <div className="schedule">
                <p>일정스케줄</p>
                {
                 resets === false
                 ?  <p className="reset" onClick={()=>{
                  setAddToggle(true)
                  setresets(true)
                 }}>작성완료 
                 <img src="/img/plus.svg" alt="더보기"></img></p>
                 :  <p className="reset" onClick={()=>{
                   localStorage.removeItem("data")
                   setresets(false)
                   setAddToggle(false)
                   localStorage.removeItem("parcent")
                   window.location.reload()
                 }}>초기화하기</p>
               }
              </div>
              {
                loadedTodos !== null
                ? parsedTodos.map(function (a,i) {
                  return <div className="list" key={i}>
                        <p className="today_date">{parsedTodos[i].writeH}:{parsedTodos[i].writeM}</p>
                          <p className="today_txt">{parsedTodos[i].write}</p>
                      <button id ={i} onClick={()=>{ 
                            var nowTime = new Date();

                            var year = nowTime.getFullYear();
                            var mon = (nowTime.getMonth()+1);
                            var date = nowTime.getDate();
                            var hour = nowTime.getHours();
                            var min = nowTime.getMinutes();                              

                            let DateFac = {
                              year : year,
                              mon : mon,
                              date : date,
                              hour : hour,
                              min : min
                            }
                            
                        parcent >= 100
                        ? setparcent(parcent)
                        : setparcent(parcent+25)
                        localStorage.setItem(parcentName,parcent+25)
                        props.dispatch({type:"날짜전송",payload2: DateFac})
                        props.dispatch({type:"알림보기"})
                        props.dispatch({type:"텍스트보내기",payload3:parsedTodos[i].write})
                        
                        parcent === 50 
                        ? setrank(rank +1)
                        : setrank(rank)

                        localStorage.setItem(point,rank)

                        const finded = document.querySelectorAll(".section02 .list button")
                        const todayFind = document.querySelectorAll(".section02 .list .today_date")
                        const todayFind2 = document.querySelectorAll(".section02 .list .today_txt")
                        finded[i].classList.add('off')
                        todayFind[i].classList.add('op_off')
                        todayFind2[i].classList.add('op_off')
                      }}>
                          <img src="/img/before_check.svg" alt="check"></img>
                      </button>
                      </div>
                })
                : null
              }
            </div>
          </section>
          {
                props.reducer[0].toggle === true
                ? <Editor></Editor>
                : null
              }
          </div>
           <MainFooter addToggle={addToggle}></MainFooter>
           {
             props.reducer2[0].NotiToggle === true && props.reducer4[0].Nobell === true
             ? <Notification loadedTodos={loadedTodos} parsedTodos={parsedTodos}></Notification>
             :  null
           }
          </div>
    }
    </Route>
    <Route exact path="/introduce">
      <Introduce></Introduce>
      </Route>
      <Route exact path="/login">
      <AskForm></AskForm>
      </Route>
      <Route exact path="/calendar">
      <Calendar></Calendar>
      </Route>
      <Route exact path="/loading">
      <Loading></Loading>
      </Route>
      <Route exact path="/Mypage">
      <Mypage currentUser={currentUser} loadedPoint={loadedPoint}></Mypage>
      </Route>
      <Route exact path="/profile">
      <Profile></Profile>
      </Route>
    </div>
  );
}

function redux메인공장(state) {
  return{
    reducer : state.reducer,
    reducer2 : state.reducer2,
    reducer3 : state.reducer3,
    reducer4 : state.reducer4,
    reducer5 : state.reducer5,
    reducer6 : state.reducer6,
    reducer7 : state.reducer11
  }
}

export default connect(redux메인공장)(App);