import Table from 'react-bootstrap/Table';

function TableCoin() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>rank</th>
          <th>Type</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>btc</td>
          <td>Bitcoin</td>
          <td>BTC</td>
          <td>1</td>
          <td>Coin</td>
          <td>True</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>eth</td>
          <td>Ethereum</td>
          <td>ETH</td>
          <td>2</td>
          <td>Coin</td>
          <td>True</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>usdt</td>
          <td>Theter</td>
          <td>USDT</td>
          <td>3</td>
          <td>Token</td>
          <td>True</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>bnb</td>
          <td>Binance</td>
          <td>BNB</td>
          <td>4</td>
          <td>Coin</td>
          <td>True</td>
          <td>Delete</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableCoin;