import { createRoot } from "react-dom/client";

import { Application } from "./application";
import "./index.css";

const root = document.getElementById("root")!;

createRoot(root).render(<Application />);
