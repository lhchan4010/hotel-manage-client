import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isDarkModeVar = makeVar(false);
export const client = new ApolloClient({
    uri: "https://hotel-manage.herokuapp.com/",
    cache: new InMemoryCache(),
});
