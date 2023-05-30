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

import ErrorPage from "../pages/ErrorPage";

function Router() {
  console.log(Layout);
  return (
    <>
      <title>Holidaze</title>

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
    </>
  );
}

export default Router;
