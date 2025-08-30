import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen relative">
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
            Zwemschool "de Waterjuffer"
          </h1>
          <h2 className="text-white md:text-sm text-[10px] bg-[rgba(0,0,0,0.5)] p-3">
            De zwemschool voor PRIVE LES en persoonlijke aandacht!
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto px-10 py-20 gap-10">
        <div>Test1</div>
        <div>Test2</div>
      </div>
    </div>
  );
}
