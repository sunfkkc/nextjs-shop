import axios from "axios";
import { productState } from "../hooks/interface";

const getProdData = async () => {
  const { data } = await axios.get<productState>(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  );
  return data;
};

const useGetProd = () => {};

export default getProdData;
