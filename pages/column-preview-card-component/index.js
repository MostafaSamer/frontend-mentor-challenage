import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/column-preview-card-component.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/column-preview-card-component/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className="row">
                            <div className="col-md-4 col-12 p-0">
                                <div className={styles.cardBody + " " + styles.cardBody1}>
                                    <div className="row">
                                        <div className={styles.bodyIcon + " mt-4"}>
                                            <img src="/images/column-preview-card-component/icon-sedans.svg"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyHeader + " mt-4"}>SEDRNS</div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyParag + " mt-4 mb-5"}>
                                            Choose a sedans for its
                                            affordability and excellent
                                            fuel economy. Ideal for
                                            cruising in the city or on
                                            your next road trip.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyButton + " mt-4 mb-3"}>
                                            <button>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 p-0">
                                <div className={styles.cardBody + " " + styles.cardBody2}>
                                    <div className="row">
                                        <div className={styles.bodyIcon + " mt-4"}>
                                            <img src="/images/column-preview-card-component/icon-suvs.svg"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyHeader + " mt-4"}>SUVS</div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyParag + " mt-4 mb-5"}>
                                            Take on suv for its spocious
                                            interior, power, ond
                                            versotilitY, Perfect for your
                                            next fomily vocotion ond
                                            off-rood odventures.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyButton + " mt-4 mb-3"}>
                                            <button>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 p-0">
                                <div className={styles.cardBody + " " + styles.cardBody3}>
                                    <div className="row">
                                        <div className={styles.bodyIcon + " mt-4"}>
                                            <img src="/images/column-preview-card-component/icon-luxury.svg"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyHeader + " mt-4"}>LUXURV</div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyParag + " mt-4 mb-5"}>
                                        Cruise in the best cor bronds
                                        without the blooted prices.
                                        EnjoY the enhonced comforf
                                        of o luxury rentol ond orrive
                                        in style
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.bodyButton + " mt-4 mb-3"}>
                                            <button>Learn More</button>
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