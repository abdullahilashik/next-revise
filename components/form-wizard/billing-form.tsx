import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BillingSchema } from "@/schema/billing-schema";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  nextActiveTab,
  selectBillingInfo,
  updateBillingInfo,
  updateSelectedTab,
} from "@/lib/features/mutlipage/multiPageSlice";
import { Input } from "../ui/input";
import SubmitButton from "./submit-button";

const BillingForm = () => {
  const dispatch = useDispatch();
  const billingInfo = useSelector(selectBillingInfo);
  const form = useForm<z.infer<typeof BillingSchema>>({
    resolver: zodResolver(BillingSchema),
    defaultValues: {
      card: billingInfo.card || "",
      cvc: billingInfo.cvc || "",
      exp: billingInfo.exp || "",
      name: billingInfo.name || "",
    },
  });
  const handleFormSubmit = (values: z.infer<typeof BillingSchema>) => {
    dispatch(updateBillingInfo({ ...values }));
    dispatch(nextActiveTab());
  };
  return (
    <>
      <Card>
        <CardHeader>
          <h1>Billing Information</h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
              <FormField
                name="card"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Provide your card number (secure)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField 
                name="cvc"
                control={form.control}
                render={({field})=> (
                    <FormItem>
                        <FormLabel>CVC</FormLabel>
                        <FormControl>
                            <Input minLength={3} maxLength={3} type="number" placeholder="Provide your CVC" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
              />
              <FormField 
                name="exp"
                control={form.control}
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Expiary Date</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Provide your expiary date shown in card"  {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
              />
              <FormField 
                name="name"
                control={form.control}
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Display name on card</FormLabel>
                        <FormControl>
                            <Input {...field} type="text" placeholder="What is your name in card?" />
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

export default BillingForm;
