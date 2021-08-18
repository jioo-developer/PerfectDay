import React, {useEffect} from 'react';
import Clock from './clock';
import Header from './header'
import MainFooter from './main_footer'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom'
import './reset.css';
import './profile.scss'


function Profile(props) {
    let profileList = [1,2,3,4,5,6]

    const selct = "id"

    let loadeedSelect = localStorage.getItem(selct)

    let history = useHistory();

    return( 
        <div>
            {
            useEffect(()=>{
                const changeTitle = document.querySelector(".main_titles a")
                changeTitle.innerHTML="프로필이미지변경"
            })
            }
        <div className="wrap profile_wrap">
         <header>
             <Clock></Clock>
             <Link to="/Mypage" className="profile_arrow"><img src="./img/locate_arrow.svg" alt="arrow"></img></Link>
            <Header></Header>
         </header>
         <section className="section01">
          <div className="my_profile">
              <figure>           
                <img src={`/img/profile${
                  loadeedSelect === null
                  ? 1
                  : loadeedSelect[0]
                  }.svg`} alt=""></img></figure>
            <figcaption>현재프로필</figcaption>
          </div>
         </section>
         <section className="section02">
          <div className="in_wrap">
          {
                profileList.map(function(a,i) {
                    return <figure className="select_profile" key={i} onClick={()=>{
                        props.dispatch({type:"id값전송",payload4:i+1})
                    }}><img src={`/img/profile${i + 1}.svg`} alt=""></img></figure>
                })
            }
            <button onClick={()=>{
                history.push("/mypage")
            }}>바꾸기</button>
          </div>
         </section>
        </div>
        <MainFooter></MainFooter>
        </div>
    )
}

function profile공장(state) {
    return {
        profileData : state.reducer8
    }
  }

 export default connect(profile공장)(Profile);