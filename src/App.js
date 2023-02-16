import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { client } from "./apollo";
import routes from "./routes";
import Home from "./screens/Home";
function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.home} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
