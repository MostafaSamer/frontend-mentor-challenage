import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/base-apparel-coming-soon.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/base-apparel-coming-soon/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.section + ' row m-0 h-100'}>
                    <div className={styles.leftSideCol + ' col-7 p-0'}>
                        <div className={styles.leftSide}>
                            <div className={styles.logoHolder}>
                                <img src="/images/base-apparel-coming-soon/logo.svg" />
                            </div>
                            <div className={styles.leftSide__mid}>
                                <div className={styles.header + ' mb-3'}>
                                    <h2>
                                        <span className={styles.header__we}>
                                            WE'RE
                                        </span> <br />
                                        COMING <br />
                                        SOON
                                    </h2>
                                </div>
                                <div className={styles.para}>
                                    <p className='m-0'>
                                        Hello fellow shoopers! We're currently building our new
                                        fashion store. Add your email below to stay up-to-date with
                                        announcements and our launch deals.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.emailHolder}>
                                <div className={styles.email}>
                                    <input 
                                    className={styles.errorInput}
                                    placeholder='Email Address'
                                    />
                                    <img />
                                </div>
                                <div className={styles.error}>
                                {true && (
                                    <p>Please provide a valid email</p>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-5 p-0'>
                        <div className={styles.ImageHolder + ' h-100'}>
                            <img className='h-100' src="/images/base-apparel-coming-soon/hero-desktop.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge