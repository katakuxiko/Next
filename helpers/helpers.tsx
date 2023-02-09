import { TopLevelCategory } from "@/interfaces/page.interface";

import CoursesIcon from "./courses.svg";
import ServicesIcon from "./services.svg";
import BooksIcon from "./book.svg";
import ProductsIcon from "./product.svg";
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const priceKz = (price: number):string =>
  (price * 5)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₸");