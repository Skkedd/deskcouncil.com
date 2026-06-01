import { councilWarnings } from "./data/councilWarnings";
import "./App.css";

function App() {
  const currentWarning =
    councilWarnings[Math.floor(Math.random() * councilWarnings.length)];
  return (
    <main className="page-shell">
      <section className="construction-card">
        <p className="eyebrow">DESK COUNCIL</p>

        <h1>Future home of the Desk Council.</h1>

        <p className="tagline">
          Tiny robots. Questionable experiments. Several unresolved incidents.
        </p>

        <div className="status-box">
          <p>Status: Under Construction</p>
          <p>Public visitor center pending activation.</p>
        </div>

        <div className="site-warning-card">
          <span>{currentWarning.label}</span>
          <strong>{currentWarning.text}</strong>
        </div>

        <p className="cubie-note">
          Interested in buying this domain?
          <br />
          Contact Cubie.
        </p>
      </section>
    </main>
  );
}

export default App;