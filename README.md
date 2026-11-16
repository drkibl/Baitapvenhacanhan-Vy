# Baitapvenhacanhan-Vy
# E-commerce UI Improvement

## 1. Giới thiệu

Dự án cải tiến giao diện cho website thương mại điện tử bán bút và họa phẩm **Taipoz**, tập trung vào **khu vực chi tiết sản phẩm** của mặt hàng *Màu vẽ trang trí FolkArt Multi-surface, màu lẻ*.

**Vấn đề hiện tại:** trang sản phẩm liệt kê hơn 80 mã màu dưới dạng danh sách chữ dài, gây rối mắt, khó phân biệt sắc độ và khó nhận biết trạng thái còn hàng.

**Giải pháp:** thiết kế mới chuyển danh sách chữ thành hệ thống **ô màu (color swatches)** trực quan, đồng thời:

- Làm nổi bật các chính sách đặc thù tại Việt Nam (ship COD, freeship).
- Cấu trúc lại thông tin kỹ thuật thành các **thẻ (card)** dễ quét mắt.

## 2. Website tham khảo

- **Tên website:** Taipoz - Bút và họa phẩm chuyên nghiệp
- **URL:** https://www.taipoz.com/
- **Khu vực đã khảo sát:** Trang chủ, Danh mục sản phẩm, Chi tiết sản phẩm, Tìm kiếm, Giỏ hàng, Tài khoản người dùng, Chính sách & Chân trang (Footer)

## 3. Chức năng

- Cải thiện giao diện hiển thị sản phẩm ở website Taipoz.
- Hiển thị tên, giá và phân loại sản phẩm.
- Bố cục hỗ trợ nhiều kích thước màn hình (responsive).

## 4. Công nghệ

- HTML5
- CSS3

## 5. Cách chạy

Mở file `index.html` bằng trình duyệt.

## 6. Cải tiến đã thực hiện

| Vấn đề ở trang gốc | Cải tiến trong thiết kế mới |
|---|---|
| Hơn 80 mã màu liệt kê dạng chữ dài, gây rối mắt | Chuyển thành hệ thống ô màu (color swatches) trực quan |
| Khó phân biệt sắc độ giữa các màu gần nhau | Mỗi mã màu hiển thị bằng ô màu thật, người dùng nhận biết bằng mắt thay vì đọc tên, đồng thời vẫn hiển thị tên và mã màu khi khách hàng di chuyển chuột đến các ô màu sắc nhằm hỗ trợ khách hàng khi cần mua theo tên và mã màu|
| Khó nhận biết trạng thái còn hàng | Phân biệt rõ màu còn hàng và hết hàng ngay trên ô màu |
| Chính sách bán hàng chìm trong nội dung | Làm nổi bật các chính sách đặc thù tại Việt Nam: ship COD, freeship |
| Thông tin kỹ thuật trình bày dài, khó đọc | Cấu trúc lại thành các thẻ (card) dễ quét |

## 7. Hỗ trợ từ AI

Dự án có sử dụng AI làm công cụ hỗ trợ. Phần dưới đây tóm tắt việc AI hỗ trợ và phần tôi trực tiếp thực hiện.

**Phần AI Gemini hỗ trợ:**
- Đề xuất phương án thiết kế UI/UX: Chuyển danh sách 80 mã màu dạng chữ thành lưới ô màu trực quan (color swatches), bố trí giao diện 2 cột trên máy tính và tối ưu thao tác một tay trên điện thoại, đồng thời làm nổi bật chính sách mua hàng tại Việt Nam (ship COD, freeship, đổi trả 5 ngày).
- Định hướng cấu trúc HTML5, CSS3 & Usability: Hướng dẫn sử dụng thẻ HTML5, tổ chức CSS3 theo chuẩn BEM kết hợp biến :root, CSS Grid/Flexbox, và đảm bảo các tiêu chí trải nghiệm.
- Soạn thảo Prompt cho Codex & GitHub Copilot: Viết câu lệnh chi tiết giúp công cụ AI sinh mã nguồn HTML5, CSS3 tách file riêng và Vanilla JS thuần túy mà không dùng thư viện ngoài hay backend.
- Chuẩn hóa dữ liệu bảng màu Taipoz: Tổng hợp và phân loại 82 mã màu thực tế thành 5 nhóm kèm mức giá (39.000₫ và 55.000₫), mã SKU động và trạng thái tồn kho để cập nhật chính xác cho Copilot.

**Phần AI Claude hỗ trợ:**
- Hỗ trợ tổng hợp và phân tích website tham khảo
- Gợi ý cách chia nhóm thông tin và bố cục thẻ cho giao diện.

**Phần tôi đã kiểm tra, điều chỉnh hoặc bổ sung:**
- Trực tiếp khảo sát website Taipoz và xác định các vấn đề của trang chi tiết sản phẩm (danh sách hơn 80 mã màu, trạng thái còn hàng, chính sách COD/freeship).
- Kiểm tra nội dung AI gợi ý, đối chiếu với trang gốc và chỉnh sửa cho đúng thực tế.
- Tự viết, chạy thử và điều chỉnh mã HTML/CSS, kiểm tra hiển thị trên nhiều kích thước màn hình.
- Quyết định cuối cùng về bố cục, màu sắc và nội dung hiển thị.
