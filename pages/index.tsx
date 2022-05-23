import Head from "next/head";
import ProductList from "../components/ProductList";
import { productState } from "../hooks/interface";
import getProdData from "../util/getProdData";

export async function getServerSideProps() {
  const product = await getProdData();
  return { props: { product: product } };
}

const Home = ({ product }: productState) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ProductList product={product} />
    </>
  );
};

export default Home;
