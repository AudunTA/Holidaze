/* importing react-router-dom" */
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
function Router() {
  return (
    <>
      <Routes basename="Holidaze">
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default Router;
