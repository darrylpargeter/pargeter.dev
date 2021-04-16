import * as React from "react"
import PropTypes from "prop-types"

import * as styles from "./layout.module.css"
import Nav from "./Nav"
console.log(styles)

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Nav />
      <div className={styles.sideBarLeft}>
        <p>left</p>
      </div>
      <main className={styles.main}>{children}</main>
      <div className={styles.sideBarRight}>
        <a download="" target="_blank" rel="noopener noreferrer" href="">
          <h3>Resume</h3>
        </a>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
