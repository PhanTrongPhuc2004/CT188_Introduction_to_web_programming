# WeddingPlanning - Nền tảng cho thuê địa điểm tổ chức tiệc cưới

_WeddingPlanning là một ứng dụng web giúp người dùng tìm kiếm và đặt thuê các địa điểm tổ chức tiệc cưới phù hợp với nhu cầu của mình._

## Thông tin về dự án

### **Mô tả:**

WeddingPlanning được thực hiện bởi nhóm 5 sinh viên thuộc lớp CT188_Nhập môn Web tại Đại học Cần Thơ. Dự án này được phát triển với mục tiêu tổng kết kiến thức đã tiếp thu thông qua môn học. Chúng tôi rất vui nếu nhận được sự đóng góp của cộng đồng về dự án. 

Nếu có bất kỳ câu hỏi hoặc góp ý, vui lòng tạo một issue trên GitHub hoặc liên hệ với chúng tôi qua `phucb2203525@student.ctu.edu.vn`. 
Cảm ơn bạn đã quan tâm đến dự án của chúng tôi.

### **Công nghệ sử dụng:**

* **Frontend:** HTML, css và JavaScript.
* **Data:** Lưu trữ tại các file json trong thư mục Data.
* **Các Framework/Thư viện:** Bootstrap 5, Jquery.

## Cách cài đặt và chạy dự án

* **Clone repository:** `git clone https://github.com/PhanTrongPhuc2004/CT188_Introduction_to_web_programming.git`
* **KHỞI CHẠY FILE:** `index.html` thông qua **Live Server** _(VS Code Extension)_.

## Thành viên dự án

* **1.** Phan Trọng Phúc B2203525
* **2.** Huỳnh Minh Đăng B2012194
* **3.** Lâm Thanh Thanh B2203529
* **4.** Nguyễn Thị Tâm Minh B2203511
* **5.** Nguyễn Khánh Duy B2203496

## Quy tắc làm việc/code

* **Nơi làm việc**
_Ngoài các mục/trang được phân công thì nên TRÁNH/HẠN CHẾ thao tác lên nơi làm việc của người khác,_
_vì đây là dự án làm việc chung qua github nên có thể gặp lỗi/xung đột, có thể trao đổi trước và cùng làm việc với nhau._

* **Định dạng code** Nên format lại code sau khi code xong bằng cách
  `Chuột phải -> Format Document`

* **Đặt tên** _Nên được viết bằng tiếng Anh để đảm bảo tính nhất quán._

    1. Tên biến/hàm phải mô tả ý nghĩa của biến,
       viết hoa chữ cái đầu của từ thứ hai trở đi (dayLaBienViDu).
    2. Tên hằng viết hoa toàn bộ chữ cái
       và các từ được ngăn cách bởi dấu gạch dưới (SO_PI).

* **Commit message** Nên viết commit message rõ ràng, có ý nghĩa nội dung công việc đã thực hiện (khuyến khích viết bằng tiếng anh).

## Cây thư mục dự án và ý nghĩa

1. **bootstrap-5.0.2-dist** thư mục chứa dữ liệu về framework Bootstrap 5 offline cho dự án.
2. **jquery-3.7.1** thư mục chứa dữ liệu về thư viện Jquery offline cho dự án.
3. **index.html** file HTML trang chủ của dự án, mở file thông qua Live Server để khởi chạy dự án.
4. **src** thư mục chính của dự án, chứa code HTML, CSS, JS cho các components (pages) của trang web.
   * **4.1** Components
        * **4.1.1** common: thư mục chứa phần header, footer để các components (pages) import dùng chung.
        * **4.1.2** pages: thư mục chứa các file HTML của từng components (pages).
   * 4.2 css
        * **4.2.1** style.css: là file css global dùng chung cho tất cả các components.
        * **4.2.2** components: nơi chứa các file css của từng các components.
   * **4.3** js
        * **4.3.1** index.js: là file JS cho file HTML trang chủ.
        * **4.3.2** components: thư mục chứa file js global dùng chung cho tất cả các components (main.js) và các file js của từng các components.
5. **Data** thư mục chứa dữ liệu cho dự án.


