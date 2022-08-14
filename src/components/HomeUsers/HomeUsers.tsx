import React, { useState } from 'react'
import './homeusers.sass'
import { FiSearch } from 'react-icons/fi'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import SingleUser from '../SingleUser'

const HomeUsers = (): JSX.Element => {
  const [search, setSearch] = useState<string>('')
  const [users, setUsers] = useState<Array<any> | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `http://api.github.com/search/users?q=${search}&per_page=6`
      )

      const data = await res.data.items
      setUsers(data)
      setLoading(false)
    } catch (error: any) {
      console.log(error.message)
      toast.error('Something went wrong')
      setLoading(false)
    }
  }

  console.log(users)

  return (
    <section className='home-users'>
      <div className='home-users__input-field'>
        <input
          type='text'
          name='search'
          placeholder='Search users...'
          className='home-users__input'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FiSearch className='home-users__icon' onClick={fetchUsers} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className='home-users__container'>
          {users ? (
            users?.map((user: any, i: any) => <SingleUser key={i} {...user} />)
          ) : (
            <p className='home-users__please'>Please search for a user</p>
          )}
        </div>
      )}
    </section>
  )
}

export default HomeUsers
