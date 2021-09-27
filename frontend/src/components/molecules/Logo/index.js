import React from 'react';
import {
  Colors,
  Spacings,
} from '../../';

function Logo({children, size, dark}){
  return(
    <h1 style={styles({dark}).text}>{children.toUpperCase()}</h1>
  )
}

const styles = ({dark}) => ({ 
  text: {
    color: dark? Colors.PrimaryDark: Colors.White,
    margin: 0,
    fontSize: Spacings.xlarge,
    fontWeight: 700
  }
})


export default Logo
