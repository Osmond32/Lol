import { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            navigate('/search', { state: { search: search } })

        } catch (error) {
            console.error(error)
        }
    }

    return<>

    <Navbar expand="lg" style={{backgroundColor:"#000000"}} variant='dark'>
        <Container fluid>
            <Navbar.Brand className='cursor' onClick={() => { navigate('/') }}><img src="https://cdn.mos.cms.futurecdn.net/qPibdLSyYHnTX5NymkEb8M.jpeg" width={120} height={65}/>  </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto" style={{gap: "60px"}}>
                    <Nav.Link onClick={() => { navigate('/') }} className="nav-link-custom">Home</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/champions') }} className="nav-link-custom">Champions</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/regions') }} className="nav-link-custom">Regioni</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/relations') }} className="nav-link-custom">Relazioni</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/quiz') }} className="nav-link-custom">Quiz</Nav.Link>
                </Nav>
                <Form className='d-flex' onSubmit={handleSubmit}>
                    <Form.Control
                        type='search'
                        placeholder='Search'
                        className='me-2'
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <Button type='submit'>Cerca</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>

</>


}
export default NavBar