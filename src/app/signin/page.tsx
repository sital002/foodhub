

const SignIn = () => {
  return (
    <div className="border-1 border-gray-500 shadow-md shadow-black h-[450px] w-[380px] rounded-md py-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center" >
      <h1 className="text-center text-3xl mb-5 font-semibold">Sign In</h1>
      <input placeholder="Email" className=" border p-1 h-[40px] rounded-md w-[90%] my-2" type="email" />
      <input placeholder="Password" className=" border p-1 h-[40px] rounded-md w-[90%] my-2" type="password" />
      <button className="w-[90%] h-[40px] rounded-md cursor-pointer bg-red-500 text-white my-3">Sign In</button>
      <a className="text-sm text-blue-500 my-5" href="">Having trouble logging in?</a>
      <button className="w-[90%] rounded-md cursor-pointer border h-[40px]">Sign Up</button>
    </div>
  )
}

export default SignIn