'use client'
import CreateRecord from "@/components/createRecord";
import PorductForm from "@/components/porductForm";
import Image from "next/image";



export default function Home() {


  return (
    <>
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=" text-5xl font-bold bg-">Home page</h1>
      <PorductForm/>
      <CreateRecord/>
    </main>
    </>
  );
}
