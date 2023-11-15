import React from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../context/Auth";
const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Home Page</h1>
      <pre>{ JSON.stringify(auth,null,4)}</pre>
    </Layout>
  );
};

export default Home;