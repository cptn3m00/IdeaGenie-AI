import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full p-4 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <Image
          src="/path/to/your/image.jpg"
          alt="Description of the image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />

        <h2 className="text-2xl font-semibold mt-6">Transform Your Experience</h2>
        <p className="mt-4 text-lg text-gray-700">
          Discover how our app can help you achieve your goals with ease. Sign up now to get started!
        </p>

        <div className="mt-6">
          <Button>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </main>

      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
