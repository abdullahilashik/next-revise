"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignUpSchema } from "@/schema/signin-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthButton from "./auth-button";
import AuthStatus from "./auth-status";

const AuthSignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const formSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    console.log("Sign in values: ", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(formSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Email you used for sign up"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* password */}
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel className="font-bold">Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="*************" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          name="confirmPassword"
          control={form.control}
          render={({field})=>(
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="*************" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AuthButton btnText="Sign In" loading={false} />
        {/* <AuthStatus message="Success message" error={false}/>
        <AuthStatus message="Error message" error={true}/> */}
      </form>
    </Form>
  );
};

export default AuthSignUpForm;
