import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


const DocForm = (props) => {

    const stateReducer = useSelector((state) => {

        return state.documentReducer

    })


    useEffect(() => {
        console.log(stateReducer.documentReducer);
    }, [])



    const [typeList, setTypeList] = useState([]);
    const [niveauList, setNiveauList] = useState([]);
    const [state, setState] = useState({
        titre: '',
        description: '',
        type: '',
        niveau: '',
        categorie: 'Lecon',
        contenu: '',
    });

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
        console.log(props)
    }, [props])

    useEffect(() => {

        fecthNiveau()
        fecthType()

    }, [])


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
                setState({ ...state, titre: '', description: '', type: '', niveau: '', categorie: '', contenu: '' });
                // show sucess alert
                // alert(`Document ${response.data.Document.titre} a été crée`);
            })
            .catch(error => {
                console.log(error);
                // alert(error.response.data.error);
            });
    };




    return (
        <div className="add-new-data-sidebar" >
            <div className="overlay-bg"></div>
            <div className="add-new-data">
                <div className="div mt-2 px-2 d-flex new-data-title justify-content-between">
                    <div>
                        <h4 className="text-uppercase">Formulaire Document</h4>
                    </div>
                    <div className="hide-data-sidebar">
                        <i className="feather icon-x"></i>
                    </div>
                </div>
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
                                                        checked={categorie === 'Lecon'}
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
                                                        checked={categorie === 'Exercice'}
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
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="add-data-footer d-flex justify-content-around px-3 mt-2">
                    <div className="add-data-btn">
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add Data</button>
                    </div>
                    <div className="cancel-data-btn">
                        <button className="btn btn-outline-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocForm
