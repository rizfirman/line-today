
import {Group, Header, Title} from "components";
import { URL, ENDPOINT } from "../config";
import {useEffect} from 'react'
import Aos from 'aos'


const Home = ({ data }) => {
  useEffect(() =>{
    Aos.init ({duration: 2000})
},[])
  return (
    <>
     <Title label="LINE TODAY" />
      <Header />
      <Group categories={data?.categories} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`${URL}${ENDPOINT}`);
    const data = await response.json();
    return {
      props: {
        data: data.result,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      error: true,
    };
  }
}

export default Home