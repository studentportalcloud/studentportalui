import React from "react";
import AuthenticationComponent from "./components/AuthComponents/AuthenticationComponent";
import BodyComponent from "./components/BodyComponent";
import HeaderComponent from "./components/HeaderComponent";
class App extends React.Component {
  render() {
    return (
      <div>
          <HeaderComponent />
          <AuthenticationComponent />
      </div>
    )
  }
}
export default App;
