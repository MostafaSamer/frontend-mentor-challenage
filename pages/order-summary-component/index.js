import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/order-summary-component.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/order-summary-component/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <img src="/images/order-summary-component/illustration-hero.svg"/>
                        </div>
                        <div className={styles.cardBody + " px-5 text-center"}>
                            <div className="mt-5">
                                <h3 className={styles.bodyHeader}>Order Summary</h3>
                            </div>
                            <div className="mt-3">
                                <p className={styles.bodyPara}>You can now listen to miliones of songs, audiobooks and podcasts on any device anywhere you like!</p>
                            </div>
                            <div className={styles.bodyPlanCard + " mt-4"}>
                                <div className="d-flex">
                                    <div className="col p-0 d-flex justify-content-start">
                                        <div className="col-auto pl-0"><img src="/images/order-summary-component/icon-music.svg"/></div>
                                        <div className="col-auto p-0">
                                            <div className={styles.bodyPlanName}>Annual Plan</div>
                                            <div className={styles.bodyPlanPrice}>$59.99/year</div>
                                        </div>
                                    </div>
                                    <div className={styles.bodyPlanChange + " col p-0 d-flex justify-content-end"}><a className="d-flex align-items-center" href="#">Change</a></div>
                                </div>
                            </div>
                            <div className={styles.bodyProceed + " mt-5"}>
                                <button className="w-100">
                                    Proceed to Payment
                                </button>
                            </div>
                            <div className={styles.bodyCancel + " mt-4 mb-5"}>
                                Cancel Order
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge