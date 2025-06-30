import { useQuery } from "@apollo/client"
import { COUNTRIES } from "../api/query"
import { CountriesQuery } from "../__generated__/graphql"
import { Link } from "@heroui/react"

const Countries = () => {

  const {loading, data, error} = useQuery<CountriesQuery>(COUNTRIES)

  if (loading) {
    return <div>
      Loading...
    </div>
  }
  
  if (error?.message) {
    return <div>
      Something goes wrong... {error?.message}
    </div>
  }


  return (
    <div className="flex flex-col justify-center items-center my-4">
      {
        data && data.countries.map(c => (
          <Link className="hover:font-semibold flex gap-3" href={`country/${c.code}`}>
            <div>
            {c.name}
            </div>
            <span role="img">
              {c.emoji}
            </span>
          </Link>
        ))
      }
    </div>
  )
}

export default Countries