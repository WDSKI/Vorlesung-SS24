"use client";

import { useState } from "react";
import LocationInput from "./LocationInput";
import LocationConfirm from "./LocationConfirm";
import { getGeolocation } from "@/geo-location/action";
import { useRouter } from "next/navigation";

export default function LocationForm() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    const { lat, lng, timeZone} = await getGeolocation(value);
    router.push("/"+lat+"/"+lng+"/"+timeZone);
  };

  return (
    <>
      <LocationInput
        placeholder="Your location..."
        value={value}
        onChange={setValue}
      />
        <LocationConfirm label="Confirm" onClick={handleClick} />
    </>
  );
}
