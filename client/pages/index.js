import React from "react";
import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <div>Landing page</div>;
};

LandingPage.getInitialProps = async (context) => {
  const httpClient = buildClient(context);
  const { data } = await httpClient.get("/api/users/currentuser");

  return data;
};

export default LandingPage;
