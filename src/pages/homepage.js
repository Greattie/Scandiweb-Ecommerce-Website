import React, { Component } from "react";
import { onError } from "@apollo/client";
import { CURRENCIES_QUERY, CATEGORIES_QUERY } from "../queries/queries";
import {
  loadCategoriesQuery,
  loadCurrenciesQuery,
  loadAllCategoriesName,
  filterByCategory,
} from "../queries/queries";
import styled from "styled-components";

const Card = styled.div`
  // display: flex;
  // width: 200px;
  // height: 200px;
  // margin: 0 auto;
  // font-size: 14px;
`;

// export default class HomePage extends Component{
//   constructor(props) {
//         super(props);
//         this.state = {
//           currencies: [],
//           categories: [],
//         };
//       }
//       async loadCategoriesQuery(){
//         const categoriesData = await loadCategoriesQuery()
//         this.setState({
//           categories: categoriesData
//         })
//       }
//   render(){
//     return <div>HomePage</div>
//   }
// }

// export default class HomePage extends Component {
//   render() {
//     return <div>HOmepage</div>;
//   }
// }

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      categories: [],
      categoryName: [],
    };
  }

  componentDidMount = async () => {
    const response = await loadCategoriesQuery();
    const names = await loadAllCategoriesName();
    const productArray = await filterByCategory("clothes");

    console.log(productArray);

    this.setState({
      categories: response,
      categoryName: loadAllCategoriesName,
    });
  };

  // componentDidMount = async () => {
  //   const currencyResponse = await this.props.client.query({
  //     query: CURRENCIES_QUERY,
  //   });
  //   const categoryResponse = await this.props.client.query({
  //     query: CATEGORIES_QUERY,
  //   });

  //   // console.log(categoryResponse);
  //   // console.log(currencyResponse);

  //   if (categoryResponse)
  //     this.setState({
  //       currencies: currencyResponse.data.currencies,
  //       categories: categoryResponse.data.categories,
  //     });

  //   // console.log(categoryResponse);
  // };
  render() {
    return (
      <>
        {/* <ul>
            {this.state.currencies.map((currency) => {
              return <li>{currency.symbol}</li>;
            })}
          </ul>

          <ul>
            {this.state.categories.map((category) => {
              return (
                <li>
                  {category.name}
                  <ul>
                    return{" "}
                    {category.products.map((product) => {
                      return <li>{product.name}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul> */}
        <Card>
          <div>
            {this.state.categories.map((category) => {
              return (
                <>
                  {category.products.map((product) => {
                    return <div key={product.id}>{product.name}</div>;
                  })}
                </>
              );
            })}
          </div>
        </Card>
      </>
    );
  }
}
