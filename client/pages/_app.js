import "bootstrap/dist/css/bootstrap.css";
import App from "next/app";
import React from "react";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const httpClient = buildClient(appContext.ctx);
  const { data } = await httpClient.get("/api/users/currentuser");

  return { ...appProps, ...data };
};

export default AppComponent;
