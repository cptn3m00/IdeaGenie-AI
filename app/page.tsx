import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center bg-white shadow sticky top-0">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={50} className="cursor-pointer" />
        </Link>
        <nav>
          <Link href="/dashboard" className="bg-violet-500 text-white py-2 px-4 rounded-lg">
            Get Started
          </Link>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center mt-12 px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          IdeaGenie AI - <span className="text-violet-500">Content Generator</span>
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-xl">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <div className="mt-8">
          <Link href="/dashboard" className="bg-violet-500 text-white py-3 px-8 rounded-lg text-lg">
            Get Started
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-semibold">25+ templates</h3>
          <p className="mt-4 text-gray-600">Responsive and mobile-first project on the web.</p>
          <Link href="#">
            Learn more
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-semibold">Customizable</h3>
          <p className="mt-4 text-gray-600">Components are easily customized and extendable.</p>
          <Link href="#">
            Learn more
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-semibold">Free to Use</h3>
          <p className="mt-4 text-gray-600">Every component and plugin is well documented.</p>
          <Link href="#">
            Learn more
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-semibold">24/7 Support</h3>
          <p className="mt-4 text-gray-600">Contact us 24 hours a day, 7 days a week.</p>
          <Link href="#">
            Learn more
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-6 bg-gray-600 text-white text-center mt-16">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
