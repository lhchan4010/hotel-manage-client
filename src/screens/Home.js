import { gql, useQuery } from "@apollo/client";

const servertestQuery = gql`
    query hello {
        hello
    }
`;

function Home() {
    const { loading, error, data } = useQuery(servertestQuery);
    const serverTest = () => {
        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>Error: {error.message}</p>;
        }
        console.log(data);
        return;
    };
    return (
        <div>
            <h1>Home</h1>
            <button onClick={serverTest}>click</button>
        </div>
    );
}

export default Home;
