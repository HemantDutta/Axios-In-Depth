import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';

const Headers = () => {
  const [joke, setJoke] = useState("Please click the above button to generate a joke!");

  const fetchDadJoke = async () => {
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(response.data.joke);
    }
    catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className="text-center my-10 bg-purple-500 text-white p-5">
      <button className="py-2 px-4 rounded border-white border hover:bg-purple-300 hover:text-black" onClick={fetchDadJoke}>
        Generate Random Joke
      </button>
      <p className="mt-5">{joke}</p>
    </section>
  );
};
export default Headers;
