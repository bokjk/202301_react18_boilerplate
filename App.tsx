import React, { useState } from "react";
import loadable from "@loadable/component";

const LoginPage = loadable(() => import("@pages/LoginPage"));
const MainPage = loadable(() => import("@pages/MainPage"));

const App = () => {
  const [login, setLogin] = useState<boolean>(true);

  return login ? <MainPage /> : <LoginPage setLogin={setLogin} />;
};
export default App;
