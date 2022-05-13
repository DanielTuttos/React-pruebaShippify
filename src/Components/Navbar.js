import React from 'react'
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';

export const Menu = () => {
    return (
        <Navbar color="light" light expand="md mb-5">
            <Nav className="m-auto" navbar>
                <NavItem>
                    <Link to="/">
                        <NavLink>
                            <h1 className='primary'>Inicio</h1>
                        </NavLink>
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>

    )
}
