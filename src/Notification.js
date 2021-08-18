import React from 'react';
import {connect} from 'react-redux';
import './notification.scss'

function Notification(props) {
    return(
        <div className="noti_wrap">
            <div className="cover"></div>
            <aside>
                <div className="aside_header">
                    <p className="noti_title">알림함</p>
                    <img src="/img/clear.svg" onClick={()=>{
                        props.dispatch({type:"알림닫기"})
                        props.dispatch({type:"알림끄기"})
                    }}></img>
                </div>
                <ul className="noti_body">
                  {
                      props.Time[0].defaultTime.map(function (a,i) {
                          return <li key={i}>
                              <img src="/img/check_btn.svg"></img>
                              <div className="li_txt_wrap">
                              <p className="li_time">
                                  {
                                      `${props.Time[0].defaultTime[i].year}-${props.Time[0].defaultTime[i].mon < 10 ?  "0" + props.Time[0].defaultTime[i].mon : props.Time[0].defaultTime[i].mon}-${props.Time[0].defaultTime[i].date < 10 ?  "0" + props.Time[0].defaultTime[i].date : props.Time[0].defaultTime[i].date}
                                      ${props.Time[0].defaultTime[i].hour < 10 ?  "0" + props.Time[0].defaultTime[i].hour : props.Time[0].defaultTime[i].hour}:${props.Time[0].defaultTime[i].min < 10 ?  "0" + props.Time[0].defaultTime[i].min : props.Time[0].defaultTime[i].min}:00`
  
                                  }
                              </p>
                              <p className="li_title">
                                  {
                                      props.Text[0].checkText[i]
                                  }
                                  </p>
                              </div>
                              </li>
                      })
                  }
                </ul>
            </aside>
        </div>
    )
}


function redux공장3(state) {
    return {
        state : state.reducer2,
        Time : state.reducer3,
        Text : state.reducer5
    }
  }
  
  export default connect(redux공장3)(Notification);