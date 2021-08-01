import * as React from 'react'
import { Helmet } from 'react-helmet'
import { navigate } from '@reach/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import '../styles/global.css'
import { NavLink } from '../components/nav-link'

const Quote = ({ pageContext }) => {
  const previous = pageContext.previous
  const current = pageContext.current
  const next = pageContext.next

  const hasPrevious = !!previous
  const hasNext = !!next

  const prevSlug = hasPrevious && `/${previous.id === '-' ? '' : previous.id}`
  const nextSlug = hasNext && `/${next.id === '-' ? '' : next.id}`

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (hasNext) {
        // Don't replace the first route (home page)
        navigate(nextSlug, { replace: !!hasPrevious })
      }
    }, 10 * 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Quotes - {current.message}</title>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='A simple quotes app which consists of handpicked and curated quotes. This can be installed as a standalone application from your browser.'
        />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-touch-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon-180x180.png'
        />
      </Helmet>

      <div className='wrapper'>
        <h1>{current.message}</h1>

        <div className='author_container'>
          <div className='author'>{current.author || ''}</div>
          <nav>
            <ul>
              <NavLink href={prevSlug} disabled={!hasPrevious}>
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='icon' aria-hidden='true' />
              </NavLink>

              <NavLink href={nextSlug} disabled={!hasNext}>
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='icon' aria-hidden='true' />
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  )
}

export default Quote
