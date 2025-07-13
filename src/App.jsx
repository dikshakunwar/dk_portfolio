import NavbarMain from "./Components/Navbar/NavbarMain.jsx";
import PNMain from "./Components/photoname/PNMain.jsx";
import InforMain from "./Components/about/InforMain.jsx";
function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <PNMain />
      <div>
        <InforMain />
      </div>
    </main>
  );
}

export default App;
