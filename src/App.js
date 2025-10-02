import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>🌱 L.N Dhanys Alfredo López Hernández</h1>
        <p>Nutrición clínica y oncológica | Energía, bienestar y placer al comer</p>
        <a className="btn" href="https://wa.me/529932086705" target="_blank" rel="noopener noreferrer">
          Agendar consulta
        </a>
      </header>

      {/* Sobre mí */}
      <section className="section">
        <h2>Sobre mí</h2>
        <p>
          Soy <strong>Dhanys Alfredo López Hernández</strong>, nutriólogo. Acompaño a pacientes durante y después de
          sus tratamientos para que recuperen energía y calidad de vida con planes prácticos y seguros.
        </p>
      </section>

      {/* Servicios */}
      <section className="section">
        <h2>Servicios</h2>
        <ul>
          <li>Consulta mensual con seguimiento</li>
          <li>Plan trimestral con acompañamiento</li>
          <li>Atención online personalizada</li>
        </ul>
      </section>

      {/* App Oti */}
      <section className="section">
        <h2>🚀 Próximamente: App Oti</h2>
        <p>Tu compañera digital para organizar tu alimentación, hidratación y síntomas.</p>
        <ul>
          <li>Recordatorios de comidas y agua</li>
          <li>Checklist diarios</li>
          <li>Consejos prácticos de nutrición</li>
          <li>Seguimiento de síntomas</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>📩 <a href="mailto:dhanyslh@gmail.com">dhanyslh@gmail.com</a></p>
        <p>
          📲 <a href="https://instagram.com/_nutri.dlo" target="_blank" rel="noopener noreferrer">@_nutri.dlo</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
