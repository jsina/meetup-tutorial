import { Route, Routes } from "react-router-dom";

import { AllMeetups } from "./pages/AllMeetups";
import { NewMeetups } from "./pages/NewMeetups";
import { Favorites } from "./pages/Favorites";
import { Layout } from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetups />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
