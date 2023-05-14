import React, { useState } from "react";
import css from "./qus.module.css";
import { useNavigate } from "react-router-dom";

function Qusetion({ data, fun, qustionnummber, timeupp }) {
  const [count, setCount] = useState([]);

  const ScorePage = useNavigate();

  const clik = () => {
    if (qustionnummber < 4) {
      fun((p) => p + 1);
    } else {
      let da = 0;
      const AnswerData = ["11", "13", "18", "21", "71"];

      for (let i = 0; i < 5; i++) {
        if (count[i] === AnswerData[i]) {
          da = da + 1;
        }
      }

      setTimeout(() => {
        ScorePage("/End_test/" + da);
      }, 1000);
    }
  };

  if (timeupp) {
    let da = 0;
    const AnswerData = ["11", "13", "18", "21", "71"];

    if (count.length === 5) {
      for (let i = 0; i < 5; i++) {
        if (count[i] === AnswerData[i]) {
          da = da + 1;
        }
      }
    } else {
      for (let i = 0; i < count.length; i++) {
        if (count[i] === AnswerData[i]) {
          da = da + 1;
        }
      }
    }

    setTimeout(() => {
      ScorePage("/End_test/" + da);
    }, 1000);
  }

  return (
    <>
      <nav className={css.cardbox}>
        <div className={css.question_list}>
          <h2>{data.question}</h2>
        </div>

        <div className={css.option_area}>
          <section className={css.options_box}>
            <input
              onChange={(e) => {
                setCount([...count, e.target.value]);
              }}
              name="answer"
              value={data.option[0]}
              type="radio"
            />
            <p>{data.option[0]}</p>
          </section>

          <section className={css.options_box}>
            <input
              onChange={(e) => {
                setCount([...count, e.target.value]);
              }}
              name="answer"
              value={data.option[1]}
              type="radio"
            />
            <p>{data.option[1]}</p>
          </section>

          <section className={css.options_box}>
            <input
              onChange={(e) => {
                setCount([...count, e.target.value]);
              }}
              name="answer"
              value={data.option[2]}
              type="radio"
            />
            <p>{data.option[2]}</p>
          </section>

          <section className={css.options_box}>
            <input
              onChange={(e) => {
                setCount([...count, e.target.value]);
              }}
              name="answer"
              value={data.option[3]}
              type="radio"
            />
            <p>{data.option[3]}</p>
          </section>
        </div>

        <div className={css.btn_area}>
          <button onClick={clik}>Next</button>
        </div>
      </nav>
    </>
  );
}

export default Qusetion;
