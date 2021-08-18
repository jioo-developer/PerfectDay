import React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';

import './reset.css';
import './calendar.scss'

function DayInput(props) {
    let history = useHistory();
    return(
        <div>
        <div className="d_txt_wrap">
            <DatePickerComponent format="yyyy,MM,dd"></DatePickerComponent>
            <input id="d_day_txt"></input>
        </div>
        <div className="button_wrap">
        <button className="d_days" onClick={()=>{
            let get = document.getElementById("ej2-datepicker_42").value
            let daytxt = document.getElementById("d_day_txt").value
            props.dispatch({type:"디데이전송",payload5:get})
            daytxt === ""
            ? alert("내용을입력하세요")
            : props.dispatch({type:"남은일정내용전송",payload6:daytxt})
            let margin = document.querySelector(".d_days")
            margin.classList.add("margin")
        }}>작성</button>
        <button className="dday-reset" onClick={()=>{
            localStorage.removeItem("day")
            localStorage.removeItem("txt")
            history.push('/')
        }}>초기화</button>
        </div>
        </div>
    )
}

function day공장(state) {
    return {
        state : state.reducer9
    }
  }

 export default connect(day공장)(DayInput);