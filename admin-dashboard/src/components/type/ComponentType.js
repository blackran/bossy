import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import AddType from './AddType'
import EditType from './EditType'
import './style.css'


function ComponentType(props) {
    const [typeDoc, setTypeDoc] = useState([]);
    const [idEdit, setIdEdit] = useState()


    const fetchType = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/type`)

        // console.log(response.data.data.Type);
        setTypeDoc(response.data.data.Type)



        //   .catch(error => alert('Error fetching posts'));
    };




    useEffect(() => {
        fetchType();
    }, []);


    const deleteType = (_id) => {
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
                    .delete(`${process.env.REACT_APP_API}/api/type/${_id}`)
                    .then(response => {
                        // alert(response.data.message);
                        Swal.fire(
                            'Deleted!',
                            'votre type document a été supprimé.',
                            'success'
                        )
                        fetchType();
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
                                                    <th>Type de document</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {typeDoc?.map((list, i) => {
                                                    return <tr key={i}>

                                                        <td className="product-name">{list.type}</td>
                                                        <td className="product-action">
                                                            <span onClick={() => setIdEdit(list._id)} className="action-edit" data-toggle="modal" data-target="#default1"><i className="feather icon-edit"></i></span>
                                                            <span onClick={() => deleteType(list._id)} className="action-delete"><i className="feather icon-trash"></i></span>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Type</th>
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
            <AddType fetchType={fetchType} />
            {idEdit && <EditType id={idEdit} fetchType={fetchType} />}
        </div>
    )
}

export default ComponentType
