import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-50">
        <h1 className="font-bold text-xl">Your Todos</h1>
      </div>
    </>
  );
}

export default App;
