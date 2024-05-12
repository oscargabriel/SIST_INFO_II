import { Outlet } from "react-router-dom";
import { imprimirLog } from "../utils/test";
import { useEffect } from "react";
import { getUsers } from "../api/testAPi";

const Layout = () => {

  useEffect(()=>{
    getUsers()
    .then(data => {
      const {data: results} = data
      console.log(results);
    })
    .catch(error => console.log(error))
  })

  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
};

export default Layout;
