import { Fragment } from 'react'
import Head from 'next/head'
import styles from '../../styles/base-apparel-coming-soon.module.css'

const WebDesginChallenge = function () {
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/base-apparel-coming-soon/favicon-32x32.png" />
            </Head>
            <div className={styles.background}>
                <div className={styles.section + ' row m-0 h-100'}>
                    <div className='col-7 p-0'>
                    </div>
                    <div className='col-5 p-0'>
                        <div className={styles.ImageHolder + '  w-100'}>
                            <img src="/images/base-apparel-coming-soon/hero-desktop.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WebDesginChallenge