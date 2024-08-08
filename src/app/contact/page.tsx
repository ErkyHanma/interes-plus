"use client";

import { flow_Circular, karla, montserrat } from "@/lib/fonts";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import useWeb3Forms from "@web3forms/react";
import ContactInfo from "@/components/ContactInfo";

const Contact = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Description: "",
    },
  });
  const { reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState("");

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.KEY,
    settings: {
      from_name: "Interes-Plus Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="w-full -mt-8 flex flex-col">
      <section className="w-full px-8 md:px-16 lg:px-48 flex py-24 justify-center h-[700px] ">
        <div className="flex-1 flex flex-col">
          <p className="font-bold text-5xl ">Message Us</p>
          <div className={`${flow_Circular.className} pl-1 text-[#ec600a]`}>
            .....................
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 pr-2 lg:pr-8"
            >
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John joe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Johndoe@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us Something</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Great Job!" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="self-start text-md  text-white font-bold px-7 py-5 rounded-lg  bg-[#ec600a]"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>

        <div className="flex-1 hidden md:flex items-center justify-center">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-[400px] h-auto"
            src={"/icon/undraw_profile_details_re_ch9r.svg"}
            alt="Profile Details Ilustration"
          />
        </div>
      </section>

      <section
        className={`w-full h-full flex flex-col items-center py-20 bg-gray-200 ${montserrat.className}`}
      >
        <p className={`text-5xl font-bold mb-16 ${montserrat.className} `}>
          Get In touch!
        </p>
        <ContactInfo />
      </section>
    </div>
  );
};

export default Contact;
