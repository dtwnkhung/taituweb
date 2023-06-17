import { dangKy } from "../../lib/apis/nguoi-dung";
import { setUserCookie } from "../../lib/services/cookie-user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    let message = "",
      success = false;
      
    if (body) {
      const result = await dangKy({
        idToChuc: body?.idToChuc,
        tenDangNhap: body?.tenDangNhap,
        matKhau: body?.matKhau,
        tenNguoiDung: body?.tenNguoiDung,
        soDienThoai: body?.soDienThoai,
        email: body?.email
      });
      
      if (result?.success) {
        if (result?.data) {
          setUserCookie(res, result.data);
          message = "Đặng ký thành công";
          success = true;
        } else {
          message = "Đăng ký thất bại!";
        }
      } else {
        message = result?.message;
      }
    } else {
      message = "Không ổn!";
    }
    res.status(200).json({ success, message });
  } else {
    res.status(400).json({ error: "Oops, something went wrong." });
  }
}
