import { useMutation, useQuery } from "@apollo/client";
import { ADD_COUNTRY } from "../api/mutation";
import { AddCountryMutation, ContinentsQuery } from "../__generated__/graphql";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CONTINENTS } from "../api/query";
import { Input } from "@heroui/react";

const AddCountry = () => {
  const [addCountry, { loading: loadingMUT, data, error }] =
    useMutation<AddCountryMutation>(ADD_COUNTRY);
  const navigate = useNavigate();
  const { data: dataC, loading } = useQuery<ContinentsQuery>(CONTINENTS);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString();
    const code = fd.get("code")?.toString();
    const emoji = fd.get("emoji")?.toString();
    const continent = fd.get("continent")?.toString() ?? "";
    if (!emoji || !code || !name) {
      console.log("ERROR : ", code, emoji, name);
      return;
    }
    addCountry({
      variables: {
        data: {
          name,
          code,
          emoji,
          continent: {id :+continent}
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      navigate(`/country/${data.addCountry.code}`);
    }
  }, [data]);

  return (
    <div>
      <form
        className="flex flex-col gap-3 w-40 mx-auto items-center"
        onSubmit={onSubmitHandler}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            className="border-1 border-black"
          />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <input
            required
            id="code"
            name="code"
            type="text"
            className="border-1 border-black"
          />
        </div>
        <div>
          <label htmlFor="emoji">emoji</label>
          <input
            required
            id="emoji"
            name="emoji"
            type="text"
            className="border-1 border-black"
          />
        </div>
        {dataC && (
          <select name="continent" id="continent">
            {dataC.continents.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        )}

        <button
          disabled={loadingMUT || loading}
          className="border-1 border-black cursor-pointer py-2 px-4 bg-green-400 hover:bg-green-300"
          type="submit"
        >
          {loading || loadingMUT ? "loading..." : "CREATE"}
        </button>
      </form>
      {error?.message && <div className="text-red-400">{error.message}</div>}
    </div>
  );
};

export default AddCountry;
