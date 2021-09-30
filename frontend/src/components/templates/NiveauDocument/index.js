import React from "react"
import { Spacings, TypeDocument } from '../../../components';
import './statics/css/TypeDocument.scss';

function NiveauDocument(props) {
  return (<div
    className="TypeDocument"
    style={styles(props).principal}
  >
    <div style={styles(props).body}>
      {
        Object.entries(props?.documents)?.map(([title, data], key) => {
          return <TypeDocument {...{title, key, ...props }} documents={ data }index={key} />
        })
      }
    </div>
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
    // display: 'flex',
  }
});

export default NiveauDocument;
