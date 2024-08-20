import { Link } from "react-router-dom"

import React from 'react'

const Error = () => {
  return <div>
    <h2>404</h2>
    <p>Stránka nebola nájdená</p>
    <p><Link to="/">Úvodná stránka</Link></p>
  </div>
}

export default Error
