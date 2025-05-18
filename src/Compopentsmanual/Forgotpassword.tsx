import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FC } from "react";

// 1. Define types for form values
interface FormValues {
  email: string;
}

// 2. Define initial values
const initialValues: FormValues = {
  email: "",
};

// 3. Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

// 4. Component
const ForgotPassword: FC = () => {
  const onSubmit = (values: FormValues) => {
    alert("Submitted: " + values.email);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Forgot Password</h2>

        <Formik<FormValues>
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Field
                as={Input}
                name="email"
                id="email"
                placeholder="you@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <Button variant="outline" type="submit" className="w-full">
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
