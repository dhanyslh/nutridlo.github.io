// src/App.js
import './App.css';

export default function App() {
  // Imagen de cabecera (logo Oti cuadrado) y hero (banner)
  const logoOti = '/assets/img/oti-square.png';
  const heroOti = '/assets/img/hero-oti.png';

  // Reemplaza con tu número real: 521XXXXXXXXXX (México: 52 + 1 + 10 dígitos)
  const waLink =
    'https://wa.me/521XXXXXXXXXX?text=Hola%20Dhanys,%20quiero%20agendar%20una%20cita%20🙌';

  return (
    <div>
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#inicio" aria-label="NutriDlo - Inicio">
            <img src={logoOti} alt="Logo Oti" className="logo" />
            <span className="brand-text">
              Dhanys<span className="brand-accent">López</span>
            </span>
          </a>

          <nav className="menu" aria-label="principal">
            <a href="#caracteristicas" className="btn">
              Características
            </a>
            <a href={waLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              📅 Agendar cita
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <main id="inicio">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <span className="badge">✨ Oti te acompaña</span>
              <h1>Nutrición oncológica con energía y bienestar</h1>
              <p>
                Planes personalizados, prácticos y seguros para que recuperes tu calidad de vida,
                con apoyo de Oti —tu compañera digital— durante y después del tratamiento.
              </p>

              <div className="hero-buttons">
                <a href={waLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  📅 Agendar cita
                </a>
                <a className="btn" href="#caracteristicas">
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="hero-image" aria-hidden="true">
              <img src={heroOti} alt="Oti en el hero" />
            </div>
          </div>
        </section>

        {/* ===== CARACTERISTICAS ===== */}
        <section id="caracteristicas" className="features">
          <div className="container">
            <header className="section-header">
              <h2>Características de la Consulta</h2>
              <p>Servicios pensados para tu bienestar y acompañamiento continuo.</p>
            </header>

            <div className="features-grid">
              <article className="feature-card">
                <h3>✅ Consulta mensual con seguimiento</h3>
                <p>Atención personalizada y adaptada a tus necesidades actuales.</p>
              </article>

              <article className="feature-card">
                <h3>✅ Plan trimestral con acompañamiento</h3>
                <p>Seguimiento constante para mantener energía y bienestar.</p>
              </article>

              <article className="feature-card">
                <h3>✅ Acompañamiento online</h3>
                <p>Soporte y guía práctica desde cualquier lugar.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Dhanys López | L.N. Dhanys Alfredo López Hernández</p>
          <p>
            <a href="mailto:dhanyslh@gmail.com">dhanyslh@gmail.com</a>
            <span className="dot">•</span>
            <a href="https://instagram.com/_nutri.dlo" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
