import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";

function FormModal(props) {

    const [typeList, setTypeList] = useState([]);
    const [niveauList, setNiveauList] = useState([]);
    const [state, setState] = useState({
        titre: '',
        description: '',
        type: '',
        niveau: '',
        categorie: 'lecon',
        contenu: '',
    });

    const fecthNiveau = () => {
        axios.get(`${process.env.REACT_APP_API}/api/niveau`)
            .then(response => {
                if (response?.data?.data) {
                    const niveaux = response.data.data.Niveau;
                    console.log(niveaux[0]._id);
                    setState({ ...state, ['niveau']: niveaux[0]._id });
                    setNiveauList(niveaux);
                    console.log(state)
                }
            })
            .catch(error => setState({ ...state }))
        //  .catch(error => alert('Error fetching niveau'))
    }

    const fecthType = () => {
        axios.get(`${process.env.REACT_APP_API}/api/type`)
            .then(response => {
                if (response?.data?.data) {

                    const types = response.data.data.Type;
                    setState({ ...state, ['type']: types[0]._id });
                    console.log(types[0]._id)
                    setTypeList(types);
                }
            })
        //  .catch(error => alert('Error fetching type'))
    }

    useEffect(() => {
        fecthNiveau()
    }, [])

    useEffect(() => {
        fecthType()
    }, [state.niveau])


    const { titre, description, type, niveau, categorie, contenu } = state;

    const handleChange = event => {
        console.log(event.target);
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const onUpload = (e) => {

        const file = e.target.files[0]
        setState(Object.assign({}, state, { contenu: file }));
        // console.log(e.target);
        // let reader = new FileReader()
        // reader.addEventListener("load", (e) => {
        //     setState(Object.assign({}, state, { contenu: e.target.result }));
        // })
        // reader.readAsDataURL(file)
    }

    const handleSubmit = event => {
        event.preventDefault();

        let formData = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        console.log(state);
        formData.append("titre", titre)
        formData.append("description", description)
        formData.append("type", type)
        formData.append("niveau", niveau)
        formData.append("categorie", categorie)
        formData.append("contenu", contenu)


        axios
            // .post(`${process.env.REACT_APP_API}/post`, { title, content, user })
            .post(
                `${process.env.REACT_APP_API}/api/document`, formData, config)
            .then(response => {
                console.log(response);
                // empty state
                setState({ ...state, titre: '', description: '', categorie: 'lecon', contenu: '' });
                fecthNiveau()
                fecthType()
                // show sucess alert
                props.fetchDocs()
                Swal.fire({
                    icon: 'success',
                    title: 'Bonne travail',
                    text: 'Vous avez ajouté avec succès une nouvelle document!'
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'oups...',
                    text: "Quelque chose s'est mal passé! réessayer",
                })
            });
    };


    return (
        <div className="modal fade text-left" id="default" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel1">Formulaire pour ajouter le document</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="data-items pb-3">
                            <div className="data-fields px-2 mt-3">
                                <form >
                                    <div className="row">
                                        <div className="col-sm-12 data-field-col">
                                            <label >Titre du document</label>
                                            <input
                                                onChange={handleChange}
                                                value={titre}
                                                name="titre"
                                                type="text"
                                                required
                                                className="form-control" />
                                        </div>

                                        <div className="col-sm-12 data-field-col">
                                            <label >Categorie de document</label>
                                            <ul className="list-unstyled mb-0">
                                                <li className="d-inline-block mr-2">
                                                    <fieldset>
                                                        <div className="vs-radio-con">
                                                            <input
                                                                onChange={handleChange}
                                                                value="lecon"
                                                                type="radio"
                                                                name="categorie"
                                                                checked={categorie === 'lecon'}
                                                            />
                                                            <span className="vs-radio">
                                                                <span className="vs-radio--border"></span>
                                                                <span className="vs-radio--circle"></span>
                                                            </span>
                                                            <span className="">Lecon</span>
                                                        </div>
                                                    </fieldset>
                                                </li>

                                                <li className="d-inline-block mr-2">
                                                    <fieldset>
                                                        <div className="vs-radio-con">
                                                            <span className="">Ou</span>
                                                        </div>
                                                    </fieldset>
                                                </li>

                                                <li className="d-inline-block mr-2">
                                                    <fieldset>
                                                        <div className="vs-radio-con">
                                                            <input
                                                                onChange={handleChange}
                                                                value="exercice"
                                                                type="radio"
                                                                name="categorie"
                                                                checked={categorie === 'exercice'}
                                                            />
                                                            <span className="vs-radio">
                                                                <span className="vs-radio--border"></span>
                                                                <span className="vs-radio--circle"></span>
                                                            </span>
                                                            <span className="">Exercice</span>
                                                        </div>
                                                    </fieldset>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className="col-sm-12 data-field-col">
                                            <label>Description du document</label>
                                            <textarea
                                                onChange={handleChange}
                                                value={description}
                                                name="description"
                                                className="form-control"
                                                rows="3"
                                                required
                                                placeholder="Description"></textarea>
                                        </div>

                                        <div className="col-sm-12 data-field-col">
                                            <label > Type du document </label>
                                            <select
                                                onChange={handleChange}
                                                value={type}
                                                name="type"
                                                required
                                                className="form-control" >
                                                {
                                                    typeList?.map((listType, i) => {

                                                        return <option key={i} value={listType._id}>{listType.type}</option>

                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-sm-12 data-field-col">
                                            {console.log({ niveau })}
                                            <label >Niveau </label>
                                            <select
                                                onChange={handleChange}
                                                value={niveau}
                                                name="niveau"
                                                required
                                                className="form-control" >
                                                {
                                                    niveauList?.map((listNiveau, i) => {

                                                        return <option key={i} value={listNiveau._id}>{listNiveau.niveau}</option>

                                                    })
                                                }
                                            </select>
                                        </div>


                                        <div className="col-sm-12 data-field-col input-file">
                                            <label >Contenu du document</label>
                                            <input

                                                onChange={onUpload}
                                                name="contenu"
                                                type="file"
                                                required
                                                accept="application/pdf"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary" data-dismiss="modal">Sauvegarder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormModal
