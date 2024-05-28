// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Button,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
// import { LoginUser, addUser } from "../redux/action";
// import { RESET_USER } from "../redux/actiontype";
// import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
// import Loginbanner from "../Images/capture.PNG";

// function Signup({ onClose, onOpen }) {
//   const Navigate = useNavigate();
//   const [form, setForm] = useState();

//   const [show, setShow] = useState(false);
//   const handleClick = () => setShow(!show);

//   const [showc, setShowc] = useState(false);
//   const handleClick_c = () => setShowc(!showc);

//   const dispatch = useDispatch();

//   const statuscode = useSelector((state) => state.user.statuscode);
//   // const statuscode="200"
//   const token = useSelector((state) => state.user.token);
//   // const token="guririnrnrgnoiuy8"
//   console.log(token);
//   const toast = useToast();

//   const [user, setUser] = useState({
//     userName: "",
//     fullName: "",
//     email: "",
//     password: "",
//     avatar: null,
//     cpassword: "",
//   });

//   // console.log(user)

//   // const HandleChange = (e) => {
//   //   e.preventDefault();
//   //   if (e.target.name === "file") {
//   //     setUser({ ...user, avatar: e.target.files[0] });
//   //   } else {
//   //     setUser({ ...user, [e.target.name]: e.target.value });
//   //   }
//   // };

//   const HandleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(user);
//     const { userName, fullName, email, password, cpassword, avatar } = user;
//     console.log(user.avatar);
//     // if (!avatar) {
//     //   return toast({
//     //     title: "Please select a file",
//     //     status: "error",
//     //     duration: 3000,
//     //     isClosable: true,
//     //   });
//     // }

//     const formData = new FormData();
//     formData.append('userName', userName);
//     formData.append('fullName', fullName);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('cpassword', cpassword);
//     formData.append('file', avatar);
//     console.log(formData)

//     // if (userName == "" || userName.length < 3) {
//     //   return toast({
//     //     title: "Enter Full Name",
//     //     status: "error",
//     //     duration: 3000,
//     //     isClosable: true,
//     //   });
//     // }

//     // if (!email.includes("@") || !email.includes(".com") || email.length < 12) {
//     //   return toast({
//     //     title: "Enter valid email",
//     //     status: "error",
//     //     duration: 3000,
//     //     isClosable: true,
//     //   });
//     // }

//     // if (password === "" || password.length < 6) {
//     //   return toast({
//     //     title: "Enter valid password",
//     //     status: "error",
//     //     duration: 3000,
//     //     isClosable: true,
//     //   });
//     // }

//     // if (password !== cpassword) {
//     //   return toast({
//     //     title: "Wrong Password",
//     //     status: "error",
//     //     duration: 3000,
//     //     isClosable: true,
//     //   });
//     // }

//     dispatch(addUser(formData));

//     setUser({
//       userName: "",
//       fullName: "",
//       email: "",
//       password: "",
//       cpassword: "",
//       avatar:null
//     });
//   };

//   useEffect(() => {
//     if (statuscode == "201") {
//       toast({
//         title: "Login successfull",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       // onClose()
//     } else if (statuscode == "200") {
//       toast({
//         title: "Signup successfull",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       // onClose();
//       // onOpen();
//     } else if (statuscode == "409") {
//       toast({
//         title: "Email Already Exist",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//     dispatch({ type: RESET_USER, payload: "" });
//   }, [statuscode]);

//   return (
//     <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
//       <div className="md:w-1/3 max-w-sm">
//         <img src={Loginbanner} alt="Sample image" />
//       </div>
//       <div className="md:w-1/3 max-w-sm">
//         <div className="flex justify-center py-4 items-center gap-6 ">
//           <Text className="text-center text-[24px] font-[600] ">ArBa App</Text>
//         </div>

//         <form onSubmit={HandleSubmit}>
//           <InputGroup size="md" mb="4">
//             <Input
//               className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
//               type="text"
//               name="userName"
//               placeholder="Username"
//               // onChange={(e) => HandleChange(e)}
//               onChange={(e) =>
//               setUser((prevFormData) => ({
//                 ...prevFormData,
//                 userName: e.target.value,
//               }))
//             }
//             />
//             <InputRightElement width="4.5rem"></InputRightElement>
//           </InputGroup>

