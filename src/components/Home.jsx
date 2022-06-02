import React from 'react'
import {Link} from "react-router-dom"
import styles from "./route.module.css"
function Home() {
  return (
    <div className={styles.home}>
    <Link to="/">Home</Link>
    <Link to="/products/">Products</Link>
    </div>
  )
}

export default Home
