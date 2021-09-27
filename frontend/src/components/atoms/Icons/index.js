import React from 'react';

function Icons(props) {
  const { name, styles: st, onClick } = props;
  const [src, setSrc] = React.useState();

  import('./datas/' + name + '.svg').then(e => setSrc(e.default));

  return (
    <div
      style={{
        ...styles(props).principale,
        ...st,
      }}
      onClick={onClick}
      className="Icons">
      <img src={src} style={styles(props).image} alt="icon" />
    </div>
  );
}

const styles = ({ size }) => ({
  principale: {
    width: size + 4,
    height: size + 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: size,
    height: size,
  },
});

export default Icons;
