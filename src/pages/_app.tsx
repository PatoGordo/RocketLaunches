import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { Navbar, IconContainer } from '../styles/navbar'
import { LoadingAnimation } from '../styles/loading'
import { CogOutline, HomeOutline, NewspaperOutline, RocketOutline } from 'react-ionicons'
import { useRouter } from 'next/router'
import { app } from '../firebase'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  
  useEffect(() => {
    app.analytics()

    if(!localStorage.getItem('RocketLaunches::Theme')) {
      localStorage.setItem('RocketLaunches::Theme', 'dark')
    }
    if(!localStorage.getItem('RocketLaunches::Measures')) {
      localStorage.setItem('RocketLaunches::Measures', 'metric')
    }
    if(localStorage.getItem('RocketLaunches::Theme') === 'light') {
      document.querySelector('body').classList.add('light')
    }
    document.querySelector('body').classList.remove('dark')
  }, [])

  return (
    <>
      <main className="component">
        <Component {...pageProps} />
      </main>

      <LoadingAnimation id="loading">
        <svg version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
          <circle fill="none" stroke="#536464" strokeWidth="4" cx="50" cy="50" r="44" style={{opacity: 0.5}} />
          <circle fill="#fff" stroke="#00C853" strokeWidth="3" cx="8" cy="54" r="6" >
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 48"
              to="360 50 52"
              repeatCount="indefinite" />

          </circle>
        </svg>
        <h2>Fetching data
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
        </h2>
      </LoadingAnimation>

      <Navbar id="navbar">
        <IconContainer className={router.pathname === '/' ? 'active' : ''} onClick={() => router.push('/')}>
          <HomeOutline width="24px" height="24px" color="#ffffff" />
          <a>Home</a>
        </IconContainer>

        <IconContainer className={router.pathname === '/launches' ? 'active' : ''} onClick={() => router.push('/launches')}>
          <RocketOutline width="24px" height="24px" color="#ffffff" />
          <a>Launches</a>
        </IconContainer>

        <IconContainer className={router.pathname === '/news' ? 'active' : ''} onClick={() => router.push('/news')}>
          <NewspaperOutline width="24px" height="24px" color="#ffffff" />
          <a>News</a>
        </IconContainer>

        <IconContainer className={router.pathname === '/settings' ? 'active' : ''} onClick={() => router.push('/settings')}>
          <CogOutline width="24px" height="24px" color="#ffffff" />
          <a>Settings</a>
        </IconContainer>
      </Navbar>
      <GlobalStyle />
    </>
  )
}

export default MyApp