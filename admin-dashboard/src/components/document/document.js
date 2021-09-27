import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FormModal from './formModal'
import FormEdit from './formEdit'
import './style.css'


const Document = (props) => {
    const [listDoc, setListDoc] = useState([]);
    const [idEdit, setIdEdit] = useState()


    const fetchDocs = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/document`)

        setListDoc(response.data.data.Document)



        //   .catch(error => alert('Error fetching posts'));
    };

    useEffect(() => {
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/datatables.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/datatables.buttons.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/buttons.html5.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js' })
        insertScriptElement({ url: 'app-assets/js/scripts/datatables/datatable.js' })

    }, [listDoc])


    useEffect(() => {
        fetchDocs();
    }, []);

    const deleteConfirm = (_id) => {
        let answer = window.confirm('Are you sure you want delete this post?')

        if (answer) {
            deleteDocument(_id)
        }
    }

    const deleteDocument = (_id) => {
        // console.log('delete', slug, 'post');
        axios
            // .delete(`${process.env.REACT_APP_API}/post/${slug}`)
            .delete(`${process.env.REACT_APP_API}/api/document/${_id}`)
            .then(response => {
                // alert(response.data.message);
                fetchDocs();
            })
            .catch(error => console.log(error))

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
                                                            <span onClick={() => deleteConfirm(list._id)} className="action-delete"><i className="feather icon-trash"></i></span>
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
            <FormModal />
            {idEdit && <FormEdit id={idEdit} />}
        </div>
    )
}


function insertScriptElement({ url, attributes = {}, properties = {} }) {
    const newScript = document.createElement('script');
    newScript.onerror = (err => console.error('An error occured while loading the PayPal JS SDK', err));
    // if (callback) {
    //     newScript.onload = callback;
    // }

    Object.keys(attributes).forEach(key => {
        newScript.setAttribute(key, attributes[key]);
    });

    document.head.appendChild(newScript);
    newScript.src = url;
}

export default Document
