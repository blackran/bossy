import React, {useState} from "react"
import {
  Colors,
  Spacings,
  Input,
  Select,
  Button,
} from '../../'

function FormInscription(props){
  const [state, setState] = useState({
    client_sexe: '',
    client_recherche: '',
    client_pseudo: '',
    client_email: '',
    client_mdp: '',
    mdpC: '',
  })

  const {error, onSubmitSign, setError, loadingSing} = props

  const datas = [
    {value: 'None', title: '--'},
    {value: 'Homme', title: 'Homme'},
    {value: 'Femme', title: 'Femme'},
    {value: 'Autre', title: 'Autre :)'},
  ] 

  const onChangeInput = (e) => {
    setState(Object.assign({}, state, {[e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onSubmitSign(state)
  }

  return(
    <div style={{...styles(props).principale}} className="FormInscription">
      <div style={{...styles(props).blockTitle}}>
        <h1 style={{...styles(props).title}}>Inscription gratuite</h1>
      </div>
      <form onSubmit={onSubmit} >
        <div style={{...styles(props).oneLigne}}>
          <Select 
            label="Ja suis un(e)" icon="milt-user" datas={datas} mode="dark"
            value={state.client_sexe}
            onChange={onChangeInput}
            name="client_sexe"
            {...{error, setError}}
          />
          <Select 
            label="Ja suis à la recherche d'un(e)" icon="search" datas={datas} mode="dark"
            value={state.client_recherche}
            onChange={onChangeInput}
            name="client_recherche"
            {...{error, setError}}
          />
        </div>
        <div style={{...styles(props).oneLigne}}>
          <Input 
            label="Nom d'utilisateur" icon="user" mode="dark" placeholder="Votre pseudo"
            value={state.client_pseudo}
            onChange={onChangeInput}
            name="client_pseudo"
            {...{error, setError}}
          />
          <Input 
            label="Adresse email" icon="mail" mode="dark" placeholder="Ex:exemple@gmail.com"
            value={state.client_email}
            onChange={onChangeInput}
            name="client_email"
            {...{error, setError}}
          />
        </div>
        <div style={{...styles(props).oneLigne}}>
          <Input 
            label="Mot de passe" icon="key" type='password' mode="dark" placeholder="Votre mot de passe"
            value={state.client_mdp}
            onChange={onChangeInput}
            name="client_mdp"
            {...{error, setError}}
          />
          <Input 
            label="Confirmer votre mot de passe" icon="key" type='password' mode="dark" placeholder="confirmer votre mot de passe"
            value={state.mdpC}
            onChange={onChangeInput}
            name="mdpC"
            {...{error, setError}}
          />
        </div>
        <div style={{...styles(props).oneLigne}} >
          <Button 
            type="contained" size="small" onClick={onSubmit}
            disabled={loadingSing}
          >S'inscrire gratuitement</Button>
        </div>
      </form>
    </div>
  )
}

const styles = () => ({
  principale: {
    backgroundColor: Colors.White + '22',
    fontSize: Spacings.base, 
    width: Spacings.tiny * 123,
    padding: Spacings.xlarge,
  },
  blockTitle: {
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid ' + Colors.PrimaryLight,
    marginBottom: Spacings.xlarge
  },
  title: {
    color: Colors.White,
  },
  oneLigne: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    margin: Spacings.large + 'px 0px',
  }
})

export default FormInscription
