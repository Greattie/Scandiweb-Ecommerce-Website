import { gql } from "@apollo/client";
import { client } from "../App";

export async function loadCategoriesQuery() {
  const categoriesQuery = gql`
    {
      categories {
        name
        products {
          id
          name
          inStock
          gallery
          description
          category
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              label
              symbol
            }

            amount
          }
          brand
        }
      }
    }
  `;

  const { data } = await client.query({ query: categoriesQuery });
  return data.categories;
}

export async function loadCurrenciesQuery() {
  const currenciesQuery = gql`
    {
      currencies {
        label
        symbol
      }
    }
  `;
  const { data } = await client.query({ query: currenciesQuery });
  return data.currencies;
}

export async function loadAllCategoriesName() {
  const response = await loadCategoriesQuery();
  const names = response.map((category) => {
    return category.name;
  });

  return names;
}

export async function filterByCategory(query) {
  const response = await loadCategoriesQuery();
  const productArray = response.filter((category) => {
    console.log("query", query);
    if (category.name === query) {
      return category.products;
    }
  });

  console.log(productArray);
  return productArray;
}

// export const CURRENCIES_QUERY = gql`
//   query getCurrencies {
//     currencies {
//       label
//       symbol
//     }
//   }
// `;

// export const CATEGORIES_QUERY = gql`
//   query getCategories {
//     categories {
//       name
//       products {
//         id
//         name
//         inStock
//         gallery
//         description
//         category
//         attributes {
//           id
//           name
//           type
//           items {
//             displayValue
//             value
//             id
//           }
//         }
//         prices {
//           currency {
//             label
//             symbol
//           }
//           amount
//         }
//         brand
//       }
//     }
//   }
// `;
