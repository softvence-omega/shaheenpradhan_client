import React from "react";
import Review from "@/components/Home/Review";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import logo from "@/assets/logo/main_logo.png";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type LoginForm = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Login submit:", data);
    navigate("/user");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Wrapper>
        {/* ✅ Logo always on top */}
        <div className="pt-8">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16 mt-10">
          {/* Left: Login */}
          <div className="w-full lg:w-1/2 space-y-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl md:text-[40px] font-semibold font-DMsans">
                  Log In
                </h1>
                <p className="text-gray-600 text-sm mt-2">
                  Log in to book your Adminity assistant
                </p>
              </div>

              <Card className="shadow-none border-none">
                <CardContent className="space-y-5">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder="Enter your email" id="email" type="email" />
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-3">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            className="pr-10"
                            placeholder="Enter your password"
                          />
                        )}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                      >
                        {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 pt-3">
                  <Button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600"
                  >
                    Log in
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <AiOutlineGoogle className="w-4 h-4" />
                    <span>Log in with Google</span>
                  </Button>
                </CardFooter>
              </Card>

              <p className="text-center mt-4 text-sm font-DMsans">
                Don’t have an account?
                <Link
                  to="/signup"
                  className="text-BorderHighlight font-medium hover:underline ml-1"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>

          {/* Right: Testimonial/Review */}
          <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
            <Review />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LoginPage;
