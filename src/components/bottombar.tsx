import { BottomBar, IconContainer } from '../styles/navbar'
import { HomeOutline, NewspaperOutline, RocketOutline, TimeOutline, StorefrontOutline } from 'react-ionicons'
import { useRouter } from 'next/router'

export default function BottomBar_() {
  const router = useRouter()

  return (
    <BottomBar id="bottom-nav">
        <IconContainer className={router.pathname === '/' ? 'active' : ''} onClick={() => router.push('/')}>
          <HomeOutline width="24px" height="24px" color="#ffffff" />
          <a>Home</a>
        </IconContainer>

        <IconContainer className={router.pathname === '/news' ? 'active' : ''} onClick={() => router.push('/news')}>
          <NewspaperOutline width="24px" height="24px" color="#ffffff" />
          <a>News</a>
        </IconContainer>

        <IconContainer className={router.pathname === '/launches' ? 'active' : ''} onClick={() => router.push('/launches')}>
          <TimeOutline width="24px" height="24px" color="#ffffff" />
          <a>Launches</a>
        </IconContainer>

        <IconContainer className={router.pathname === '/vehicles' ? 'active' : ''} onClick={() => router.push('/rockets')}>
          <RocketOutline width="24px" height="24px" color="#ffffff" />
          <a>Rockets</a>
        </IconContainer>

      </BottomBar>
  )
}