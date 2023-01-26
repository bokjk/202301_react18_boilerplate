import { createRoot } from "react-dom/client";
import App from "./App";
import "./src/style/normalize.css";
import "./src/style/reset.css";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(<App />);
