// Core
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
// Components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

// Hooks

// Instruments
const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    }
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    }
                },
            }
        }
    }
});
const port = process.env.PORT ?? 5000;
const client = new ApolloClient({
    uri: `http://localhost:${port}/graphql`,
    cache,
});

loadDevMessages();
loadErrorMessages();

function App() {
  return <>
        <ApolloProvider client = { client }>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path = '/' element = { <Home/> }/>
                        <Route path = '/projects/:id' element = { <Project/> }/>
                        <Route path = '*' element = { <NotFound/> }/>
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    </>;
}

export default App;
