'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg transition-all duration-500" id="navContent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="navHeight">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg transform rotate-45 transition-transform duration-500 group-hover:rotate-[405deg]"></div>
            <div className="absolute inset-0 w-12 h-12 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-lg transform -rotate-12 opacity-60 blur-sm"></div>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight transition-all duration-500" id="brandName">
            Imaginary <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Space</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Home
          </a>
          <a href="#services" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Services
          </a>
          <a href="#about" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            About
          </a>
          <a href="#pricing" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Pricing
          </a>
          <a href="#contact" className="ml-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          onClick={() => {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div id="mobileMenu" className="hidden md:hidden bg-indigo-950/95 backdrop-blur-lg border-t border-white/10">
      <div className="px-4 py-4 space-y-2">
        <a href="#home" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Home
        </a>
        <a href="#services" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Services
        </a>
        <a href="#about" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          About
        </a>
        <a href="#pricing" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Pricing
        </a>
        <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300">
          Contact
        </a>
      </div>
    </div>
  </div>

  {/* Scroll Animation Script */}
  <script dangerouslySetInnerHTML={{__html: `
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      const navHeight = document.getElementById('navHeight');
      const brandName = document.getElementById('brandName');
      
      if (currentScroll > 50) {
        navHeight.classList.add('py-3');
        navHeight.classList.remove('py-6');
        brandName.classList.add('text-xl');
        brandName.classList.remove('text-2xl');
      } else {
        navHeight.classList.add('py-6');
        navHeight.classList.remove('py-3');
        brandName.classList.add('text-2xl');
        brandName.classList.remove('text-xl');
      }
      
      lastScroll = currentScroll;
    });
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#2D1B4E]">
  {/* Animated Gradient Orbs */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B3FA0] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-[#00D9FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
    <div className="absolute bottom-0 left-1/2 w-[28rem] h-[28rem] bg-[#8B5FBF] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse animation-delay-4000"></div>
  </div>

  {/* Floating Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(107,63,160,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(107,63,160,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  {/* Content Container */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
    
    {/* Floating Badge */}
    <div className="mb-8 animate-float">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A0B2E]/60 backdrop-blur-md border border-[#6B3FA0]/30 shadow-lg shadow-[#6B3FA0]/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]"></span>
        </span>
        <span className="text-sm font-medium text-[#C5A3ED]">AI-Powered Marketing Intelligence</span>
      </div>
    </div>

    {/* Main Headline with Staggered Animation */}
    <div className="text-center max-w-5xl mx-auto space-y-6">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
        <span className="inline-block animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-[#E3D0F9] via-[#A87FD9] to-[#C5A3ED]">
          Transform
        </span>
        <br />
        <span className="inline-block animate-fade-in-up animation-delay-200 text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#8B5FBF] to-[#6B3FA0]">
          Your Brand's
        </span>
        <br />
        <span className="inline-block animate-fade-in-up animation-delay-400 text-transparent bg-clip-text bg-gradient-to-r from-[#A87FD9] via-[#00D9FF] to-[#E3D0F9]">
          Digital Universe
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-[#C5A3ED] max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600 font-light">
        <span className="text-[#00D9FF] font-semibold">Imaginary Space</span> crafts data-driven marketing campaigns that transcend boundaries. We blend AI precision with creative storytelling to launch your brand into new dimensions of growth.
      </p>
    </div>

    {/* Floating Stats */}
    <div className="grid grid-cols-3 gap-8 mt-12 mb-12 animate-fade-in-up animation-delay-800">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00D9FF] to-[#8B5FBF]">340%</div>
        <div className="text-sm text-[#A87FD9] mt-2">Avg ROI Increase</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#A87FD9] to-[#00D9FF]">2.5M+</div>
        <div className="text-sm text-[#A87FD9] mt-2">Leads Generated</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#8B5FBF] to-[#E3D0F9]">150+</div>
        <div className="text-sm text-[#A87FD9] mt-2">Brands Launched</div>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up animation-delay-1000">
      <button className="group relative px-8 py-4 bg-gradient-to-r from-[#6B3FA0] to-[#8B5FBF] rounded-full font-semibold text-white shadow-lg shadow-[#6B3FA0]/50 hover:shadow-xl hover:shadow-[#6B3FA0]/70 transition-all duration-300 hover:scale-105">
        <span className="relative z-10">Launch Your Campaign</span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5FBF] to-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      <button className="group px-8 py-4 bg-[#1A0B2E]/60 backdrop-blur-md border-2 border-[#6B3FA0]/50 rounded-full font-semibold text-[#E3D0F9] hover:border-[#00D9FF] hover:text-[#00D9FF] transition-all duration-300 hover:scale-105 shadow-lg">
        Explore Case Studies
        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>
    </div>

    {/* Floating Elements */}
    <div className="absolute top-1/4 left-10 animate-float animation-delay-1000">
      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#6B3FA0]/20 to-[#00D9FF]/20 backdrop-blur-sm border border-[#8B5FBF]/30 rotate-12"></div>
    </div>
    <div className="absolute bottom-1/4 right-10 animate-float animation-delay-2000">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00D9FF]/20 to-[#A87FD9]/20 backdrop-blur-sm border border-[#00D9FF]/30"></div>
    </div>
    <div className="absolute top-1/2 right-1/4 animate-float animation-delay-3000">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#A87FD9]/20 to-[#6B3FA0]/20 backdrop-blur-sm border border-[#A87FD9]/30 -rotate-12"></div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    .animation-delay-200 {
      animation-delay: 0.2s;
      opacity: 0;
    }
    .animation-delay-400 {
      animation-delay: 0.4s;
      opacity: 0;
    }
    .animation-delay-600 {
      animation-delay: 0.6s;
      opacity: 0;
    }
    .animation-delay-800 {
      animation-delay: 0.8s;
      opacity: 0;
    }
    .animation-delay-1000 {
      animation-delay: 1s;
      opacity: 0;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Imaginary Space <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">AI Solutions</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        End-to-end AI development transforming marketing strategies with measurable ROI and industry-specific solutions
      </p>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
      {/* Large Card - Top Left */}
      <div className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-start justify-between mb-6">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">AI Strategy & Deployment</h3>
        <p className="text-purple-100 text-lg mb-6 leading-relaxed">
          Imaginary Space delivers comprehensive AI development from initial strategy through production deployment. Our expert team ensures scalable, production-ready implementations with transparent communication at every stage.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center text-purple-100">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            End-to-end development lifecycle
          </li>
          <li className="flex items-center text-purple-100">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Scalable production-ready solutions
          </li>
          <li className="flex items-center text-purple-100">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Transparent process management
          </li>
        </ul>
      </div>

      {/* Tall Card - Top Right */}
      <div className="md:col-span-2 md:row-span-3 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl w-fit mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven ROI Results</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Imaginary Space's marketing AI solutions deliver measurable results with proven track records across campaigns.
        </p>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5">
            <div className="text-3xl font-bold text-blue-600 mb-1">3.5x</div>
            <div className="text-sm text-gray-600">Average ROI Increase</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-5">
            <div className="text-3xl font-bold text-purple-600 mb-1">87%</div>
            <div className="text-sm text-gray-600">Campaign Efficiency</div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Ongoing Support</div>
          </div>
        </div>
      </div>

      {/* Wide Card - Middle Left */}
      <div className="md:col-span-4 md:row-span-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl w-fit mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Industry-Specific Marketing AI</h3>
            <p className="text-blue-100 leading-relaxed">
              Imaginary Space creates tailored AI solutions for your marketing vertical with deep technical expertise and industry knowledge.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Predictive Analytics</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Customer Segmentation</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Content Optimization</span>
          </div>
        </div>
      </div>

      {/* Square Card - Bottom Left */}
      <div className="md:col-span-2 md:row-span-1 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl w-fit mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Imaginary Space prioritizes security and compliance in every AI implementation.
        </p>
      </div>

      {/* Square Card - Bottom Middle */}
      <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-[1.02]">
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl w-fit mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-3">Continuous Optimization</h3>
        <p className="text-orange-100 text-sm leading-relaxed">
          Ongoing support and optimization ensure your AI solutions evolve with your marketing needs.
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Marketers Are Saying
      </h2>
      <p className="text-xl text-gray-600">
        Real feedback from marketing professionals
      </p>
    </div>

    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {/* Testimonial 1 */}
      <div className="break-inside-avoid bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-purple-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Sarah Chen"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Sarah Chen</h3>
            <p className="text-sm text-gray-500">@sarahchen · Marketing Director</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          Imaginary Space transformed our content strategy completely. Our engagement rates jumped 340% in just two months. The analytics dashboard is a game-changer! 🚀
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>2:34 PM · Mar 15, 2024</span>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="break-inside-avoid bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Marcus Rodriguez"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Marcus Rodriguez</h3>
            <p className="text-sm text-gray-500">@mrodriguez · CMO at TechFlow</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          We've tried every marketing platform out there. Imaginary Space is the only one that actually delivers on its promises. ROI increased by 215% and our team loves the intuitive interface. Worth every penny! 💯
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>11:22 AM · Mar 14, 2024</span>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="break-inside-avoid bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-pink-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Emily Thompson"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Emily Thompson</h3>
            <p className="text-sm text-gray-500">@emthompson · Brand Strategist</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          The automation features in Imaginary Space saved our team 20+ hours per week. Now we can focus on creative strategy instead of repetitive tasks. Best investment we made this year! ⭐⭐⭐⭐⭐
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>4:15 PM · Mar 13, 2024</span>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="break-inside-avoid bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            alt="David Park"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-green-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">David Park</h3>
            <p className="text-sm text-gray-500">@dpark · Growth Marketing Lead</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          Imaginary Space's A/B testing capabilities are unmatched. We optimized our campaigns and saw conversion rates double within 6 weeks. 📈
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>9:45 AM · Mar 12, 2024</span>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="break-inside-avoid bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
            alt="Jessica Williams"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Jessica Williams</h3>
            <p className="text-sm text-gray-500">@jesswilliams · Digital Marketing Manager</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          Finally, a platform that understands marketers! Imaginary Space integrates seamlessly with all our tools. The customer support team is incredibly responsive too. Highly recommend! 🙌
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>1:20 PM · Mar 11, 2024</span>
        </div>
      </div>

      {/* Testimonial 6 */}
      <div className="break-inside-avoid bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-100">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="Alex Kumar"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-200"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Alex Kumar</h3>
            <p className="text-sm text-gray-500">@alexkumar · Performance Marketing Specialist</p>
          </div>
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          The real-time reporting in Imaginary Space gives us the agility we need in today's fast-paced market. We can pivot campaigns instantly based on data. Game changer! 🎯
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>3:50 PM · Mar 10, 2024</span>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24 px-4">
  <div className="max-w-2xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Transform Your Marketing
      </h2>
      <p className="text-xl text-gray-600">
        Join Imaginary Space and unlock unlimited creative potential
      </p>
    </div>

    {/* Main Pricing Card */}
    <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-purple-100 relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
      
      {/* Price */}
      <div className="text-center mb-10 relative z-10">
        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
          LIMITED TIME OFFER
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-6xl font-bold text-gray-900">$49</span>
          <span className="text-2xl text-gray-500 font-medium">/month</span>
        </div>
        <p className="text-gray-600 mt-2">Cancel anytime. No hidden fees.</p>
      </div>

      {/* Features */}
      <div className="space-y-5 mb-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Unlimited Campaign Analytics</h3>
            <p className="text-gray-600 text-sm">Real-time insights across all marketing channels</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">AI-Powered Content Generator</h3>
            <p className="text-gray-600 text-sm">Create engaging copy in seconds with advanced AI</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Multi-Channel Automation</h3>
            <p className="text-gray-600 text-sm">Schedule and automate across social, email, and ads</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">White-Label Client Reports</h3>
            <p className="text-gray-600 text-sm">Professional branded reports for your clients</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Priority Support & Training</h3>
            <p className="text-gray-600 text-sm">24/7 expert support and onboarding assistance</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mb-6"
      >
        Start Your Imaginary Space Journey →
      </button>

      {/* Trust Indicators */}
      <div className="flex items-center justify-center gap-6 text-sm text-gray-600 flex-wrap">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          <span className="font-medium">Secure SSL Payment</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <span className="font-medium">Powered by Stripe</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
          </svg>
          <span className="font-medium">Money-Back Guarantee</span>
        </div>
      </div>
    </div>

    {/* Bottom Text */}
    <p className="text-center text-gray-500 mt-8 text-sm">
      Join 10,000+ marketers already using Imaginary Space to scale their campaigns
    </p>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget as HTMLFormElement;
    
    const formData = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      phone: (form.querySelector('#phone') as HTMLInputElement).value,
      company: (form.querySelector('#company') as HTMLInputElement).value,
      budget: (form.querySelector('#budget') as HTMLSelectElement).value,
      service: (form.querySelector('#service') as HTMLSelectElement).value,
      source: 'Imaginary Space Contact Form',
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thanks for joining! We\'ll be in touch soon.',
      });
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-md w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-4 shadow-2xl shadow-purple-500/50">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Imaginary Space</h1>
          <p className="text-purple-300 text-sm">Marketing Reimagined</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
            <p className="text-slate-300 text-sm">Be first to experience the future of marketing</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                id="company"
                name="company"
                required
                placeholder="Company Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-slate-900">Service Interest</option>
                <option value="brand-strategy" className="bg-slate-900">Brand Strategy</option>
                <option value="digital-marketing" className="bg-slate-900">Digital Marketing</option>
                <option value="content-creation" className="bg-slate-900">Content Creation</option>
                <option value="social-media" className="bg-slate-900">Social Media Management</option>
                <option value="seo-sem" className="bg-slate-900">SEO & SEM</option>
              </select>
            </div>

            <div>
              <select
                id="budget"
                name="budget"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-slate-900">Monthly Budget</option>
                <option value="5k-10k" className="bg-slate-900">$5K - $10K</option>
                <option value="10k-25k" className="bg-slate-900">$10K - $25K</option>
                <option value="25k-50k" className="bg-slate-900">$25K - $50K</option>
                <option value="50k+" className="bg-slate-900">$50K+</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Joining...
                </span>
              ) : (
                'Secure My Spot'
              )}
            </button>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-xl text-sm text-center ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>

          <p className="text-slate-400 text-xs text-center mt-6">
            Join 2,500+ marketers already on the waitlist
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mt-8 text-slate-400 text-xs">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Secure</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No spam</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Early access</span>
          </div>
        </div>
      </div>
    </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center space-y-8">
      {/* Logo */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">Imaginary Space</h2>
        <p className="mt-2 text-sm text-gray-400">Creative Marketing Solutions</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-2 text-sm">
        <a href="mailto:hello@imaginaryspace.com" className="hover:text-white transition-colors">
          hello@imaginaryspace.com
        </a>
        <a href="tel:+1-555-123-4567" className="hover:text-white transition-colors">
          +1 (555) 123-4567
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center space-x-6">
        <a href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Facebook">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Instagram">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 pt-4 border-t border-gray-800 w-full">
        <p>&copy; {new Date().getFullYear()} Imaginary Space. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}