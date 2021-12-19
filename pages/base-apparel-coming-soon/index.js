import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/column-preview-card-component.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/column-preview-card-component/favicon-32x32.png" />
            </Head>
            <div className={styles.background}>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge