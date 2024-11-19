import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
        <h3>Our team</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, incidunt hic eligendi ipsum excepturi modi rerum eum cupiditate blanditiis consequatur.</p>
        <Link href="/about" className='inline-block bg-gray-500 text-while py-2 px-4 rounded'>Back</Link>
    </div>
  )
}

export default page