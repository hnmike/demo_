import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Về Chúng Tôi</h3>
            <p className="text-sm">Chúng tôi là nền tảng thương mại điện tử hàng đầu cung cấp sản phẩm chất lượng cao với giá cả cạnh tranh.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-gray-300">Trang Chủ</a></li>
              <li><a href="#" className="hover:text-gray-300">Sản Phẩm</a></li>
              <li><a href="#" className="hover:text-gray-300">Giới Thiệu</a></li>
              <li><a href="#" className="hover:text-gray-300">Liên Hệ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Hệ Chúng Tôi</h3>
            <p className="text-sm">123 Đường Thương Mại Điện Tử<br />Thành Phố, Tỉnh 12345<br />Điện thoại: (123) 456-7890<br />Email: info@eshop.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 E-Shop. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
