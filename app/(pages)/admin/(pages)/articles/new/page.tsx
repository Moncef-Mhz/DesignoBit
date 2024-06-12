"use client";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";

import { HR } from "@/components/HR";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Slash } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Textarea } from "@/components/ui/textarea";

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],

  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image"],

  // [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ align: [] }],

  ["clean"], // remove formatting button
];

type categories = {
  _id: string;
  title: string;
  date: string;
};

const page = () => {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [categories, setCategories] = useState<categories[]>([]);

  const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const slugify = (str: string) => {
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const PostArticleHandler = async (
    e: FormEvent<HTMLFormElement> | SubmitEvent
  ) => {
    e.preventDefault();

    const res = await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug,
        image,
        description,
        date,
        content,
        category: selectedCategory,
      }),
    });
    if (res.ok) {
      window.location.href = "/admin/articles";
    }
  };

  return (
    <div className="text-white space-y-5">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-white/70 no-underline"
                href="/admin"
              >
                dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/admin/articles"
                className="text-white/70 no-underline"
              >
                Articles
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">
                New Article
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <>
        {title ? (
          <h1 className="text-6xl font-bold capitalize">{title}</h1>
        ) : (
          <h1 className="text-6xl font-bold">[Untitled]</h1>
        )}
      </>
      <HR />
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => PostArticleHandler(e)}
        className="grid grid-cols-3 w-full max-w-full gap-5"
      >
        <div className="col-span-2 flex flex-col gap-5">
          {/* Title */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              placeholder="Title"
              className="bg-zinc-900"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="bg-zinc-900"
              minLength={50}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={100}
              id="description"
              placeholder="description for the post articles"
            />
          </div>

          {/* Image */}
          <div>
            <CldUploadWidget
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
              onSuccess={(res: CloudinaryUploadWidgetResults, { widget }) => {
                if (res.info && typeof res.info === "object") {
                  setImage(res.info.url);
                  widget.close();
                }
              }}
            >
              {({ open }) => {
                return (
                  <Button
                    variant="outline"
                    className="bg-zinc-900 text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      open();
                    }}
                  >
                    Upload Image
                  </Button>
                );
              }}
            </CldUploadWidget>
            {image && (
              <div className="w-full bg-zinc-800 p-4 rounded-md">
                <img
                  src={image}
                  alt={title ? title : "post image"}
                  className="w-[200px] h-[200px] object-cover"
                />
              </div>
            )}
          </div>

          {/* Content  */}
          <div>
            <Label htmlFor="content" className="bg-zinc-900">
              Content
            </Label>
            <div className="text-white min-h-20 bg-white rounded-md">
              <ReactQuill
                id="content"
                theme="snow"
                value={content}
                className="text-black min-h-20 placeholder:text-white rounded-md"
                onChange={setContent}
                placeholder="Start to write the blog post!"
                modules={{ toolbar: toolbarOptions }}
              />
            </div>
          </div>
        </div>
        <div className="border-l flex flex-col border-white/50 px-5 gap-10 h-full">
          {/* Slug */}
          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              type="text"
              id="slug"
              value={slug}
              placeholder="Slug"
              className="bg-zinc-900"
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>

          {/* Date picker */}
          <div>
            <Label htmlFor="date">Date Picker</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left bg-zinc-900 font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  id="date"
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* Select Categories */}
          <div>
            <Label htmlFor="Category">Category</Label>
            <Select onValueChange={(e) => setSelectedCategory(e)}>
              <SelectTrigger id="Category" className="w-full bg-zinc-900">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem key={category._id} value={category?.title}>
                      {category?.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="max-w-sm bg-zinc-900"
          type="submit"
        >
          save
        </Button>
      </form>
    </div>
  );
};

export default page;
