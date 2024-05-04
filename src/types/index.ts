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

export interface myBookItem {
  cover: string;
  title: string;
}

export interface userInfo {
  _id?: string;
  name: string;
  nickname: string;
  introduction: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phone_number: string;
  profile: string;
  activity_graph: ActivityGraphArray;
  myBook: {
    bestBook: myBookItem[];
    readBook: myBookItem[];
    hopeBook: myBookItem[];
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
  book_info: myBookItem;
}

export interface memo {
  _id?: string;
  title: string;
  author: userInfo;
  description: string;
  content: string;
  book_info?: myBookItem;
  createdAt?: string;
}

export interface gatherPost {
  _id?: string;
  title: string;
  author: userInfo;
  description: string;
  content: string;
  book_info: myBookItem;
  createdAt?: string;
}
