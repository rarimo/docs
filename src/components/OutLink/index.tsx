import Link from '@docusaurus/Link'
import React from 'react'

export default function OutLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link to={href} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </Link>
  )
}
