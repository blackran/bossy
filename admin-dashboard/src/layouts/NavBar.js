import React from 'react'


export default function NavBar() {
    return (

        <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
            <div className="navbar-wrapper">
                <div className="navbar-container content">
                    <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                            <ul className="nav navbar-nav">
                                <li className="nav-item mobile-menu d-xl-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="/"><i className="ficon feather icon-menu"></i></a></li>
                            </ul>
                            <ul className="nav navbar-nav bookmark-icons">
                                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="/dashboard" data-toggle="tooltip" data-placement="top" title="Email"><i className="ficon feather icon-mail"></i></a></li>
                                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="/dashboard" data-toggle="tooltip" data-placement="top" title="Calendar"><i className="ficon feather icon-calendar"></i></a></li>
                            </ul>
                        </div>

                        <ul className="nav navbar-nav float-right">
                            <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="/dashboard" data-toggle="dropdown">
                                <div className="user-nav d-sm-flex d-none"><span className="user-name text-bold-600">Admin admin</span><span className="user-status"></span></div><span><img className="round" src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40" /></span>
                            </a>
                                <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="page-user-profile.html"><i className="feather icon-user"></i> Edit Profile</a><a className="dropdown-item" href="app-email.html"><i className="feather icon-mail"></i> My Inbox</a><a className="dropdown-item" href="app-todo.html"><i className="feather icon-check-square"></i> Task</a><a className="dropdown-item" href="app-chat.html"><i className="feather icon-message-square"></i> Chats</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="/"><i className="feather icon-power"></i> Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}
