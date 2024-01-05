import React from "react";

export default function CountryPage({
  params,
}: {
  params: { countrycode: string };
}) {
  return <div>Country Code: {params.countrycode}</div>;
}
