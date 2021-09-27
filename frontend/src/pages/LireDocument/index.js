import React from 'react';
import Navigation from '../Navigation';
import './statics/css/LireDocument.scss';
import axios from 'axios';
import pdfDefault from './github.pdf';

// src="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf#toolbar=0" 
function LireDocument(props) {
  const [pdf, setPdf] = React.useState();

  React.useEffect(() => {
    // const stock = ref.current.offsetWidth - ref.current.clientWidth;
    console.log(ref.current)
    const idDoc = props?.history?.location?.pathname?.split('=')[1];

    axios.get(`/api/document/${idDoc}`)
      .then(({ data }) => {
        if (data.status === 'success') {
          console.log('http://localhost:5000' + data?.data?.contenu?.split('public')[1] + '#toolbar=0')
          setPdf('http://localhost:5000' + data.data.contenu.split('public')[1] + '#toolbar=0')
        }
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [props.history.location.pathname])
  const [widthScroll, setWidthScroll] = React.useState(0)
  const ref = React.useRef()
  return (
    <div className="LireDocument">
      <Navigation {...props} />
      <div id="overlay">
        <div
          style={{
            width: 'calc(100% - 15px)',
            height:window.innerHeight - 77,
            zIndex: 100,
            background: 'transparent',
            position: 'absolute',
            borderWidth: 1
          }}
        ></div>
        <iframe
          ref={ref}
          frameBorder={0}
          src={pdf || pdfDefault}
          title="Document"
          width="100%"
          height={window.innerHeight - 77}>
        </iframe>
      </div>
    </div >
  )
}

export default LireDocument
