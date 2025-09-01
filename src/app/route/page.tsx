import Image from "next/image";

export default function Route() {
  return (
    <div className="max-w-3xl mx-auto px-10 py-20 text-[#9d9d9d] text-[15px] flex flex-col gap-y-5">
      <div className="self-center text-3xl font-bold mb-5 text-[#009BB3] uppercase">
        <h2>Routebeschrijving</h2>
      </div>
      <div>
        <h3 className="text-[#009BB3] font-semibold">Route 1</h3>
        <p>
          <br />
          Via de hoofdstraat, bij de bakker/DIO de straat inslaan. Dit is de van
          Linden laan (1 richtings weg) langs het terrein van revalidatie
          Friesland, door rijden tot aan de T-splitsing. Dit is de Bou. Daar
          gaan we links af. we rijden door tot de volgende T-splitsing. dit is
          de Heloma park/reed. Hier gaan we weer links. dan is er nog een klein
          stukje verharde weg het bos in, dit gaat over in een onverharde weg.
          Langs de Jeu de Boule banen aan de linker kant en de volkstuinen aan
          de rechter kant. Links staan twee hekken open: parkeren zwembad.
          <br />
          <br />
          Kern woorden: Steeds LINKS afslaan!
        </p>
      </div>
      <div>
        <Image
          src="route-1.jpg"
          alt="Route foto 1"
          unoptimized
          width={250}
          height={250}
        />
      </div>
      <div>
        <p>Bij dit bord links afslaan</p>
      </div>
      <div>
        <Image
          src="route-2.jpg"
          alt="Route foto 2"
          unoptimized
          width={250}
          height={250}
        />
      </div>
      <div>
        <p>Stukje hard, dan onverhard</p>
      </div>
      <div>
        <Image
          src="route-3.jpg"
          alt="Route foto 3"
          unoptimized
          width={250}
          height={250}
        />
      </div>
      <div>
        <p>Dit is de buitenkant van het zwembad, Welkom!</p>
      </div>
      <div className="mt-5">
        <h3 className="text-[#009BB3] font-semibold">Route 2</h3>
        <p>
          <br />
          Als School dicht is, is het ook mogelijk om voor school te parkeren.
          Ingang aan de hoofdstraat tegenover de Carolina Hoeve kleding, lange
          laan, de weg links het parkeer terrein op. Zover mogelijk doorrijden
          en parkeren. Links om het gebouw heen lopen en daar aankomst ingang
          zwembad
        </p>
      </div>
    </div>
  );
}
