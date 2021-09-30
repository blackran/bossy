import React from 'react';
import './statics/css/Navigation.scss';
import { Link } from 'react-router-dom';
import imageDefault from './statics/images/default.png';
import axios from 'axios';

function Navigation(props) {
  const [pathname, setPathname] = React.useState('')

  React.useEffect(() => {
    setPathname(props.history.location.pathname);
    const idUser = '61501e4f2477ae79d8d07746';
    axios
      .get(`/user/myProfile/${idUser}`)
      .then(({ data }) => {
        console.log({ data })
      })
      .catch(error => console.log(error))
  }, [props.history.location.pathname])

  const clickDeconnect = () => {
    sessionStorage.removeItem('token');
    setTimeout(() => {
      window.location.reload(false);
    }, 1000)
  }

  return (
    <nav className="Navigation">
      <Link to="/Lecons"><h1>Leçons&&exo</h1></Link>
      <ul>
        <Link to="/Lecons" className={(pathname === "" || pathname === "/Lecons") ? "active" : ""}><li>Leçons</li></Link>
        <Link to="/Exercices" className={(pathname === "/Exercices") ? "active" : ""}><li>Exercices</li></Link>
        <a href="/"><li><i className="fa fa-facebook"></i></li></a>
        <a href="/"><li><i className="fa fa-twitter"></i></li></a>
        <a href="/"><li><i className="fa fa-skype"></i></li></a>
        <span className="image">
          <img src={imageDefault} alt="image_utilisateur" />
        </span>
        <a href="/"><li onClick={clickDeconnect}>Deconnexion</li></a>
      </ul>
    </nav>
  )
}

export default Navigation
