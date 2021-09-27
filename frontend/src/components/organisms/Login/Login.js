import React from 'react'
import {
  TextField,
  InputLabel,
  IconButton,
  InputAdornment,
  Grid,
  FormControl,
  Input
} from '@material-ui/core'

import {
  Visibility,
  VisibilityOff,
  Person,
  Https
} from '@material-ui/icons'
import { useDispatch } from 'react-redux'

import { useRouter } from 'next/router'
import { login } from './utils/Utils'

function Login () {
  const router = useRouter()
  const dispatch = useDispatch()
  const [state, setState] = React.useState({ email: '', password: '' })
  const [error, setError] = React.useState(false)
  const [isShow, setIsShow] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const onChangeInput = (e) => {
    setState(true)
    setState(Object.assign({}, state, { [e.target.name]: e.target.value }))
  }

  /**
     * @params {*} e - objet contient le password et email
     * @returns {void} - renvoi une rien
     */

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (!(state.email && state.password)) {
      return setError(true)
    }
    const token = await login(state)
    if (token) {
      setIsLoading(false)
      localStorage.setItem('Token', token)
      dispatch({ type: 'IS_ADMIN', data: true })
      router.push('/User')
    }
  }

  const { email, password } = state
  return (
    <div className='Login'>
      <form className="Center" >
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Person />
            </Grid>
            <Grid item>
              <TextField
                label="Email *"
                value={email}
                error={error}
                onChange={onChangeInput}
                // className="max-width"
                name='email'
                style={{ width: 215 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Https />
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                <Input
                  type={isShow ? 'text' : 'password'}
                  value={password}
                  onChange={onChangeInput}
                  name='password'
                  error={error}
                  style={{ width: 215 }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setIsShow(!isShow)}
                        onMouseDown={() => setIsShow(!isShow)}
                        edge="end"
                      >
                        {isShow ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className='button'>
          <input
            style={{ cursor: 'pointer' }}
            className="max-width btn button-light-blue"
            type="button"
            value={isLoading ? 'Chargement...' : 'Connexion'}
            onClick={onSubmit}
          />
          {/* <button onClick={() => { */}
          {/*     console.log('/Signin') */}
          {/*     router.push('/Signin') */}
          {/* }}> */}
          {/*     Creer une compte */}
          {/* </button> */}
        </div>
      </form>
    </div>
  )
}

export default Login
