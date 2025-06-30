import { gql } from "@apollo/client";

export const COUNTRIES = gql`
  query Countries {
    countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const CONTINENTS = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;
