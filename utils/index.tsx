import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera";

  const response = await fetch(url, { headers });
  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // base rental price per day
  const pricePerMile = 0.1; // price per mile
  const ageFactor = 0.05; // age factor

  const mileageRate = city_mpg * pricePerMile;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const totalRate = basePricePerDay + mileageRate + ageRate;

  return totalRate.toFixed(0);
};
