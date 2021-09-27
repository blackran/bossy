import React from "react"
import {Spacings, Colors, Icons} from '../../atoms';

const {tiny} = Spacings

function index(props){
  const {icon, children} = props
  return(
    <div style={styles(props).principale}>
        { icon && <Icons name={icon} size={tiny*4} styles={styles(props).iconLeft}/> }
        <p style={styles(props).paragraph}>{children}</p>
    </div>
    )
}

const styles = () => ({
  principale: {
    display: 'flex',
    alignItems: 'center',
    margin: tiny * 2 + 'px '+ tiny + 'px',
    flex: 1,
  },
  iconLeft: {

  },
  paragraph: {
    color: Colors.PrimaryDark,
    margin: 0,
    fontSize: Spacings.base
  }
})

export default index
