"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValidationSchema } from "@/schema/form-validation";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormDataInterface } from "@/types/user-address-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";

const FormValidationPage = () => {  
  const form = useForm<z.infer<typeof FormValidationSchema>>({
    resolver: zodResolver(FormValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      gender: "",
      address: { city: "", state: "", zipCode: "" }, // {city: '', state: ''},
      hobbies: [{ name: "" }], //[{name: ''}],
      startDate: new Date(),
      subscribe: false,
      hasReferral: false,
      referral: "",
    },
  });

  const { fields, remove, append } = useFieldArray<
    z.infer<typeof FormValidationSchema>
  >({
    control: form.control,
    name: "hobbies",
  });

  const handleFormSubmit = (values: z.infer<typeof FormValidationSchema>) => {
    console.log("Form submitted: ", values);
  };

  return (
    <section>
      <div className="container">
        <h1>Form Validation</h1>
        <div className="mt-3">
          <Card>
            <CardHeader>
              <h1 className="font-bold text-lg">Form Validation</h1>
              <p>with zod + react hook form + shadcn + typescript</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                  {/* name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Enter a valid name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* last name */}
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="mt-3">
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Provide a last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            placeholder="Provide a valid email address of minimum 8 characters"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* age */}
                  <FormField
                    name="age"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="How old are you? 18-72"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Address Line Custom */}
                  <FormField
                    name="address.city"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="What city are you from?"
                          />
                        </FormControl>
                        {form.formState.errors?.address?.city && (
                          <span className="text-[12px] font-light text-red-600">
                            {form.formState.errors.address.city.message}
                          </span>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="address.state"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>state</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="What state are you from?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="address.zipCode"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="What state are you from?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Hobbies */}
                  <FormItem>
                    <FormLabel>Hobbies*</FormLabel>
                    <div className="space-y-2">
                      {fields.map((field, index) => (
                        <div
                          key={field.id}
                          className="flex items-start w-full flex-col gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <FormControl>
                              <Input
                                {...form.register(`hobbies.${index}.name`)}
                                placeholder="Enter hobby"
                              />
                            </FormControl>
                            <Button
                              variant="secondary"
                              type="button"
                              onClick={() => remove(index)}
                            >
                              Remove
                            </Button>
                          </div>
                          <span className="text-red-600 font-light text-[13px]">
                            {
                              form.formState.errors.hobbies?.[index]?.name
                                ?.message
                            }
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={() => append({ name: "" })}
                      className="mt-2"
                    >
                      Add Hobby
                    </Button>
                    <p className="text-red-600 font-light text-[13px]">
                      {form.formState.errors.hobbies?.message}
                    </p>
                  </FormItem>
                  {/* gender */}
                  <FormItem>
                    <FormLabel>Gender*</FormLabel>
                    <Controller
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <Select {...field} onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Specify your gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="shemale">Complicated</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {form.formState.errors.gender && (
                      <span className="text-red-600 font-light text-[14px]">
                        {form.formState.errors.gender.message}
                      </span>
                    )}
                    <FormMessage />
                  </FormItem>
                  {/* start date */}
                  <div className="mt-3">
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <Controller
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            className="rounded-md border"
                          />
                        )}
                      />
                      {form.formState.errors.startDate && (
                        <p className="text-red-600 font-light text-[14px]">
                          {form.formState.errors.startDate?.message}
                        </p>
                      )}
                    </FormItem>
                  </div>
                  {/* subscription */}
                  <div className="mt-3">
                    <FormField 
                        control={form.control}
                        name="subscribe"
                        render={({field})=>(
                            <FormItem className="inline-flex gap-2 items-center">
                                <FormControl>
                                    <Checkbox id="sub" checked={field.value} onCheckedChange={field.onChange}/>
                                </FormControl>
                                <FormLabel htmlFor="sub">Subcribe to newsletter</FormLabel>                            
                            </FormItem>
                        )}
                    />
                  </div>
                  {/* has referral */}
                  <div className="mt-3">
                    <FormField 
                        control={form.control}
                        name="hasReferral"
                        render={({field})=>(
                            <FormItem className="inline-flex gap-2 items-center">
                                <FormControl>
                                    <Checkbox id="ref" checked={field.value} onCheckedChange={field.onChange}/>
                                </FormControl>
                                <FormLabel htmlFor="ref">Has referral *</FormLabel>                            
                            </FormItem>
                        )}
                    />
                  </div>
                  {
                    form.getValues('hasReferral') && (
                        <FormField 
                            name="referral"
                            control={form.control}
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Referral URL</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Add a valid url" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )
                  }
                  {/* submit button */}
                  <Button
                    variant={"default"}
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="mt-3"
                  >
                    Validate
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FormValidationPage;
