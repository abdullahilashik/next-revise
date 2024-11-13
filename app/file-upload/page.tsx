"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileUploadSchema } from "@/schema/file-upload-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { uploadImage } from "@/actions/actions";
import Dropzone from "@/components/dropzone";
import Image from "next/image";

const FileUploadPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchAgain, setFetchAgain] = useState(false);

  const form = useForm<z.infer<typeof FileUploadSchema>>({
    resolver: zodResolver(FileUploadSchema),
  });

  const handleFileUpload = async (file: z.infer<typeof FileUploadSchema>) => {
    console.log("File upload: ", file);
    if (file) {
      await uploadImage(file);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  
  useEffect(() => {
    if(fetchAgain){
        fetchImages();
    }
  }, [fetchAgain]);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/images", {
        next: {
          revalidate: 1,
        },
      });
      const data = await response.json();
      console.log("Images fetched: ", data);
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="container">
        <h1>Upload File</h1>
        <div className="mt-3">
          <Card>
            <CardHeader>
              <h1>Simple form validation</h1>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleFileUpload)}
                  className="flex flex-col gap-4"
                >
                  <FormItem>
                    <FormLabel>Upload an image</FormLabel>
                    <Controller
                      name="image"
                      control={form.control}
                      render={({ field }) => (
                        <div>
                          <Input
                            type="file"
                            onChange={(e) =>
                              field.onChange(e.target.files?.[0] || null)
                            }
                          />
                        </div>
                      )}
                    ></Controller>
                    {form.formState.errors.image && (
                      <span className="text-red-600 font-light">
                        {form.formState.errors.image.message}
                      </span>
                    )}
                  </FormItem>
                  <Button className="mr-auto" type="submit">
                    Upload Image
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="mt-3">
          <Card>
            <CardContent>
              <Dropzone setFetchAgain={setFetchAgain} className="mt-10 border border-neutral-200 p-16" />
            </CardContent>
          </Card>
        </div>
        <div className="mt-3">
          <div className="grid grid-cols-5">
            {images.map((image : any) => (
              <img
                key={image?.public_id}
                src={image.url}
                alt="Cloudinary image"
                width={200}
                style={{ margin: "10px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileUploadPage;
