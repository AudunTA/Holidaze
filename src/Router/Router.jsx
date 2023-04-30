/* importing react-router-dom" */
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import Venue from "../pages/Venue";
import { RequireAuth } from "react-auth-kit";
function Router() {
  return (
    <>
      <Routes basename="Holidaze">
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/Profile"
          element={
            <RequireAuth loginPath="/SignUp">
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/Venue/:id" element={<Venue />}></Route>
      </Routes>
    </>
  );
}

export default Router;
