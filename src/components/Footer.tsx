import React from 'react'

export default function Footer() {
  return (
   <footer className='border-t-2 mt-10 py-5 md:px-10 flex flex-col-reverse md:flex-row justify-center items-center md:justify-between gap-5'>
    <ul className='md:flex-row font-medium flex flex-col gap-3 items-center'>
        <li>Terms & conditions</li>
        <li>A propos</li>
        <li>Nous contacter</li>
    </ul>
    <ul className='flex gap-3'>
        <li>
            <img className='w-8' src="/icons/linkedin.svg" alt="" />
        </li>
        <li>
            <img className='w-8' src="/icons/instagram.svg" alt="" />
        </li>
    </ul>
   </footer>
  )
}
