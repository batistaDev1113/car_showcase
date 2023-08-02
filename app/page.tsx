import Image from "next/image";
import { fetchCars } from "@/utils";
import { CarProps } from "@/types";

import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || !allCars.length;
  const carYears = allCars?.map((car: CarProps) => car.year);
  const carFuel = allCars?.map((car: CarProps) => car.city_mpg);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discovery">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore from our car hub</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" carYears={carYears} />
            <CustomFilter title="year" carFuel={carFuel} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: CarProps, index: number) => (
                <CarCard car={car} key={index} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home_error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
            <p>{allCars?.length}</p>
          </div>
        )}
      </div>
    </main>
  );
}
