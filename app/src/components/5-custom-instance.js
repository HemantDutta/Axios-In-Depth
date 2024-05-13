import { useEffect } from 'react';
import userFetch from '../axios/custom';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      //Any argument that you pass in this authFetch custom instance will be used as the extension to the baseURL
      const response = await userFetch("/api");
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="custom-instance mt-10 text-center p-5 bg-emerald-400">
        <span className='text-2xl font-semibold'>Custom Instance</span>
      </div>
    </>
  );
};
export default CustomInstance;
