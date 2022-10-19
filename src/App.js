import logo from './logo.svg';
import './App.css';
import TabLinks from './components/TabLinks';
import TableCoin from './components/TableCoin';
import Dropdown from './components/Dropdown'
function App() {
  return (
    <div >
    <section>
      <TabLinks/>
    </section>
    <section>
      <Dropdown/>
    </section>
    <section>
      <TableCoin/>
    </section>
    </div>
    
  );
}

export default App;
