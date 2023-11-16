import React from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../context/Auth";
import Faq from "./../faq/Faq";
const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Home Page</h1>
      <Faq />
      {/* <pre>{ JSON.stringify(auth,null,4)}</pre> */}
    </Layout>
  );
};

export default Home;
