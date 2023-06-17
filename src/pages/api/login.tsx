import { dangNhap } from "../../lib/apis/nguoi-dung";
import { setUserCookie } from "../../lib/services/cookie-user";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { body } = req;
        let message = "", success = false;
        if (body) {
            const result = await dangNhap(body?.tenDangNhap, body?.matKhau);

            if (result?.success) {
                if (result?.data) {
                    setUserCookie(res, result.data);
                    message = "Đặng nhập thành công";
                    success = true;
                } else {
                    message = "Đăng nhập thất bại!";
                }
            } else {
                message = result?.message;
            }
        } else {
            message = "Không ổn!";
        }
        res.status(200).json({ success, message });
    } else {
        res.status(400).json({ error: 'Oops, something went wrong.' });
    }
}
