import React from 'react';
import {Redirect} from '@docusaurus/router';
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Redirect to="/overview" />
    </Layout>
  );
};