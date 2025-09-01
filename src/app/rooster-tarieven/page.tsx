import Link from "next/link";

export default function RoosterTarieven() {
  return (
    <div className="max-w-3xl mx-auto px-10 py-20 text-[#9d9d9d] text-[15px] flex flex-col gap-y-5">
      <h2 className="self-center text-3xl font-bold mb-5 text-[#009BB3] uppercase">
        Rooster + Tarieven
      </h2>
      <div>
        <p>
          Zwemlessen in Beetsterzwaag:
          <br />
          <br />
        </p>
        <ul className="list-disc list-inside">
          <li>Maandag vanaf 16:00 uur</li>
          <li>Dinsdag vanaf 15:30 uur</li>
        </ul>
        <p>
          <br />
          Voor meer informatie over tarieven kunt u contact opnemen via{" "}
          <Link
            className="text-[#009BB3]"
            href="mailto:zwemschoolwaterjuffer@gmail.com"
          >
            zwemschoolwaterjuffer@gmail.com
          </Link>{" "}
          of via telefoonnummer{" "}
          <Link className="text-[#009BB3]" href="tel:0641025079">
            06-41025079
          </Link>
          <br />
          <br />
          Inschrijfgeld: € 24,50 eenmalig inschrijfgeld
        </p>
      </div>
    </div>
  );
}
