import React, {useState,useEffect} from 'react';
import moment from 'moment';
function Clock(){
    let [time,setTime] =useState(moment());
    return(
        <div className="header_in">
        {
            useEffect(()=>{
                setInterval(() => {
            setTime(moment())
            },1000);
            // 시간 업데이트
            },[])
    }
            <div className="time">{time.format('HH:mm')}</div>
             <img src="/img/phone_base.svg" alt="phone_Base"></img>
        </div>
    )
}

export default Clock;