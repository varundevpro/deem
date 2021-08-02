import * as React from 'react'
import { Link } from 'gatsby'

export const NavLink = ({ children, href, disabled = false }) => {
  if (!disabled) {
    return (
      <li>
        <Link className='button' to={href}>
          {children}
        </Link>
      </li>
    )
  } else {
    return <li className='button disabled'>{children}</li>
  }
}
