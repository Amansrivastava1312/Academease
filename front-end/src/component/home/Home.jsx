import React from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../context/Auth";
import Faq from "./../faq/Faq";
import Popular from "../PlayList/Popular"
const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Home Page</h1>
      <Popular/>
      <Faq />
    </Layout>
  );
};

export default Home;
