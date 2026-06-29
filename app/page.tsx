import Navbar from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-[#C8A96E]">
            Luxury Bridal Studio
          </h1>

          <p className="mt-5 text-neutral-400">
            Premium Wedding Makeup Experience
          </p>
        </div>
      </main>
    </>
  );
}
