// import { createContext, useState } from "react";
// import "./styles.css";
// import Theme from "./Theme";

// export const ThemeContext = createContext();

// export default function App() {
//   const [theme, setTheme] = useState(false);

//   const changeTheme = () => {
//     setTheme((pre) => !pre);
//   };
//   return (
//     <ThemeContext.Provider value={theme}>
//       <div className="App">
//         <div>
//           <button onClick={changeTheme}>change</button>
//         </div>
//         <div>
//           <Theme />
//         </div>
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// Theme.js ================================================
// import React, { useContext } from "react";
// import { ThemeContext } from "./App";

// const Theme = () => {
//   const col = useContext(ThemeContext);
//   let tell = {
//     backgroundColor: col ? "black" : "blue",
//     width: "100px",
//     height: "100px",
//     color: col ? "white" : "pink"
//   };
//   return (
//     <>
//       <div style={tell}>lalit</div>
//     </>
//   );
// };

// export default Theme;
