import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { Navbar, IconContainer } from '../styles/navbar'
import { CogOutline, HomeOutline, NewspaperOutline, RocketOutline } from 'react-ionicons'
import { useRouter } from 'next/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  
  return (
    <>
      <main className="component">
        <Component {...pageProps} />
      </main>
      <Navbar>
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