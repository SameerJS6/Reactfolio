import { CountryDataType } from "@/app/page";
import Link from "next/link";
import React from "react";

type CountryCardProps = {
  country: CountryDataType;
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      href={`/${country.code}`}
      key={country.code}
      className="border rounded-lg"
    >
      <img
        src={country.flag}
        alt={country.flagAltText}
        className="rounded-lg w-full"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold tracking-tight">{country.name}</h2>
        {country.capital?.length > 1 &&
          country.capital.map((item) => {
            return <p className="leading-7">{item}</p>;
          })}
        {country.capital?.length === 1 && (
          <p className="leading-7">{country.capital}</p>
        )}
        <p className="leading-7">{country.population}</p>
        <p className="leading-7">{country.region}</p>
      </div>
    </Link>
  );
}
