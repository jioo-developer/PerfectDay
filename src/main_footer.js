import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './reset.css';
import './App.scss';

function MainFooter(props) {
  const loadedTodos = localStorage.getItem(props.state[0].saveData)
  const parsedTodos = JSON.parse(loadedTodos);

  let history = useHistory();
    return(
        <footer className="footer_bar">
          {
            props.addToggle === false
            ? <button onClick={()=>{
              props.dispatch({type:"에디터열기"})
            }}>
            <img src="/img/adds.svg" alt="add"></img>
            </button>
            : null
          }
            <div className="home f_con" onClick={()=>{
              history.push('/')
            }}>
              <img src="/img/home.svg" alt="home"></img>
              <p>홈</p>
            </div>
            <div className="calendar f_con" onClick={()=>{
              history.push('/calendar')
            }}>
            <img src="/img/calendar.svg" alt="calendar"></img>
              <p>캘린더</p>
            </div>
          </footer>
    )
}

function redux공장(state) {
    return {
        state : state.reducer
    }
  }

 export default connect(redux공장)(MainFooter);