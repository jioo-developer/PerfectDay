import React from 'react';
import './loading.scss'
import './reset.css'
import Footer from "./Footer"
import { useHistory } from 'react-router-dom';
function Introduce(props) {
  let history = useHistory()
    return(
        <div>
            <div className="center_wrap">
            <div className="logo_wrap">
              <img src="/img/introduce.svg" alt="이미지" className="introImg"></img>
              <p className="title intro_title">제작자 인사</p>
              <p className="caption">잠들기 전 오늘 정말 한게 없다고 느껴지신 적 없으신가요?
               <br></br>
               일정을 체크하고 끝냄으로 써 하루를 완벽하게 끝내보세요</p>
               <p class="enter" onClick={()=>{
                 history.push("/")
               }}>확인</p>
            </div>
            <Footer></Footer>
          </div>
        </div>
    )
}

export default Introduce;