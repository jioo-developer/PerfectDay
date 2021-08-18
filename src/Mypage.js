import React, { useEffect } from 'react';
import Clock from './clock';
import Header from './header'
import MainFooter from './main_footer'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import {connect} from 'react-redux';
import RankTable from './rank';

import './reset.css';
import './mypage.scss'

function MyPage(props) {
    let history = useHistory()
    const selct = "id"
    let loadeedSelect = localStorage.getItem(selct)

    return(
        <div>
            {
            useEffect(()=>{

                const changeTitle = document.querySelector(".main_titles a")
                changeTitle.innerHTML="마이페이지"
            })
            }
        <div className="wrap mypage">
         <header>
             <Clock></Clock>
            <Header></Header>
         </header>
         <section className="section_1">
             <div className="profile_wrap">
             <h3 className="myName">
             <b>{props.currentUser}</b>님은
             </h3>
             <p className="myRank">
                 {
                 props.loadedPoint < 5
                 ? "초보완벽러"
                 : props.loadedPoint < 14
                 ? "끈기완벽러"
                 : props.loadedPoint >= 15
                 ? "프로완벽러"
                 : null
                 }이십니다!
             </p>
             <span>MY RANK</span>
             </div>
             <figure className="profile_img">
              <img src={`/img/profile${
                  loadeedSelect === null
                  ? 1
                  : loadeedSelect[0]
                  }.svg`} alt=""></img>
             </figure>
         </section>
         <section className="section_2">
            <ul className="tab_menu">
             <li onClick={()=>{
                 history.push('/profile')
             }}>프로필이미지변경
                 <img src="/img/my_arrow.svg" alt=""></img>
                 </li>
             <li onClick={()=>{
                props.dispatch({type:"등급표열기"})
             }}>등급표
                <img src="/img/my_arrow.svg" alt=""></img>
                </li>
             <li>
                 <Link to="/introduce">개발자인사
                 <img src="/img/my_arrow.svg" alt=""></img></Link>
                 </li>
             <li onClick={()=>{
                 localStorage.removeItem("currentUser")
                 history.push('/login')
             }}>닉네임변경
                <img src="/img/my_arrow.svg" alt=""></img></li>
            </ul>
         </section>
         {
            props.rankPoint[0].rankToggle === true
            ? <RankTable></RankTable>
            : null
         }
        </div>
        <MainFooter></MainFooter>
        </div>
    )
}
  
function rank공장(state) {
    return {
        rankPoint : state.reducer7,
        profileData : state.reducer8
    }
  }

 export default connect(rank공장)(MyPage);