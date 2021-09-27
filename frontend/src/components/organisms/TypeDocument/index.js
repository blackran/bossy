import React from "react"
import { OneDocument, Spacings } from '../../';
import './statics/css/TypeDocument.scss';

function TypeDocument(props) {
  const [hidden, setHidden] = React.useState(false);
  const [start, setStart] = React.useState(true);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=> {
      setHidden(show)
    }, 500)
  }, [show])

  return (<div
    className="TypeDocument"
    style={styles(props).principal}
  >
    <h1
      style={styles(props).title}
      onClick={() => {
        setShow(!show)
        setStart(false)
      }}
    > <i className={hidden ? 'fa fa-caret-right rotates fa-rotate-90' : (start? 'fa fa-caret-right': 'fa fa-caret-right rotates-inverse')}></i> Malagasy</h1>
    {
      hidden && (
        <div style={styles(props).body}>
          {
            props?.documents?.map((document, key) => {
              return <OneDocument {...{ document, key, ...props, show }} index={key}/>
            })
          }
        </div>
      )
    }
  </div>);
}

const styles = () => ({
  principal: {
    margin: Spacings.large,
  },
  title: {
    cursor: 'pointer',
    fontSize: Spacings.xlarge,
  },
  body: {
    display: 'flex',
  }
});

export default TypeDocument;
