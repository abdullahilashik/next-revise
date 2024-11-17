"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PersonalInformationSchema } from "@/schema/personal-information-schema";
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
import { nextActiveTab, selectPersonalInfo, updatePersonalInfo, updateSelectedTab } from "@/lib/features/mutlipage/multiPageSlice";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import SubmitButton from "./submit-button";

const PersonalInformaitonForm = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector(selectPersonalInfo);
  
  const form = useForm<z.infer<typeof PersonalInformationSchema>>({
    resolver: zodResolver(PersonalInformationSchema),
    defaultValues: {
      name: personalInfo.name || '',
      email: personalInfo.email || '',
      website: personalInfo.website || '',
    },
  });
  const handleFormSubmit = (
    values: z.infer<typeof PersonalInformationSchema>
  ) => {        
    dispatch(updatePersonalInfo({...values}));    
    dispatch(updateSelectedTab({id: 2}));
  };
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <h1>Personal Information</h1>
        </CardHeader>
        <CardContent className="p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
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
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="website"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input type="url" placeholder="website" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton hasPrevious={false} />
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default PersonalInformaitonForm;
