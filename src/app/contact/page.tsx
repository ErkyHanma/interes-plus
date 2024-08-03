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
  const [result, setResult] = useState(null);

  // 2. Define a submit handler.

  const accessKey = "7255b1cd-8930-4733-81f0-d5a7e279bea9";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Interes-Plus Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="w-full -mt-8 flex flex-col">
      <section className="w-full px-12 md:px-16 lg:px-48 flex  py-24 justify-center h-[700px] ">
        <div className="flex-1 flex flex-col">
          <p className="font-bold text-5xl ">Menssage Us</p>
          <div className={`${flow_Circular.className} pl-1 text-[#ec600a]`}>
            .....................
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 pr-12"
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
            width={400}
            height={300}
            src={"/icon/undraw_profile_details_re_ch9r.svg"}
            alt="Profile Details Ilustration"
          />
        </div>
      </section>

      <section
        className={`w-full h-full  flex flex-col items-center py-20 bg-gray-200 ${montserrat.className}`}
      >
        <p className={`text-5xl font-bold mb-16 ${montserrat.className} `}>
          Get In touch!
        </p>
        <div className="flex flex-col md:flex-row w-full gap-12 lg:gap-20  items-center justify-center">
          <div className="flex w-full items-center gap-4 flex-col ">
            <div className="rounded-full h-[120px] w-[120px] items-center justify-center flex bg-orange-400">
              <Image
                width={40}
                src={"/icon/phone-flip.svg"}
                alt="Icon"
                height={100}
              />
            </div>
            <p className="text-2xl font-bold ">Phone</p>
            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Eithan Leornado (Designer)
              </p>
              <p># 809 456 xxxx</p>
            </div>

            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Christian Emanuel (Logic Developer)
              </p>
              <p># 809 769 xxxx</p>
            </div>

            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Yenzel Baez (Designer)
              </p>
              <p># 809 302 xxxx</p>
            </div>
          </div>

          <div className="flex w-full items-center gap-4 flex-col ">
            <div className="rounded-full h-[120px] w-[120px] items-center justify-center flex bg-orange-400">
              <Image
                width={40}
                src={"/icon/envelope.svg"}
                alt="Icon"
                height={100}
              />
            </div>
            <p className="text-2xl font-bold ">Email</p>
            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Eithan Leornado (Designer)
              </p>
              <p>@ Eithanleonadoitla.edu.do</p>
            </div>

            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Christian Emanuel (Logic Developer)
              </p>
              <p>@ ChristianEmanuelitla.edu.do</p>
            </div>

            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Yenzel Baez (Designer)
              </p>
              <p>@ yenzelbaezitla.edu.do</p>
            </div>
          </div>

          <div className="flex w-full items-center gap-4 flex-col ">
            <div className="rounded-full h-[120px] w-[120px] items-center justify-center flex bg-orange-400">
              <Image
                width={40}
                src={"/icon/share (1).svg"}
                alt="Icon"
                height={100}
              />
            </div>
            <p className="text-2xl font-bold ">Social Medias</p>
            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Eithan Leornado (Designer)
              </p>
              <p>
                <strong>eithan22</strong> (Github)
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Christian Emanuel (Logic Developer)
              </p>
              <p>
                {" "}
                <strong>CristinaP-Kuwws</strong> (Github)
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className={`text-lg font-semibold ${karla.className}`}>
                Yenzel Baez (Designer)
              </p>
              <p>
                <strong>Erkyhanma</strong>(Github)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
