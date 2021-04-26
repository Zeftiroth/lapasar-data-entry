import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entry from "./components/Entry";

function App() {
  const clearS = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify([]));
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-12">
          <div>Entry</div>
          <div>
            <Entry />
          </div>
        </div>
      </div>
      <div className="p-1 m-1">
        <button onClick={clearS}>Clear Storage</button>
      </div>
    </div>
  );
}

export default App;
