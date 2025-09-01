import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full h-dvh relative">
        <Image
          src="zwembad.jpg"
          alt="Zwembad banner"
          objectFit="cover"
          layout="fill"
          className="animate-fade-in"
          unoptimized
        />
        <div className="absolute inset-0 max-w-7xl mx-auto px-10 flex flex-col justify-end items-start mb-30 gap-y-1">
          <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-bold uppercase bg-[rgba(0,0,0,0.5)] p-3">
            Zwemschool &quot;de Waterjuffer&quot;
          </h1>
          <h2 className="text-white md:text-sm text-[10px] bg-[rgba(0,0,0,0.5)] p-3">
            De zwemschool voor PRIVE LES en persoonlijke aandacht!
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto px-10 py-20 gap-10">
        <div className="text-[#9d9d9d] text-[15px] flex-1">
          WELKOM! <br />
          <br />
          Zwemschool de Waterjuffer is opgericht in 1996 door Ilonka Braaksma.
          In 2016 heb ik, Jelma Donker, na een aantal jaren te hebben
          samengewerkt met haar de zwemschool overgenomen.
          <br />
          <br />
          Zwemschool de Waterjuffer biedt een aantal dagen in de week zwemlessen
          aan kinderen vanaf ongeveer 5 jaar, met als zwemlocatie school
          Lyndensteyn. U kunt bij ons terecht voor het A, B en C zwemdiploma.
          <br />
          <br />
          Er wordt lesgegeven in de vorm van prive zwemlessen. 1 op 1 of 1 op 2.
          Soms met ouders erbij in het water. Deze lessen duren 30 minuten.
          <br />
          <br />
          Prive les is zeer geschikt voor kinderen die net dat stukje extra
          aandacht nodig hebben om vertrouwd te raken met het water.
          <br />
          <br />
          Daarnaast is er mogelijkheid om vanaf dat je je A diploma hebt in de
          zwemclub te zwemmen. In deze club kan je ook je B en C halen en
          aanvullende diploma’s.
          <br />
          <br />
          Wij werken met het ENVOZ zwemdiploma
        </div>
        <div className="flex-1 aspect-video overflow-hidden rounded-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.747501647312!2d6.0681622762280005!3d53.06084419604771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c85aa0d7a4835f%3A0xcceb59823414672b!2sZwemschool%20&#39;De%20Waterjuffer&#39;!5e0!3m2!1snl!2snl!4v1756673158906!5m2!1snl!2snl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
