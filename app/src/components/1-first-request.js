import { useEffect } from 'react';
import axios from "axios";

const url = 'https://randomuser.me/api/';

const FirstRequest = () => {

  const fetchData = async () => {
    try {
      const response = await axios(url);
      console.log(response);
    }
    catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="text-center p-5 font-semibold bg-black text-white text-2xl">First Request</div>
    </>
  );
};
export default FirstRequest;
