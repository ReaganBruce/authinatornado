import * as React from 'react';
import { Link } from 'react-router-dom';





const Nav: React.FC<NavProps> = (props) => {

    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand active"><Link to="/">
                            RAWBLOG
                            </Link></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active "><Link to="/">
                            Home
                            </Link></li>
                        <li className="active "><Link to="/create">
                            Create
                            </Link></li>
                    </ul>
                </div>
            </nav>

        </>

    )



};

interface NavProps { }


export default Nav;
