import React from 'react'
import './singlerepo.sass'
import { FiArrowRight } from 'react-icons/fi'

interface Props {
  name: string
  html_url: string
  forks: number
  watchers: number
}

const SingleRepo = ({
  name,
  html_url,
  forks,
  watchers,
}: Props): JSX.Element => {
  return (
    <div className='single-repo'>
      <h4 className='single-repo__title'>{name}</h4>
      <a
        href={`${html_url}`}
        target='_blank'
        rel='noreferrer'
        className='single-repo__link'
      >
        See the repo <FiArrowRight className='single-repo__icon' />
      </a>
      <p className='single-repo__forks'>Forks: {forks}</p>
      <p className='single-repo__watch'>Watchers: {watchers}</p>
    </div>
  )
}

export default SingleRepo
