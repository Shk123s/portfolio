import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar/>
        </div>

      </div>
    </>
  );
}

export default App;
