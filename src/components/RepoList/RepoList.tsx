import React, { useState, useEffect } from 'react'
import './reposlist.sass'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import SingleRepo from '../SingleRepo'
import { FiArrowLeft } from 'react-icons/fi'

const RepoList = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()

  const [repos, setRepos] = useState<Array<any> | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`https://api.github.com/user/${id}/repos`)
        const data = await res.data

        setRepos(data)
        setLoading(false)
      } catch (error: any) {
        console.log(error.message)
        toast.error('Something went wrong')
        setRepos(null)
        setLoading(false)
      }
    }

    fetchRepos()
  }, [id])

  console.log(repos)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='repos'>
          <Link to='/' className='repos__back'>
            <FiArrowLeft className='repos__icon' />
            Back home
          </Link>
          {repos?.map((repo: any, i: any) => (
            <SingleRepo key={i} {...repo} />
          ))}
        </div>
      )}
    </>
  )
}

export default RepoList
