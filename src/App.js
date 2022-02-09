import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import JumbrotonComponent from "./components/JumbrotonComponent";
import NavbarComponent from "./components/NavbarComponent";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserComponent from "./containers/DetailContainer";
import EditUserContainer from "./containers/EditUserContainer";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          nama: 'azim',
          alamat: 'bandung',

        },
        {
          id: 2,
          nama: 'aa',
          alamat: 'sumedang',

        }
      ]
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <NavbarComponent />
          <JumbrotonComponent />
          <Routes>
            <Route exact path='/' element={< HomeContainer users={this.state.users} />}></Route>
            <Route exact path='/create' element={< CreateUserContainer />}></Route>
            <Route exact path='/detail/:id' element={< DetailUserComponent />}></Route>
            <Route exact path='/edit/:id' element={< EditUserContainer />}></Route>

          </Routes>
        </div>
      </Router>
    );
  }
}