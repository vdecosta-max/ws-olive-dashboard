import { useState } from 'react'
import PreviewNav from './components/PreviewNav'
import SiteHeader from './components/SiteHeader'
import Overview from './screens/Overview'
import Dashboard from './screens/Dashboard'
import EmailMagicLink from './screens/EmailMagicLink'
import EmailGuest from './screens/EmailGuest'
import EmailNotification from './screens/EmailNotification'
import InPanelCapture from './screens/InPanelCapture'
import MobileOliveCapture from './screens/MobileOliveCapture'
import IPhoneFrame from './components/iPhoneFrame'
import GmailFrame from './components/GmailFrame'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('overview')
  const [captureMode, setCaptureMode] = useState('save-prompt')

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return <Overview onSelectScreen={setActiveView} />
      case 'dashboard':
        return (
          <>
            <SiteHeader />
            <Dashboard />
            <section id="spacer" aria-hidden="true" />
          </>
        )
      case 'email-new-user':
        return (
          <GmailFrame>
            <div className="app-email-preview">
              <EmailMagicLink />
            </div>
          </GmailFrame>
        )
      case 'email-guest':
        return (
          <GmailFrame>
            <div className="app-email-preview">
              <EmailGuest />
            </div>
          </GmailFrame>
        )
      case 'email-notification':
        return (
          <GmailFrame>
            <div className="app-email-preview">
              <EmailNotification />
            </div>
          </GmailFrame>
        )
      case 'in-panel-flow':
        return (
          <>
            <InPanelCapture captureMode={captureMode} />
          </>
        )
      case 'mobile-olive':
        return (
          <IPhoneFrame>
            <MobileOliveCapture captureMode={captureMode} />
          </IPhoneFrame>
        )
      default:
        return null
    }
  }

  return (
    <>
      <PreviewNav
        activeView={activeView}
        onSelect={setActiveView}
        captureMode={captureMode}
        onCaptureModeChange={setCaptureMode}
      />
      {renderContent()}
    </>
  )
}

export default App
