import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FC, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { set } from "date-fns";

const LoginForm: FC = () => {
  
  interface FormValues {
    email: string;
    password: string;
  }

  const [viewPassword, setViewPassword] = useState(false);

  const [submit,setsubmit] =useState(false)

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values: FormValues) => {
    console.log(values);
     setsubmit(true)
    try {
       const response =  await axios.post("htt",values)
       console.log(response.data.msg)
      
    } catch (error) {
       
    } finally{
setsubmit(false)
    }

  };

  const handlePasswordToggle = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>
              Login with your email and password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      placeholder="m@example.com"
                      type="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-400"
                    />
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        to="/Forgotpassword"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>

                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type={viewPassword ? "text" : "password"}
                      placeholder="••••••••"
                    />
                    <p
                      onClick={handlePasswordToggle}
                      className="text-xs cursor-pointer underline text-blue-600"
                    >
                      {viewPassword ? "Hide" : "Show"} password
                    </p>

                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-400"
                    />
                  </div>

                  <Button
                   type="submit"
                    className="w-full"
                  disabled={submit} 
                    >
                    {submit?"Login..... ":'Login'}
                  </Button>

                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="/ragester" className="underline underline-offset-4">
                      Sign up
                    </Link>
                  </div>
                </div>
              </Form>
            </Formik>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
