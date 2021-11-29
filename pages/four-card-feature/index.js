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
                    <div className={styles.header1 + " row justify-content-center"}>
                        <p className="mb-0">Reliable, efficient delivery</p>
                    </div>
                    <div className={styles.header2 + " row justify-content-center"}>
                        <p className="mb-0">Powered by Technology</p>
                    </div>
                    <div className={styles.para + " row justify-content-center"}>
                        <p className="mb-0">
                            our Artifcial lntelligence powered tools use millions of project doto
                            points to ensure ot your project is successful
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge