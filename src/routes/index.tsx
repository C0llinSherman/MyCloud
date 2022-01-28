import React, { ReactNode } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import '../styles/App.css';
import { Home } from '../views/public/home.view';
import { LoginView } from '../views/public/login.view';
import { NotFound404 } from '../views/public/NotFount404.view';
import { SignUpView } from '../views/public/signUp.view';
import { useGlobalContext } from '../contexts/global.context';
import { SuccessfulLogin } from '../views/protected/successfulLogin.view';
import { GetStarted } from '../views/public/loginOption.view';
import { Resume } from '../views/protected/resume.view';
import { Profile } from '../views/protected/profile.view';
import { ContactMe } from '../views/protected/contact.view';
import { ProjectLinks } from '../views/protected/projectLinks.view';
import { Account } from '../views/protected/account.view';
import { FeedbackView } from '../views/protected/feedback.view';
import { DisplayFeedback } from '../components/displayFeedback';

type ProtectedViewProps = {
  children: ReactNode
}

// export function AdminView({ children }: ProtectedViewProps) {
//   const { state: { loggedIn, user }, onLogout } = useGlobalContext();
//   const navigate = useNavigate()

//   if (!loggedIn) {
//     if (user?.username !== 'shermcol000') {
//       navigate('/profile')
//     }
//   }
//   return (
//     <>{children}</>
//   )
// }

export function ProtectedView({ children }: ProtectedViewProps) {
  const { state: { loggedIn }, onLogout } = useGlobalContext();
  const navigate = useNavigate()
  if (!loggedIn) {
    navigate('/login')
  }
  return <>{children}</>
}

export function ProtectedMenu() {
  const { state: { loggedIn, user }, onLogout } = useGlobalContext();
  return (
    <header>
      <Menu>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Link to="/"><Icon name="home" /></Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/resume">Resume</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/project-links">Projects</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/feedback">Feedback</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact-me">Contact</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/account" ><Icon name="user" /> {user?.firstName}</Link>
          </Menu.Item>
          <Menu.Item onClick={() => onLogout?.()}>
            Log Out
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </header>)
}

export function PublicMenu() {
  return (
    <header>
      <Menu>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Link to="/"><Icon name="home" /></Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/sign-up">Sign Up</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </header>)
}


export function MainRoutes() {
  const { state: { loggedIn, user }, onLogout } = useGlobalContext();
  return (
    <div>
      {loggedIn ? <ProtectedMenu /> : <PublicMenu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/login" element={<LoginView />} />
        <Route path='/sign-up' element={<SignUpView />} />
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='/login-success' element={<ProtectedView><SuccessfulLogin /></ProtectedView>} />
        <Route path='/resume' element={<ProtectedView><Resume /></ProtectedView>} />
        <Route path='/profile' element={<ProtectedView><Profile /></ProtectedView>} />
        <Route path='/contact-me' element={<ProtectedView><ContactMe /></ProtectedView>} />
        <Route path='/project-links' element={<ProtectedView><ProjectLinks /></ProtectedView>} />
        <Route path='/account' element={<ProtectedView><Account /></ProtectedView>} />
        <Route path='/feedback' element={<ProtectedView><FeedbackView /></ProtectedView>} />
      </Routes>
    </div>
  );
}


