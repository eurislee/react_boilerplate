import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";
function App() {
    return (
      <h2>Hello React</h2>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);