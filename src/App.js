import { Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
// components
import Nav from "./components/Nav";
// styles
import GlobalStyles from "./components/GlobleStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
