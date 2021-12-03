import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/article-preview-component.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/article-preview-component/favicon-32x32.png" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className="row">
                            Mostafa Samir
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge