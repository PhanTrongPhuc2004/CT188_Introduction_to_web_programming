const products = [
    {
        "id": 1,
        "ten": "Nhà hàng A",
        "loaiDiaDiem": "Loại địa điểm (ví dụ: nhà hàng, sảnh tiệc, sân vườn)",
        "diaChi": "Địa chỉ chi tiết của địa điểm",
        "kichThuoc": 3000,
        "tienIch": [
            "bãi đỗ xe",
            "wifi",
            "nhà bếp",
            "sân khấu"
        ],
        "gioMoCua": "8:00 - 22:00",
        "danhGia": 4.5,
        "soLuongDanhGia": 100,
        "soDienThoai": "0123456789",
        "email": "abc@gmail.com",
        "moTa": "Mô tả chi tiết về địa điểm, tiện ích, không gian",
        "gia": 10000000,
        "sucChua": 300,
        "anhBia": "Data/Images/4/1/1.jpg",
        "anh": [
            "Data/Images/4/1/1.jpg",
            "Data/Images/4/1/2.jpg",
            "Data/Images/4/1/3.jpg",
            "Data/Images/4/1/4.jpg",
            "Data/Images/4/1/5.jpg",
            "Data/Images/4/1/6.jpg",
            "Data/Images/4/1/7.jpg"
        ]
    },
    {
        "id": 2,
        "ten": "Nhà hàng B",
        "loaiDiaDiem": "Nhà hàng",
        "diaChi": "Đường abc",
        "kichThuoc": 5000,
        "tienIch": [
            "bãi đỗ xe",
            "wifi",
            "nhà bếp",
            "sân khấu"
        ],
        "gioMoCua": "7:00 - 23:00",
        "danhGia": 4.5,
        "soLuongDanhGia": 100,
        "soDienThoai": "0123456789",
        "email": "abc@gmail.com",
        "moTa": "Mô tả chi tiết về địa điểm, tiện ích, không gian",
        "gia": 15000000,
        "sucChua": 500,
        "anhBia": "Data/Images/4/1/1.jpg",
        "anh": [
            "Data/Images/3/1/1.jpg",
            "Data/Images/3/1/2.jpg",
            "Data/Images/3/1/3.jpg",
            "Data/Images/3/1/4.jpg",
            "Data/Images/3/1/5.jpg",
            "Data/Images/3/1/6.jpg"   
        ]
    },
    {
        "id": 3,
        "ten": "Nhà hàng C",
        "loaiDiaDiem": "Nhà hàng",
        "diaChi": "Đường abc",
        "kichThuoc": 5000,
        "tienIch": [
            "bãi đỗ xe",
            "wifi",
            "nhà bếp",
            "sân khấu"
        ],
        "gioMoCua": "7:00 - 23:00",
        "danhGia": 4.5,
        "soLuongDanhGia": 100,
        "soDienThoai": "0123456789",
        "email": "abc@gmail.com",
        "moTa": "Mô tả chi tiết về địa điểm, tiện ích, không gian",
        "gia": 15000000,
        "sucChua": 500,
        "anhBia": "Data/Images/4/1/1.jpg",
        "anh": [
            "Data/Images/3/1/1.jpg",
            "Data/Images/3/1/2.jpg",
            "Data/Images/3/1/3.jpg",
            "Data/Images/3/1/4.jpg",
            "Data/Images/3/1/5.jpg",
            "Data/Images/3/1/6.jpg"   
        ]
    },
    {
        "id": 4,
        "ten": "Nhà hàng D",
        "loaiDiaDiem": "Nhà hàng",
        "diaChi": "Đường abc",
        "kichThuoc": 5000,
        "tienIch": [
            "bãi đỗ xe",
            "wifi",
            "nhà bếp",
            "sân khấu"
        ],
        "gioMoCua": "7:00 - 23:00",
        "danhGia": 4.5,
        "soLuongDanhGia": 100,
        "soDienThoai": "0123456789",
        "email": "abc@gmail.com",
        "moTa": "Mô tả chi tiết về địa điểm, tiện ích, không gian",
        "gia": 15000000,
        "sucChua": 500,
        "anhBia": "Data/Images/4/1/1.jpg",
        "anh": [
            "Data/Images/3/1/1.jpg",
            "Data/Images/3/1/2.jpg",
            "Data/Images/3/1/3.jpg",
            "Data/Images/3/1/4.jpg",
            "Data/Images/3/1/5.jpg",
            "Data/Images/3/1/6.jpg"   
        ]
    },
    {
        "id": 5,
        "ten": "Nhà hàng E",
        "loaiDiaDiem": "Nhà hàng",
        "diaChi": "Đường abc",
        "kichThuoc": 5000,
        "tienIch": [
            "bãi đỗ xe",
            "wifi",
            "nhà bếp",
            "sân khấu"
        ],
        "gioMoCua": "7:00 - 23:00",
        "danhGia": 4.5,
        "soLuongDanhGia": 100,
        "soDienThoai": "0123456789",
        "email": "abc@gmail.com",
        "moTa": "Mô tả chi tiết về địa điểm, tiện ích, không gian",
        "gia": 15000000,
        "sucChua": 500,
        "anhBia": "Data/Images/4/1/1.jpg",
        "anh": [
            "Data/Images/3/1/1.jpg",
            "Data/Images/3/1/2.jpg",
            "Data/Images/3/1/3.jpg",
            "Data/Images/3/1/4.jpg",
            "Data/Images/3/1/5.jpg",
            "Data/Images/3/1/6.jpg"   
        ]
    },
    {
        "id": 6,
        "ten": "Nhà hàng F",
        "loaiDiaDiem": "Nhà hàng",
        "diaChi": "Đường abc",
        "kichThuoc": 5000,
        "tienIch": [
            "bãi đỗ xe",
            "wifi",
            "nhà bếp",
            "sân khấu"
        ],
        "gioMoCua": "7:00 - 23:00",
        "danhGia": 4.5,
        "soLuongDanhGia": 100,
        "soDienThoai": "0123456789",
        "email": "abc@gmail.com",
        "moTa": "Mô tả chi tiết về địa điểm, tiện ích, không gian",
        "gia": 15000000,
        "sucChua": 500,
        "anhBia": "Data/Images/4/1/1.jpg",
        "anh": [
            "Data/Images/3/1/1.jpg",
            "Data/Images/3/1/2.jpg",
            "Data/Images/3/1/3.jpg",
            "Data/Images/3/1/4.jpg",
            "Data/Images/3/1/5.jpg",
            "Data/Images/3/1/6.jpg"   
        ]
    }
];

