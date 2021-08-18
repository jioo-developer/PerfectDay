import React, {useState} from 'react';
import {connect} from 'react-redux';
 function Editor(props) {

    let [write,setwrite] = useState([]);
    let [writeH,setwriteH] = useState([]);
    let [writeM,setwriteM] = useState([]);

     return(
        <div className="editor">
                <b>오늘의 목표</b>
                <input className="text_area" placeholder="스케줄을 입력해주세요"  onChange={(e)=>{
                  setwrite(e.target.value)
                }}></input>
                  <div className="date">
                  <p className="day">시간</p>
                  <form className="time_wrap" autoComplete="off">
                  <input className="time_txt hour" placeholder="00" maxLength="2" type="number" min="00" max="24"onChange={(e)=>{
                  setwriteH(e.target.value)
                  setwriteM("00")
                }}></input>
                  <input className="time_txt minute" placeholder="00"  type="number" maxLength="2" min="00" max="60"onChange={(e)=>{
                  setwriteM(e.target.value)
                }}></input>
                  <input className="time_txt" placeholder="00"  type="number" maxLength="2" min="00" max="60" disabled></input>
                  </form>
                  </div>
                <button onClick={()=>{
                  let arrayWrite = [...write]
                  arrayWrite.unshift(write)
                  setwrite(arrayWrite)

                  let arrayH = [...writeH]
                  arrayH.unshift(writeH)
                  setwriteH(arrayH)

                  let arrayM = [...writeM]
                  arrayM.unshift(writeM)
                  setwriteM(arrayM)
                  // console.log(write)
                  // console.log(writeH)
                  // console.log(writeM)

                  let danger = document.querySelector(".text_area").value

                  let logicFac = {
                    write : write,
                    writeH : writeH,
                    writeM : writeM
                  }
                  danger === ""
                  ? alert("스케줄을 입력해주세요")
                  : props.dispatch({type:"에디터닫기",payload:logicFac })
                }}>등록하기</button>
              </div>
     )
 }



 function redux공장(state) {
    return {
        editorSwich : state.reducer
    }
  }

 export default connect(redux공장)(Editor);