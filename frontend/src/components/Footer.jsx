import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã là văn bản giả chuẩn của ngành kể từ những năm 1500, khi một thợ in vô danh lấy một galley chữ và xáo trộn nó để tạo ra một cuốn sách mẫu chữ.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CÔNG TY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li>Vận chuyển</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>LIÊN HỆ</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>0376021714</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Bản quyền 2024 @ Prescripto.com - Mọi quyền được bảo lưu.</p>
      </div>

    </div>
  )
}

export default Footer
