import { useState } from 'react';
import axios from 'axios';

const url = 'https://course-api.com/axios-tutorial-post';

const PostRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(url, {name, email});
        console.log(response.data);
    }
    catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className="p-5 bg-blue-500 flex flex-col gap-5">
      <span className="text-center text-2xl text-white">Post Request</span>
      <form className="form bg-white p-2 rounded flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <div className='form-row flex flex-col gap-1 w-full'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-input border border-gray-500 rounded'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row flex flex-col gap-1 w-full'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input border border-gray-500 rounded'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='py-2 px-4 bg-blue-500 w-max rounded text-white hover:bg-blue-200 hover:text-black'>
          Login
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
