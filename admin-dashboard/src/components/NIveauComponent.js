import React from 'react'
import React, { useState, useEffect } from 'react';
import DocForm from './DocForm'
import axios from 'axios';

function NIveauComponent() {
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
                                    <h2 className="content-header-title float-left mb-0">Listes de Niveau existants</h2>
                                    <div className="breadcrumb-wrapper col-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Aceuil</a>
                                            </li>
                                            <li className="breadcrumb-item"><a href="#">Listes</a>
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
                                    <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="#">Chat</a><a className="dropdown-item" href="#">Email</a><a className="dropdown-item" href="#">Calendar</a></div>
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
                                            <th></th>
                                            <th>Niveau</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {listDoc?.map((list, i) => {
                                            return <tr>
                                                <td key={list._id}></td>
                                                <td className="product-name">{list.titre}</td>
                                                <td className="product-category">{list.description}</td>
                                                <td className="product-price">{list.categorie}</td>
                                                <td className="product-action">
                                                    <span className="action-edit"><i className="feather icon-edit"></i></span>
                                                    <span onClick={() => deleteConfirm(list._id)} className="action-delete"><i className="feather icon-trash"></i></span>
                                                </td>
                                            </tr>
                                        })} */}
                                        <tr>
                                            <td></td>
                                            <td className="product-name">Niveau</td>
                                            <td className="product-category">description</td>
                                            <td className="product-price">list.categorie</td>
                                            <td className="product-action">
                                                <span className="action-edit"><i className="feather icon-edit"></i></span>
                                                <span className="action-delete"><i className="feather icon-trash"></i></span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            {/* ======INPUT========== */}

                            <DocForm />
                        </div>


                    </div>
                </div>
            </div >
            <div class="sidenav-overlay"></div>
            <div class="drag-target"></div>
        </div>

    )
}

export default NIveauComponent
