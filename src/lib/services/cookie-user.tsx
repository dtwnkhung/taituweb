import { serialize, parse } from "cookie";
import jwt from "jsonwebtoken";

type TUser = {
  id?: string;
  email?: string;
  soDienThoai?: string;
  tenNguoiDung?: string;
  accessToken?: string;
  expiration?: number;
  refreshToken?: string;
};

// Lưu trữ token trong cookie khi người dùng đăng nhập thành công
export const setUserCookie = (res, user: TUser) => {
  // Tạo một cookie với tên là "token" và giá trị là token được mã hóa
  // const encodedToken = jwt.sign({ user }, process.env.SECRET);
  const encodedToken = "user";
  res.setHeader(
    "Set-Cookie",
    serialize("token", encodedToken, {
      httpOnly: true,
      maxAge: user.expiration, // thời gian sống của cookie là 1 tuần
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );
};

export const getUserCookie = (req) => {
  if (!req.headers.cookie) return undefined;
  const cookies = parse(req.headers.cookie);
  const encodedToken = cookies.user;
  console.log(encodedToken);

  try {
    // const user: TUser = jwt.verify(encodedToken, process.env.SECRET);
    const user = { ok: true };
    return user;
  } catch (error) {
    console.log({ error });
  }
  return null;
};
