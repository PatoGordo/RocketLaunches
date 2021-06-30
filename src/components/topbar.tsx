import React, { useState, useEffect } from 'react'
import { MenuOutline, NotificationsOutline } from 'react-ionicons'
import { TopBar, TopMenu } from '../styles/navbar'
import { SwitchComponent } from '../styles/switch'
import { ToggleCard } from '../styles/settings-page'

export default function TopBar_() {
  const [isDark, setIsDark] = useState(true)
  const [measures, setMeasures] = useState(true) // true => metric; fasle => imperial
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('RocketLaunches::Measures') === 'metric') {
      setMeasures(true)
    }else{
      setMeasures(false)
    }

    if(localStorage.getItem('RocketLaunches::Theme') === 'dark') {
      setIsDark(true)
    }else{
      setIsDark(false)
    }
  }, [])

  function handleChangeTheme(e: React.FormEvent<HTMLLabelElement>) {
    e.preventDefault()
    setIsOpen(false)

    const body = document.querySelector('body')

    if(isDark) {
      setIsDark(!isDark)
      body.classList.add('light')
      localStorage.setItem('RocketLaunches::Theme', 'light')
      return
    }
    setIsDark(!isDark)
    body.classList.remove('light')
    localStorage.setItem('RocketLaunches::Theme', 'dark')
  }

  // function handleChangeMeasures(e: React.FormEvent<HTMLLabelElement>) {
  //   e.preventDefault()
  //   setIsOpen(false)

  //   if(measures) {
  //     setMeasures(false)
  //     localStorage.setItem('RocketLaunches::Measures', 'imperial')
  //     return
  //   }
  //   setMeasures(true)
  //   localStorage.setItem('RocketLaunches::Measures', 'metric')
  // }

  return (
    <>
      <TopBar className='topbar' id="top-nav">
        <div style={{display: 'flex'}}>
          <MenuOutline width="24px" height="24px" color="#ffffff" onClick={() => setIsOpen(!isOpen)} />
          <h2>Rocket Launches</h2>
        </div>
        {/* <div style={{display: 'flex'}}>
          <NotificationsOutline width="24px" height="24px" color="#ffffff" onClick={() => alert('Not working yet!')} />
        </div> */}
      </TopBar>

      <TopMenu className={isOpen?'topbar-menu on':'topbar-menu'}>
        <h2>Settings</h2>

        <h3 style={{fontWeight: 400}}>Theme</h3>
        <ToggleCard>
          <h3>Light</h3>
          <SwitchComponent onClick={(e) => handleChangeTheme(e)} htmlFor="input">
            <input id="input" type="checkbox" checked={isDark} onChange={() => {}} />
            {/* The onChange is to stop warning */}
            <span className="slider round"></span>
          </SwitchComponent>
          <h3>Dark</h3>
        </ToggleCard>

        {/* <h3 style={{fontWeight: 400}}>Measures</h3>
        <ToggleCard>
          <h3>Imperial</h3>
          <SwitchComponent onClick={(e) => handleChangeMeasures(e)} htmlFor="input2">
            <input id="input2" type="checkbox" checked={measures} onChange={() => {}} />
            <span className="slider round"></span>
          </SwitchComponent>
          <h3>Metric</h3>
        </ToggleCard> */}

        <h2 style={{marginTop: '20px'}}>Sources</h2>

        <h3 style={{fontWeight: 400}}>Public API</h3>
        <ToggleCard>
          <h3><a href="https://github.com/PatoGordo/Rocket-Launches-API" target="_blank">Repository</a></h3>
          |
          <h3><a href="https://api.rocketlaunches.ga/" target="_blank">API endpoint</a></h3>
        </ToggleCard>

        <h3 style={{fontWeight: 400}}>Website</h3>
        <ToggleCard>
          <h3><a href="https://github.com/PatoGordo/RocketLaunches" target="_blank">Repository</a></h3>
        </ToggleCard>

        <footer>
          Made with 💜 by <a href="https://github.com/PatoGordo" target="_blank">PatoGordo</a>
        </footer>
      </TopMenu>
    </>
  )
}