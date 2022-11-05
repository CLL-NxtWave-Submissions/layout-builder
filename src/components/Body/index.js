import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="body-container-section-header">
                Left Navbar Menu
              </h1>
              <ul className="body-container-section-list">
                <li key="Item 1" className="body-container-section-list-item">
                  <p className="body-container-section-text">Item 1</p>
                </li>
                <li key="Item 2" className="body-container-section-list-item">
                  <p className="body-container-section-text">Item 2</p>
                </li>
                <li key="Item 3" className="body-container-section-list-item">
                  <p className="body-container-section-text">Item 3</p>
                </li>
                <li key="Item 4" className="body-container-section-list-item">
                  <p className="body-container-section-text">Item 4</p>
                </li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content-container">
              <h1 className="body-container-section-header">Content</h1>
              <p className="body-container-section-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="body-container-section-header">Right Navbar</h1>
              <ul className="body-container-section-list">
                <li key="Ad 1" className="body-container-section-ad-list-item">
                  <p className="body-container-section-ad-text">Ad 1</p>
                </li>
                <li key="Ad 2" className="body-container-section-ad-list-item">
                  <p className="body-container-section-ad-text">Ad 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
