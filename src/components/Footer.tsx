import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'

export default function FooterCopyRight() {
  const thisYear = new Date()
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="text-center">
          <small>
            All Rights Reserved | <span>{thisYear.getFullYear()} </span>
          </small>
        </div>
        <div className="row text-center">
          <Link href="/">
            <FontAwesomeIcon icon={faBox} size="3x" className="footerIco" />
          </Link>
        </div>
      </div>
    </div>
  )
}
