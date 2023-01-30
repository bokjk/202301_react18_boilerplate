import { createRoot } from "react-dom/client";
import App from "./App";
import "./src/style/normalize.css";
import "./src/style/reset.css";
import { BrowserRouter } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
