"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { nextActiveTab, selectAccountInfo, updateAccountInfo, updateSelectedTab } from "@/lib/features/mutlipage/multiPageSlice";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AccountInformationSchema } from "@/schema/account-information-schema";
import { useSelector } from "react-redux";
import SubmitButton from "./submit-button";

const AccountInformationForm = () => {
  const dispatch = useDispatch();
  const accountInfo = useSelector(selectAccountInfo);
  const form = useForm<z.infer<typeof AccountInformationSchema>>({
    resolver: zodResolver(AccountInformationSchema),
    defaultValues: {
      bank: accountInfo.bank || '',
      phone: accountInfo.phone || '',
    },
  });
  const handleFormSubmit = (
    values: z.infer<typeof AccountInformationSchema>
  ) => {    
    console.log('Handle account info submit: ', values);
    dispatch(updateAccountInfo({...values}));
    dispatch(nextActiveTab());    
  };  

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <h1>Account Information</h1>
        </CardHeader>
        <CardContent className="p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                name="bank"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Add your valid name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Valid Phone for OTP"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton hasPrevious={true}/>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default AccountInformationForm;
