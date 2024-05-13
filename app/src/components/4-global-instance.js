import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://fakestoreapi.com/products/1';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios(randomUserUrl);
      const resp2 = await axios(productsUrl);
      console.log(resp1);
      console.log(resp2);
    }
    catch (error) {
      console.log(error.respone);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="global-instance bg-fuchsia-100 mt-10 p-5 text-center">
        <span className="text-2xl text-black font-semibold">Global Instance</span>
      </div>
    </>
  );
};
export default GlobalInstance;
