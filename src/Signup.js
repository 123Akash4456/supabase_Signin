// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { supabase } from './shupabase';

// const SignUp = () => {

//   const [fullName,setfullName] = useState("")
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   console.log(email, password);



  
//     const handleSignup = async () => {
//       try {
//         const { data, error } = await supabase.auth.SignUp({
//           fullName:fullName,
//           email: email,
//           password: password,
          
//         });
//         if (error) throw error;
//         alert("Check your email for verification link");
//         console.log(data)
//       } catch (error) {
//         alert(error);
//       }
//     }


//   return (
//     <div className="bg-gray-200 p-4">
//     <h2 className="text-2xl font-bold mb-4">Signup</h2>

//     <label className="block mb-2">fullName:</label>
//     <input
//       type="text"
//       value={fullName}
//       onChange={(e) => setfullName(e.target.value)}
//       className="w-full p-2 border rounded"
//     />
//     <label className="block mb-2">Email:</label>
//     <input
//       type="text"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       className="w-full p-2 border rounded"
//     />
//     <label className="block mb-2">Password:</label>
//     <input
//       type="password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       className="w-full p-2 border rounded"
//     />
//     <button
//       onClick={handleSignup}
//       className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//     >
//       SignUp
//     </button>
//   </div>
// );
// };

//       <div>
//       Already have an account?<Link to='/'>Login</Link> 
//     </div>
  


// export default SignUp