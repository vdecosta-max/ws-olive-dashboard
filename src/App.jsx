import { useState } from 'react'
import PreviewNav from './components/PreviewNav'
import SiteHeader from './components/SiteHeader'
import Overview from './screens/Overview'
import Dashboard from './screens/Dashboard'
import EmailMagicLink from './screens/EmailMagicLink'
import EmailGuest from './screens/EmailGuest'
import EmailNotification from './screens/EmailNotification'
import InPanelCapture from './screens/InPanelCapture'
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
          <div className="app-email-preview">
            <EmailMagicLink />
          </div>
        )
      case 'email-guest':
        return (
          <div className="app-email-preview">
            <EmailGuest />
          </div>
        )
      case 'email-notification':
        return (
          <div className="app-email-preview">
            <EmailNotification />
          </div>
        )
      case 'in-panel-flow':
        return (
          <>
            <InPanelCapture captureMode={captureMode} />
          </>
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
