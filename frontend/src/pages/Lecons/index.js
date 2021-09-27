import React from 'react';
import './statics/css/Principal.css';
import { TypeDocument } from '../../components';
import Navigation from '../Navigation';
import axios from 'axios';


function Lecons(props) {
  const [lecons, setLecons] = React.useState([]);
  React.useEffect(() => {
    axios.get('api/documentMemeCategorie/lecon')
      .then(({ data }) => {
        if (data.status === 'success') {
          console.log(data.data)
          setLecons(data.data)
        }
      })
      .catch((error) => {
        console.log({ error })
      })

  }, [])

  const filtreNiveau = (datas) => {
    let newData = {};
    console.log({ datas })
    datas?.map(data => {
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
              Object.entries(filtreNiveau(lecons)).map(([niveau, data]) => {
                return <a href={"#" + niveau} key={niveau}><li>{niveau}</li></a>
              })
            }
          </ul>
        </div>
        <div className="body">
          {
            Object.entries(filtreNiveau(lecons)).map(([niveau, documents]) => {
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

export default Lecons
