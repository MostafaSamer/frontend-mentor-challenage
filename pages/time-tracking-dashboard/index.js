import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/time-tracking-dashboard.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/time-tracking-dashboard/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className='row m-0'>
                        <div className='col-md-3 col-12'>
                            <div className={styles.bigCard}>
                                <div className={styles.bigCardUpper + " row m-0 p-4"}>
                                    <div className={styles.profileImgHolder}>
                                        <img src="/images/time-tracking-dashboard/image-jeremy.png" />
                                    </div>

                                    <div className={styles.reportTxt + " row m-0"}>
                                        <p className='m-0'>Report for</p>
                                    </div>

                                    <div className={styles.name + " row m-0"}>
                                        <h1>Jeremy</h1> <br />
                                        <h1>Robson</h1>
                                    </div>
                                </div>
                                <div className={styles.bigCardBlow + " row m-0"}>
                                    <div className={styles.BlowTime + " row m-0"}><p>Daily</p></div>
                                    <div className={styles.BlowTime + " row m-0"}><p>Weekly</p></div>
                                    <div className={styles.BlowTime + " row m-0"}><p>Monthly</p></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-12'>
                            BIG CARDS
                        </div>
                        <div className='col-md-3 col-12'>
                            BIG CARDS
                        </div>
                        <div className='col-md-3 col-12'>
                            BIG CARDS
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge