AI Usage Log

1. Công cụ AI
Tên công cụ: Gemini và Claude
2. Mục đích sử dụng

Dùng AI để phân tích giao diện, đề xuất bố cục, định hướng cấu trúc HTML/CSS và hỗ trợ soạn prompt sinh mã nguồn.

Phần Gemini hỗ trợ
Đề xuất phương án thiết kế UI/UX: Chuyển danh sách 80 mã màu dạng chữ thành lưới ô màu trực quan (color swatches). Bố trí giao diện 2 cột trên máy tính và tối ưu thao tác một tay trên điện thoại. Làm nổi bật chính sách mua hàng tại Việt Nam (ship COD, freeship, đổi trả 5 ngày).
Định hướng cấu trúc HTML5, CSS3 và Usability: Hướng dẫn sử dụng thẻ HTML5, tổ chức CSS3 theo chuẩn BEM kết hợp biến :root, CSS Grid/Flexbox, và đảm bảo các tiêu chí trải nghiệm người dùng.
Soạn thảo prompt cho Codex và GitHub Copilot: Viết câu lệnh chi tiết giúp công cụ AI sinh mã nguồn HTML5, CSS3 tách file riêng và Vanilla JS thuần túy, không dùng thư viện ngoài hay backend.
Chuẩn hóa dữ liệu bảng màu Taipoz: Tổng hợp và phân loại 82 mã màu thực tế thành 5 nhóm, kèm mức giá (39.000₫ và 55.000₫), mã SKU động và trạng thái tồn kho để cập nhật chính xác cho Copilot.
Phần Claude hỗ trợ
Hỗ trợ tổng hợp và phân tích website tham khảo.
Gợi ý cách chia nhóm thông tin và bố cục thẻ cho giao diện.
3. Prompt đã sử dụng

Prompt 1 (Gemini):

text
[Dán prompt đề xuất phương án UI/UX ở đây]

Prompt 2 (Gemini):

text
[Dán prompt định hướng cấu trúc HTML5/CSS3 ở đây]

Prompt 3 (Gemini → Codex/GitHub Copilot):

text
[Dán prompt sinh mã nguồn HTML/CSS/Vanilla JS ở đây]

Prompt 4 (Gemini):

text
[Dán prompt chuẩn hóa dữ liệu 82 mã màu ở đây]

Prompt 5 (Claude):

text
[Dán prompt phân tích website tham khảo / gợi ý bố cục thẻ ở đây]
4. Kết quả AI đề xuất
Công cụ	Kết quả AI đề xuất
Gemini	Phương án giao diện dùng lưới ô màu thay cho danh sách chữ; bố cục 2 cột trên máy tính và một cột thao tác một tay trên điện thoại; khu vực nêu bật chính sách ship COD, freeship, đổi trả 5 ngày
Gemini	Cấu trúc HTML5 ngữ nghĩa, CSS3 theo BEM với biến :root, bố cục bằng CSS Grid/Flexbox
Gemini	Bộ prompt chi tiết cho Codex/GitHub Copilot, yêu cầu mã tách file riêng và Vanilla JS thuần
Gemini	Bảng dữ liệu 82 mã màu chia 5 nhóm, kèm giá (39.000₫ và 55.000₫), SKU động và trạng thái tồn kho
Claude	Bản tổng hợp, phân tích các website tham khảo và gợi ý cách chia nhóm thông tin, bố cục thẻ
5. Kiểm tra và điều chỉnh

Bản nháp, tôi cần sửa lại cho đúng với những gì tôi thực sự đã làm.

Đã kiểm tra:

Đối chiếu dữ liệu 82 mã màu, nhóm màu, mức giá và trạng thái tồn kho với trang sản phẩm Taipoz gốc.
Chạy thử giao diện trên trình duyệt và các kích thước màn hình (máy tính, máy tính bảng, điện thoại).
Kiểm tra mã nguồn AI sinh ra có đúng yêu cầu: không dùng thư viện ngoài, không backend, CSS/JS tách file riêng.

Đã điều chỉnh hoặc bổ sung:

[Ghi các chỗ đã sửa mã HTML/CSS/JS, ví dụ chỉnh màu, khoảng cách, tên class]
[Ghi các chỗ đã sửa dữ liệu màu hoặc giá nếu có sai lệch]

Không sử dụng:

[Ghi các đề xuất của AI mà tôi đã bỏ và lý do]
6. Phần tôi hiểu và có thể giải thích

Bản nháp dựa trên hướng thiết kế đã nêu. Tôi cần đối chiếu với mã nguồn thực tế và chỉ giữ lại phần tôi thật sự giải thích được.

Cấu trúc HTML5: vai trò của các thẻ ngữ nghĩa (header, main, section, article, footer) trong trang chi tiết sản phẩm.
Biến CSS trong :root: cách khai báo biến màu, khoảng cách, cỡ chữ để dùng thống nhất và dễ đổi giao diện.
Quy ước BEM: cách đặt tên class dạng block__element--modifier và lý do giúp CSS dễ bảo trì.
CSS Grid/Flexbox: dùng Grid cho lưới ô màu và bố cục 2 cột; dùng Flexbox cho các thành phần căn hàng; cách chuyển bố cục khi đổi kích thước màn hình (responsive).
Ô màu (color swatches): cách mỗi ô hiển thị màu, nhãn mã màu, trạng thái còn hàng/hết hàng và trạng thái được chọn.
Vanilla JS: cách đọc dữ liệu màu, hiển thị lưới ô màu, xử lý sự kiện chọn màu, cập nhật SKU, giá và tồn kho tương ứng.
Thẻ thông tin kỹ thuật và chính sách: cách tổ chức các thẻ ship COD, freeship, đổi trả 5 ngày để dễ quét mắt.
