

const SignIn = () => {
  return (
    <div className="border-1 border-gray-500 shadow-md shadow-black h-[450px] w-[380px] rounded-md py-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center" >
      <h1 className="text-center text-3xl mb-5 font-semibold">Sign Up</h1>
      <input placeholder="Username" className=" border-t-0 border-l-0 border-r-0 border-b-2  p-1 h-[40px] ou outline-none focus:placeholder-transparent  w-[90%] my-2  pl-2  focus:border-b-red-500 transition-all duration-100" type="text" />
      <input placeholder="Email" className=" border-t-0 border-l-0 border-r-0 border-b-2 p-1 h-[40px] outline-none w-[90%] my-2 pl-2 focus:placeholder-transparent  focus:border-b-red-500 transition-all duration-100" type="email" />
      <input placeholder="Password" className=" border-t-0 border-l-0 border-r-0 border-b-2 p-1 h-[40px] outline-none w-[90%] my-2 pl-2 focus:placeholder-transparent focus:border-b-red-500 transition-all duration-100" type="password" />
      <button className="w-[90%] h-[40px] rounded-md cursor-pointer bg-red-500 text-white my-3">Sign Up</button>
      <a className="text-sm text-blue-500 my-5" href="">Having trouble logging in?</a>
      <button className="w-[90%] rounded-md cursor-pointer border h-[40px]">Sign In</button>
    </div>
  )
}

export default SignIn