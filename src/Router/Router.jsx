/* importing react-router-dom" */
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import Explore from "../pages/Explore";
import Venue from "../pages/Venue";
import Contact from "../pages/Contact";
import { RequireAuth } from "react-auth-kit";

import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  console.log(Layout);
  return (
    <>
      <title>Holidaze</title>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes basename="Holidaze">
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}></Route>
            <Route
              path="/Profile"
              element={
                <RequireAuth loginPath="/SignUp">
                  <Profile />
                </RequireAuth>
              }
            ></Route>
            <Route path="/Signup" element={<SignUp />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Explore" element={<Explore />}></Route>
            <Route path="/Venue/:id" element={<Venue />}></Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </QueryParamProvider>
    </>
  );
}

export default Router;
