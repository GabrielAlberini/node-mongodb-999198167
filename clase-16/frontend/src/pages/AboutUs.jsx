
export const AboutUs = () => {
  return (
    <main className="about">
      {/* HERO */}
      <section className="about__hero">
        <h1>Quiénes somos</h1>
        <p>
          Somos un equipo apasionado por la tecnología y el desarrollo de
          soluciones digitales simples, escalables y eficientes.
        </p>
      </section>

      {/* CONTENT */}
      <section className="about__content">
        <article className="about__block">
          <h2>Nuestra misión</h2>
          <p>
            Brindar productos digitales de calidad que aporten valor real,
            enfocándonos en la experiencia del usuario y en la mejora continua
            de nuestros procesos.
          </p>
        </article>

        <article className="about__block">
          <h2>Nuestra visión</h2>
          <p>
            Convertirnos en un referente en el desarrollo de aplicaciones web,
            ofreciendo soluciones confiables, modernas y adaptadas a las
            necesidades de cada cliente.
          </p>
        </article>

        <article className="about__block">
          <h2>Nuestros valores</h2>
          <ul>
            <li>Compromiso con la calidad</li>
            <li>Transparencia y confianza</li>
            <li>Aprendizaje constante</li>
            <li>Trabajo en equipo</li>
            <li>Innovación</li>
          </ul>
        </article>
      </section>
    </main>
  )
}
