import React  from 'react';
import {connect} from 'react-redux';
import './reset.css'
import './rank.scss'

function RankTable(props) {
    return (
        <div className="rank_wrap">
            <ul className="table">
             <li>
                <figure>
                  <img src="/img/brown.svg" alt=""></img>
                </figure>

                 <figcaption>
                  <h6>초보완벽러</h6>
                  <p>100% 연속 5회 미만</p>
                </figcaption>
             </li>
             <li>
                <figure>
                  <img src="/img/silver.svg" alt=""></img>
                </figure>

                 <figcaption>
                  <h6>끈기완벽러</h6>
                  <p>100% 연속 10회 미만</p>
                </figcaption>
             </li>
             <li>
                <figure>
                  <img src="/img/gold.svg" alt=""></img>
                </figure>

                 <figcaption>
                  <h6>프로완벽러</h6>
                  <p>100% 연속 15회 이상</p>
                </figcaption>
             </li>
            </ul>
            <div className="rankClose" onClick={()=>{
                props.dispatch({type:"등급표닫기"})
            }}>
                <img src="/img/clear.svg" alt=""></img>
            </div>
        </div>
    )
}

function rank공장2(state) {
    return {
        rankPoint : state.reducer7
    }
  }

 export default connect(rank공장2)(RankTable);