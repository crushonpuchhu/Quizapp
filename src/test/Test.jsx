import React, { useEffect, useState } from "react";
import css from "./test.module.css";
import Qusetion from "../component/qustion/Qustion";

const Test = () => {
  const [qustionChange, setQustionChange] = useState(0);
  const [Timeup, setTimeup] = useState(false);

  const qustionQata = [
    {
      question: "?1:-what is next value after 10",
      option: ["9", "11", "8", "5"],
      correctans: "11",
    },
    {
      question: "?2:-what is next value after 12",
      option: ["13", "12", "8", "5"],
      correctans: "13",
    },
    {
      question: "?3:-what is next value after 17",
      option: ["9", "11", "18", "5"],
      correctans: "18",
    },
    {
      question: "?4:-what is next value after 20",
      option: ["9", "11", "8", "21"],
      correctans: "21",
    },
    {
      question: "?5:-what is next value after 70",
      option: ["9", "11", "8", "71"],
      correctans: "71",
    },
  ];

  const [timer, setTimer] = useState(60);
  const [timer2, setTimer2] = useState(10);

  useEffect(() => {
    const time = setInterval(() => {
      if (timer > 0) {
        setTimer((p) => p - 1);
      } else {
        if (timer2 > 0) {
          setTimer(60);
          setTimer2((p) => p - 1);
        } else {
          setTimeup(true);
        }
      }
    }, 1000);

    return () => {
      clearInterval(time);
    };
  });

  return (
    <>
      <div className={css.main}>
        <header className={css.time}>
          <h1>
            {timer2 >= 10 ? null : "0"}
            {timer2}:{timer >= 10 ? null : "0"}
            {timer}
          </h1>
        </header>

        <footer className={css.question_card}>
          <Qusetion
            data={qustionQata[qustionChange]}
            fun={setQustionChange}
            qustionnummber={qustionChange}
            timeupp={Timeup}
          />
        </footer>
      </div>
    </>
  );
};

export default Test;
