import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs } from "@/components/ui/tabs";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "@/assets/logo/main_logo.png";
import useCreateResource from "@/hooks/useCreateResource";
import Review from "@/components/Home/Review";
const LoginPage = () => {
  const createUser = useCreateResource();

  // FOR ANY USER LOGIN AND SIGNIN
  const handleBookAnAssistant = (e: React.FormEvent<HTMLFormElement>) => {
    /*  e.preventDefault();
    console.log("handleBookAnAssistant");
    const form = e.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const data = { name, email, password };
    console.log(data, "data"); */
    // createUser.mutate(data);
  };
  // const handleJoinAsAssistant = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("handleJoinAsAssistant");
  // };
  return (
    <div className="bg-white">
      <Wrapper>
        <div className="pt-8 space-y-8 mx-auto">
          <Link to="/">
            <img src={logo} alt="Image" />
          </Link>
          <h1 className="text-3xl lg:text-4xl font-semibold">Login</h1>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-8 lg:space-y-0">
            {/* Tabs Form */}
            <Tabs defaultValue="account" className="w-full lg:w-1/2 space-y-2">
              <p className=" text-sm text-gray-600 mt-2">
                Log in to book your Adminity assistant
              </p>
              <Card className=" shadow-none">
                <form onSubmit={handleBookAnAssistant} className="space-y-2">
                  <CardContent className="space-y-5">
                    <div className="space-y-3">
                      <Label htmlFor="name">Name</Label>
                      <Input name="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        name="email"
                        id="email"
                        defaultValue="user@example.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="password">Password</Label>
                      <Input name="password" id="password" type="password" />
                    </div>
                  </CardContent>
                  <Link to="/user">
                    <CardFooter className="flex flex-col gap-2 pt-3">
                      <Button
                        type="submit"
                        className="w-full bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer"
                      >
                        Login
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <AiOutlineGoogle className="w-4 h-4" />
                        <span>Login with Google</span>
                      </Button>
                    </CardFooter>
                  </Link>
                </form>
                <div className="text-center mt-3">
                  <p className="text-sm">
                    Don't have an account?
                    <Link
                      to="/signups"
                      className="text-blue-600 hover:underline cursor-pointer ml-1"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </Card>
            </Tabs>
            {/* Review Component */}
            <div className="w-full lg:w-1/2 hidden lg:block">
              <Review />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LoginPage;

// import { useLogin } from "@/hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import Review from "@/components/home/Review";
// import Wrapper from "@/components/shared/Wrapper";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs } from "@/components/ui/tabs";
// import { AiOutlineGoogle } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import logo from "@/assets/logo/main_logo.png";

// const LoginPage = () => {
//   const login = useLogin();
//   const navigate = useNavigate();

//   const handleBookAnAssistant = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     const payload = { email, password };

//     login.mutate(payload, {
//       onSuccess: (data) => {
//         localStorage.setItem("accessToken", data.token);
//         navigate("/user/home");
//       },
//       onError: (err) => {
//         console.error("Login error:", err);
//       },
//     });
//   };

//   return (
//     <div className="bg-white">
//       <Wrapper>
//         <div className="mt-8 space-y-10">
//           <img src={logo} alt="" />
//           <h1 className="text-3xl lg:text-4xl font-semibold">Login</h1>
//           <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-8 lg:space-y-0">
//             <Tabs defaultValue="account" className="w-full lg:w-1/2 space-y-2">
//               <p className="text-sm text-gray-600 mt-2">
//                 Log in to book your Adminity assistant
//               </p>
//               <Card className="shadow-none">
//                 <form onSubmit={handleBookAnAssistant} className="space-y-2">
//                   <CardContent className="space-y-5">
//                     <div className="space-y-3">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         name="email"
//                         id="email"
//                         defaultValue="user@example.com"
//                       />
//                     </div>
//                     <div className="space-y-3">
//                       <Label htmlFor="password">Password</Label>
//                       <Input name="password" id="password" type="password" />
//                     </div>
//                   </CardContent>

//                   <CardFooter className="flex flex-col gap-2 pt-3">
//                     <Button
//                       type="submit"
//                       className="w-full bg-BorderHighlight hover:bg-BorderHighlight"
//                     >
//                       Login
//                     </Button>

//                     <Button
//                       variant="outline"
//                       className="w-full flex items-center justify-center gap-2"
//                     >
//                       <AiOutlineGoogle className="w-4 h-4" />
//                       <span>Login with Google</span>
//                     </Button>
//                   </CardFooter>
//                 </form>
//                 <div className="text-center mt-3">
//                   <p className="text-sm">
//                     Don't have an account?{" "}
//                     <Link
//                       to="/signups"
//                       className="text-primary hover:underline"
//                     >
//                       Sign up
//                     </Link>
//                   </p>
//                 </div>
//               </Card>
//             </Tabs>
//             <div className="w-full lg:w-1/2 hidden lg:block">
//               <Review />
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </div>
//   );
// };

// export default LoginPage;
