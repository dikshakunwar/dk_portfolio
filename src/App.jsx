import NavbarMain from "./Components/Navbar/NavbarMain.jsx";
import PNMain from "./Components/photoname/PNMain.jsx";
import InforMain from "./Components/about/InforMain.jsx";
import SkillMain from "./Components/skills/SkillMain.jsx";
import ProjectMain from "./Components/projects/ProjectMain.jsx";
function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <PNMain />
      <div>
        <InforMain />
      </div>
      <SkillMain />
      <ProjectMain />
    </main>
  );
}

export default App;
