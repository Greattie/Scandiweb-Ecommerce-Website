import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .content {
    padding: 5px 50px;
    margin: 125px 0 50px 0;
    // @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    //   padding: 5px 25px;
    // }
  }
  .products--grid {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 130px);
    img {
      width: 100px;
    }
  }
`

export default class AllProducts extends Component {
  render() {
    return (
      <div>AllProducts</div>
    )
  }
}
