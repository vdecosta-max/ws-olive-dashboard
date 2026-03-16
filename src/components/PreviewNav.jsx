/**
 * PreviewNav — Nav bar to switch between Dashboard and email screens.
 */
import './PreviewNav.css'

const VIEWS = [
  { id: 'overview', label: 'Overview' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'email-new-user', label: 'Email: New User' },
  { id: 'email-guest', label: 'Email: Guest' },
  { id: 'email-notification', label: 'Email: Notification' },
  { id: 'in-panel-flow', label: 'In-Panel Flow' },
  { id: 'mobile-olive', label: 'Mobile Olive' },
]

export default function PreviewNav({ activeView, onSelect, captureMode, onCaptureModeChange }) {
  return (
    <nav className="preview-nav" aria-label="Screen preview navigation">
      {VIEWS.map((view) => (
        <button
          key={view.id}
          type="button"
          className={`preview-nav__btn ${activeView === view.id ? 'preview-nav__btn--active' : ''}`}
          onClick={() => onSelect(view.id)}
        >
          {view.label}
        </button>
      ))}
      {(activeView === 'in-panel-flow' || activeView === 'mobile-olive') && (
        <>
          <span className="preview-nav__sep" aria-hidden="true">|</span>
          <button
            type="button"
            className={`preview-nav__btn ${captureMode === 'save-prompt' ? 'preview-nav__btn--active' : ''}`}
            onClick={() => onCaptureModeChange('save-prompt')}
          >
            Save Prompt
          </button>
          <button
            type="button"
            className={`preview-nav__btn ${captureMode === 'inline-form' ? 'preview-nav__btn--active' : ''}`}
            onClick={() => onCaptureModeChange('inline-form')}
          >
            Inline Form
          </button>
          <button
            type="button"
            className={`preview-nav__btn ${captureMode === 'sign-in' ? 'preview-nav__btn--active' : ''}`}
            onClick={() => onCaptureModeChange('sign-in')}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`preview-nav__btn ${captureMode === 'signed-in' ? 'preview-nav__btn--active' : ''}`}
            onClick={() => onCaptureModeChange('signed-in')}
          >
            Signed In
          </button>
        </>
      )}
    </nav>
  )
}
