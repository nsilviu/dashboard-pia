import Chart from "./components/ChartCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="h-full w-full bg-slate-800">
        <Navbar />
      </div>
      <div>
        <Chart />
      </div>
    </>
  );
}

export default App;
