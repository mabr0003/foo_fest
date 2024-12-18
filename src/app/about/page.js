import Hero from "../components/Hero";
export default function About() {
  return (
    <div>
      <Hero header="Om os" text="Læs mere om Asgaards Drømme og hvad der gør os til Nordens bedste vikingefestival!" />
      <main className="flex flex-col gap-10">
        <section className="max-w-prose m-auto">
          <h1>LÆS OM OS HER</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen <br></br> <br></br> book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section className="max-w-prose m-auto">
          <h1>NON PROFITABLE ORGINACATION</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen <br></br> <br></br> book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section className="max-w-prose m-auto">
          <h1>VORES NARKOTIKA POLITIK</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard alt er tilladt dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen <br></br> <br></br> book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </main>
    </div>
  );
}
