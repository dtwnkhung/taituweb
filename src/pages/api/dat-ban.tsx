import { datBan } from "../../lib/apis/dat-ban";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { body } = req;
        let message = "", success = false;
        if (body) {
            const result = await datBan({
                hoTen: body?.hoTen,
                batDau: body?.batDau,
                nguoiLon: body?.nguoiLon,
                soDienThoai: body?.soDienThoai,
                treEm: body?.treEm,
                diaChi: body?.diaChi,
                email: body?.email
            });
            if (result) {
                message = "Đặt bàn thành công";
                success = true;
            } else {
                message = "Đặt bàn không thành công!";
            }
        } else {
            message = "Không ổn!";
        }
        res.status(200).json({ success, message });
    } else {
        res.status(400).json({ error: 'Oops, something went wrong.' });
    }
}
