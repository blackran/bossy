import React from 'react';
import {
  Spacings,
  LireDocument,
} from '../..'
import imageDefault from '../../../statics/images/reliure_metallique.jpg';

import { useTransition, animated } from 'react-spring'

import Moment from 'react-moment';
import 'moment/locale/fr';

const formatDesc = (desc) => {
  if (desc.length > 30) {
    return desc.substring(0, 30) + '...';
  }
  return desc
}


function OneDocument(props) {
  const [hide, setHide] = React.useState(true);
  const { document, show, index } = props;
  const clickDetails = () => {
    if (!mouseHover) {
      props.history.push(`/Details=${document._id}`);
    }
  }

  const [mouseHover, setMouseHover] = React.useState(false);

  const transitions = useTransition(show, {
    from: { opacity: 0, transform: 'translateY(-'+ (index+1) * 10 +'px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-'+ (index+1) * 10 +'px)' },
    reverse: show,
    delay: 200,
    // config: config.molasses,
  })

  return (
    <>
      {transitions((stylesSpring, item) => item && (
        <animated.div
          className="OneDocument shadowHover"
          onClick={clickDetails}
          style={{ 
            ...styles(props).principal,
            ...stylesSpring
          }}>
          <div style={styles(props).containerImage}>
            <LireDocument
              style={styles(props).eye} className="shadowHover"
              onMouseEnter={() => setMouseHover(true)}
              onMouseLeave={() => setMouseHover(false)}
              {...{ hide, setHide, ...props }}
              idDocument={document?._id}
            >
              <i className={hide ? "fa fa-unlock-alt" : "fa fa-eye"}></i>
            </LireDocument>
            <img src={props.image || imageDefault} alt="image_document" style={styles(props).image} />
          </div>
          <div style={styles(props).body}>
            <div>
              <h1 style={styles(props).titre}>{document.titre.toUpperCase()}</h1>
              <p style={styles(props).desc}>{formatDesc(document.description)}</p>
            </div>
            <div style={styles(props).footer}>
              <p style={styles(props).createdAt}><i className="fa fa-clock-o"></i>
                {' '}
                il y a
                {' '}
                <Moment fromNow ago locale="fr">
                  {
                    document?.updatedAt ||
                    new Date()
                  }
                </Moment>
              </p>
            </div>
          </div>
        </animated.div>
      ))}
    </>
  );
}

const styles = () => ({
  principal: {
    width: 200,
    margin: Spacings.tiny + 'px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  },
  containerImage: {
    position: 'relative',
  },
  eye: {
    position: 'absolute',
    top: 8,
    left: 8,
    padding: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    width: 28,
    height: 28,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
  },
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
  footer: {
    display: 'flex',
  },
  createdAt: {
    fontSize: Spacings.base - 2,
    opacity: 0.7,
    margin: 0,
  }
});

export default OneDocument;
