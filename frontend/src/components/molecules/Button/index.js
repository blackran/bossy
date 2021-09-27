import React, { useState } from 'react';
import { Spacings, Colors } from '../../atoms';

const { tiny, base } = Spacings;
const { PrimaryLight, PrimaryDark, White } = Colors;

function Button(props) {
  const [isHover, setIsHover] = useState(false);
  const { children, onClick, style, className, disabled } = props;
  // console.log(isHover,styles( props, isHover).text)
  return (
    <>
      {disabled ? (
        <div>loading ...</div>
      ) : (
        <div
          style={{ ...styles(props, isHover).principale, ...style }}
          onClick={onClick}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={className}>
          <div style={styles(props, isHover).text}>{children}</div>
        </div>
      )}
    </>
  );
}

const styles = ({ type, mode, size }, isHover) => ({
  principale: {
    backgroundColor: isHover ? (((mode === 'light') || mode) ? PrimaryDark : 'transparent') :
      ((type === "contained" || !type) ? (((mode === 'light') || mode) ? PrimaryLight : PrimaryDark) : 'transparent'),
    border: '1px solid ' + (isHover ? ((mode === 'light') ? PrimaryDark : PrimaryLight) : ((mode === 'light') ? PrimaryLight : PrimaryDark)),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: tiny,
    padding: Spacings[size || 'base'] - 2 + 'px',
    cursor: 'default',
  },
  text: {
    color: isHover ? ((type === "outlined" || type) ? White : ((mode === 'light') ? White : PrimaryDark)) : (type === "contained" || !type) ? White : ((mode === 'light') ? White : PrimaryDark),
    fontSize: base,
    whiteSpace: 'nowrap',
  },
});

export default Button;
