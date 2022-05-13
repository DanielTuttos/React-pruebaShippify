import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar color="light" light expand="md mb-5">
            {/* <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} /> */}
            {/* <Collapse isOpen={isOpen} navbar> */}
            <Nav className="m-auto" navbar>
                <NavItem>
                    <Link to="/">
                        <NavLink>
                            <h1 className='primary'>Inicio</h1>
                        </NavLink>
                    </Link>
                </NavItem>
            </Nav>
            {/* </Collapse> */}
        </Navbar>

    )
}
