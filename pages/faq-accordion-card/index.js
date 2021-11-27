import { Fragment, useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/faq-accordion-card.module.css'

const WebDesginChallenge = function () {

    const [SelectedIndexQuestion, SetSelectedIndexQuestion] = useState(1);

    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/faq-accordion-card/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
            <img className={styles.img3} src="/images/faq-accordion-card/illustration-box-desktop.svg"/>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className="row m-0">
                            <div className="col-md-6 col-12">
                                <div className={styles.imgHolder}>
                                    <img className={styles.img1} width="720" src="/images/faq-accordion-card/bg-pattern-desktop.svg"/>
                                    <img className={styles.img2} width="720" src="/images/faq-accordion-card/illustration-woman-online-desktop.svg"/>
                                    {/* <img className={styles.img3} src="/images/faq-accordion-card/illustration-box-desktop.svg"/> */}
                                </div>
                            </div>
                            <div className={styles.leftSide + " col-md-6 col-12"}>
                                <div className={styles.bodyHeader + " row"}>
                                    <h2>FAQ</h2>
                                </div>
                                <div className={styles.bodyDropdownHolder + " row py-3 m-0"}>
                                    <div className={styles.bodyDropdown + " w-100"} onClick={() => { SelectedIndexQuestion == 0? "" : SetSelectedIndexQuestion(0) }}>
                                        <div className={styles.bodyQuestion + " " + (SelectedIndexQuestion == 0? styles.bodyQuestionSelected : "") + " row m-0"}>
                                            <div className="col-auto p-0">How many team member can I invite?</div>
                                            <div className={" col-auto p-0"}>
                                            <img className={(SelectedIndexQuestion == 0? styles.bodyQuestionArrowFiliped : "")} src="/images/faq-accordion-card/icon-arrow-down.svg"/>
                                            </div>
                                        </div>
                                        <div className={(SelectedIndexQuestion == 0? styles.bodyAnswerShow : styles.bodyAnswerHide) + " pt-3"}>
                                            No more than 2GB. All files in your account must fit your
                                            allotted storage space.
                                        </div>
                                    </div>
                                </div>

                                
                                <div className={styles.bodyDropdownHolder + " row py-3 m-0"}>
                                    <div className={styles.bodyDropdown + " w-100"} onClick={() => { SelectedIndexQuestion == 1? "" : SetSelectedIndexQuestion(1) }}>
                                        <div className={styles.bodyQuestion + " " + (SelectedIndexQuestion == 1? styles.bodyQuestionSelected : "") + " row m-0"}>
                                            <div className="col-auto p-0">What is the maximum file upload size?</div>
                                            <div className={" col-auto p-0"}>
                                            <img className={(SelectedIndexQuestion == 1? styles.bodyQuestionArrowFiliped : "")} src="/images/faq-accordion-card/icon-arrow-down.svg"/>
                                            </div>
                                        </div>
                                        <div className={(SelectedIndexQuestion == 1? styles.bodyAnswerShow : styles.bodyAnswerHide) + " pt-3"}>
                                            No more than 2GB. All files in your account must fit your
                                            allotted storage space.
                                        </div>
                                    </div>
                                </div>

                                
                                <div className={styles.bodyDropdownHolder + " row py-3 m-0"}>
                                    <div className={styles.bodyDropdown + " w-100"} onClick={() => { SelectedIndexQuestion == 2? "" : SetSelectedIndexQuestion(2) }}>
                                        <div className={styles.bodyQuestion + " " + (SelectedIndexQuestion == 2? styles.bodyQuestionSelected : "") + " row m-0"}>
                                            <div className="col-auto p-0">How do I reset my password?</div>
                                            <div className={" col-auto p-0"}>
                                            <img className={(SelectedIndexQuestion == 2? styles.bodyQuestionArrowFiliped : "")} src="/images/faq-accordion-card/icon-arrow-down.svg"/>
                                            </div>
                                        </div>
                                        <div className={(SelectedIndexQuestion == 2? styles.bodyAnswerShow : styles.bodyAnswerHide) + " pt-3"}>
                                            No more than 2GB. All files in your account must fit your
                                            allotted storage space.
                                        </div>
                                    </div>
                                </div>

                                
                                <div className={styles.bodyDropdownHolder + " row py-3 m-0"}>
                                    <div className={styles.bodyDropdown + " w-100"} onClick={() => { SelectedIndexQuestion == 3? "" : SetSelectedIndexQuestion(3) }}>
                                        <div className={styles.bodyQuestion + " " + (SelectedIndexQuestion == 3? styles.bodyQuestionSelected : "") + " row m-0"}>
                                            <div className="col-auto p-0">Can I cancle my subscribtion?</div>
                                            <div className={" col-auto p-0"}>
                                            <img className={(SelectedIndexQuestion == 3? styles.bodyQuestionArrowFiliped : "")} src="/images/faq-accordion-card/icon-arrow-down.svg"/>
                                            </div>
                                        </div>
                                        <div className={(SelectedIndexQuestion == 3? styles.bodyAnswerShow : styles.bodyAnswerHide) + " pt-3"}>
                                            No more than 2GB. All files in your account must fit your
                                            allotted storage space.
                                        </div>
                                    </div>
                                </div>

                                
                                <div className={styles.bodyDropdownHolder + " row py-3 m-0"}>
                                    <div className={styles.bodyDropdown + " w-100"} onClick={() => { SelectedIndexQuestion == 4? "" : SetSelectedIndexQuestion(4) }}>
                                        <div className={styles.bodyQuestion + " " + (SelectedIndexQuestion == 4? styles.bodyQuestionSelected : "") + " row m-0"}>
                                            <div className="col-auto p-0">Do you provide additional support?</div>
                                            <div className={" col-auto p-0"}>
                                            <img className={(SelectedIndexQuestion == 4? styles.bodyQuestionArrowFiliped : "")} src="/images/faq-accordion-card/icon-arrow-down.svg"/>
                                            </div>
                                        </div>
                                        <div className={(SelectedIndexQuestion == 4? styles.bodyAnswerShow : styles.bodyAnswerHide) + " pt-3"}>
                                            No more than 2GB. All files in your account must fit your
                                            allotted storage space.
                                        </div>
                                    </div>
                                </div>

                                
                                <div className={styles.bodyDropdownHolder + " row py-3 m-0"}>
                                    <div className={styles.bodyDropdown + " w-100"} onClick={() => { SelectedIndexQuestion == 5? "" : SetSelectedIndexQuestion(5) }}>
                                        <div className={styles.bodyQuestion + " " + (SelectedIndexQuestion == 5? styles.bodyQuestionSelected : "") + " row m-0"}>
                                            <div className="col-auto p-0">How many team member can I invite?</div>
                                            <div className={" col-auto p-0"}>
                                            <img className={(SelectedIndexQuestion == 5? styles.bodyQuestionArrowFiliped : "")} src="/images/faq-accordion-card/icon-arrow-down.svg"/>
                                            </div>
                                        </div>
                                        <div className={(SelectedIndexQuestion == 5? styles.bodyAnswerShow : styles.bodyAnswerHide) + " pt-3"}>
                                            No more than 2GB. All files in your account must fit your
                                            allotted storage space.
                                        </div>
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