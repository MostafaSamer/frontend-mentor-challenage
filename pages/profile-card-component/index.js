import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/profile-card-component.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/profile-card-component/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.background1}><img src="/images/profile-card-component/bg-pattern-top.svg"/></div>
                <div className={styles.background2}><img src="/images/profile-card-component/bg-pattern-bottom.svg"/></div>
                <div className={styles.cardHolder}>
                    <div className={styles.card + " d-flex"}>
                        <div className={styles.cardBody}>
                            <div>
                                <div className={styles.bodyImage+ " row m-0"}>
                                    <img src="/images/profile-card-component/bg-pattern-card.svg" />
                                </div>
                                <div className={styles.bodyAvatar+ " row m-0"}>
                                    <img src="/images/profile-card-component/image-victor.jpg" />
                                </div>
                                <div className={styles.bodyData+ " row mt-3 m-0"}>
                                    <div className={styles.dataHeader + " row w-100 m-0 justify-content-center align-items-center"}>
                                        <div className={styles.dataHeaderName + " col-auto pr-1"}>Victor Crest</div>
                                        <div className={styles.dataHeaderAge + " col-auto pl-1"}>26</div>
                                    </div>
                                    <div className={"row w-100 m-0 justify-content-center align-items-center"}>
                                        <div className={styles.dataHeaderLocation + " col-auto"}>London</div>
                                    </div>
                                </div>
                                <div className={styles.bodyStatus+ " row mt-3 m-0 py-3"}>
                                    <div className={"row w-100 m-0 justify-content-center align-items-center"}>
                                        <div className={"col-auto"}>
                                            <div className={styles.statusValue}>80K</div>
                                            <div className={styles.statusTitle}>Followers</div>
                                        </div>
                                        <div className={"col-auto"}>
                                            <div className={styles.statusValue}>803K</div>
                                            <div className={styles.statusTitle}>Likes</div>
                                        </div>
                                        <div className={"col-auto"}>
                                            <div className={styles.statusValue}>1.4k</div>
                                            <div className={styles.statusTitle}>Photos</div>
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