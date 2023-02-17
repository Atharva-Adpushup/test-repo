import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
// import GA4React from "ga-4-react";

// const ga4react = new GA4React("G-Z0TZ7TDHS1");


ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );

// (async () => {
//   await ga4react.initialize();

//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// })();