//           <InputGroup size="md" mb="4">
//             <Input
//               className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
//               type="text"
//               name="fullName"
//               placeholder="Fullname"
//               // onChange={(e) => HandleChange(e)}
//               onChange={(e) =>
//               setUser((prevFormData) => ({
//                 ...prevFormData,
//                 fullName: e.target.value,
//               }))
//             }

//             />
//             <InputRightElement width="4.5rem"></InputRightElement>
//           </InputGroup>

//           <InputGroup size="md" mb="4">
//             <Input
//               className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
//               type="email"
//               name="email"
//               placeholder="Email"
//               // onChange={(e) => HandleChange(e)}
//               onChange={(e) =>
//               setUser((prevFormData) => ({
//                 ...prevFormData,
//                 email: e.target.value,
//               }))
//             }
//             />
//             <InputRightElement width="4.5rem"></InputRightElement>
//           </InputGroup>

//           <InputGroup size="md" mb="4">
//             <Input
//               className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
//               type="file"
//               name="avatar"
//               accept="*/*"
//               // onChange={(e) => HandleChange(e)}
//               onChange={(e) => {
//                             const file = e.target.files[0];
//                             setUser((prevFormData) => ({
//                               ...prevFormData,
//                               avatar: file,
//                             }));
//                           }}

//             />
//             <InputRightElement width="4.5rem"></InputRightElement>
//           </InputGroup>

//           <InputGroup size="md" mb="4">
//             <Input
//               className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
//               type={show ? "password" : "text"}
//               name="password"
//               placeholder="Password"
//               // onChange={(e) => HandleChange(e)}
//               onChange={(e) =>
//               setUser((prevFormData) => ({
//                 ...prevFormData,
//                 password: e.target.value,
//               }))
//             }
//             />
//             <InputRightElement width="4.5rem">
//               <Button h="1.75rem" size="sm" bg="white" onClick={handleClick}>
//                 {show ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
//               </Button>
//             </InputRightElement>
//           </InputGroup>

//           <InputGroup size="md" display="flex" alignItems="center">
//             <Input
//               className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
//               type={showc ? "password" : "text"}
//               name="cpassword"
//               placeholder="Confirm password"
//               // onChange={(e) => HandleChange(e)}
//               onChange={(e) =>
//               setUser((prevFormData) => ({
//                 ...prevFormData,
//                 cpassword: e.target.value,
//               }))
//             }
//             />
//             <InputRightElement width="4.5rem">
//               <Button h="1.75rem" size="sm" bg="white" onClick={handleClick_c}>
//                 {showc ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
//               </Button>
//             </InputRightElement>
//           </InputGroup>
//           <input
//             // onChange={(e) => HandleChange(e)}
//             className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-[#8898ee] text-white"
//             type="submit"
//           />
//         </form>
//         <div className="mt-4 flex justify-between font-semibold text-sm">
//           <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
//             <input className="mr-1" type="checkbox" />
//             <span>Remember Me</span>
//           </label>
//           <a
//             className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
//             href="#"
//           >
//             Forgot Password?
//           </a>
//         </div>
//         {/* <div className="text-center md:text-left">
//         <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
//       </div> */}
//         <div
//           onClick={() => {
//             Navigate("/login");
//           }}
//           className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left"
//         >
//           If you have Alredy Registered?{" "}
//           <a
//             className="text-red-600 hover:underline hover:underline-offset-4"
//             href="#"
//           >
//             Login
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Signup;

