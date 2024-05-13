import { useEffect } from 'react';
import userFetch from '../axios/interceptors';

const Interceptors = () => {
  const fetchData = async () => {
      try {
        const resp = await userFetch("/api");
        console.log(resp);
      } catch (error) {
        console.log(error.response);
      }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="interceptors mt-10 text-center p-5 bg-orange-500">
        <span className='text-black text-2xl font-semibold'>Interceptors</span>
      </div>
    </>
  );
};
export default Interceptors;
