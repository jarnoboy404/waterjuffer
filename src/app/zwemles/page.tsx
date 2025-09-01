import Image from "next/image";

export default function Zwemles() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto px-10 py-20">
      <div className="text-[#9d9d9d] text-[15px] gap-y-5 flex flex-col">
        <div className="self-center text-3xl font-bold mb-5 text-[#009BB3] uppercase">
          <h2>Zwem ABC</h2>
        </div>
        <div>
          A = AARDIG, B = BETER EN MET C BEN JE COMPLEET!!!
          <br />
          <br />
          Wij vinden dat jij bij zwemschool de Waterjuffer GOED en VERTROUWD
          moet leren zwemmen. Dat je boven en onder water moet kunnen zijn
          zonder in paniek te raken. Wij willen dat als jij je zwemdiploma
          haalt, jij je veilig en vertrouwd voelt. NU en LATER!!!
          <br />
          <br />
          Sommige kinderen zijn gebaat bij een persoonlijk plan met daarin
          doelen om een zo hoog mogelijke haalbare zwemveiligheid en
          zwemvaardigheid te bereiken. Voor deze kinderen is het ook mogelijk om
          een passend diploma te behalen.
          <br />
          <br />
          Om te leren zwemmen gebruiken wij het zwembad, na de schooluren van
          school Lyndensteyn, in Beetsterzwaag.
        </div>
        <div>
          <Image
            src="zwemles-bijlage.png"
            alt="Zwemles bijlage"
            unoptimized
            width={300}
            height={300}
          />
        </div>
        <div>
          <p>Prive zwemles is:</p>
          <ul className="list-disc list-inside">
            <li>Zwemles 1 op 1 of 1 op 2</li>
            <li>Lesduur: 30 minuten</li>
            <li>Vanaf 5 jaar</li>
            <li>Extra zorg</li>
            <li>Meer aandacht voor uw kind</li>
            <li>Speciale lesmethodes</li>
            <li>Werken met pictogrammen</li>
            <li>Plezier in de zwemles staat voorop!</li>
          </ul>
          <p>
            <br />
            De juf is erbij in het water welk tussen de 1.20 en 1.40m diep is.
            Ook is het voor u als ouder of verzorger mogelijk mee te gaan in het
            water om uw kind te ondersteunen.
          </p>
        </div>
      </div>
    </div>
  );
}
