import React from 'react';
import {
  Confirmation,
} from '../../components'
import './statics/css/Login.css';
import axios from 'axios';
import './statics/css/Confirmation.scss';

function Confirmations(props){
  const [error, setError] = React.useState([]);
  const [datas, setDatas] = React.useState();

  const onSubmitConfirmation = (data) => {
    console.log(data)

    axios.post('/api/user/verificationUser', { confirmationCode: data.code })
      .then(({ data }) => {
        if (data.status === 'success') { 
          console.log(data);
          sessionStorage.setItem('token', data.token);
          props.history.push('/Lecons');
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.log({ error })
      })

  }

  React.useEffect(() => {
    const search = props.location.search;
    let dataBrut = {}
    search?.substring(1, search.lenght)?.split('&')?.map(e => {
      const [key, value] = e.split('=');
      dataBrut[key] = value 
    })
    setDatas(dataBrut);
    if (dataBrut.code) {
      onSubmitConfirmation({ code:dataBrut.code })
    }
  }, [props.location.search])

  return(
    <div className="Confirmation">
      <Confirmation 
        {...{ error, setError, onSubmitConfirmation, datas }}
      />
    </div>
    )
}

export default Confirmations;
