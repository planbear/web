import React, { Fragment } from 'react'

import Head from '../components/head'

const Home = () => (
  <Fragment>
    <Head
      description="PlanBear is coming back"
      title="PlanBear"
      url="https://planbear.co"
    />

    <style jsx>{`
      :global(body) {
        background: url('/static/planbear.svg') center no-repeat;
        height: 100vh;
        margin: 0;
      }
    `}</style>
  </Fragment>
)

export default Home
