import React, { useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import getProdData from "../../util/getProdData";
import { prodOne, productState } from "../../hooks/interface";
/* export async function getServerSideProps() {
  const product = await getProdData();
  return { props: { product } };
} */

function EditProd(/* { product }: productState */) {
  const router = useRouter();
  const { register, reset } = useForm<prodOne>();
  const {
    query: { id },
  } = router;
  const prodId = Number(id);

  const data = getProdData();
  console.log(data);
  useEffect(() => {
    /* reset({
      id: 11,
      brand: "gg",
      name: "dd",
      description: "ss",
      image_link: "ss",
      price: "ss",
    }); */
    if (data.length !== 0) {
      const data = data.filter((item) => item.id === prodId);
      const [{ id, brand, name, description, image_link, price }] = data;
      reset({ id, brand, name, description, image_link, price });
    }
  }, [data]);
  return (
    <Container>
      <Typography>상품 수정 #{id}</Typography>

      <Box>
        <TextField label="id" {...register(`id`)} />
      </Box>
      <Box>
        <TextField label="브랜드" {...register(`brand`)} />
      </Box>
      <Box>
        <TextField label="이름" {...register(`name`)} />
      </Box>
      <Box>
        <TextField label="설명" {...register(`description`)} />
      </Box>
      <Box>
        <TextField label="주소" {...register(`image_link`)} />
      </Box>
      <Box>
        <TextField label="가격" {...register(`price`)} />
      </Box>
    </Container>
  );
}

export default EditProd;

const Container = styled.div`
  width: 800px;
  display: block;
  margin: 0 auto;
`;
