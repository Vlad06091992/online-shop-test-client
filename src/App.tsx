import "./App.css";
import {Header} from "./components/header/Header.tsx";
import {Checkbox} from "./components/ui/checkbox/checkbox.tsx";

function App() {
  return <div>
    <Header/>
    <Checkbox color={'gray'}/>
  </div>;
}

export default App;
