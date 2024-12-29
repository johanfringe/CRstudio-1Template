import React from "react";
import { Helmet } from "react-helmet";

const Index = () => (
  <>
    <Helmet>
      <title>Welcome to CRstudio</title>
      <meta name="description" content="The most powerful Catalogue Raisonné building tool." />
    </Helmet>
    <main>
      <h1>Welcome to CRstudio</h1>
      <p>Document and share your artistic legacy.</p>
    </main>
  </>
);

export default Index;
