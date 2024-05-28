import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";


import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";

import { AiTwotoneEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
// import Loginbanner from '../../Images/capture.png'
import { LoginUser, getUser } from "../../redux/action";
import { RESET_USER } from "../../redux/actiontype";

function Login() {
  const Navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();
  const statuscode = useSelector((state) => state.user.statuscode);
  // const statuscode="200"
  const token = useSelector((state) => state.user.token);
  // const token="guririnrnrgnoiuy8"
  // console.log(token);
  const toast = useToast();
  const userDataObj = JSON.parse(localStorage.getItem("userdata"));

  // const { userid } = userDataObj;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (!email.includes("@") && !email.includes(".com")) {
      toast({
        title: "Enter valid email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (password === "" || password.length < 6) {
      toast({
        title: "Enter valid password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    dispatch(LoginUser(user)).then(()=>{
      dispatch(getUser(""))
    })

    setUser({
      email: "",
      password: "",
    });

    Navigate("/");
     };

 useEffect(() => {
    // Check if token exists
    if (token) {
      // Reload the page
      window.location.reload();
    }
  }, [token]);
  // console.log(user);
  // const [userj, setUserj] = useState();

  useEffect(() => {
    if (statuscode == "200" || statuscode == "201") {
      toast({
        title: "Login successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else if (statuscode == "409") {
      toast({
        title: "Email Does Not Exist!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (statuscode == "410") {
      toast({
        title: "Incorrect Password!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch({ type: RESET_USER, payload: "" });
  }, [statuscode]);

 
  useEffect(() => {
    const Token = localStorage.getItem("Token");
    if (Token) {
      Navigate("/");
    }
  }, []);
  

  return (
    <section className="h-screen flex flex-col  md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src='https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg' alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="flex justify-center py-4 items-center gap-6 ">
          <Text className="text-center text-[24px] font-[600] ">ArBa App</Text>
        </div>

        <form onSubmit={handleSubmit} className="">
          <InputGroup size="md" mb="4">
            <Input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) => handleChange(e)}
            />
            <InputRightElement width="4.5rem"></InputRightElement>
          </InputGroup>

          <InputGroup size="md" display="flex" alignItems="center">
            <Input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type={show ? "password" : "text"}
              name="password"
              placeholder="password"
              onChange={(e) => handleChange(e)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" bg="white" onClick={handleClick}>
                {show ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <input
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
          onClick={()=>{
            Navigate('/forgetpassword')
          }}
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
           
          >
            Forgot Password?
          </a>
        </div>

        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left"
        >
          Don't have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
