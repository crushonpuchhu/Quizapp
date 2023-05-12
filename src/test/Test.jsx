import React, { useState } from 'react'
import css from './test.module.css'


function Qusetion_paper({data,fun,qustionnummber})
 {

      const clik=()=>
      {
                           
        if(qustionnummber<3)
        {
           fun((p)=>p+1)
        }
        else
        {
           window.confirm("Are you sure!");
        }

       }



    return (
        <>
            <nav className={css.cardbox}>

                <div className={css.question_list}>
                    <h2>{data.question}</h2>
                </div>

                <div className={css.option_area}>

                    <section className={css.options_box}>
                        <input name='answer' value={data.option[0]} type="radio" />
                        <p>{data.option[0]}</p>
                    </section>
                    <section className={css.options_box}>
                        <input name='answer' value={data.option[1]} type="radio" />
                        <p>{data.option[1]}</p>
                    </section>
                    <section className={css.options_box}>
                        <input name='answer' value={data.option[2]} type="radio" />
                        <p>{data.option[2]}</p>
                    </section>
                    <section className={css.options_box}>
                        <input name='answer'value={data.option[3]} type="radio" />
                        <p>{data.option[3]}</p>
                    </section>


                </div>

                <div className={css.btn_area}>
                    <button onClick={clik}>Next</button>
                </div>

            </nav>
        </>
    )
}





const Test = () => {

    const [qustion_change,set_qustion_change]=useState(0);

    const qustion_data = [{
        question: "?1:-what is next value after 10",
        option: ["9", "11", "8", "5"],
        correctans: "11"
    }, {
        question: "?2:-what is next value after 12",
        option: ["13", "12", "8", "5"],
        correctans: "13"
    }, {
        question: "?3:-what is next value after 17",
        option: ["9", "11", "18", "5"],
        correctans: "18"
    }, {
        question: "?4:-what is next value after 20",
        option: ["9", "11", "8", "21"],
        correctans: "21"
    }]

    return (
        <>
            <div className={css.main}>
                <header className={css.time}>
                    <h1>10:00</h1>
                </header>

                <footer className={css.question_card}>

                <Qusetion_paper data={qustion_data[qustion_change] } fun={set_qustion_change} qustionnummber={qustion_change} />

                </footer>



            </div>
        </>
    )
}

export default Test

