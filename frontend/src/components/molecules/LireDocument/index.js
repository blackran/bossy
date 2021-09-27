import React from 'react';

function LireDocument(props) {
  const {onMouseEnter,onMouseLeave, className, style, children, hide, setHide, idDocument} = props; 
  
  const clickIcon = () => {
    if (hide && setHide) {
      setHide(false);
    } else {
      props.history.push('/LireDocument='+idDocument)
    }
    console.log('clickIcon')
  }
  return (
    <div {...{className, style, onMouseEnter, onMouseLeave}} onClick={clickIcon}>
      { children }
    </div>
  )
}

export default LireDocument;
