import React, { useState } from 'react';
// You may need to change the import for 'supabase' based on your project structure
import { supabase } from './shupabase';
import dashBoard from './images/dash-mockup.jpg';

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '', // Fix the name attribute here, it should match the state key
    password: '',
  });

  // Use a consistent naming convention, like camelCase, for variable names
  const backgroundImageUrl =
    'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/summer-background-abstract-background-wallpaper-use-for-presentation_HDDYoJOhMg_thumb.jpg';

  console.log(formData);

  // Use the same function name for consistency (handleLogin instead of handleChange)
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      alert('Check your Email for verification link');
      console.log(data);
    } catch (error) {
      alert(error.message); // Use error.message to get the error message
      console.log(error);
    }
  }

  // Use consistent naming for function parameters (event instead of e)
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between overflow-hidden fixed">
        <div className="flex flex-row justify-between w-screen h-screen">
          <form
            className="my-10 ml-10 align-items-center"
            onSubmit={handleLogin}
          >
            <h1 className="font-bold text-5xl">Sign in</h1>
            <br />
            <label> FullName </label>
            <br />
            <br />
            <input
              name="fullName"
              type="text"
              placeholder="FullName"
              className="border-4 border-blue rounded-lg"
              onChange={handleChange}
            />
            <br />
            <label> Email Address </label>
            <br />
            <br />
            <input
              name="email" // Fix the name attribute here
              type="text"
              placeholder="codesastra@email.com"
              className="border-6 border-black rounded-lg"
              onChange={handleChange}
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Your@email.com"
              className="border-6 border-black rounded-lg"
              onChange={handleChange} // Add onChange to capture password input
            />
            <br />
            <br />
            <button
              className="border-6 border-black rounded-full w-full h-8 bg-blue-900 text-white"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
        <div
          className="flex flex-col justify-center overflow-hidden bg-center bg-cover col-lg-7 max-lg:hidden"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`, // Fix the interpolation syntax
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        >
          <img
            src={dashBoard}
            alt="MagicAI Dashboard Mockup"
            className="rounded-[36px] shadow-[0_24px_88px_rgba(0,0,0,0.55)] translate-x-[27%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;