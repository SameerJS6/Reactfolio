"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [countries, setCountries] = useState([] as any);
  const FetchData = async () => {
    const response = await axios.get(
      "https://restcountries.com/v3.1/name/United States?fullText=true"
    );
    const data = response.data;
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <div className="p-4 space-y-4">
        <p className="text-xl font-semibold tracking-tight">Country Info</p>
        {countries.map((item: any) => {
          const {
            name: {
              common,
              official,
              // nativeName: { eng, hin, tam },
            },
            area,
            capital,
            flags,
            unMember,
          } = item;

          // console.log(nativeName);
          return (
            <ul key={area}>
              <li>
                <img
                  className="w-[250px] rounded-xl"
                  src={flags.svg}
                  alt={flags.alt}
                />
              </li>
              <li>
                Name: {common}, {official}
              </li>
              {/* <li>
                Native Name: {eng.common} {hin.common} {tam.common}
              </li> */}
              <li>United Nation Member: {unMember ? "Yes" : "No"}</li>
              <li>Land Area: {area} km</li>

              <li>Capital: {capital[0]}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
