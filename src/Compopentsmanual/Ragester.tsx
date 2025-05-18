import *as  Yup from "yup"
import { Formik, Field, ErrorMessage, Form } from "formik"
import axios from "axios"
import { FC } from 'react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"


interface FormValues {
    email: string,
    password: string,
    fullname: string,
    phone: string,
}
const Ragester: FC = () => {
    const inatialValues: FormValues = {
        email: "",
        password: "",
        fullname: '',
        phone: "",

    }
    const Validationschima = Yup.object({
        email: Yup.string().email("Invalid Email").required("Email is required  "),
        password: Yup.string().required("Password is required ").min(6, "password must be at least 6 Characters long "),
        fullname: Yup.string().required('Full Name is required '),
        phone: Yup.number().required('phone number is required '),
    })
    const onSubmit = async (values: FormValues) => {
        console.log()
    }


    return (
        <div className=" flex items-center justify-center bg-slate-100  h-screen ">
            <div className="flex flex-col gap-6 xl:w-1/3  w-[90%]">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Formik onSubmit={onSubmit} initialValues={inatialValues} validationSchema={Validationschima}>
                            <Form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Field
                                            as={Input}
                                            name="email"
                                            id="email"
                                           
                                            placeholder="m@example.com"

                                        />
                                        {<ErrorMessage name='email' component='div' className="text-red-500 text-sm " />}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Full Name </Label>
                                        <Field
                                            as={Input}
                                            name="fullname"
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"

                                        />
                                        {<ErrorMessage name="fullname" component='div' className=" text-sm text-red-400 " />}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Phone Number</Label>
                                        <Field
                                            as={Input}
                                            name='phone'
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"

                                        />
                                        {<ErrorMessage name='phone' component='div' className="text-red-500 text-sm " />}
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>

                                        </div>
                                        <Field
                                            as={Input}
                                            name='password'
                                            id="password"
                                            type="password"
                                            placeholder="********"
                                        />
                                    </div>
                                    {<ErrorMessage name='password' component='div' className="text-red-500 text-sm " />}
                                    <Button type="submit" className="w-full">
                                        Login
                                    </Button>

                                </div>
                                <div className="mt-4 text-center text-sm">
                                    Don&apos;t have an account?{" "}
                                    <Link to='/' className="underline underline-offset-4">
                                        I alredy have a account please
                                    </Link>
                                </div>
                            </Form>
                        </Formik>
                    </CardContent>
                </Card>
            </div>
        </div>


    )
}
export default Ragester