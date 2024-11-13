"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignInSchema } from "@/schema/signin-schema";
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
import { handleLogin } from "@/actions/auth-action";

const AuthLoginForm = () => {
  const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string}>({
    success: false,
    message: ''
  });
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "ashik@gmail.com",
      password: "test",
    },
  });
  const formSubmit = async (values: z.infer<typeof SignInSchema>) => {
    console.log("[client] Sign in values: ", values);
    const response = await handleLogin(values);  
    setStatusMessage(response);  
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
        <AuthButton btnText="Sign In" loading={false} />
        <AuthStatus message={statusMessage?.message} error={!statusMessage?.success}/>
        {/* <AuthStatus message="Error message" error={true}/> */}
      </form>
    </Form>
  );
};

export default AuthLoginForm;
