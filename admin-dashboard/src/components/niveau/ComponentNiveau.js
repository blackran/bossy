import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import AddNiveau from './AddNiveau'
import EditNiveau from './EditNiveau'

function ComponentNiveau() {
    const [niveauDoc, setNiveauDoc] = useState([]);
    const [idEdit, setIdEdit] = useState()


    const fecthNiveau = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/niveau`)

        // console.log(response.data.data.Niveau);
        setNiveauDoc(response.data.data.Niveau)

    };




    useEffect(() => {
        fecthNiveau();
    }, []);


    const deleteNiveau = (_id) => {
        // console.log('delete', slug, 'post');
        Swal.fire({
            title: 'Etes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimez-le!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    // .delete(`${process.env.REACT_APP_API}/post/${slug}`)
                    .delete(`${process.env.REACT_APP_API}/api/niveau/${_id}`)
                    .then(response => {
                        // alert(response.data.message);
                        Swal.fire(
                            'Deleted!',
                            'votre niveau a été supprimé.',
                            'success'
                        )
                        fecthNiveau();
                    })

            }
        })

    }

    return (
        <div className="app-container">
            <section id="add-row">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Listes de type de document</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <p className="card-text">
                                    </p>
                                    <button id="addRow" className="btn btn-primary mb-2" data-toggle="modal" data-target="#default"><i className="feather icon-plus"></i>&nbsp; Ajouter nouveau</button>
                                    <div className="table-responsive">
                                        <table className="table add-rows">
                                            <thead>
                                                <tr>
                                                    <th>Niveau</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {niveauDoc?.map((list, i) => {
                                                    return <tr key={i}>

                                                        <td className="product-name">{list.niveau}</td>
                                                        <td className="product-action">
                                                            <span onClick={() => setIdEdit(list._id)} className="action-edit" data-toggle="modal" data-target="#default1"><i className="feather icon-edit"></i></span>
                                                            <span onClick={() => deleteNiveau(list._id)} className="action-delete"><i className="feather icon-trash"></i></span>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Niveau</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AddNiveau fecthNiveau={fecthNiveau} />
            {idEdit && <EditNiveau id={idEdit} fecthNiveau={fecthNiveau} />}
        </div>

    )
}

export default ComponentNiveau
