'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        The Everything IP Law Podcast is a premier Intellectual Property &
        Technology Law Podcast dedicated to providing forward thinking
        conversations around the development of IP & Technology related laws in
        Nigeria. It also provides creatives and businesses with the best
        available options to leverage their intangible assets in a fast-paced
        technology-driven world.
      </p>
      <p
        className={clsx(
          'mt-4 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        The Everything IP Law Podcast is a premier Intellectual Property Law
        Podcast in Nigeria hosted by a dynamic young Lawyer,{' '}
        <span className="hover:text-grey-400 font-semibold hover:underline">
          <a href="https://www.linkedin.com/in/hibbatun-nasser-a-shobambi/">
            Hibbatun-Nasser
          </a>
        </span>
        . The EIP Law podcast is dedicated to providing its listeners with
        industry knowledge on a variety of Intellectual Property and technology
        related issues.
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </section>
  )
}
