import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/SignIn";
import Layout from "./components/Layout";
import UserFeed from "./Pages/UserFeed";
import CreateProject from "./components/CreateProject";
import CreateTache from "./components/CreateTache";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="wrapper h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/user/:id" element={<Layout />}>
            <Route path="/user/:id" element={<UserFeed />} />
            <Route path="/user/:id/createProject" element={<CreateProject />} />
            <Route path="/user/:id/createTache" element={<CreateTache />} />
            <Route path="/user/:id/addUser" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
