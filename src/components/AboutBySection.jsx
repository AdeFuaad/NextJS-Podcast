'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutBySection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="mt-16 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About The Host</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        She is a passionate, assiduous and goal-oriented lawyer with adept
        knowledge on Intellectual Property Law, Corporate Advisory, Competition
        Law and Dispute Resolution. She is a member of the Nigerian Bar
        Association, Chartered Institutes of Arbitrators (U.K.) and a student
        member of the Institute of Chartered Secretaries of Nigeria (ICSAN)”.
      </p>
      <p
        className={clsx(
          'mt-4 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        With personal experience as a content creator, business owner and
        creative, she brings fresh and interesting perspectives to the show.
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
