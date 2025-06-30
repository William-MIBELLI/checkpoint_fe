import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { PageLayout } from "./components/Layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import AddCountry from "./pages/AddCountry";

const client = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache(),
  credentials: "same-origin",
});

function App() {
  return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route Component={PageLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="*" Component={() => <Navigate to="/" />} />
              <Route path="countries" Component={Countries} />
              <Route path="country/:code" Component={Country} />
              <Route path="addcountry" Component={AddCountry} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
