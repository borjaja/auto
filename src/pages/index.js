import React from "react";
import Layout from "../components/layout";

const RootIndex = (props) => {
  return (
    <Layout location={props.location}>
      <div style={{ background: "#fff" }}>Hola</div>
    </Layout>
  );
};

export default RootIndex;
