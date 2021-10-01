import React from 'react';
import { ReactSVG } from 'react-svg';
import logo from './logo.png';

const App = () => {
  return (
    <div className='h-full' style={{ backgroundColor: '#0a192f' }}>
      <div className='fixed w-screen'>
        <nav className='max-w-7xl h-20 flex items-center mx-auto px-4 sticky top-0'>
          <img src={logo} className='h-10' />
          <div className='ml-auto'>
            <a href='https://github.com/thoratica' target='_blank'>
              <ReactSVG src='./github.svg' className='h-6 text-gray-400 transition-colors hover:text-white' />
            </a>
          </div>
        </nav>
      </div>
      <section className='max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4'>
        <span className='text-green-400 font-mono mb-1'>01. Intro.</span>
        <div className='text-4xl sm:text-5xl text-gray-400 font-bold'>
          I'm <span className='text-gray-100'>David Lee</span> (a.k.a.&nbsp;tica),
        </div>
        <div className='text-4xl sm:text-5xl text-gray-400 font-bold'>a student "pseudo-developer".</div>
        <div className='text-gray-400 text-lg font-medium mt-4'>아주 평범한 {new Date().getFullYear() - 2006 + 1}살 유사 개발자입니다.</div>
        <ul className='text-gray-400 font-medium mt-2'>
          <li className='mt-0'>
            <span className='border-transparent inline-block' style={{ borderWidth: 5, borderLeftColor: 'rgb(156, 163, 175)' }} />
            쓸모 없어진 레포를 누적 100개 가량 삭제하며 수많은 커밋 내역을 날려버린 문화대혁명의 축소판
          </li>
          <li className='mt-1'>
            <span className='border-transparent inline-block' style={{ borderWidth: 5, borderLeftColor: 'rgb(156, 163, 175)' }} />
            쓸모 있는 레포는 단 한개도 없지만 매일 무언가를 만들고는 있는 시간 낭비 전문가
          </li>
          <li className='mt-1'>
            <span className='border-transparent inline-block' style={{ borderWidth: 5, borderLeftColor: 'rgb(156, 163, 175)' }} />
            매번 큰 차이는 없을 걸 알면서도 코드 퀄리티 높인답시고 프로젝트를 갈아 엎는 멍청이
          </li>
        </ul>
        <a href='https://github.com/thoratica' target='_blank' className='text-gray-200 font-light mt-4 flex border border-gray-700 px-5 py-2.5 rounded-lg transition-colors hover:bg-gray-700'>
          GitHub 프로필
          <ReactSVG src='./arrow-right.svg' className='h-6 ml-1' />
        </a>
      </section>
    </div>
  );
};

export default App;
