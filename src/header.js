import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Header(props) {
    return(
        <div className="title_header">
          <Link to="/"  className="header_nav"><img src="./img/locate_arrow.svg" alt="nav"></img></Link>
        <p class="main_titles"><Link to="/">완벽한 하루</Link></p>
        {
          props.state3[0].Nobell === true
          ? <img src="/img/bell.svg" alt="bell" onClick={()=>{
            props.dispatch({type:"알림열기"})
          }}></img>
          : <img src="/img/no_bell.svg" alt="bell" className="down"></img> 
        }
      </div>   
    )
}

function redux공장2(state) {
  return {
      state : state.reducer2,
      state2 : state.reducer3,
      state3 : state.reducer4,
  }
}

export default connect(redux공장2)(Header);