import React from 'react';
import {Spacings, Colors, Icons} from '../../atoms';

const {tiny, base} = Spacings
const {White, Error, PrimaryDark} = Colors

function Select(props){
  const {icon, label, datas, onChange, value, name, setError, className} = props

  const onChangeGlobal = (e) => {
    if (setError) {
      setError([])
    }
    onChange(e)
  }

  return(
    <div style={styles(props).principale} className={className}>
      { label && <p style={styles(props).label}>{label}</p> }
      <div style={styles(props).blockInput}>
        { icon && <Icons name={icon} size={tiny*4} styles={styles(props).iconLeft}/> }
        <select 
          {...{name}}
          value={value}
          style={styles(props).select} 
          onChange={onChangeGlobal}
        >
          { 
            datas?.map(({value, title}, key) => {
              return <option {...{value, key}}>{title}</option>
            })
          }
        </select>
      </div>
    </div>
    )
}

const styles = ({icon, mode, error, name, size}) =>  ({
  principale: {
    margin: '0px '+ tiny + 'px',
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
  select: {
    border: (error?.indexOf(name) >=0)? '1px solid '+Error: 'none',
    borderRadius: tiny,
    // height: tiny * 7,
    width: '100%',
    backgroundColor: White,
    padding: Spacings[size||'tiny'] + 'px',
    paddingLeft: icon? tiny * 8 : '',
  },
  iconLeft: {
    position: 'absolute',
    left: Spacings.small - 2,
    top: '50%',
    transform: 'translateY(-50%)',
  }
})

export default Select
