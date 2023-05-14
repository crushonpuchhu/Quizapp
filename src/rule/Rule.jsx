import React, { useEffect, useRef } from "react";
import css from "./rule.module.css";
import { HiClock } from "react-icons/hi";
import { TbFilePercent } from "react-icons/tb";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import anime from "animejs";
import { useNavigate } from "react-router-dom";

function List({ gettag, heading, discription, Iconefun }) {
  return (
    <>
      <nav ref={gettag} className={css.list_of_rules}>
        <i>
          <Iconefun />
        </i>
        <div className={css.rules_dis}>
          <p>{heading}</p>
          <h6>{discription}</h6>
        </div>
      </nav>
    </>
  );
}

function Rule() {
  const l1 = useRef();
  const l2 = useRef();
  const l3 = useRef();
  const startTest = useNavigate();
  useEffect(() => {
    anime({
      targets: l1.current,
      translateY: 40,
    });
    anime({
      targets: l2.current,
      translateY: 80,
    });
    anime({
      targets: l3.current,
      translateY: 120,
    });
  }, []);

  return (
    <>
      <div className={css.main}>
        <div className={css.card}>
          <div className={css.top_area}>
            <h1>Quiz Rules</h1>
          </div>

          <div className={css.mid_area}>
            <List
              gettag={l1}
              heading={"10 Mine"}
              discription={"Keep in mind that it,s time bound Quiz"}
              Iconefun={HiClock}
            />
            <List
              gettag={l2}
              heading={"5 Question"}
              discription={"We believe that you will ace it!"}
              Iconefun={TbFilePercent}
            />
            <List
              gettag={l3}
              heading={"50% Passing Criteria"}
              discription={"All the best! See you on the other side."}
              Iconefun={BsFillQuestionCircleFill}
            />
          </div>

          <div className={css.bottom_area}>
            <button
              onClick={() => {
                startTest("/start_test");
              }}
              className={css.final_start}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Rule;
