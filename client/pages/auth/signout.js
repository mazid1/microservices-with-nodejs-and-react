import Router from "next/router";
import { useEffect } from "react";
import useRequest from "../../hooks/use-request";

const Signout = () => {
  const [errors, doRequest] = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default Signout;
