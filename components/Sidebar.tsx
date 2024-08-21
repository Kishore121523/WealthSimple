'use client'

import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user}: SiderbarProps) => {
  const pathName = usePathname()
  return (
    <section className='sidebar'>
      <nav className="flex flex-col gap-4">
        <Link href="/" className='flex mb-12 cursor-pointer items-center gap-2'>
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt='Wealthsimple Logo'
            className='size-[24px] max-xl:size-14'
          />
          <h1 className='sidebar-logo'>Wealthsimple</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
          return (
            <Link 
              href={item.route}
              key={item.label}
              className={`sidebar-link ${isActive ? 'bg-bankGradient':''}` }
            >
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={`${isActive ? "brightness-[3] invert-0" : ''}`}
                />
              </div>
              <p className={`sidebar-label ${isActive ? '!text-white' : ''}`}>{item.label}</p>
            </Link>
          )
        })}

        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar
