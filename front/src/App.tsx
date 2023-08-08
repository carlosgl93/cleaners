import "./App.css";
import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
