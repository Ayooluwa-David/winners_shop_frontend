import React from 'react'
import styles from './HomeCard.module.css'
import {Link} from 'react-router-dom'
const HomeCard = () => {
  return (  

       <div className={`col-md-3 ${styles.col}`}>
        <Link to="/detail" className={styles.link}></Link>
        <div className={styles.card}>
            <div className={styles.cardImgWrapper}>
               <img src="" alt="Product Image" className={styles.cardImgTop}/>
            </div>
            <div className={styles.cardBody}>
                <h5 className={`${styles.cardTitle} mb-1`}>Product Name</h5>
                <h6 className={styles.cardText}>$100.00</h6>
            </div>
        </div>
       </div>
       
  )
}

export default Card
