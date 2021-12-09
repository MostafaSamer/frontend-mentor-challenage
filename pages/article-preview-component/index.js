import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/article-preview-component.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/article-preview-component/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className="row m-0">
                            <div className="col-md-5 col-12 p-0">
                                <div className={styles.imageHolder}>
                                    <img src="/images/article-preview-component/drawers.jpg" />
                                </div>
                            </div>
                            <div className="col-md-7 col-12 p-0">
                                <div className={styles.sectionHolder}>
                                    <div className="row m-0">
                                        <div className={styles.sectionHeader}>
                                            <h4>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h4>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className={styles.sectionPara}>
                                            <p className="m-0">
                                                Ever been ln a room and felt like something was missing?
                                                Perhaps it felt slightly bare and uninviting. I've got some
                                                simple tips to help you make any room feel complete.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className={styles.authSection + " mt-3"}>
                                            <div className='row'>
                                                <div className='col-3'>
                                                    <div className={styles.authImageHolder}>
                                                        <img src="/images/article-preview-component/avatar-michelle.jpg"/>
                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    INFO
                                                </div>
                                                <div className='col-3'>
                                                    Share Button
                                                </div>
                                            </div>
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