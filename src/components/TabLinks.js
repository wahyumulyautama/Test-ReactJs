import Nav from 'react-bootstrap/Nav';

function TabLinks() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Coin list</Nav.Link>
      </Nav.Item>
     
    </Nav>
  );
}

export default TabLinks;