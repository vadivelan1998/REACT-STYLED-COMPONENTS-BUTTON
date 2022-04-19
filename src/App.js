
import './App.css';
import {Button} from  "./components/button"

function App() {
  return (
    <div className="App">
      <Button color={"white"} bgcolor={"rgb(36,144,254)"} border={"0px"}>
        Primary Button
      </Button>
      <Button color={"black"} bgcolor={"white"} border={"1px solid #DDDDDD"}>
        Default Button
      </Button>
      <Button color={"black"} bgcolor={"white"} border={"1px dashed #DDDDDD"}>
        Dashed Button
      </Button>
      <Button color={"black"} bgcolor={"white"} border={"0px"}>
        Text Button
      </Button>
      <Button color={"rgb(36,144,254)"} bgcolor={"white"} border={"0px"}>
        Link Button
      </Button>
    </div>
  );
}

export default App;
