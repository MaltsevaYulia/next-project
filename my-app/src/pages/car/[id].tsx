import { NextPage } from "next";
import { useRouter } from "next/router";

type Props = {};

const CarPage: NextPage = () => {
  const {asPath, pathname}=  useRouter()
    
  return <div>CarPage</div>;
};

export default CarPage;
