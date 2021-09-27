import React from 'react';
import Navigation from '../Navigation';
import './statics/css/Details.scss';
import imageDefault from '../../statics/images/reliure_metallique.jpg';
import {
  Spacings,
  LireDocument,
} from '../../components';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/fr';

function Correction(props) {
  const { corections } = props;

  if (corections?.length <= 0) {
    return [];
  }

  return <div className="Correction">
    <h1>Correction: </h1>
    <div className="listeCorrection">
      {
        corections?.map((corection, index) => {
          return <LireDocument
            className="oneBlock"
            {...{ ...props }}
            hide={true}
            idDocument={corection?._id}
          >
            <div className="head">
              <span>Corection {index}: </span><h1>{corection.titre}</h1>
            </div>
            <div className="description">
              {corection.description}
            </div>
            <div className="footer">
              <p><i className="fa fa-clock-o"></i>
                {' '}
                Dernière modification il y a
                {' '}
                {
                  corection?.createdAt &&
                    <Moment fromNow ago locale="fr">
                      {
                        corection?.updatedAt ||
                          new Date()
                      }
                    </Moment>
                }
              </p>
            </div>
          </LireDocument>
        })
      }
    </div>
  </div>
}

function Details(props) {
  const [document, setDocument] = React.useState()
  React.useEffect(() => {
    const idDoc = props?.history?.location?.pathname?.split('=')[1];
      
    axios.get(`/api/document/${idDoc}`)
      .then(({ data }) => {
        if (data.status === 'success') {
          console.log(data.data)
          setDocument(data.data);
        }
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [props.history.location.pathname])


  const [hide, setHide] = React.useState(true);
  return (
    <div className="Details">
      <Navigation {...{ ...props }} />
      <div className="body">
        <div className="image">
          <LireDocument
            className="eye shadowHover"
            {...{ hide, setHide, ...props }}
            idDocument={document?._id}
          >
            <i className={hide ? "fa fa-unlock-alt fa-2x" : "fa fa-eye fa-2x"}></i>
          </LireDocument>
          <img src={document?.image || imageDefault} alt="" />
        </div>
        <div style={styles(props).header}>
          <p style={styles(props).createdAt}><i className="fa fa-clock-o"></i>
            {' '}
            Dernière modification il y a
            {' '}
            {
              document?.createdAt &&
                <Moment fromNow ago locale="fr">
                  {
                    document?.updatedAt ||
                      new Date()
                  }
                </Moment>
            }
          </p>
          <p>
            Niveau {document?.niveau?.niveau}
          </p>
        </div>
        <div style={styles(props).body}>
          <div>
            <h1 style={styles(props).titre}>{document?.titre?.toUpperCase()}</h1>
            <p style={styles(props).desc}>{document?.description}</p>
          </div>
          <div>
            <Correction corections={document?.corection} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = () => ({
  body: {
    padding: Spacings.small,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  titre: {
    fontSize: Spacings.xlarge - 2,
  },
  desc: {
    fontSize: Spacings.base,
    opacity: 0.8,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 12,
    alignItems: 'center',
  },
  createdAt: {
    fontSize: Spacings.base,
    opacity: 0.7,
    margin: 0,
  }
});
export default Details;
