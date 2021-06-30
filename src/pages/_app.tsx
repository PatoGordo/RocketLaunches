import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { useRouter } from 'next/router'
import { app } from '../firebase'
import BottomBar from '../components/bottombar'
import TopBar from '../components/topbar'
import ModalLoading from '../components/loadingmodal'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [showWarn, setShowWarn] = useState(false)
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

    // Check user screen width and User agent
    if(screen.width > 768 && !/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setShowWarn(true)
      return
    }
    setShowWarn(false)
  }, [])

  return (
    <>
      <TopBar />

      <main className="component">
        <Component {...pageProps} />
      </main>
      
      <ModalLoading />
      
      {/* <div className={showWarn? 'screen-size-warn on':'screen-size-warn'}>
        Try using this application on a mobile phone to have a better experience. 
      </div> */}
      <BottomBar />
      <GlobalStyle />
    </>
  )
}

export default MyApp