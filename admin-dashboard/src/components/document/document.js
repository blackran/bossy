import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import FormModal from './formModal'
import FormEdit from './formEdit'
import './style.css'


const Document = () => {
    const [listDoc, setListDoc] = useState([]);
    const [idEdit, setIdEdit] = useState()


    const fetchDocs = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/document`)

        setListDoc(response.data.data.Document)



        //   .catch(error => alert('Error fetching posts'));
    };




    useEffect(() => {
        fetchDocs();
    }, []);


    const deleteDocument = (_id) => {
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
                    .delete(`${process.env.REACT_APP_API}/api/document/${_id}`)
                    .then(response => {
                        // alert(response.data.message);
                        Swal.fire(
                            'Deleted!',
                            'votre document a été supprimé.',
                            'success'
                        )
                        fetchDocs();
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
                                <h4 className="card-title">Listes de document enregister</h4>
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
                                                    <th>Titre</th>
                                                    <th>Description</th>
                                                    <th>Categorie</th>
                                                    <th>Niveau</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listDoc?.map((list, i) => {
                                                    return <tr key={i}>

                                                        <td className="product-name">{list.titre}</td>
                                                        <td className="product-category">{list.description}</td>
                                                        <td className="product-price">{list.categorie}</td>
                                                        <td className="product-price">{list.niveau.niveau}</td>
                                                        <td className="product-action">
                                                            <span onClick={() => setIdEdit(list._id)} className="action-edit" data-toggle="modal" data-target="#default1"><i className="feather icon-edit"></i></span>
                                                            <span onClick={() => deleteDocument(list._id)} className="action-delete"><i className="feather icon-trash"></i></span>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Description</th>
                                                    <th>Categorie</th>
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
            <FormModal fetchDocs={fetchDocs} />
            {idEdit && <FormEdit id={idEdit} fetchDocs={fetchDocs} />}
        </div>
    )
}


export default Document
