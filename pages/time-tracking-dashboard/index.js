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
                    <div className={styles.card + " d-flex"}>
                        <div className='row m-0'>
                            <div className='col-md-3 col-12'>
                                BIG CARDS
                            </div>
                            <div className='col-md-9 col-12'>
                                <div className='row m-0'>
                                    <div className='col-1'></div>
                                    <div className='col-1'></div>
                                    <div className='col-1'></div>
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