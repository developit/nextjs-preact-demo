import React from 'react'
import Link from 'next/link'

const Home = () => {
  const [state, setState] = React.useState(0)
  return (
    <main>
      <h1>Hello from Preact</h1>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <Link href="/about">
        <a>About</a>
      </Link>
    </main>
  )
}

export default Home;
