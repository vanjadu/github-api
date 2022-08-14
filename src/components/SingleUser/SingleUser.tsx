import React from 'react'
import { Link } from 'react-router-dom'
import './singleuser.sass'

interface SingleUserProps {
  avatar_url: string
  login: string
  id: number
}

const SingleUser = ({
  avatar_url,
  login,
  id,
}: SingleUserProps): JSX.Element => {
  return (
    <div className='single'>
      <img src={avatar_url} alt={login} className='single__avatar' />
      <h4 className='single__title'>{login}</h4>
      <Link to={`/user/${id}`} className='single__btn'>
        View profile
      </Link>
    </div>
  )
}

export default SingleUser
