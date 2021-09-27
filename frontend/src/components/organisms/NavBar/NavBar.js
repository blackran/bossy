import React, { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import jwt from 'jwt-decode'
import { useRouter } from 'next/router'
import { useSpring, animated } from 'react-spring'

import {
  findOneUser
} from '../pages/utils/Utils'

function isAuth (urlNow, url) {
  return (url.filter(e => {
    return e.split('/')[1] === urlNow.split('/')[1]
  }).length > 0)
}

export default function NavBar () {
  const router = useRouter()
  const [user, setUser] = useState({})
  const isAdmin = useSelector(state => state.global.isAdmin)
  const dispatch = useDispatch()
  const [mouseHover, useMouseUser] = useState(false)
  const url = useMemo(() => [
    '/User'
  ], [])
  const fetchData = async (token) => {
    const stock = await findOneUser(token.idUser)
    setUser(stock)
  }
  useEffect(() => {
    if (isAuth(router.pathname, url)) {
      if (localStorage.hasOwnProperty('Token')) { // eslint-disable-line
        dispatch({ type: 'IS_ADMIN', data: false })
        const token = jwt(localStorage.getItem('Token'))
        fetchData(token)
        if (typeof token.idUser === 'number') {
          if (token.isAdmin !== 'y') {
            return router.push('/Login')
          }
          dispatch({ type: 'IS_ADMIN', data: true })
        }
      } else {
        if (router.pathname !== '/Login') {
          router.push('/Login')
        }
      }
    }
  }, [dispatch, router, url])

  const logout = () => {
    if (router) {
      router.prefetch('/Login')
      localStorage.removeItem('Token')
      dispatch({ type: 'IS_ADMIN', data: false })
      router.push('/Login')
    }
  }

  const styleSpring = useSpring({
    from: { width: 26 },
    to: {
      width: mouseHover ? 92 : 26,
      padding: mouseHover ? 'auto' : 0,
      justifyContent: mouseHover ? 'flex-start' : 'center'
    }
  })

  const UserMouseUserConstume = (e) => {
    useMouseUser(e)
  }

  return (
    <div className='NavBar'>
      <Link href='/'>
        <h1 className='logo'>
          logo
        </h1>
      </Link>
      <div>
        <Link href='/'>
          Home
        </Link>
        <Link href='/Projects'>
          Projet
        </Link>
        <Link href='/Contacts'>
          Contacts
        </Link>
        {
          isAdmin &&
            <>
              <Link href='/User'>
                User
              </Link>
            </>
        }

        {
          isAdmin &&
            <animated.div
              className='user'
              style={styleSpring}
              onMouseEnter={() => UserMouseUserConstume(true)}
              onMouseLeave={() => UserMouseUserConstume(false)}
            >
              <div
                className='image'
              >
                { user
                  ? <img src={user.imgUser } alt='user_connecter'/>
                  : <img src='/add-new-project.jpg' alt='user_connecter'/>
                }
              </div>
              {' '}
              <button
                onClick={logout}
                style={{ display: mouseHover ? '' : 'none' }}
              >
                Logout
              </button>
            </animated.div>
        }
      </div>
    </div>
  )
}
