
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DocForm from './DocForm'
import axios from 'axios';
import './style/style.css'






const DocsComponents = (props) => {
    const [listDoc, setListDoc] = useState([]);

    const stateReducer = useSelector((state) => {
        console.log(state);
        return state.documentReducer

    })

    const dispatch = useDispatch()

    const fetchDocs = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/document`)

        setListDoc(response.data.data.Document);



        //   .catch(error => alert('Error fetching posts'));
    };

    useEffect(() => {
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/datatables.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/datatables.buttons.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/dataTables.select.min.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js' })
        insertScriptElement({ url: 'app-assets/js/scripts/ui/data-list-view.js' })
        insertScriptElement({ url: 'app-assets/vendors/js/extensions/dropzone.min.js' })
    }, [listDoc])

    useEffect(() => {
        fetchDocs();
    }, []);


    const onClickEdit = (_id) => {
        dispatch({ type: 'IS_EDIT', isEdit: true, idDocument: _id })
    }



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

        <div>
            <div className=" app-container" >
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-9 col-12 mb-2">
                            <div className="row breadcrumbs-top">
                                <div className="col-12">
                                    <h2 className="content-header-title float-left mb-0">Liste Document</h2>
                                    <div className="breadcrumb-wrapper col-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Aceuil</a>
                                            </li>
                                            <li className="breadcrumb-item"><a href="/">Listes</a>
                                            </li>
                                            <li className="breadcrumb-item active">
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                            <div className="form-group breadcrum-right">
                                <div className="dropdown">
                                    <button className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="feather icon-settings"></i></button>
                                    <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="/">Chat</a><a className="dropdown-item" href="/">Email</a><a className="dropdown-item" href="/">Calendar</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <div id="data-list-view" className="data-list-view-header">
                            <div className="action-btns d-none">
                                <div className="btn-dropdown mr-1 mb-1">
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table data-list-view">
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
                                                    <span onClick={() => onClickEdit(list._id)} className="action-edit"><i className="feather icon-edit"></i></span>
                                                    <span onClick={() => deleteConfirm(list._id)} className="action-delete"><i className="feather icon-trash"></i></span>
                                                </td>
                                            </tr>
                                        })}

                                    </tbody>
                                </table>
                            </div>

                            {/* ======INPUT========== */}

                            <DocForm  {...props} />
                        </div>


                    </div>
                </div>
            </div >
            <div className="sidenav-overlay"></div>
            <div className="drag-target"></div>
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

export default DocsComponents