// ======================================================================================================>

    import React, { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { useDispatch, useSelector } from "react-redux";
    import {
      Avatar,
      Button,
      Input,
      InputGroup,
      InputRightElement,
      Text,
      useToast,
    } from "@chakra-ui/react";

    import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { RESET_USER } from "../../redux/actiontype";
import { addUser } from "../../redux/action";
    
    
    function Signup({ onClose, onOpen }) {
      const Navigate = useNavigate();
      const [form, setForm] = useState();
    
      const [show, setShow] = useState(false);
      const handleClick = () => setShow(!show);
    
      const [showc, setShowc] = useState(false);
      const handleClick_c = () => setShowc(!showc);
    
      const dispatch = useDispatch();
    
    //   const statuscode = useSelector((state) => state.user.statuscode);
    
      const token = useSelector((state) => state.user.token);
    
      console.log(token);
      const toast = useToast();
    
      const [user, setUser] = useState({
        userName: "",
        fullName: "",
        email: "",
        password: "",
        cpassword: "",
        avatar:"https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
      });
    
      // console.log(user)
    
      const HandleChange = (e) => {
        e.preventDefault();
        // if (e.target.name === 'file') {
        //   setUser({ ...user, [e.target.name]: e.target.files[0] });
        // } else {
        //   setUser({ ...user, [e.target.name]: e.target.value });
        // }
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const HandleSubmit = async (e) => {
        e.preventDefault();
        const { userName, fullName, email, password, cpassword,avatar} = user;
    
        if (userName === "") {
          return toast({
            title: "Enter User Name",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
    
        if (fullName=== "") {
          return toast({
            title: "Enter full name",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
    
        if (!email.includes("@") || !email.includes(".com") || email.length < 12) {
          return toast({
            title: "Enter valid email",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
    
        if (password === "" || password.length < 6) {
          return toast({
            title: "Enter valid password",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
    
        if (password !== cpassword) {
          return toast({
            title: "Wrong Password",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
    
        dispatch(addUser(user));
    
        // Clear form fields after submission
        setUser({
          userName: "",
          fullName: "",
          email: "",
          password: "",
          cpassword: "",
          avatar:""
        });
      };
    
    //   useEffect(() => {
    //     if (statuscode === "201") {
    //       toast({
    //         title: "Login successful",
    //         status: "success",
    //         duration: 3000,
    //         isClosable: true,
    //       });
    //     } else if (statuscode === "200") {
    //       toast({
    //         title: "Signup successful",
    //         status: "success",
    //         duration: 3000,
    //         isClosable: true,
    //       });
    //     } else if (statuscode === "409") {
    //       toast({
    //         title: "Email Already Exists",
    //         status: "error",
    //         duration: 3000,
    //         isClosable: true,
    //       });
    //     }
    //     dispatch({ type: RESET_USER, payload: "" });
    //   }, [statuscode]);
    
      return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <img src='https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg' alt="Sample image" />
          </div>
          <div className="md:w-1/3 max-w-sm">
            <div className="flex justify-center py-4 items-center gap-6 ">
              <Text className="text-center text-[24px] font-[600] ">ArBa App</Text>
            </div>
    
            <form onSubmit={HandleSubmit}>
              <InputGroup size="md" mb="4">
                <Input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type="text"
                  name="userName"
                  placeholder="Username"
                  onChange={(e) => HandleChange(e)}
                />
                <InputRightElement width="4.5rem"></InputRightElement>
              </InputGroup>
    
              <InputGroup size="md" mb="4">
                <Input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type="text"
                  name="fullName"
                  placeholder="Fullname"
                  onChange={(e) => HandleChange(e)}
                />
                <InputRightElement width="4.5rem"></InputRightElement>
              </InputGroup>
    
              <InputGroup size="md" mb="4">
                <Input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => HandleChange(e)}
                />
                <InputRightElement width="4.5rem"></InputRightElement>
              </InputGroup>
    
              {/* <InputGroup size='md' mb='4'>
          <Input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="file"
                name="file"
                accept="file/*"
                onChange={(e) => HandleChange(e)}
          />
          <InputRightElement width='4.5rem'>
            
          </InputRightElement>
        </InputGroup> */}
    
              <InputGroup size="md" mb="4">
                <Input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type={show ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  onChange={(e) => HandleChange(e)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" bg="white" onClick={handleClick}>
                    {show ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
    
              <InputGroup size="md" display="flex" alignItems="center">
                <Input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type={showc ? "password" : "text"}
                  name="cpassword"
                  placeholder="Confirm password"
                  onChange={(e) => HandleChange(e)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" bg="white" onClick={handleClick_c}>
                    {showc ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <input
                onChange={(e) => HandleChange(e)}
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-[#8898ee] text-white"
                type="submit"
              />
            </form>
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            {/* <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
          </div> */}
            <div
              onClick={() => {
                Navigate("/login");
              }}
              className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left"
            >
              If you have Alredy Registered?{" "}
              <a
                className="text-red-600 hover:underline hover:underline-offset-4"
                href="#"
              >
                Login
              </a>
            </div>
          </div>
        </section>
      );
    }
    
    export default Signup;
    