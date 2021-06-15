import React, { useEffect, useState } from 'react'
import { SwitchComponent } from '../styles/switch'
import { ToggleCard } from '../styles/settings-page'
import { useRouter } from 'next/router'

function settings() {
  const [isDark, setIsDark] = useState(false)
  const [measures, setMeasures] = useState(true)
  // true => metric; fasle => imperial
  const router = useRouter()

  useEffect(() => {
    console.log('carregou')
    if(localStorage.getItem('RocketLaunches::Measures') === 'metric') {
      setMeasures(true)
      console.log('metrico')
    }else{
      setMeasures(false)
      console.log('imperial')
    }

    if(localStorage.getItem('RocketLaunches::Theme') === 'dark') {
      setIsDark(true)
      console.log('dark')
    }else{
      setIsDark(false)
      console.log('light')
    }
  }, [])
  
  function handleChangeTheme(e: React.FormEvent<HTMLLabelElement>) {
    e.preventDefault()

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

  function handleChangeMeasures(e: React.FormEvent<HTMLLabelElement>) {
    e.preventDefault()

    if(measures) {
      setMeasures(false)
      localStorage.setItem('RocketLaunches::Measures', 'imperial')
      return
    }
    setMeasures(true)
    localStorage.setItem('RocketLaunches::Measures', 'metric')
  }

  return (
    <div>
      <h1>Settings</h1>

      <h2 style={{fontWeight: 400}}>Theme</h2>
      <ToggleCard>
        <h3>Light</h3>
        <SwitchComponent onClick={(e) => handleChangeTheme(e)} htmlFor="input">
          <input id="input" type="checkbox" checked={isDark} onChange={() => {}} />
          {/* The onChange is to stop warning */}
          <span className="slider round"></span>
        </SwitchComponent>
        <h3>Dark</h3>
      </ToggleCard>

      <h2 style={{fontWeight: 400}}>Measures</h2>
      <ToggleCard>
        <h3>Imperial</h3>
        <SwitchComponent onClick={(e) => handleChangeMeasures(e)} htmlFor="input2">
          <input id="input2" type="checkbox" checked={measures} onChange={() => {}} />
          <span className="slider round"></span>
        </SwitchComponent>
        <h3>Metric</h3>
      </ToggleCard>

    </div>
  )
}

export default settings