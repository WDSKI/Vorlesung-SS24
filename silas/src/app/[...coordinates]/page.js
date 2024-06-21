import WeatherForm from "@/components/WeatherForm";

export default async function Home() {
  return (
    <>
      <h1>Weather at given location</h1>
      <WeatherForm/>
    </>
  );
}