import styles from '../../../styles/About.module.css'
import Image from 'next/image'
import photo1 from '../../../public/assign3-mobile.jpg'
import photo2 from '../../../public/assign3-desktop.jpg'
import Pills from './pills'
import Link from 'next/link'

export default function Proj3() {
  return (
    <div className={styles.moreProjects}>
      <Pills />
      {/* --------- Project description --------- */}
      <div className={styles.desc}>
        <span className={styles.contentTitle}>
          <span className={styles.contentDesc}>Year</span>
          <span className={styles.contentDesc}>Specifications</span>
          <span className={styles.contentDesc}>Published site</span>
          <span className={styles.contentDesc}>Git repo</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2023</span>
          <span className={styles.contentRole}>useState, useEffect</span>
          <span className={styles.contentClient}>
            <Link href='https://assignment3-javascript-frameworks.vercel.app/'>Link &#8600;</Link>
          </span>
          <span className={styles.contentSocial}>
            <Link href='https://github.com/jennynguyenoberg/assignment3-javascript-frameworks'>Link &#8600;</Link>
          </span>
        </span>
        {/* <span className={styles.bar}></span> */}
      </div>


      {/* --------- Brief / Challenges / Solution --------- */}
      <div className={styles.brief}>
        <span className={styles.contentTitle}>
          <span className={styles.contentDesc}></span>
          <span className={styles.contentDesc}>Brief</span>
        </span>
        {/* <span className={styles.bar}></span> */}
        <span className={styles.contentProject}>
          <span className={styles.contentYear}></span>
          <span className={styles.contentRole}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Molestie ac feugiat sed
            lectus vestibulum. Faucibus interdum posuere lorem
            ipsum dolor sit amet consectetur. Quis viverra nibh
            cras pulvinar mattis.
          </span>
        </span>
        {/* <span className={styles.bar}></span> */}
      </div>
      Mobile view
      <Image
        src={photo1}
        alt="portfolio"
        style={{
          width: "100%",
          height: "100%",
          margin: "0px 0px 35px 0px"
        }}
      />
      Desktop view
      <Image
        src={photo2}
        alt="portfolio"
        style={{
          width: "100%",
          height: "100%",
          margin: "0px 0px 35px 0px"
        }}
      />
    </div>
  )
}