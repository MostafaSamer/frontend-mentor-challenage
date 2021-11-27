import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/faq-accordion-card.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/faq-accordion-card/favicon-32x32.png" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                Multi Image
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="row">FAQ</div>
                                <div className="row">
                                    <div className={styles.bodyDropdown}>
                                        <div className={styles.bodyQuestion + " row"}>
                                            <div className="col">How many team member can I invite?</div>
                                            <div className="col">Arrow</div>
                                        </div>
                                        {/* <div className={styles.bodyAnswer}>
                                            No more than 2GB. All files in your account must fit your
                                            allotted storage space.
                                        </div> */}
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