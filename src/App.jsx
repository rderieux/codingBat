import sleepIn from "./warmup1/sleepIn";
import startWord from "./string1/startWord";
import endOther from "./string2/endOther";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>{endOther("abcXYZ", "abcDEF")}</h2>
    </>
  );
}

export default App;
