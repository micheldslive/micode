import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "components/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
