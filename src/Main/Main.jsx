import React from 'react'
import css from "./main.module.css"
import { HiClock } from 'react-icons/hi';
import {TbFilePercent} from 'react-icons/tb'
import {BsFillQuestionCircleFill} from 'react-icons/bs'
import {FcNext} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const start=useNavigate();


  return (
    <>
    <div className={css.main}>
       <footer className={css.top_box}>
       <h1>Let,s solve some question</h1>
       </footer>
        
        <header className={css.bottom_box}>

         <div className={css.bottom_box_inside}>

          <ul className={css.quiz_info}>
            <li><i><TbFilePercent/></i>  50% Passing percentage</li>
            <li><i><BsFillQuestionCircleFill/></i>  5 Questions</li>
            <li> <i><HiClock/></i> 10 Mins</li>

          </ul>

          <div onClick={()=>{start("/start_rule")}} className={css.start_btn}>Start Quiz <div><FcNext/></div></div>

         </div>

        </header>
    </div>
    </>
    
  )
}

export default Main