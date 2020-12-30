import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavComponent = () => {
  return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand><Link to="/admin/" className="text-white">Admin</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Item className="my-2 mr-4"><Link to="/admin/projets" className="text-white">Projets</Link></Nav.Item>
      <Nav.Item className="my-2 mr-4"><Link to="/admin/competences" className="text-white">Compétences</Link></Nav.Item>
      <Nav.Item className="my-2 mr-4"><Link to="/admin/parcours" className="text-white">Parcours</Link></Nav.Item>
      <Nav.Item className="my-2 mr-4"><Link to="/admin/experiences" className="text-white">Expériences</Link></Nav.Item>
      <Nav.Item className="my-2 mr-4"><Link to="/admin/messages" className="text-white">Messages</Link></Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>
}

export default NavComponent