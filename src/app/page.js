import Image from "next/image";
import { randomUUID } from "crypto";
import { getBands } from "@/lib/api";

export default async function Home() {
  const bands = await getBands();

  return (
    <div>
      <main>
        <section>
          <div className="mb-10">
            <h2 className="text-center">Line-ups</h2>
            <ul className="bayon grid grid-cols-7 gap-x-4 max-w-fit m-auto">
              <li className="col-start-1">Mandag</li>
              <li className="col-start-3">Tirsdag</li>
              <li className="col-start-5">Onsdag</li>
              <li className="col-start-7">Torsdag</li>
              <li className="col-start-2 row-start-2">Fredag</li>
              <li className="col-start-4 row-start-2">Lørdag</li>
              <li className="col-start-6 row-start-2">Søndag</li>
            </ul>
          </div>

          <ul className="bayon band_list">
            {bands.map((band) => (
              <li key={randomUUID()}>{band.name}</li>
            ))}
          </ul>
        </section>
        <section></section>
      </main>
    </div>
  );
}
