import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fast Green Loop</title>
        <meta property="og:title" content="Fast Green Loop" />
      </Helmet>
      <a
        href="https://tapfeedrate.com/short/86420?stream_uuid=4a8afb43-406c-4d97-9b3c-305633667b80&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/bgbutt.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
