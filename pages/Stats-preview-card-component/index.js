import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/Stats-preview-card-component.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/order-summary-component/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card + " d-flex"}>
                        <div className={styles.cardBody + " col-lg-6 col-12 d-flex justify-content-center align-items-center"}>
                            <div>
                                <div className={styles.bodyHeader + " row"}>
                                    <h3>
                                        Get <span>insights  </span> that help your business grow.
                                    </h3>
                                </div>
                                <div className={styles.bodyPara + " row mt-4"}>
                                    <p>
                                        Discover the benefits of data analytics and make
                                        better decisions regarding revenue, customer
                                        experíence, and overall efficiency.
                                    </p>
                                </div>
                                <div className={styles.stats + " row mt-5"}>
                                    <div className="col-lg-4 col-12">
                                        <div className={styles.statsNum + " row"}>10k+</div>
                                        <div className={styles.statsTitle + " row"}>COMPANIES</div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className={styles.statsNum + " row"}>314</div>
                                        <div className={styles.statsTitle + " row"}>TEPLATES</div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className={styles.statsNum + " row"}>12M+</div>
                                        <div className={styles.statsTitle + " row"}>QUERIES</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 p-0">
                            <img className={styles.displayDesktop} width="100%" height="100%" src="/images/Stats-preview-card-component/image-header-desktop.jpg" />
                            <img className={styles.displayMobile} width="100%" height="100%" src="/images/Stats-preview-card-component/image-header-mobile.jpg" />
                            <div className={styles.imageCover + " w-100 h-100"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge