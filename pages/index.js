import React from 'react'
import Link from 'next/link'

const Home = () => (
  <main>
    <h1>Hello from Preact</h1>

    <Link href="/about">
      <a>About</a>
    </Link>
  </main>
)

export default Home;
