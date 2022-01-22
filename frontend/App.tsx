import React, {ReactElement} from "react"; 
import Main from "./pages/Main/Main";


const App = (): ReactElement =>{
  return ( 
    <div id = "app">
      <Main/>
    </div>
  );
};

App.displayName = "MainApp";
export default App;