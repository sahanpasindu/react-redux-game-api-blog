import { Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobleStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
