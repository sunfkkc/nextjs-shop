import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

function ProductList({ product }: any) {
  return (
    <>
      <ListBlock>
        {product.map((item: any, index: number) => (
          <ProductItem item={item} key={index} />
        ))}
      </ListBlock>
    </>
  );
}

export default ProductList;

const ListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
