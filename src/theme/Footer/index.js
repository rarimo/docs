import Footer from "@theme-original/Footer";
import { Prism } from "prism-react-renderer";
import React from "react";

export default function FooterWrapper(props) {
  // This is a hack to get the Solidity syntax highlighting to work
  (typeof global !== "undefined" ? global : window).Prism = Prism;
  require("prismjs/components/prism-solidity");
  require("prismjs/components/prism-rust");

  return (
    <>
      <Footer {...props} />
    </>
  );
}
