import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VariablesContextProvider from "./contexts/variables";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

import Navbar from "./components/Navbar";
import FooterMobile from "./components/FooterMobile";
import Home from "./Home";
import PokeDetail from "./PokeDetail";
import NotFound from "./NotFound";
import MyPokemon from "./MyPokemon";

function App() {
  return (
    <Router>
      <div className="App">
        <ApolloProvider client={client}>
          <VariablesContextProvider>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/detail/:pokename/:idPokemon">
                <PokeDetail />
              </Route>
              <Route path="/inventory">
                <MyPokemon />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <FooterMobile />
          </VariablesContextProvider>
        </ApolloProvider>
      </div>
    </Router>
  );
}

export default App;
