import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import TourHome from "../../material-ui-study/src/Tour/TourHome";
import TourPage from "../../material-ui-study/src/Tour/TourPage";
import TourBar from "../../material-ui-study/src/Tour/TourBar";

function App() {
  return (
      // <div>
      //     {/*<ChatRoom></ChatRoom>*/}
      //     {/*<Contact />*/}
      //
      // </div>
      <BrowserRouter basename={"/"}>
        <TourBar />
        <Routes>
          <Route path={"/"} element={<TourHome />}></Route>
          <Route path={"/:id"} element={<TourPage />}></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
