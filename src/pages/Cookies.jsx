import { Helmet } from "react-helmet-async";

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — InteliSite</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative flex items-end bg-navy"
        style={{ minHeight: "40vh" }}
      >
        <div className="container-edge pb-16 pt-32">
          <span className="eyebrow mb-4 block">Legal</span>
          <h1 className="font-display text-display-md text-bone">
            Cookie Policy
          </h1>
          <p className="mt-4 text-bone/60 text-lg max-w-xl">
            Last updated: 1 January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-navy py-20">
        <div className="mx-auto px-6" style={{ maxWidth: "800px" }}>
          <div className="prose prose-invert prose-bone max-w-none space-y-10 text-bone/75 leading-relaxed">

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">1. Introduction</h2>
              <p>
                This Cookie Policy explains how InteliSite ("we", "us", "our") uses cookies and similar technologies when you visit our website at{" "}
                <a href="https://www.intelisite.co.uk" className="text-gold hover:text-gold/80 transition-colors">
                  www.intelisite.co.uk
                </a>. It explains what these technologies are and why we use them, as well as your rights to control our use of them. Please read this policy alongside our{" "}
                <a href="/privacy" className="text-gold hover:text-gold/80 transition-colors">
                  Privacy Policy
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">2. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to the website owners. Cookies set by the website owner are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies".
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">3. Categories of Cookies We Use</h2>

              <h3 className="font-display text-xl text-bone/90 mt-6 mb-2">Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you, such as setting your privacy preferences or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not work without them.
              </p>

              <h3 className="font-display text-xl text-bone/90 mt-6 mb-2">Analytics Cookies</h3>
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information collected by these cookies is aggregated and therefore anonymous. We use Google Analytics (measurement ID: G-FX3EN4S0MH) and Vercel Analytics for this purpose. If you do not allow these cookies, we will not know when you have visited our site.
              </p>

              <h3 className="font-display text-xl text-bone/90 mt-6 mb-2">Functional Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
              </p>

              <h3 className="font-display text-xl text-bone/90 mt-6 mb-2">Marketing Cookies</h3>
              <p>
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">4. Your Choices and Consent</h2>
              <p>
                When you first visit our website, you will be shown a cookie consent banner. By clicking "Accept All", you consent to the use of all categories of cookies described in this policy. By clicking "Reject Non-Essential", only strictly necessary cookies will be placed.
              </p>
              <p className="mt-4">
                You can also control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. The methods for doing so vary from browser to browser; please refer to the help documentation for your browser:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-gold hover:text-gold/80 transition-colors">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer" className="text-gold hover:text-gold/80 transition-colors">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-gold hover:text-gold/80 transition-colors">
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer" className="text-gold hover:text-gold/80 transition-colors">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="mt-4">
                Please note that restricting cookies may impact the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">5. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies. The date at the top of this page indicates when it was last updated.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
              </p>
              <address className="not-italic mt-3 space-y-1 text-bone/70">
                <p>InteliSite</p>
                <p>27 Old Gloucester St, Holborn, London WC1N 3AX</p>
                <p>
                  <a href="mailto:hello@intelisite.co.uk" className="text-gold hover:text-gold/80 transition-colors">
                    hello@intelisite.co.uk
                  </a>
                </p>
              </address>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
