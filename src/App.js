import { useState, React } from "react";
import Resturant from "./components/resturant";
//import { MyContext } from "./MyContext";
//import MyComponent from "./MyComponent";


function App() {
  const [text, setText] = useState("");

  return (
    <>
        <Resturant />
    </>
    // <div>
    //   <MyContext.Provider value={{ text, setText }}>
    //     <MyComponent />
    //   </MyContext.Provider>
    // </div>
  );
}

export default App;