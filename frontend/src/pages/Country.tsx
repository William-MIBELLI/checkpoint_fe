import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountryQuery } from "../__generated__/graphql";
import { useLazyQuery } from "@apollo/client";
import { COUNTRY } from "../api/query";

const CountryDetails = () => {
  const { code } = useParams();
  const [fetch, { called, loading, data, error }] =
    useLazyQuery<CountryQuery>(COUNTRY);

  useEffect(() => {
    fetch({
      variables: {
        code,
      },
    });
  }, [code]);

  if (called && loading) {
    return <div>Loading...</div>;
  }

  if (error?.message) {
    return <div>Somthing goes wrong... {error.message}</div>;
  }

  return (
    <div className="flex flex-col mx-auto justify-center items-center my-4">
      <div>{data?.country.name}</div>
      <div>{data?.country.code}</div>
      <div>{data?.country.emoji}</div>
      <div>{data?.country.continent?.name || "PAS DE CONTINENT"}</div>
    </div>
  );
};

export default CountryDetails;
