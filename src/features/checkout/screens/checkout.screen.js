import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../../../services/cart/cart.context";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);

  if (!cart.length || !restaurant)
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your Cart is Empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>

          <List.Section>
            {cart.map(({ item, price }) => (
              <List.Item title={`${item} - ${price / 100}`} />
            ))}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <CreditCardInput />
      </ScrollView>
    </SafeArea>
  );
};
