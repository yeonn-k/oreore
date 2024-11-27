import { ThemeProvider } from "styled-components";
import AppRouter from "./routes/AppRouter";
import theme from "./styles/theme/theme";
import GlobalStyle from "./styles/global/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          theme="colored"
          limit={5}
        />
        <GlobalStyle />

        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
