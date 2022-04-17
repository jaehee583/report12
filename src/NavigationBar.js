import {Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavigationBar(){
return (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand><Link to="/" className="logo">Blog</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/" className="nav">프롤로그</Link>
        <Link to="/detail" className="nav">블로그</Link>
      </Nav>      
      <p className="navwrite">
        <Button variant="primary"><Link to="/WritePage">글작성</Link></Button>
      </p>    
    </Navbar.Collapse>      
  </Navbar>
);  
}

export default NavigationBar;