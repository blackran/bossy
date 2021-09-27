import React from "react"
import Logo from '../../molecules/Logo'
import Login from '../../organisms/Login'
import { Colors, Spacings} from '../../atoms'

function HeaderAccueil(props){
  return(
    <div style={styles().principale} className="HeaderAccueil">
      <Logo dark={false}>TOUCHE MOI</Logo>
      <Login {...{props}} />
    </div>
    )
}

const styles = () => ({
  principale: {
    backgroundColor: Colors.Black +'40',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Spacings.tiny * 11,
    padding: '0 '+Spacings.tiny+'%',
    position: 'relative',
    zIndex: 2,
  }
})

export default HeaderAccueil
