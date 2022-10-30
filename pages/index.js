import Head from 'next/head'
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const projects = [
  {
    id: 1,
    name: "article-preview-component",
    displayName: "Article Preview Component",
    slug: "/article-preview-component",
    image: "article-preview-component.png",
    finished: true,
    solutionURL: "https://www.frontendmentor.io/solutions/nextjs-bootstrap-4FbpIuSD5"
  },
  {
    id: 2,
    name: "base-apparel-coming-soon",
    displayName: "Base Apparel Coming Soon",
    slug: "/base-apparel-coming-soon",
    image: "base-apparel-coming-soon.png",
    finished: true,
    solutionURL: "https://www.frontendmentor.io/solutions/nextjs-and-bootstrap-ogaMU4dSO"
  },
  {
    id: 3,
    name: "column-preview-card-component",
    displayName: "Column Preview Card Component",
    slug: "/column-preview-card-component",
    image: "column-preview-card-component.png",
    finished: true,
    solutionURL: "https://www.frontendmentor.io/solutions/nextjs-bootstraps-t4mYq6Kyt"
  },
  {
    id: 4,
    name: "faq-accordion-card",
    displayName: "Faq Accordion Card",
    slug: "/faq-accordion-card",
    image: "faq-accordion-card.png",
    finished: true,
    solutionURL: "https://www.frontendmentor.io/solutions/nextjs-bootstrap-UdvCR0VOw"
  },
  {
    id: 5,
    name: "four-card-feature",
    displayName: "Four Card Feature",
    slug: "/four-card-feature",
    image: "four-card-feature.png",
    finished: true,
    solutionURL: "https://www.frontendmentor.io/solutions/nextjs-bootstrap-3qO2HxtNi"
  },
  {
    id: 6,
    name: "notifications-page-main",
    displayName: "Notifications Page Main",
    slug: "/notifications-page-main",
    image: "notifications-page-main.png",
    finished: false,
    solutionURL: ""
  },
  {
    id: 7,
    name: "order-summary-component",
    displayName: "Order Summary Component",
    slug: "/order-summary-component",
    image: "order-summary-component.png",
    finished: true,
    solutionURL: "https://www.frontendmentor.io/solutions/nextjs-bootstrap-vIK7OGp0p"
  },
  {
    id: 8,
    name: "profile-card-component",
    displayName: "Profile Card Component",
    slug: "/profile-card-component",
    image: "profile-card-component.png",
    finished: true,
    solutionURL: "https://www.frontendmentor.io/solutions/nextjs-bootstrap--0XlEpOVJ"
  },
  {
    id: 9,
    name: "stats-preview-card-component",
    displayName: "Stats Preview Card Component",
    slug: "/stats-preview-card-component",
    image: "stats-preview-card-component.png",
    finished: true,
    solutionURL: "https://www.frontendmentor.io/solutions/nextjs-bootstrap-sphbyByh2"
  },
  {
    id: 10,
    name: "time-tracking-dashboard",
    displayName: "Time Tracking Dashboard",
    slug: "/time-tracking-dashboard",
    image: "time-tracking-dashboard.png",
    finished: false,
    solutionURL: ""
  }
]

export default function Home() {
  const [hostName, setHostName] = useState("");

  useEffect(() => {
    if(window) setHostName(window.location.host);
    console.log(window.location)
  }, [])

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <div className={styles.background}>
        <div className={"row d-flex m-0"}>
          {
            projects
            .filter(project => project.finished)
            .map((project, index) => (
              <div key={index} className={styles.Col + ' col-12 col-md-6 col-lg-4'}>
                <div className={styles.cardHolder}>
                  <Link href={project.slug}>
                    <div className={styles.projectImageHolder}>
                      <img width={"100%"} src={"/images/home/" + project.image} />
                    </div>
                  </Link>
                  <Link href={project.slug}>
                    <div className={styles.projectNameHolder}>
                      <h5>
                        {project.displayName}
                      </h5>
                    </div>
                  </Link>
                  <div className={styles.projectsolutionURL}>
                    <a href={project.solutionURL} target="_blank"  rel="noreferrer">
                      See My Solution
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Fragment>
  )
}
