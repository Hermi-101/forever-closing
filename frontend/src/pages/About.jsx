import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
        
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever is a modern e-commerce platform designed to make online shopping fast, simple, and delightful. Featuring curated collections, trusted sellers, secure checkout, and responsive customer support, it helps users discover products across categories like fashion, electronics, and home goods.</p>
          <p>Smart filters, clear product pages, and honest reviews streamline decisions, while fast shipping and easy returns build confidence. Merchants get intuitive tools for inventory, analytics, and promotions, enabling growth without technical headaches.</p>
          <b className='text-gray-800'>Our Misson</b>
          <p>Built with mobile-first design and strong security, Forever delivers a reliable shopping experience for buyers and sellers, turning casual visitors into loyal customers and enabling scalable, worldwide business growth.</p>
        </div>
      </div>
      <div  className='flex flex-col md:flex-row  gap-4 text-sm mb-20'>
        <div className='border px-10 md:px-16 py -8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Built with mobile-first design and strong security, ShopEase delivers a reliable shopping experience for buyers and sellers, turning casual visitors into loyal customers and enabling scalable, worldwide business growth.</p>
        </div>
        <div className='border px-10 md:px-16 py -8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Built with mobile-first design and strong security, ShopEase delivers a reliable shopping experience for buyers and sellers, turning casual visitors into loyal customers and enabling scalable, worldwide business growth.</p>
        </div>
        <div className='border px-10 md:px-16 py -8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Custom Service</b>
          <p className='text-gray-600'>Built with mobile-first design and strong security, ShopEase delivers a reliable shopping experience for buyers and sellers, turning casual visitors into loyal customers and enabling scalable, worldwide business growth.</p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
