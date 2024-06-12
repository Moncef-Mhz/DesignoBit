import { Dribbble, Instagram, Twitter } from "lucide-react";
import path from "path";
import { title } from "process";

const Menulinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Post", link: "/posts" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "#contact" },
];

const SocialMedia = [
  { id: 1, name: "Dribble", icon: <Dribbble />, link: "" },
  { id: 2, name: "Twitter", icon: <Twitter />, link: "" },
  { id: 3, name: "Instagram", icon: <Instagram />, link: "" },
];

const RecentPost = [
  {
    id: 1,
    title: "best jus to make ever",
    slug: "best-jus-to-make-ever",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!",
    image:
      "https://burst.shopifycdn.com/photos/milkshake-on-pink.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    author: "Meharzi Moncef",
    date: "18/05/2024",
    category: "News",
  },
  {
    id: 2,
    title: "why gaming is getting worse",
    slug: "why-gaming-is-getting-worse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!",
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/1kYCYrYSMYA8k9bNrWJsEI/4df21199ef30deb16d034bc6ead7b278/Inner-Life_Thumbnail.jpg",
    author: "Meharzi Moncef",
    date: "17/05/2024",
    category: "News",
  },
  {
    id: 3,
    title: "best way you can make money online",
    slug: "best-way-you-can-make-money-online",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!",
    image:
      "https://burst.shopifycdn.com/photos/person-writing-in-notebook-beside-laptop-working-from-bed.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    author: "Meharzi Moncef",
    date: "16/05/2024",
    category: "Finance",
  },
];

const BestPost = [
  {
    id: 1,
    title: "best jus to make ever",
    slug: "best-jus-to-make-ever",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!",
    image:
      "https://burst.shopifycdn.com/photos/milkshake-on-pink.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    author: "Meharzi Moncef",
    date: "18/05/2024",
    category: "news",
  },
  {
    id: 2,
    title: "best way you can make money online",
    slug: "best-way-you-can-make-money-online",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!",
    image:
      "https://burst.shopifycdn.com/photos/person-writing-in-notebook-beside-laptop-working-from-bed.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    author: "Meharzi Moncef",
    date: "16/05/2024",
    category: "finance",
  },
];
const Category = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Finance",
  },
  {
    id: 3,
    title: "Programming",
  },
  {
    id: 4,
    title: "Design",
  },
  {
    id: 5,
    title: "Gaming",
  },
  {
    id: 6,
    title: "News",
  },
];

const PostPreview = {
  id: 2,
  title: "best way you can make money online",
  slug: "best-way-you-can-make-money-online",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, delectus sit cumque esse minima voluptatum rem, quae reiciendis recusandae sint, vel animi nobis sunt ex distinctio dolorem accusamus ab!",
  image:
    "https://burst.shopifycdn.com/photos/person-writing-in-notebook-beside-laptop-working-from-bed.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  author: "Meharzi Moncef",
  date: "16/05/2024",
  category: "finance",
};

const AdminNavLinks = [
  { id: 1, name: "Dashboard", href: "/admin/dashboard", path: "dashboard" },
  {
    id: 2,
    name: "Users",
    href: "/admin/users",
    path: "users",
  },
  { id: 3, name: "Categories", href: "/admin/categories", path: "categories" },
  { id: 4, name: "Articles", href: "/admin/articles", path: "articles" },
];

const DashboardLinks = [
  {
    id: 1,
    name: "Users",
    href: "/admin/users",
    new: "/admin/users/new",
    path: "users",
  },
  {
    id: 2,
    name: "Categories",
    href: "/admin/categories",
    path: "categories",
    new: "/admin/categories/new",
  },
  {
    id: 3,
    name: "Articles",
    href: "/admin/articles",
    path: "articles",
    new: "/admin/articles/new",
  },
];

export {
  Menulinks,
  RecentPost,
  BestPost,
  SocialMedia,
  Category,
  PostPreview,
  AdminNavLinks,
  DashboardLinks,
};
