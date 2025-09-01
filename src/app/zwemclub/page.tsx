import Image from "next/image";

export default function Zwemclub() {
  return (
    <div className="max-w-3xl mx-auto px-10 py-20 text-[#9d9d9d] text-[15px] flex flex-col gap-y-5">
      <div className="self-center text-3xl font-bold mb-5 text-[#009BB3] uppercase">
        <h2>Zwemclub</h2>
      </div>
      <div>
        <p>
          Op maandag is het mogelijk om in de zwemclub te komen zwemmen.
          <br />
          Dit is mogelijk vanaf dat je je A diploma hebt behaald.
          <br />
          In de zwemclub is het mogelijk je B en C diploma te halen maar ook
          aanvullende diploma’s zoals zwemvaardigheid, survival of snorkelen.
          Ook kan je natuurlijk gewoon in de zwemclub komen zwemmen en dit als
          sport kiezen omdat je misschien zwemmen een super leuke sport vind.
          Allerlei thema’s komen aan bod.
        </p>
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
    </div>
  );
}
