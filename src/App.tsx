import "./App.css";
import logo from "../src/assets/images/wordle-logo-transparent-bkg.png";
import Grid from "./components/grid/Grid";
export default function App() {
  return (
    <>
      <img src={logo} alt="Wordle logo" />
      <h1>Hello Wordle!</h1>
    <Grid/>
    </>
  );
}
