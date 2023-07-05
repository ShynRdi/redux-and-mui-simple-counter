import "./App.css";
import Counter from "./Components/Counter";
import Number from "./Components/Number";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Container } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      {/* <Container> */}
      <div className="App">
        <Counter />
        <Number />
      </div>
      {/* </Container> */}
    </Provider>
  );
}

export default App;
