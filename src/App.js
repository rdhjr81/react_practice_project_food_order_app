import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <React.Fragment>
      <Cart></Cart>
      <Header>Let's get started!</Header>
      <main>
        <Meals />
        
        
      </main>
    </React.Fragment>
  );
}

export default App;
