import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/four-card-feature.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/four-card-feature/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.topText}>
                    <div className={styles.header1 + " row m-0 justify-content-center"}>
                        <p className="mb-0">Reliable, efficient delivery</p>
                    </div>
                    <div className={styles.header2 + " row m-0 justify-content-center"}>
                        <p className="mb-0">Powered by Technology</p>
                    </div>
                    <div className={styles.para + " row m-0 mt-3 justify-content-center text-center"}>
                        <p className="mb-0">
                            our Artifcial lntelligence powered tools use millions of project doto
                            points to ensure ot your project is successful
                        </p>
                    </div>
                </div>
                <div className={styles.cardsHolder + " mt-5"}>
                    <div className={styles.cardsHolderRow + " row"}>
                        <div className={styles.cardsHolderCol + " col-md-4 col-12"}>
                            <div className={styles.card + " " + styles.card1}>
                                <div className={styles.cardHeader + " row m-0"}><p>Supervisor</p></div>
                                <div className={styles.cardPara + " row m-0"}>
                                    <p>
                                        Monitors activity to idenitify project
                                        roadblocks
                                    </p>
                                </div>
                                <div className={styles.cardImg + " row m-0 mt-5"}><img src="/images/four-card-feature/icon-supervisor.svg" /></div>
                            </div>
                        </div>
                        <div className={styles.cardsHolderCol + " col-md-4 col-12"}>
                            <div className="row d-flex" style={{flexDirection: "column"}}>
                                <div className={styles.card + " " + styles.card2}>
                                    <div className={styles.cardHeader + " row m-0"}><p>Team Builder</p></div>
                                    <div className={styles.cardPara + " row m-0"}>
                                        <p>
                                            Scans our talent network to create the
                                            optimal team for your project
                                        </p>
                                    </div>
                                    <div className={styles.cardImg + " row m-0 mt-5"}><img src="/images/four-card-feature/icon-team-builder.svg" /></div>
                                </div>
                            </div>
                            <div className="row mt-4 d-flex" style={{flexDirection: "column"}}>
                                <div className={styles.card + " " + styles.card3}>
                                    <div className={styles.cardHeader + " row m-0"}><p>Karma</p></div>
                                    <div className={styles.cardPara + " row m-0"}>
                                        <p>
                                            Regularly evaluates our talent to ensure
                                            quality
                                        </p>
                                    </div>
                                    <div className={styles.cardImg + " row m-0 mt-5"}><img src="/images/four-card-feature/icon-karma.svg" /></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardsHolderCol + " col-md-4 col-12"}>
                            <div className={styles.card + " " + styles.card4}>
                                <div className={styles.cardHeader + " row m-0"}><p>Calculator</p></div>
                                <div className={styles.cardPara + " row m-0"}>
                                    <p>
                                        Uses data from past projects to provide
                                        better delivery setimates
                                    </p>
                                </div>
                                <div className={styles.cardImg + " row m-0 mt-5"}><img src="/images/four-card-feature/icon-calculator.svg" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge