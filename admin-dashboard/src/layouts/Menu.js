import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item mr-auto"><a className="navbar-brand" href="../../../html/ltr/vertical-menu-template/index.html">
                        <div className="brand-logo"></div>
                        <h2 className="brand-text mb-0">Vuexy</h2>
                    </a></li>
                    <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0" href="/" data-toggle="collapse"><i className="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i className="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
                </ul>
            </div>
            <div className="shadow-bottom"></div>
            <div className="main-menu-content">
                <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                    <li className=" nav-item"><a href="/"><i className="feather icon-home"></i><span className="menu-title" data-i18n="Dashboard">Tableau de bord</span><span className="badge badge badge-warning badge-pill float-right mr-2">2</span></a>
                    </li>
                    <li className=" navigation-header"><span>Application</span>
                    </li>
                    <li className=" nav-item"><Link to={`/documents`}><i className="feather icon-book"></i><span className="menu-title" data-i18n="Email">Document</span></Link>
                    </li>
                    <li className=" nav-item"><Link to={`/documents`}><i className="feather icon-users"></i><span className="menu-title" data-i18n="Email">Niveau Etudiant</span></Link>
                    </li>
                    <li className=" nav-item"><Link to={`/documents`}><i className="feather icon-triangle"></i><span className="menu-title" data-i18n="Email">Type document</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
