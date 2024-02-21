import React from 'react'
import { Link } from 'react-router-dom'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="home-navbar-interactive navbarContainer"
        >
          <div className="home-container01">
            <img
              alt="image"
              src="/external/svgexport-58.svg"
              className="home-image"
            />
            <img
              alt="image"
              src="/external/svgexport-251-200h.png"
              className="home-image1"
            />
          </div>
          <div className="home-container02">
            <div className="home-container03">
              <div className="home-container04">
                <div
                  data-thq="thq-navbar-nav"
                  className="home-desktop-menu"
                ></div>
              </div>
            </div>
          </div>
          <div className="home-container05">
            <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
            <a href="#Pricing" className="home-register buttonFilled">
              Price plan
            </a>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">NOTEPAD</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links">
                <span className="home-nav12 bodySmall">Download</span>
                <span className="home-nav22 bodySmall">Features</span>
                <span className="home-nav32 bodySmall">Support</span>
                <span className="home-nav42 bodySmall">Contact</span>
              </nav>
              <div className="home-buttons">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon02 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container06">
            <h1 className="home-hero-heading">
              The next generation of text editors
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Simple and efficient text editor</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <a href="#download" className="home-hero-button1 buttonFilled">
                Download
              </a>
              <a href="#features" className="home-hero-button2 buttonFlat">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div id="features" className="home-features1">
            <div className="home-container07">
              <h2 className="home-features-heading heading2">
                Why use NotePad Pro
              </h2>
              <span className="overline">
                <span>Why not?</span>
                <br></br>
              </span>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Explore the features that make our notepad stand out
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container08">
              <FeatureCard
                heading="Easy to Use"
                subHeading="Start editing text files right away without hassle."
              ></FeatureCard>
              <FeatureCard
                heading="Customization"
                subHeading="Tailor the editor to your preferences with customizable font styles and sizes."
              ></FeatureCard>
              <FeatureCard
                heading="Essential Features"
                subHeading="Basic formatting options, easy file management, and intuitive controls make editing text a breeze."
              ></FeatureCard>
              <FeatureCard
                heading="Lightweight"
                subHeading="A lightweight editor that doesn't consume much space on your device."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div id="Pricing" className="home-pricing">
        <div className="home-container09"></div>
        <div className="home-container10">
          <div className="home-container11">
            <h1>Pricing Plans</h1>
            <span className="home-text032">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <span className="home-text036">Free</span>
              <span className="home-text037">$0</span>
              <span className="home-text038">
                <span className="home-text039">10</span>
                <span> Pictures</span>
              </span>
              <span className="home-text041">
                <span className="home-text042">
                  20
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Files</span>
              </span>
              <span className="home-text044">
                <span className="home-text045">1 </span>
                <span>Camera</span>
              </span>
              <span className="home-text047">Public accessible</span>
              <a href="#download" className="home-link button">
                Download
              </a>
            </div>
            <div className="home-container14">
              <span className="home-text048">PRO</span>
              <span className="home-text049">$2,95</span>
              <span className="home-text050">
                <span className="home-text051">100</span>
                <span> Pictures</span>
              </span>
              <span className="home-text053">
                <span className="home-text054">
                  150
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text055">Files</span>
              </span>
              <span className="home-text056">
                <span className="home-text057">3</span>
                <span> Camera</span>
              </span>
              <span className="home-text059">Private accessible</span>
              <Link to="/not-found" className="home-navlink button">
                Buy
              </Link>
            </div>
          </div>
        </div>
        <div className="home-container15"></div>
      </div>
      <div className="home-banner">
        <div id="download" className="home-banner1 bannerContainer">
          <h1 className="home-banner-heading heading2">Download Notepad Pro</h1>
          <span className="home-text060">
            <span className="home-text061">
              Download
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text062">
              the latest version of Notepad Pro 
            </span>
            <span className="home-text063">
              and start using the most advanced text editor in the market
            </span>
            <br></br>
          </span>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Our notepad offers a minimalist design with powerful features
                  to enhance your text editing experience. Whether you&apos;re a
                  student, writer, or coder, our notepad is the perfect tool for
                  all your needs. Download now and start creating!
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <h1 className="home-banner-heading1">How to install Notepad Pro</h1>
          <span className="home-text079">
            <span>
              1. Click the download button below to obtain the installation
              file.
            </span>
            <br></br>
            <br></br>
            <span>
              2. Double-click the downloaded file to initiate the installation
              process.
            </span>
            <br></br>
            <br></br>
            <span>
              3. Follow the on-screen instructions to complete the installation.
            </span>
            <br></br>
            <br></br>
            <span>4. Launch the editor and start editing your text files!</span>
            <br></br>
            <br></br>
            <span>
              Don&apos;t wait any longer to experience the simplicity and power
              of our Notepad Editor. Download it now!
            </span>
            <br></br>
          </span>
          <h1 className="home-banner-heading2">-</h1>
          <button className="home-banner-button buttonFilled">Download</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div id="FAQ" className="home-faq1">
            <div className="home-container16">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h1 className="home-text097">Common questions</h1>
              <span className="home-text098 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container17">
              <Question1
                answer="Notepad Pro is currently only available for Windows."
                question="What platf.orms does Notepad Pro support?"
              ></Question1>
              <Question1
                answer="Notepad Pro offers a wide range of features including syntax highlighting, code folding, customizable themes, spell checking, auto-completion, tabbed interface, search and replace functionality, and more."
                question="What features does Notepad Pro offer?"
              ></Question1>
              <Question1
                answer="Notepad Pro offers both free and paid versions. The free version provides basic functionality, while the paid version unlocks additional advanced features and removes any limitations."
                question="Is Notepad Pro free to use?"
              ></Question1>
              <Question1
                answer="You can upgrade to the paid version of Notepad Pro by opening the free version of Notepad Pro and waiting for 5 minutes, after this the paid version will automatically appear on your screen."
                question="How do I upgrade to the paid version of Notepad Pro?"
              ></Question1>
              <Question1
                answer="The only available thing for technical support is Hope."
                question="How do I get technical support for Notepad Pro?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <svg viewBox="0 0 1152 1024" className="home-icon08">
            <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
          </svg>
          <span className="home-text101">Customers</span>
          <span className="home-text102">
            Total number of users using Notepad Pro
          </span>
          <h1 className="home-text103">61mln.</h1>
        </div>
        <div className="home-stat1">
          <svg viewBox="0 0 1024 1024" className="home-icon11">
            <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
          </svg>
          <span className="home-text104">Files collected</span>
          <span className="home-text105">Lorem ipsum dolor sit amet.</span>
          <h1 className="home-text106">324mln.</h1>
        </div>
        <div className="home-stat2">
          <svg viewBox="0 0 1024 1024" className="home-icon13">
            <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
          </svg>
          <span className="home-text107">Countries</span>
          <span className="home-text108">Lorem ipsum dolor sit amet.</span>
          <h1 className="home-text109">13</h1>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container18">
            <span className="logo">NOTEPAD PRO</span>
            <nav className="home-nav1">
              <a href="#download" className="home-nav121 bodySmall">
                Download
              </a>
              <a href="#features" className="home-nav221 bodySmall">
                Features
              </a>
              <a href="#FAQ" className="home-nav321 bodySmall">
                FAQ
              </a>
              <Link to="/not-found" className="home-nav322 bodySmall">
                Support
              </Link>
              <a href="#Pricing" className="home-nav421 bodySmall">
                Pricing
              </a>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container19">
            <span className="bodySmall home-text110">
              © 2024 Notepad Data, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <Link to="/not-found" className="home-navlink1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon15 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </Link>
              <Link to="/not-found" className="home-navlink2">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon17 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </Link>
              <Link to="/not-found" className="home-navlink3">
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon19 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
