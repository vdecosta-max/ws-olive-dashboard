/**
 * iPhoneFrame — Device frame for mobile prototype views.
 * iPhone 14 proportions (~390×844), notch, rounded corners.
 */
import './iPhoneFrame.css'

export default function iPhoneFrame({ children }) {
  return (
    <div className="iphone-frame" role="img" aria-label="iPhone device frame">
      <div className="iphone-frame__device">
        <div className="iphone-frame__notch" aria-hidden="true" />
        <div className="iphone-frame__screen">
          {children}
        </div>
      </div>
    </div>
  )
}
