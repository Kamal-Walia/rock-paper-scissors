import React from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import "../assets/css/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Body/>
      </div>
    );
  }
}
export default App;
