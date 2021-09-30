import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";

function AddNiveau(props) {

    const [state, setState] = useState({
        niveau: ''
    });

    const { niveau } = state;

    const handleChange = event => {
        console.log(event.target);
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [event.target.name]: event.target.value });
    };


    const handleSubmit = event => {
        event.preventDefault();
        // console.table({ title, content, user });
        axios
            // .post(`${process.env.REACT_APP_API}/post`, { title, content, user })
            .post(
                `${process.env.REACT_APP_API}/api/niveau`, { niveau }

            )
            .then(response => {
                console.log(response);
                // empty state
                setState({ ...state, niveau: '', });
                // show sucess alert
                props.fecthNiveau()
                Swal.fire({
                    icon: 'success',
                    title: 'Bonne travail',
                    text: 'Vous avez ajouté avec succès une nouvelle niveau!'
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
                        <h4 className="modal-title" id="myModalLabel1">Formulaire pour ajouter le niveau</h4>
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
                                            <label >Type du document</label>
                                            <input
                                                onChange={handleChange}
                                                value={niveau}
                                                name="niveau"
                                                type="text"
                                                required
                                                className="form-control" />
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

export default AddNiveau

