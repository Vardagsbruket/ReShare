import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { getPostsList } from "./reducers/postSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsList());
  }, []);
  return (
    <>
      <Router>
        <Header />
        {routes}
        <Footer />
      </Router>
    </>
  );
}

export default App;
