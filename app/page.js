import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#383838] to-black min-h-screen flex flex-col justify-center items-center text-white">
      <div className="bg-white p-5 text-black rounded-2xl shadow-2xl">
        <div className="mb-8 text-center">
          <p className="text-xs">Mohd Uvaish | ItsMe Prince</p>
          <p className="text-3xl font-bold">I&apos;m Learning TailwindCSS</p>
        </div>
        <div className="text-center">
          <p className="mb-2 underline">Random Concept Practices</p>
          <div className="space-x-4">
            <Link href="/ContainerColumn"
            className=" hover:text-[18px] hover:opacity-75 transition-all"
            target="_blank">Container Columns</Link>
            <Link href="https://github.com/itsmeprinceyt/TailwindPractice/tree/main/app/ContainerColumn" className="hover:text-[18px] hover:opacity-75 transition-all" target="_blank">[Github]</Link>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white p-5 text-black rounded-full shadow-2xl hover:bg-black hover:text-white hover:p-6 transition-all">
      <Link href="https://github.com/itsmeprinceyt/TailwindPractice"
            
            target="_blank">Github Repository</Link>
        
      </div>
    </div>
  );
}
