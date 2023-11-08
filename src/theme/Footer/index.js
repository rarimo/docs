import React from 'react';
import Footer from '@theme-original/Footer';
import { Prism } from "prism-react-renderer";

export default function FooterWrapper(props) {
  // This is a hack to get the Solidity syntax highlighting to work
  window.Prism = Prism;
  require("prismjs/components/prism-solidity");

  return (
    <>
      <Footer {...props} />
    </>
  );
}
