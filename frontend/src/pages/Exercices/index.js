import React from 'react';
import './statics/css/Principal.css';
import { NiveauDocument } from '../../components';
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
    let newDatas = {};
    datas?.map(data => {
      if (newDatas[data.niveau.niveau]) {
        newDatas[data.niveau.niveau] = [...newDatas[data.niveau.niveau], data]
      } else {
        newDatas[data.niveau.niveau] = [data]
      }
      return null
    })

    const respData = {};
    Object.entries(newDatas).map(([key, newDataMap]) => {
      newDataMap.map(newData => {
        let stock = {}
        if (stock[newData.type.type]) {
          stock[newData.type.type] = [...stock[newData.type.type], newData]
        } else {
          stock[newData.type.type] = [newData];
        }

        respData[key] = stock;
        return null
      })
      return null
    })
    return respData;
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
                <NiveauDocument {...{ documents, ...props }} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Exercices
