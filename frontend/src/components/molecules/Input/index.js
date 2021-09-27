import React, { useState, useEffect } from "react"
import { Spacings, Colors, Icons } from '../../';

const { tiny, base } = Spacings
const { PrimaryDark, White, Error } = Colors

function Input(props) {
  const {
    icon,
    label,
    type,
    placeholder,
    onChange,
    value,
    name,
    setError,
    inputStyle,
    principalStyle,
  } = props
  const [types, setTypes] = useState('')

  useEffect(() => {
    setTypes(type)
  }, [type])

  const onClickEye = () => {
    if (types) {
      setTypes(types === 'password' ? 'text' : 'password')
    } else {
      setTypes('text')
    }
  }

  const onChangeGlobal = (e) => {
    if (setError) {
      setError([])
    }
    onChange(e)
  }


  return (
    <div 
      style={{ ...styles(props).principale, ...principalStyle }} 
      className="Input">
      {label && <p style={styles(props).label}>{label}</p>}
      <div style={styles(props).blockInput}>
        {icon && <Icons name={icon} size={tiny * 4} styles={styles(props).iconLeft} />}
        <input
          type={types} style={{ ...styles(props).input, ...inputStyle }}
          placeholder={placeholder || ''}
          onChange={(e) => onChangeGlobal(e)}
          {...{ value, name }}
        />

        {/* width={type === 'password' ? 19: 14 } */}
        {type === 'password' && <Icons
          name={types === 'password' ? 'eye_closed' : 'eye'}
          size={tiny * 4}
          onClick={onClickEye}
          styles={styles(props).iconRight} />
        }
      </div>
    </div>
  )
}

const styles = ({ icon, name, type, mode, error, size }) => {
  return ({
    principale: {
      margin: '0px ' + tiny + 'px',
      // width: '100%',
      flex: 1,
    },
    label: {
      fontSize: base,
      margin: 0,
      marginBottom: base,
      color: mode === "dark" ? White : PrimaryDark,
    },
    blockInput: {
      fontSize: base,
      position: 'relative',
    },
    input: {
      border: (error?.indexOf(name) >= 0) ? '1px solid ' + Error : 'none',
      borderRadius: tiny,
      // height: tiny * 7,
      width: '100%',
      padding: Spacings[size || 'base']-2 + 'px',
      paddingLeft: icon ? tiny * 8 : base,
      paddingRight: type === "password" ? tiny * 8 : (type === "number" ? tiny : ""),
    },
    iconRight: {
      position: 'absolute',
      right: Spacings.small - 2,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    iconLeft: {
      position: 'absolute',
      left: Spacings.small - 2,
      top: '50%',
      transform: 'translateY(-50%)',
    }
  })
}

export default Input
