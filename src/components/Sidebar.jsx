import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

const Sidebar = () => {
  return (
    <div className="w-64 pr-8">
      <h2 className="text-lg font-semibold mb-4">Danh mục sản phẩm</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Loại sản phẩm</h3>
        {/* Thêm bộ lọc loại sản phẩm ở đây */}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Thương hiệu</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="mercedes" />
            <label htmlFor="mercedes" className="ml-2">Mercedes (120)</label>
          </div>
          <div className="flex items-center">
            <Checkbox id="toyota" />
            <label htmlFor="toyota" className="ml-2">Toyota (15)</label>
          </div>
          <div className="flex items-center">
            <Checkbox id="mitsubishi" />
            <label htmlFor="mitsubishi" className="ml-2">Mitsubishi (35)</label>
          </div>
          <div className="flex items-center">
            <Checkbox id="nissan" />
            <label htmlFor="nissan" className="ml-2">Nissan (89)</label>
          </div>
          <div className="flex items-center">
            <Checkbox id="honda" />
            <label htmlFor="honda" className="ml-2">Honda (30)</label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Khoảng giá</h3>
        <div className="flex items-center space-x-2">
          <Input type="number" placeholder="Tối thiểu" className="w-20" />
          <span>-</span>
          <Input type="number" placeholder="Tối đa" className="w-20" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
