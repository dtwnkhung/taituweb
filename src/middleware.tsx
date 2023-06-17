import { NextPageContext } from "next";
import { NextResponse } from "next/server";
import { getUserCookie } from "./lib/services/cookie-user";


const secret = process.env.SECRET;

export const middleware = (handler: (context) => any) => async (context) => {
  const response = await handler(context);
  // console.log(123);
  const user = getUserCookie(context.req);
  // console.log({user});

  return response;
};
