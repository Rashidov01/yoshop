import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, dir }) => {
  return (
    <div dir={dir} className="layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
