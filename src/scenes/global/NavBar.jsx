import React from 'react'
export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="container">
                    <a
                    href='/'
                        data-target=".nav-collapse"
                        data-toggle="collapse"
                        className="btn btn-navbar"
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>
                    <div className="nav-collapse">
                        <ul className="nav">
                            <li className="active">
                                <a href="/">Home</a>
                            </li>
                            <li className="">
                                <a href="/">List View</a>
                            </li>
                            <li className="">
                                <a href="/">Grid View</a>
                            </li>
                            <li className="">
                                <a href="/">Three Column</a>
                            </li>
                            <li className="">
                                <a href="/">Four Column</a>
                            </li>
                            <li className="">
                                <a href="/">General Content</a>
                            </li>
                        </ul>
                        <form action="#" className="navbar-search pull-left">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-query span2"
                            />
                        </form>
                        <ul className="nav pull-right">
                            <li className="dropdown">
                                <a
                                    data-toggle="dropdown"
                                    className="dropdown-toggle"
                                    a href="/"
                                >
                                    <span className="icon-lock"></span> Login <b className="caret"></b>
                                </a>
                                <div className="dropdown-menu">
                                    <form className="form-horizontal loginFrm">
                                        <div className="control-group">
                                            <input
                                                type="text"
                                                className="span2"
                                                id="inputEmail"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="control-group">
                                            <input
                                                type="password"
                                                className="span2"
                                                id="inputPassword"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="control-group">
                                            <label className="checkbox">
                                                <input type="checkbox" /> Remember me
                                            </label>
                                            <button
                                                type="submit"
                                                className="shopBtn btn-block"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}