import React from 'react';
import './statics/css/Principal.css';
import { TypeDocument } from '../../components';
import Navigation from '../Navigation';
import axios from 'axios';


function Exercices(props) {
  const [exercices, setExercices] = React.useState([]);
  React.useEffect(() => {
      axios.get('api/documentMemeCategorie/exercice')
      .then(({ data }) => {
        if (data.status === 'success') {
          console.log(data.data)
          setExercices(data.data)
        }
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [])

  const filtreNiveau = (datas) => {
    let newData = {};
    datas.map(data => {
      if (newData[data.niveau.niveau]) {
        newData[data.niveau.niveau] = [...newData[data.niveau.niveau], data]
      } else {
        newData[data.niveau.niveau] = [data]
      }
      return null
    })
    return newData
  }
  return (
    <div className="Principal">
      <Navigation {...props} />
      <div>
        <div className="nav_float">
          <ul>
            {
              Object.entries(filtreNiveau(exercices)).map(([niveau, data]) => {
                return <a href={"#" + niveau} key={niveau}><li>{niveau}</li></a>
              })
            }
          </ul>
        </div>
        <div className="body">
          {
            Object.entries(filtreNiveau(exercices)).map(([niveau, documents]) => {
              return <div className="section" id={niveau} key={niveau}>
                Lecon pour les {niveau}
                <TypeDocument {...{ documents, ...props }} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Exercices
