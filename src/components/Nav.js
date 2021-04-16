import React from "react"
import { Link } from "gatsby"
import * as styles from "./nav.module.css"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/">
          <h3>Portfolio</h3>
        </Link>
        <Link to="/articles">
          <h3>Articles</h3>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
