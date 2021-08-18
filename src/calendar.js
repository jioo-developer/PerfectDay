import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { CalendarComponent} from '@syncfusion/ej2-react-calendars';
import Header from './header'
import MainFooter from './main_footer'
import Clock from './clock'
import DayInput from './day'

import './reset.css';
import './calendar.scss'

function Calendar(props) {

    let loadreset =[]
    
    const loaded날짜 = localStorage.getItem(props.state[0].dayName)
    const parsed날짜 = JSON.parse(loaded날짜)
    const loaded텍스트 = localStorage.getItem(props.state2[0].daytxt)
    const parsed텍스트 = JSON.parse(loaded텍스트)
    let CalendarToday = new Date();
    let dday = new Array()
    loaded날짜 === null
    ? console.log("실패")
    : parsed날짜.map(function (a,i) {
       dday.push(new Date(a))
   })
   let gap = dday.map(function (time,indexs) {
       return dday[indexs].getTime() - CalendarToday.getTime();
   })
   let TimeResult = gap.map(function (dated,indexed) {
       return Math.ceil(gap[indexed] / (1000 * 60 * 60 * 24))
   })
   console.log(TimeResult)
    return(
        <div>
        <div className="wrap calendar">
         <header>
             <Clock></Clock>
            <Header></Header>
         </header>
         <CalendarComponent></CalendarComponent>
        <section className="important_data">
            <div className="title_wrap">
            <div className="date_title">예약된 일정</div>
            {
                loaded텍스트 !== null
                ? parsed텍스트.map(function(a,i) {
                    return <div className="date_wrap" key={i}>
                            <p className="date_txt">
                               <p>{parsed텍스트[i]}</p>
                            </p>
                            <p className="date_btn">
                                {
                                    isNaN(TimeResult[i])
                                    ? ""
                                    : `D-${TimeResult[i]}`
                                }
                            </p>
                            </div>
                })
                : null
            }
            </div>
            <DayInput></DayInput>
        </section>
        </div>
        <MainFooter></MainFooter>
        </div>
    )
}

function 캘린더공장(state) {
    return {
        state : state.reducer9,
        state2 : state.reducer10
    }
  }

 export default connect(캘린더공장)(Calendar);