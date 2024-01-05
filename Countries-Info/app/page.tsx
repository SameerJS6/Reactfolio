import CountryCard from "@/components/CountryCard";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export type CountryDataType = {
  name: string;
  capital: string[];
  region: string;
  population: number;
  flag: string;
  flagAltText: string;
  code: string;
};

export default async function Home() {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const data = response.data;

  const filteredCountryData: CountryDataType[] = data.map((item: any) => {
    return {
      name: item?.name?.common,
      capital: item?.capital,
      region: item?.region,
      population: item?.population,
      flag: item?.flags?.png,
      flatAltText: item?.flags?.alt,
      code: item?.cca2,
    };
  });
  //
  const allRegion: string[] = [
    ...new Set<string>(data.map((item: any) => item?.region)),
  ];
  //   console.log(allRegion);
  //   console.log(data);
  console.log(filteredCountryData);

  //   const searchParams = useSearchParams();
  //   const search = searchParams.get("search");
  //   console.log("Search: ", search);
  return (
    <>
      <div className="p-4 space-y-4 container">
        <div className="flex items-center justify-between gap-4">
          <SearchBar />
          <Filter allRegion={allRegion} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCountryData.map((country) => {
            return <CountryCard country={country} />;
          })}
        </div>
      </div>
    </>
  );
}
