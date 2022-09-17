import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/notifications-page-main.module.css'

const imgPath = "/images/"

const data = [
    {
        from: "Mark Webber",
        photo: "avatar-mark-webber.webp",
        action: "reacted to your recent post",
        at: "My first tournament today!",
        isNew: true,
        timeAgo: "1min ago"
    }
]

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/notifications-page-main/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className={styles.headerContainer}>
                            <div className={styles.header + " d-flex justify-content-between"}>
                                <div className={styles.leftHeader}>
                                    <p>Notifications <span >3</span></p>
                                </div>
                                <div className={styles.rightHeader}>
                                    <p>Mark as read</p>
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