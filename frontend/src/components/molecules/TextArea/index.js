import React from 'react';
import {Spacings, Colors, Icons} from '../../atoms';

const {tiny, base} = Spacings
const {PrimaryDark, White} = Colors

function Input(props){
  const {icon, label, rows, placeholder, onChange, value, name, setError} = props

  const onChangeGlobal = (e) => {
    if (setError) {
      setError([])
    }
    onChange(e)
  }

  return(
    <div style={styles(props).principale} className="Input">
      { label && <p style={styles(props).label}>{label}</p> }
      <div style={styles(props).blockInput}>
        { icon && <Icons name={icon} size={tiny*7} styles={styles(props).iconLeft}/> }
        <textarea 
          style={styles(props).input} 
          placeholder={placeholder || ''}
          onChange={onChangeGlobal}
          {...{value, name, rows }}
        />
      </div>
    </div>
    )
}

const styles = ({icon, name, mode, error, size}) => ({
  principale: {
    margin: '0px '+ tiny + 'px',
    // width: '100%',
    flex: 1,
  },
  label: {
    fontSize: base,
    margin: 0,
    marginBottom: base,
    color: mode ==="dark"? White: PrimaryDark,
  },
  blockInput: { 
    fontSize: base,
    position: 'relative',
  },
  input: {
    border: (error?.indexOf(name) >=0)? '1px solid '+Error: 'none',
    borderRadius: tiny,
    // height: tiny * 7,
    width: '100%',
    padding: Spacings[size||'tiny'] + 'px',
    paddingLeft: icon? tiny *7 : base,
  },
  iconRight: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  iconLeft: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  }
})

export default Input
