import React from 'react';
import { ReactSVG } from 'react-svg';
import logo from './logo.png';

const App = () => {
  return (
    <div className='h-full' style={{ backgroundColor: '#0a192f' }}>
      <div className='fixed w-screen'>
        <nav className='max-w-7xl h-20 flex items-center mx-auto px-4 md:px-12 sticky top-0'>
          <img src={logo} className='h-10' />
          <div className='ml-auto'>
            <a href='https://github.com/thoratica' target='_blank'>
              <ReactSVG src='./github.svg' className='h-6 text-gray-400 transition-colors hover:text-white' />
            </a>
          </div>
        </nav>
      </div>
      <div className='snap snap-y snap-mandatory max-h-screen overflow-y-scroll'>
        <section className='snap-start max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
          <span className='text-green-400 font-mono mb-1'>[0] Intro.</span>
          <div className='text-4xl sm:text-5xl text-gray-400 font-bold'>
            I'm{' '}
            <span id='name' className='bg-clip-text text-transparent'>
              David Lee
            </span>{' '}
            (a.k.a.&nbsp;tica),
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
        <section className='snap-start max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
          <span className='text-green-400 font-mono mb-1'>[1] About.</span>
          <div className='text-4xl sm:text-5xl text-gray-400 font-bold'>
            <span className='text-gray-200'>pseudo</span>
            -developer
          </div>
          <div className='text-4xl sm:text-5xl text-gray-400 font-bold'>
            <span className='text-gray-200'>pseudo</span>
            -designer
          </div>
          <div className='text-gray-400 text-lg font-medium mt-4'>취미, 능력, 모든 게 컴퓨터인 학생입니다.</div>
          <div className='text-gray-400 text-lg font-medium mt-2'>
            개발을 못하지만 개발을 좋아합니다.
            <br />
            디자인을 못하지만 디자인을 좋아합니다.
            <br />
            내가 컴퓨터 중독이 아니라고 우기는건 잘 합니다.
          </div>
        </section>
        <section className='snap-start max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
          <span className='text-green-400 font-mono mb-1'>[2] Skills.</span>
          <div className='text-4xl sm:text-5xl text-gray-400 font-bold'>
            JavaScript <span className='text-gray-200'>TypeScript</span> Kotlin Java …
          </div>
          <div className='text-4xl sm:text-5xl text-gray-400 font-bold'>
            <span className='text-gray-200'>Photoshop</span> Illustrator …
          </div>
          <div className='text-gray-400 text-lg font-medium mt-4'>JS, TS, Kotlin, Java 등 여러 언어를 사용할 수 있습니다.<br/>Go, Rust, C++ 등의 언어들을 학습하고 있습니다.</div>
          <div className='text-gray-400 text-lg font-medium mt-2'>
            프로그래밍 언어는 주로 TypeScript를 사용합니다.
            <br />
            디자인 툴은 주로 Photoshop을 사용합니다.
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
