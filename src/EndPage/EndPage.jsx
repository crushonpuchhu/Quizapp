import React  from "react";
import css from "./end.module.css";
import { useParams } from "react-router-dom";

const EndPage = () => {
  const data = useParams();
  return (
    <>
      <div className={css.main}>
        <div className={css.card}>
          <h1>Score</h1>
          <h2>{data.result}</h2>
        </div>
      </div>
    </>
  );
};

export default EndPage;
