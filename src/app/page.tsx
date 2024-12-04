// import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
  <main className='max-w-5xl mx-auto'>
    <h1 className='text-5xl font-bold'>
      Invoicipedia
    </h1>
    <p>
      <Button>
        sign in 
      </Button>
      <a href="/dashboard">
      Sign In
      </a>
    </p>
  </main>
    
  );
}
