import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FormEdit(props) {

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




    const getDocument = (_id) => {
        axios
            .get(`${process.env.REACT_APP_API}/api/document/${_id}`)
            .then(({ data }) => {
                const newstate = {
                    titre: data.data.titre,
                    description: data.data.description,
                    type: data.data.type._id,
                    niveau: data.data.niveau._id,
                    categorie: data.data.categorie,
                    contenu: ''
                }
                setState(newstate);
                // console.log(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getDocument(props.id);
    }, [props.id])

    const { titre, description, type, niveau, categorie, contenu } = state;

    const handleChange = event => {
        console.log(state);
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [event.target.name]: event.target.value });
    };



    const fecthNiveau = () => {
        axios.get(`${process.env.REACT_APP_API}/api/niveau`)
            .then(response => {
                //   console.log(response.data.data.Niveau);
                setNiveauList(response.data.data.Niveau);
            })
        //  .catch(error => alert('Error fetching niveau'))
        //  .catch(error => alert('Error fetching niveau'))
    }

    const fecthType = () => {
        axios.get(`${process.env.REACT_APP_API}/api/type`)
            .then(response => {

                setTypeList(response.data.data.Type);
            })
        //  .catch(error => alert('Error fetching type'))
    }

    useEffect(() => {

        fecthNiveau()
        fecthType()

    }, [])


    const onUpload = (e) => {

        const file = e.target.files[0]
        setState(Object.assign({}, state, { contenu: file }));
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
            .patch(
                `${process.env.REACT_APP_API}/api/document/${props.id}`, formData, config)
            .then(response => {
                console.log(response);
                // empty state
                setState({ ...state, titre: '', description: '', type: '', niveau: '', categorie: '', contenu: '' });
                // show sucess alert
                alert(`Document a été modifiée`);
            })
            .catch(error => {
                console.log(error);
                alert(error);
            });
    };


    return (
        <div className="modal fade text-left" id="default1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel1">Basic Modal</h4>
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
                                                                value="Lecon"
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
                                                                value="Exercice"
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
                                                placeholder="Description"></textarea>
                                        </div>

                                        <div className="col-sm-12 data-field-col">
                                            <label > Type du document </label>
                                            <select
                                                onChange={handleChange}
                                                value={type}
                                                name="type"
                                                className="form-control" >
                                                {
                                                    typeList?.map((listType, i) => {

                                                        return <option key={i} value={listType._id}>{listType.type}</option>

                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-sm-12 data-field-col">
                                            <label >Niveau </label>
                                            <select

                                                onChange={handleChange}
                                                value={niveau}
                                                name="niveau"
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
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary" data-dismiss="modal">Modifier</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEdit
