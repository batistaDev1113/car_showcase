export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "60bc7de92bmsh3e715b4adb3a255p1e664ejsnbbf2e598cd41",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

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
