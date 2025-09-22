import React from "react";
import Review from "@/components/Home/Review";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiOutlineGoogle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo/main_logo.png";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type SignupForm = z.infer<typeof signupSchema>;

const SignupTabs = () => {
  const navigate = useNavigate();
  const [role, setRole] = React.useState<"bookAssistant" | "joinAssistant">("bookAssistant");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = (data: SignupForm) => {
    const payload = { ...data, role };
    console.log("Submitting:", payload);

    if (role === "bookAssistant") navigate("/book-assistant-info");
    else navigate("/join-assistant-info");
  };

  // Shared form fields
  const FormFields = () => (
    <CardContent className="space-y-5">
      <div className="space-y-3">
        <Label htmlFor="name">Name</Label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} id="name" />}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="email">Email</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} id="email" />}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="password">Password</Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input {...field} id="password" type="password" />}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
    </CardContent>
  );

  return (
    <div className="bg-white">
      <Wrapper>
        <div className="pt-8 space-y-8">
          <img src={logo} alt="logo" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-8 lg:space-y-0 justify-center">
            {/* Single Form wraps Tabs */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-[48px] font-semibold text-center my-6 md:my-10 font-DMsans">Sign Up</h1>
              <Tabs
                defaultValue="bookAssistant"
                onValueChange={(val) => setRole(val as "bookAssistant" | "joinAssistant")}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="bookAssistant"
                    className="data-[state=active]:bg-ButtonBGSecondary data-[state=active]:text-white cursor-pointer"
                  >
                    Book An Assistant
                  </TabsTrigger>
                  <TabsTrigger
                    value="joinAssistant"
                    className="data-[state=active]:bg-ButtonBGSecondary data-[state=active]:text-white cursor-pointer"
                  >
                    Join As An Assistant
                  </TabsTrigger>
                </TabsList>

                {/* Dynamic description */}
                <p className="text-sm text-gray-700 mt-2 text-center font-DMsans font-medium">
                  {role === "bookAssistant"
                    ? "Register to book your Adminity assistant"
                    : "Register to join as an Adminity assistant"}
                </p>

                {/* Book Assistant Tab */}
                <TabsContent value="bookAssistant" className="pt-5">
                  <Card className="shadow-none border-none">
                    <FormFields />
                  </Card>
                </TabsContent>

                {/* Join Assistant Tab */}
                <TabsContent value="joinAssistant" className="pt-5">
                  <Card className="shadow-none border-none">
                    <FormFields />
                  </Card>
                </TabsContent>

                <CardFooter className="flex flex-col gap-2 pt-3">
                  <Button
                    type="submit"
                    className="w-full bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer"
                  >
                    Sign up
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <AiOutlineGoogle className="w-4 h-4" />
                    <span>Sign up with Google</span>
                  </Button>
                </CardFooter>
              </Tabs>
            </form>

            {/* Review (only on large screens) */}
            <div className="w-full lg:w-1/2 hidden lg:block">
              <Review />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SignupTabs;
