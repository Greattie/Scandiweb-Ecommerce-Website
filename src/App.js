import "./App.css";
import { CURRENCIES_QUERY, CATEGORIES_QUERY } from "./queries/queries";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import { loadCategoriesQuery } from "./queries/queries";
import AllProducts from "./components/AllProducts";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage client={client} />} />
          <Route
            exact
            path="/AllProducts"
            element={<AllProducts client={client} />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
