const products = [
  {
    id: 1,
    ten: "Nhà hàng A",
    loaiDiaDiem: "Nhà hàng",
    diaChi: "Đường a",
    kichThuoc: 3000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    gioMoCua: "8:00 - 22:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    soDienThoai: "0934567890",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 10000000,
    sucChua: 300,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/4/1/1.jpg",
      "Data/Images/4/1/2.jpg",
      "Data/Images/4/1/3.jpg",
      "Data/Images/4/1/4.jpg",
      "Data/Images/4/1/5.jpg",
      "Data/Images/4/1/6.jpg",
      "Data/Images/4/1/7.jpg",
    ],
  },
  {
    id: 2,
    ten: "Nhà hàng B",
    loaiDiaDiem: "Sảnh tiệc",
    diaChi: "Đường b",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    gioMoCua: "7:00 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0961234567",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 15000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 3,
    ten: "Nhà hàng C",
    loaiDiaDiem: "Sân vườn",
    diaChi: "Đường c",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    // gioMoCua: "7:00 - 23:00",
    gioMoCua: "9:00 - 22:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0912345678",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 16000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 4,
    ten: "Nhà hàng D",
    loaiDiaDiem: "Nhà hàng",
    diaChi: "Đường d",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    // gioMoCua: "7:00 - 23:00",
    gioMoCua: "10:00 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0987654321",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 17000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 5,
    ten: "Nhà hàng E",
    loaiDiaDiem: "Sảnh tiệc",
    diaChi: "Đường e",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    // gioMoCua: "7:00 - 23:00",
    gioMoCua: "9:00 - 21:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0971122334",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 18000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 6,
    ten: "Nhà hàng F",
    loaiDiaDiem: "Sân vườn",
    diaChi: "Đường f",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    // gioMoCua: "7:00 - 23:00",
    gioMoCua: "8:30 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0908765432",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 19000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 7,
    ten: "Nhà hàng G",
    loaiDiaDiem: "Nhà hàng",
    diaChi: "Đường g",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    // gioMoCua: "7:00 - 23:00",
    gioMoCua: "9:30 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0923456789",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 20000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 8,
    ten: "Nhà hàng H",
    loaiDiaDiem: "Sảnh tiệc",
    diaChi: "Đường h",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    // gioMoCua: "7:00 - 23:00",
    gioMoCua: "10:30 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0945678901",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 21000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 9,
    ten: "Nhà hàng I",
    loaiDiaDiem: "Sân vườn",
    diaChi: "Đường i",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    gioMoCua: "7:00 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0890123456",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 22000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 10,
    ten: "Nhà hàng J",
    loaiDiaDiem: "Nhà hàng",
    diaChi: "Đường j",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    gioMoCua: "7:00 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    // soDienThoai: "0123456789",
    soDienThoai: "0887654321",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 23000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 11,
    ten: "Nhà hàng K",
    loaiDiaDiem: "Sảnh tiệc",
    diaChi: "Đường k",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    gioMoCua: "7:00 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    soDienThoai: "0123456789",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 24000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
  {
    id: 12,
    ten: "Nhà hàng L",
    loaiDiaDiem: "Sân vườn",
    diaChi: "Đường l",
    kichThuoc: 5000,
    soLuong: 1,
    tienIch: ["bãi đỗ xe", "wifi", "nhà bếp", "sân khấu"],
    gioMoCua: "7:00 - 23:00",
    danhGia: 4.5,
    soLuongDanhGia: 100,
    soDienThoai: "0123456789",
    email: "abc@gmail.com",
    moTa: "Mô tả chi tiết về địa điểm, tiện ích, không gian",
    gia: 25000000,
    sucChua: 500,
    anhBia: "Data/Images/4/1/1.jpg",
    anh: [
      "Data/Images/3/1/1.jpg",
      "Data/Images/3/1/2.jpg",
      "Data/Images/3/1/3.jpg",
      "Data/Images/3/1/4.jpg",
      "Data/Images/3/1/5.jpg",
      "Data/Images/3/1/6.jpg",
    ],
  },
];
