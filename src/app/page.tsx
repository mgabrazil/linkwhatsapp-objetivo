import { BrandBar } from "@/components/brand-bar";
import { GroupsPanel } from "@/components/groups-panel";
import { HeroBanner } from "@/components/hero-banner";
import { grupos } from "@/data/grupos";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col px-5 py-6 sm:px-8 sm:py-8">
      <header className="mx-auto w-full max-w-md lg:max-w-6xl">
        <BrandBar />
      </header>

      <main className="mx-auto w-full max-w-md flex-1 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-10">
        <div className="mt-8 lg:mt-0">
          <HeroBanner />

          <h1 className="mt-8 text-center text-2xl leading-tight font-semibold text-balance text-white sm:text-3xl lg:mt-10 lg:text-4xl">
            Escolha o grupo da sua unidade
          </h1>
        </div>

        <div className="mt-5 lg:mt-0">
          <GroupsPanel grupos={grupos} />
        </div>
      </main>
    </div>
  );
}
