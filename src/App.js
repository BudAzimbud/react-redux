import './App.css';
import NavbarComponent from './components/NavbarComponent';
import JumbrotonComponent from './components/JumbrotonComponent'
import TableComponents from './components/TableComponents';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'title table',
      users: [
        {
          id: 1,
          nama: 'azim',
          alamat: 'bandung',
          umur: 19,
          nohp: "0892384728347"
        },
        {
          id: 2,
          nama: 'zaim',
          alamat: 'jakarta',
          umur: 19,
          nohp: "0892384728347"
        },
        {
          id: 3,
          nama: 'miza',
          alamat: 'surabaya',
          umur: 19,
          nohp: "0892384728347"
        }
      ]
    }
  }


  render() {

    return (
      <div className="App">
        <NavbarComponent />
        <JumbrotonComponent />
        <TableComponents users={this.state.users} />
      </div>
    );

  }

}

export default App;
