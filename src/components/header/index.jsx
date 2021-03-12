import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const  Header = () => {
  return (
   
      <Navbar bg="white"  className="border border-dark p-lg-5 fixed-top">
        <Navbar.Brand href="#home">LINE TODAY</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link 
            href="https://access.line.me/oauth2/v2.1/login?loginState=Y83MTxWeWBbVGGBzf0rEii&loginChannelId=1518712866&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Bmessage.write%2Btimeline.post%26response_type%3Dcode%26state%3DXLFqKozSCF8%26redirect_uri%3Dhttps%253A%252F%252Fapi.today.line.me%252Fwebapi%252Fauthcb%26client_id%3D1518712866#/">
              LOGIN
            </Nav.Link>
          </Nav>
          
      </Navbar>
    
  );
}

export default Header
