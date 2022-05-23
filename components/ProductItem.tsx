import Image from "next/image";
import React from "react";
import styled from "styled-components";

function ProductItem({ item }: any) {
  return (
    <ItemBlock>
      <img src={item.image_link} />
      <h4>{item.name}</h4>
      <h4>{item.price}</h4>
    </ItemBlock>
  );
}

export default ProductItem;

const ItemBlock = styled.div``;
