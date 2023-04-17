/* importing react-router-dom" */
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
function Router() {
  return (
    <>
      <Routes basename="Holidaze">
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default Router;
