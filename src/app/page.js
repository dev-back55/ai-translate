import Link from "next/link";

export default function Home() {
  
  return (
    <div className="w-7/12 mt-8 gap-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl bold bg-cyan-500 p-3" >HOME PAGE</h1>
      <Link href="/write" className="bg-red-500 text-white p-4 rounded">
        Writer
      </Link>
      <Link href="/ingresos" className="bg-red-500 text-white p-4 rounded">
        Ingresos
      </Link>
      
      
    </div>
  );
}

