import React, { Component } from 'react'
import styled from 'styled-components'
import cart from 'src/assets/images/cart.svg'
import { gql } from '@apollo/client'
import { CartProducts } from 'src/components/CartProducts'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Cart extends Component {
  render() {
    return (
      <div>Cart</div>
    )
  }
}
