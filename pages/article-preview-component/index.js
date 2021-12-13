import { Fragment, useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/article-preview-component.module.css'

const WebDesginChallenge = function () {

    const [ShowSocial, SetShowSocial] = useState(false);

    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/images/article-preview-component/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.background}>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <div className="row m-0">
                            <div className="col-lg-5 col-12 p-0">
                                <div className={styles.imageHolder}>
                                    <img src="/images/article-preview-component/drawers.jpg" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-12 p-0">
                                <div className={styles.sectionHolder}>
                                    <div className={styles.sectionHolderRow + ' row m-0'}>
                                        <div className="col-12 p-0 m-0 mb-3">
                                            <div className={styles.sectionHeader}>
                                                <h4>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h4>
                                            </div>
                                        </div>
                                        <div className="col-12 p-0 m-0 mb-3">
                                            <div className={styles.sectionPara}>
                                                <p className="m-0">
                                                    {`Ever been ln a room and felt like something was missing?
                                                    Perhaps it felt slightly bare and uninviting. I've got some
                                                    simple tips to help you make any room feel complete.`}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 p-0 m-0">
                                            <div 
                                            style={!ShowSocial? {display: 'none'} : {}}
                                            className={styles.socialMediaHolder}>
                                                <div className={styles.socialMedia}>
                                                    <div className='mx-3'>
                                                        <p className='m-0' style={{letterSpacing: "5px"}}>SHARE</p>
                                                    </div>
                                                    <div className='mx-2' style={{cursor: 'pointer'}}>
                                                        <img src='/images/article-preview-component/icon-facebook.svg'/>
                                                    </div>
                                                    <div className='mx-2' style={{cursor: 'pointer'}}>
                                                        <img src='/images/article-preview-component/icon-twitter.svg'/>
                                                    </div>
                                                    <div className='mx-2' style={{cursor: 'pointer'}}>
                                                        <img src='/images/article-preview-component/icon-pinterest.svg'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.authSection + " mt-3"}>
                                                <div className='row'>
                                                    <div className='col-3'>
                                                        <div className={styles.authImageHolder}>
                                                            <img src="/images/article-preview-component/avatar-michelle.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className='col-7 p-0'>
                                                        <div className={styles.authInfo}>
                                                            <div>
                                                                <div className={styles.infoHeader}><h6>Michelle Appleton</h6></div>
                                                                <div className={styles.infoDate + ' m-0'}><p className='m-0'>28 Jun 2020</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-2 p-0 d-flex align-items-center'>
                                                        <div
                                                        onClick={() => { SetShowSocial(!ShowSocial) }}
                                                        className={styles.infoShareImg + ' d-flex justify-content-center align-items-center'}>
                                                            <img src="/images/article-preview-component/icon-share.svg" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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