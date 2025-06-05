import Review from "@/components/home/Review";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "@/assets/logo/main_logo.png";
export function SignupTabs() {
  const handleBookAnAssistant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleBookAnAssistant");
  };

  return (
    <div className="bg-white h-screen">
      <Wrapper>
        <div className="mt-8 space-y-8">
          <img src={logo} alt="" />
          <h1 className="text-3xl lg:text-4xl font-semibold">Sign Up</h1>

          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-8 lg:space-y-0">
            {/* Tabs Form */}
            <Tabs defaultValue="account" className="w-full lg:w-1/2">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:bg-ButtonBGSecondary data-[state=active]:text-white"
                >
                  Book An Assistant
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="data-[state=active]:bg-ButtonBGSecondary data-[state=active]:text-white"
                >
                  Join As An Assistant
                </TabsTrigger>
              </TabsList>

              <p className=" text-sm text-gray-600 mt-2">
                Register to book your Adminity assistant
              </p>

              {/* Book Assistant */}
              <TabsContent value="account" className="pt-5">
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
                    <Link to="/company-yourself">
                      <CardFooter className="flex flex-col gap-2 pt-3">
                        <Button className="w-full bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer">
                          Sign up
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full flex items-center justify-center gap-2"
                        >
                          <AiOutlineGoogle className="w-4 h-4" />
                          <span>Sign up with Google</span>
                        </Button>
                      </CardFooter>
                    </Link>
                  </form>
                  <div className="text-center mt-3">
                    <p className="text-sm">
                      Already have an account?{" "}
                      <Link
                        to="/logins"
                        className="text-primary hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* Join as Assistant */}
              <TabsContent value="password" className="pt-5">
                <Card className=" shadow-none">
                  <form onSubmit={handleBookAnAssistant} className="space-y-2">
                    <CardContent className="space-y-5">
                      <div className="space-y-3">
                        <Label htmlFor="name2">Name</Label>
                        <Input
                          name="name"
                          id="name2"
                          defaultValue="Pedro Duarte"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email2">Email</Label>
                        <Input
                          name="email"
                          id="email2"
                          defaultValue="assistant@example.com"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="password2">Password</Label>
                        <Input name="password" id="password2" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2 pt-3 w-full">
                      <Link to="/company-yourself" className="w-full">
                        <Button className="w-full bg-BorderHighlight hover:bg-BorderHighlight">
                          Sign up
                        </Button>
                      </Link>

                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2"
                      >
                        <AiOutlineGoogle className="w-4 h-4" />
                        <span>Sign up with Google</span>
                      </Button>
                    </CardFooter>
                  </form>
                  <div className="text-center mt-3">
                    <p className="text-sm">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-primary hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </Card>
              </TabsContent>
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
}
