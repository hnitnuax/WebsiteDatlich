import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>VỀ <span className='text-gray-700 font-semibold'>CHÚNG TÔI</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Chào mừng đến với Prescripto, đối tác đáng tin cậy của bạn trong việc quản lý nhu cầu chăm sóc sức khỏe của bạn một cách thuận tiện và hiệu quả. Tại Prescripto, chúng tôi hiểu những thách thức mà mọi người phải đối mặt khi lên lịch hẹn khám bác sĩ và quản lý hồ sơ sức khỏe của họ.</p>
          <p>YouMed cam kết mang đến sự xuất sắc trong công nghệ chăm sóc sức khỏe. Chúng tôi liên tục nỗ lực cải thiện nền tảng của mình, tích hợp những tiến bộ mới nhất để cải thiện trải nghiệm của người dùng và cung cấp dịch vụ vượt trội. Cho dù bạn đang đặt lịch hẹn đầu tiên hay quản lý việc chăm sóc liên tục, YouMed luôn ở đây để hỗ trợ bạn trong từng bước.</p>
          <b className='text-gray-800'>Tầm nhìn của chúng tôi</b>
          <p>Tầm nhìn của chúng tôi tại Prescripto là tạo ra trải nghiệm chăm sóc sức khỏe liền mạch cho mọi người dùng. Chúng tôi hướng đến mục tiêu thu hẹp khoảng cách giữa bệnh nhân và nhà cung cấp dịch vụ chăm sóc sức khỏe, giúp bạn dễ dàng tiếp cận dịch vụ chăm sóc bạn cần, khi bạn cần.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>TẠI SAO <span className='text-gray-700 font-semibold'>CHỌN CHÚNG TÔI</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>HIỆU QUẢ:</b>
          <p>Lịch hẹn hợp lý phù hợp với lối sống bận rộn của bạn.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>SỰ TIỆN LỢI: </b>
          <p>Tiếp cận mạng lưới các chuyên gia chăm sóc sức khỏe đáng tin cậy trong khu vực của bạn.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CÁ NHÂN HÓA:</b>
          <p >Những khuyến nghị và lời nhắc nhở phù hợp giúp bạn luôn giữ gìn sức khỏe.</p>
        </div>
      </div>

    </div>
  )
}

export default About
