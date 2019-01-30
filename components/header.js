import React from 'react'
//Add reference to Link functionality from the Next core
import Link from 'next/link'
export default ({ children }) => (
  <header>
    <h1>{children}</h1>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  </header>
)