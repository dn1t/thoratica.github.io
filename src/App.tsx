import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import logo from './logo.png';

const App = () => {
  const snap = useRef<HTMLDivElement>(null);

  return (
    <div className='h-full'>
      <ul className='circles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='fixed w-screen z-30'>
        <nav className='max-w-7xl h-20 flex items-center mx-auto px-4 md:px-12 sticky top-0'>
          <img src={logo} className='h-10' />
          <div className='ml-auto'>
            <a href='https://github.com/thoratica' target='_blank'>
              <ReactSVG src='./github.svg' className='h-6 text-gray-500 transition-colors hover:text-gray-200' />
            </a>
          </div>
        </nav>
      </div>
      <div className='snap snap-y snap-mandatory max-h-screen overflow-y-scroll z-0 relative' ref={snap}>
        <section className='snap-start max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
          <span className='text-green-400 font-mono mb-1'>[0] Intro.</span>
          <div className='text-3xl sm:text-5xl text-gray-500 hover:text-gray-400 transition-colors font-bold'>
            I'm{' '}
            <span id='name' className='bg-clip-text text-transparent'>
              David Lee
            </span>{' '}
            (a.k.a.&nbsp;tica),
            <br className='hidden xs:block' />
            <span className='inline'> </span>a&nbsp;student <span className='whitespace-pre'>"pseudo-developer"</span>.
          </div>
          <div className='text-gray-400 text-lg font-medium mt-4'>A {new Date().getFullYear() - 2006 + 1}-year-old "pseudo-developer", "developer-like person" or something.</div>
          <ul className='text-gray-400 font-medium mt-2'>
            <li className='mt-0'>
              <span className='border-transparent inline-block' style={{ borderWidth: 5, borderLeftColor: 'rgb(156, 163, 175)' }} />A microcosm of Cultural Revolution who blowed up hudreds of commit history by deleting over 100 unused repos.
            </li>
            <li className='mt-1'>
              <span className='border-transparent inline-block' style={{ borderWidth: 5, borderLeftColor: 'rgb(156, 163, 175)' }} />A time-wasting expert who doesn't have a single useful repo, but always building something.
            </li>
            <li className='mt-1'>
              <span className='border-transparent inline-block' style={{ borderWidth: 5, borderLeftColor: 'rgb(156, 163, 175)' }} />A redevelopment expert who turns over the project every time, knowing that it won't make a big difference.
            </li>
          </ul>
          <div className='text-gray-500 transition-colors hover:text-gray-400 font-medium absolute bottom-16 flex cursor-pointer' onClick={() => snap.current?.scroll({ top: snap.current.clientHeight, behavior: 'smooth' })}>
            <ReactSVG src='./arrow-down.svg' className='h-6 text-gray-500 mr-1' />
            Scroll down
          </div>
        </section>
        <section className='snap-start max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
          <span className='text-green-400 font-mono mb-1'>[1] About.</span>
          <div className='text-4xl sm:text-5xl text-gray-500 hover:text-gray-400 transition-colors font-bold'>
            <span className='text-gray-200'>pseudo</span>
            -developer
            <br />
            <span className='text-gray-200'>pseudo</span>
            -designer
          </div>
          <div className='text-gray-400 text-lg font-medium mt-4'>Computers as a hobby since 2016. Started web development in 2017.</div>
          <div className='text-gray-400 text-lg font-medium mt-2'>
            Not good in development, but likes to.
            <br />
            Not good in design, but likes to.
          </div>
          <div className='flex gap-3'>
            <a href='https://github.com/thoratica' target='_blank' className='text-gray-200 font-light mt-4 flex border border-gray-700 px-5 py-2.5 rounded-lg transition-colors hover:bg-gray-700'>
              GitHub Profile
              <ReactSVG src='./arrow-right.svg' className='h-6 ml-1' />
            </a>
            <a href='https://dribbble.com/thoratica' target='_blank' className='text-gray-200 font-light mt-4 flex border border-gray-700 px-5 py-2.5 rounded-lg transition-colors hover:bg-gray-700'>
              Dribbble Profile
              <ReactSVG src='./arrow-right.svg' className='h-6 ml-1' />
            </a>
          </div>
        </section>
        <section className='snap-start max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
          <span className='text-green-400 font-mono mb-1'>[2] Skills.</span>
          <div className='text-3xl sm:text-5xl text-gray-500 hover:text-gray-400 transition-colors font-bold'>
            JavaScript&nbsp;<span className='text-gray-200'>TypeScript</span> Kotlin&nbsp;Java&nbsp;… <span className='text-gray-200'>Photoshop</span>&nbsp;Illustrator&nbsp;…
          </div>
          <div className='text-gray-400 text-lg font-medium mt-4'>Can use several languages like JS, TS, Kotlin, and Java. Learning languages like Go, Rust, and C++.</div>
          <div className='text-gray-400 text-lg font-medium mt-2'>
            Mainly uses TypeScript for programming.
            <br />
            Mainly uses Photoshop for design.
          </div>
          <div className='hidden mt-4 w-full xs:table'>
            <tr>
              <td>
                <div className='mr-2'>
                  <div className='text-gray-200 font-medium text-lg'>JavaScript</div>
                  <div className='bg-gray-700 w-full rounded-full'>
                    <div className='bg-yellow-400 h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '90%' }}>
                      90%
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className='ml-2'>
                  <div className='text-gray-200 font-medium text-lg'>TypeScript</div>
                  <div className='bg-gray-700 w-full rounded-full'>
                    <div className='bg-blue-600 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '70%' }}>
                      70%
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='mr-2'>
                  <div className='text-gray-200 font-medium text-lg'>Kotlin</div>
                  <div className='bg-gray-700 w-full rounded-full'>
                    <div className='bg-purple-600 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '50%' }}>
                      50%
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className='ml-2'>
                  <div className='text-gray-200 font-medium text-lg'>Java</div>
                  <div className='bg-gray-700 w-full rounded-full'>
                    <div className='bg-yellow-800 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '40%' }}>
                      40%
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='mr-2'>
                  <div className='text-gray-200 font-medium text-lg'>Photoshop</div>
                  <div className='bg-gray-700 w-full rounded-full'>
                    <div className='bg-blue-800 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '70%' }}>
                      70%
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className='ml-2'>
                  <div className='text-gray-200 font-medium text-lg'>Illustrator</div>
                  <div className='bg-gray-700 w-full rounded-full'>
                    <div className='bg-yellow-600 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '40%' }}>
                      40%
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </div>
          <details className='mt-2 w-full xs:hidden'>
            <summary className='text-gray-200 font-medium select-none'>Toggle Open / Close</summary>
            <div className='flex flex-col w-full'>
              <div>
                <div className='text-gray-200 font-medium text-lg'>JavaScript</div>
                <div className='bg-gray-700 w-full rounded-full'>
                  <div className='bg-yellow-400 h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '90%' }}>
                    90%
                  </div>
                </div>
              </div>
              <div>
                <div className='text-gray-200 font-medium text-lg'>TypeScript</div>
                <div className='bg-gray-700 w-full rounded-full'>
                  <div className='bg-blue-600 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '70%' }}>
                    70%
                  </div>
                </div>
              </div>
              <div>
                <div className='text-gray-200 font-medium text-lg'>Kotlin</div>
                <div className='bg-gray-700 w-full rounded-full'>
                  <div className='bg-purple-600 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '50%' }}>
                    50%
                  </div>
                </div>
              </div>
              <div>
                <div className='text-gray-200 font-medium text-lg'>Java</div>
                <div className='bg-gray-700 w-full rounded-full'>
                  <div className='bg-yellow-800 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '40%' }}>
                    40%
                  </div>
                </div>
              </div>
              <div>
                <div className='text-gray-200 font-medium text-lg'>Photoshop</div>
                <div className='bg-gray-700 w-full rounded-full'>
                  <div className='bg-blue-800 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '70%' }}>
                    70%
                  </div>
                </div>
              </div>
              <div>
                <div className='text-gray-200 font-medium text-lg'>Illustrator</div>
                <div className='bg-gray-700 w-full rounded-full'>
                  <div className='bg-yellow-600 text-white h-6 rounded-full flex items-center justify-end pr-2 font-medium' style={{ width: '40%' }}>
                    40%
                  </div>
                </div>
              </div>
            </div>
          </details>
        </section>
        <section className='snap-start max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
          <span className='text-green-400 font-mono mb-1'>[3] Projects.</span>
          <div className='text-3xl sm:text-5xl text-gray-500 hover:text-gray-400 transition-colors font-bold'>
            Always starts with a <span className='text-gray-200'>useful project.</span>
            <br />
            Of course, ends up with scrap.
          </div>
          <h3 className='text-4xl text-white mt-4'>(대충 프로젝트들이 들어갈 자리)</h3>
        </section>
      </div>
    </div>
  );
};

export default App;
