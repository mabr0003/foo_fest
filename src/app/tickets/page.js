import TicketSystem from "../components/TicketSystem";
import Header from "../components/Header";

export default function Tickets() {
  return (
    <div>
      <section className="grid grid-cols-4 h-svh mb-28">
        <img src="/img1.png" alt="hero_img" className="h-full col-start-1 col-end-5 row-start-1 object-cover" />

        <img src="/img2.png" alt="logo" className="col-start-1 row-start-1 w-36 h-36 z-20" />

        <div className="flex flex-col justify-center text-center col-start-2 col-end-4 row-start-1 text-white">
          <h1 className="text-5xl font-bold">Asgaards drømme</h1>
          <p className="text-lg mt-4">En uforglemmelig oplevelse fyldt med musik, fællesskab og magiske øjeblikke!</p>
        </div>
        <Header />
      </section>
      <main>
        <TicketSystem />
      </main>
    </div>
  );
}
