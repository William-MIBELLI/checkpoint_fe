/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\nmutation AddCountry($data: NewCountryInput!) {\n  addCountry(data: $data) {\n    id\n    code\n    name\n    emoji\n  }\n}\n": typeof types.AddCountryDocument,
    "\nmutation AddContinent($data: NewContinentInput!) {\n  addContinent(data: $data) {\n    id\n    name\n  }\n}\n": typeof types.AddContinentDocument,
    "\n  query Countries {\n    countries {\n      id\n      code\n      name\n      emoji\n      continent {\n        id\n        name\n      }\n    }\n  }\n": typeof types.CountriesDocument,
    "\n  query Country($code: String!) {\n    country(code: $code) {\n      id\n      code\n      name\n      emoji\n      continent {\n        id\n        name\n      }\n    }\n  }\n": typeof types.CountryDocument,
    "\n  query Continents {\n    continents {\n      id\n      name\n    }\n  }\n": typeof types.ContinentsDocument,
};
const documents: Documents = {
    "\nmutation AddCountry($data: NewCountryInput!) {\n  addCountry(data: $data) {\n    id\n    code\n    name\n    emoji\n  }\n}\n": types.AddCountryDocument,
    "\nmutation AddContinent($data: NewContinentInput!) {\n  addContinent(data: $data) {\n    id\n    name\n  }\n}\n": types.AddContinentDocument,
    "\n  query Countries {\n    countries {\n      id\n      code\n      name\n      emoji\n      continent {\n        id\n        name\n      }\n    }\n  }\n": types.CountriesDocument,
    "\n  query Country($code: String!) {\n    country(code: $code) {\n      id\n      code\n      name\n      emoji\n      continent {\n        id\n        name\n      }\n    }\n  }\n": types.CountryDocument,
    "\n  query Continents {\n    continents {\n      id\n      name\n    }\n  }\n": types.ContinentsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddCountry($data: NewCountryInput!) {\n  addCountry(data: $data) {\n    id\n    code\n    name\n    emoji\n  }\n}\n"): (typeof documents)["\nmutation AddCountry($data: NewCountryInput!) {\n  addCountry(data: $data) {\n    id\n    code\n    name\n    emoji\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddContinent($data: NewContinentInput!) {\n  addContinent(data: $data) {\n    id\n    name\n  }\n}\n"): (typeof documents)["\nmutation AddContinent($data: NewContinentInput!) {\n  addContinent(data: $data) {\n    id\n    name\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Countries {\n    countries {\n      id\n      code\n      name\n      emoji\n      continent {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Countries {\n    countries {\n      id\n      code\n      name\n      emoji\n      continent {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Country($code: String!) {\n    country(code: $code) {\n      id\n      code\n      name\n      emoji\n      continent {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Country($code: String!) {\n    country(code: $code) {\n      id\n      code\n      name\n      emoji\n      continent {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Continents {\n    continents {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Continents {\n    continents {\n      id\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;