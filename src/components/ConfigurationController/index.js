import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <div className="configuration-controller-bg-container">
    <h1 className="configuration-controller-header">Layout</h1>
    <ul className="configuration-controller-options-list">
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          return (
            <>
              <li className="configuration-controller-option">
                <input
                  id="content"
                  className="configuration-controller-option-checkbox"
                  name="includeContent"
                  value={showContent}
                  onChange={onToggleShowContent}
                />
                <label
                  htmlFor="content"
                  className="configuration-controller-option-label"
                >
                  Content
                </label>
              </li>

              <li className="configuration-controller-option">
                <input
                  id="left-navbar"
                  className="configuration-controller-option-checkbox"
                  name="includeLeftNavbar"
                  value={showLeftNavbar}
                  onChange={onToggleShowLeftNavbar}
                />
                <label
                  htmlFor="left-navbar"
                  className="configuration-controller-option-label"
                >
                  Left Navbar
                </label>
              </li>

              <li className="configuration-controller-option">
                <input
                  id="right-navbar"
                  className="configuration-controller-option-checkbox"
                  name="includeRightNavbar"
                  value={showRightNavbar}
                  onChange={onToggleShowRightNavbar}
                />
                <label
                  htmlFor="right-navbar"
                  className="configuration-controller-option-label"
                >
                  Right Navbar
                </label>
              </li>
            </>
          )
        }}
      </ConfigurationContext.Consumer>
    </ul>
  </div>
)

export default ConfigurationController
