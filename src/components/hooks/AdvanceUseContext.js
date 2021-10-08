import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme((pre) => !pre);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={changeTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

// ======================

// import React from "react";
// import { useTheme, useThemeUpdate } from "./NewThemeContext";

// const Theme = () => {
//   const col = useTheme();
//   const changeth = useThemeUpdate();
//   let tell = {
//     backgroundColor: col ? "black" : "blue",
//     width: "100px",
//     height: "100px",
//     color: col ? "white" : "pink"
//   };
//   return (
//     <>
//       <div>
//         <button onClick={changeth}>change</button>
//       </div>
//       <div style={tell}>lalit</div>
//     </>
//   );
// };

// export default Theme;

// ===========================

// import "./styles.css";
// import Theme from "./Theme";
// import { ThemeProvider } from "./NewThemeContext";

// export default function App() {
//   return (
//     <div className="App">
//       <ThemeProvider>
//         <div>
//           <Theme />
//         </div>
//       </ThemeProvider>
//     </div>
//   );
// }