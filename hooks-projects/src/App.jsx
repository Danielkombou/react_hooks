// Intro to UseState
import { createContext, useState } from "react";
import Apps from "./components/useReducer";
import Call from "./components/UseCallback";
import TypingIndicator from "./components/GetState";
import Effect from "./components/UseEffect";
import Ref from "./components/UseRef";
import Navbar from "./components/Navbar";


const ColorContext = createContext();

function App() {


  const [dark, setDark] = useState(false);

  return (
    <ColorContext.Provider>
      <div>
        {/* <Navbar/> */}
        {/* <Ref/> */}
        {/* <Apps/> */}
        {/* <Call/> */}
        {/* <TypingIndicator/> */}
        <Effect/>
        
      </div>
    </ColorContext.Provider>
  );
}

export default App;
