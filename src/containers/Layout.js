import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <div className="container">
        <div className="wraper">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
