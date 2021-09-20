import "bootstrap/dist/css/bootstrap.css";
import App from "next/app";
import React from "react";
import buildClient from "../api/build-client";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <h1>Header! {currentUser.email}</h1>
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
