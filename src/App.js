import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

    }
  }


  render() {
    return (
      // <div className="App">

      <BrowserRouter>

        <NavbarComponent />
        <JumbrotonComponent />

        {/* <Routes>
          
          </Routes> */}
        <Routes>
          <Route exact path={"/detailuser/:id"}  component={DetailUserComponent} />
          <Route exact path='/' element={< HomeContainer />}></Route>
          <Route exact path='/create' element={< CreateUserContainer />}></Route>
          <Route exact path='/detail/:id' element={< DetailUserComponent />}></Route>
          <Route exact path='/edit/:id' element={< EditUserContainer />}></Route>
        </Routes>
      </BrowserRouter>
      // </div>

    );
  }
}