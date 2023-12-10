export interface FormFiledProps {
  name: userKey;
  type: "text" | "email" | "password" | "tel";
  placeholder: string;
  value: string;
  onChange: (value: string, key?: userKey) => void;
}

export interface ActivityGraph {
  date: Date;
  activities: number[];
}

export type ActivityGraphArray = ActivityGraph[];

export type BookListThemeObjType = "bestBook" | "readBook" | "hopeBook";

export interface my_book_item {
  cover: string;
  title: string;
}

export interface userInfo {
  _id: string;
  name: string;
  nickname: string;
  introduction: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phone_number: string;
  profile: string;
  activity_graph: ActivityGraphArray;
  my_book: {
    bestBook: my_book_item[];
    readBook: my_book_item[];
    hopeBook: my_book_item[];
  };
}

export type userKey =
  | "name"
  | "nickname"
  | "introduction"
  | "email"
  | "password"
  | "confirmPassword"
  | "phone_number";

export interface editUserInfo {
  nickname: string;
  introduction: string;
  password: string;
  confirmPassword: string;
  phone_number: string;
}

export interface bookListItemType {
  author: string;
  categoryId: number;
  categoryName: string;
  cover: string;
  creator: string;
  customerReviewRank: number;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  link: string;
  mileage: number;
  priceSales: number;
  priceStandard: number;
  pubDate: string;
  publisher: string;
  stockStatus: string;
  title: string;
}

export interface postBookListItemApiProp {
  theme: BookListThemeObjType;
  book_info: my_book_item;
}

export interface memo {
  title: string;
  author: userInfo;
  description: string;
  content: string;
  book_info?: my_book_item;
  createdAt?: string;
}
