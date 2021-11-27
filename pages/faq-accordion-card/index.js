import { Fragment, useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/faq-accordion-card.module.css'

const WebDesginChallenge = function () {

    const [SelectedIndexQuestion, SetSelectedIndexQuestion] = useState(-1);

    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/faq-accordion-card/favicon-32x32.png" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className="row m-0">
                            <div className="col-md-6 col-12">
                                <div className={styles.imgHolder}>
                                    <img width="720" src="/images/faq-accordion-card/bg-pattern-desktop.svg"/>
                                    <img width="720" src="/images/faq-accordion-card/illustration-box-desktop.svg"/>
                                    <img width="720" src="/images/faq-accordion-card/illustration-woman-online-desktop.svg"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="row">FAQ</div>
                                <div className="row">
                                    <div className={styles.bodyDropdown + " w-100"} onClick={() => { SelectedIndexQuestion == 0? SetSelectedIndexQuestion(-1) : SetSelectedIndexQuestion(0) }}>
                                        <div className={styles.bodyQuestion + " row"}>
                                            <div className="col-auto">How many team member can I invite?</div>
                                            <div className={" col-auto"}>
                                            <img className={(SelectedIndexQuestion == 0? styles.bodyQuestionArrowFiliped : "")} src="/images/faq-accordion-card/icon-arrow-down.svg"/>
                                            </div>
                                        </div>
                                        {/* <div className={styles.bodyAnswer}>
                                            No more than 2GB. All files in your account must fit your
                                            allotted storage space.
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge