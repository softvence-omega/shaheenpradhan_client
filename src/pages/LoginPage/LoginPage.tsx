import Review from "@/components/home/Review";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs} from "@/components/ui/tabs";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "@/assets/logo/main_logo.png";
const LoginPage = () => {

  // FOR ANY USER LOGIN AND SIGNIN
  const handleBookAnAssistant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleBookAnAssistant");
  };
  // const handleJoinAsAssistant = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("handleJoinAsAssistant");
  // };
  return (
    <div className="bg-white">
      <Wrapper>
        <div className="mt-8 space-y-10">
          <img src={logo} alt="" />
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
                  <CardFooter className="flex flex-col gap-2 pt-3">
                    <Button className="w-full bg-BorderHighlight hover:bg-BorderHighlight">
                      Login
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <AiOutlineGoogle className="w-4 h-4" />
                      <span>Login with Google</span>
                    </Button>
                  </CardFooter>
                </form>
                <div className="text-center mt-3">
                  <p className="text-sm">
                    Don't have an account?
                    <Link
                      to="/signups"
                      className="text-primary hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </Card>
            </Tabs>
            {/* Review Component */}
            <div className="w-full lg:w-1/2">
              <Review />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LoginPage;
