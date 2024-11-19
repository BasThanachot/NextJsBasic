import React from 'react'
import Link from 'next/link'

function nav() {
  return (
    <div>
        <ul className='flex item-center justify-center py-4 bg-[#333] text-white font-semicold space-x-6'>
            <li className='hover:underline'><Link href="/">Home</Link></li>
            <li className='hover:underline'><Link href="/about">About</Link></li>
            <li className='hover:underline'><Link href="/blog">Blog</Link></li>
            <li className='hover:underline'><Link href="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default nav