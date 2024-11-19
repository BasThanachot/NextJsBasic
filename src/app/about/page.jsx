import React from 'react'
import Link from 'next/link'
import Header from '../component/Header'
import Nav from '../component/nav'

function AboutPage() {
  return (
    <div>
        <Header />
        <Nav />
        <h3>About Page</h3>
        <Link href="/about/team" className='inline-block bg-purple-500 text-ehite py-2 px-4 rounded'>Our Team</Link>
    </div>
  )
}

export default AboutPage