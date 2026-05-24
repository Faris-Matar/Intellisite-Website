import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — InteliSite</title>
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
            Privacy Policy
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
                InteliSite ("we", "us", "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">2. Who We Are</h2>
              <p>
                InteliSite is a web design agency registered in England and Wales. Our registered office is 27 Old Gloucester St, Holborn, London WC1N 3AX. We are registered with the Information Commissioner's Office (ICO) under registration number ZC149458. You can contact us at{" "}
                <a href="mailto:hello@intelisite.co.uk" className="text-gold hover:text-gold/80 transition-colors">
                  hello@intelisite.co.uk
                </a>{" "}
                for all data-related enquiries.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">3. Data We Collect</h2>
              <p>We may collect and process the following categories of personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Identity data:</strong> first name, last name, business name.</li>
                <li><strong>Contact data:</strong> email address, telephone number, postal address.</li>
                <li><strong>Technical data:</strong> IP address, browser type and version, time zone, browser plug-in types, operating system, and platform.</li>
                <li><strong>Usage data:</strong> information about how you use our website and services.</li>
                <li><strong>Marketing and communications data:</strong> your preferences in receiving marketing from us and your communication preferences.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">4. Lawful Bases for Processing</h2>
              <p>We rely on the following lawful bases under UK GDPR to process your personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Consent:</strong> where you have given clear consent for us to process your data for a specific purpose.</li>
                <li><strong>Contract:</strong> where processing is necessary to perform a contract with you or to take steps at your request before entering into a contract.</li>
                <li><strong>Legitimate interests:</strong> where processing is necessary for our legitimate interests or those of a third party, provided those interests are not overridden by your rights.</li>
                <li><strong>Legal obligation:</strong> where we must comply with a legal obligation.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">5. How We Use Your Data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to enquiries and provide the services you request.</li>
                <li>Send you marketing communications where you have opted in or we have a legitimate interest.</li>
                <li>Improve our website and services through analytics.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Protect our business and prevent fraud.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">6. Sharing Your Data</h2>
              <p>
                We do not sell, trade, or rent your personal data. We may share your data with trusted third-party service providers who assist us in operating our website and delivering our services, including email platform providers, analytics providers, and payment processors. All third parties are required to respect the security of your data and to treat it in accordance with applicable law. We may also disclose your data where required by law or to protect our legal rights.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">7. International Transfers</h2>
              <p>
                Some of our third-party service providers are based outside the UK or European Economic Area. Where we transfer data internationally, we ensure that appropriate safeguards are in place, such as standard contractual clauses approved by the UK Information Commissioner, to protect your personal data in accordance with UK GDPR.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">8. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorised use or disclosure, the purposes for which we process it, and applicable legal requirements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">9. Security</h2>
              <p>
                We have implemented appropriate technical and organisational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">10. Your Rights</h2>
              <p>Under UK GDPR you have the following rights in relation to your personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Right of access:</strong> to receive a copy of the personal data we hold about you.</li>
                <li><strong>Right to rectification:</strong> to have inaccurate or incomplete data corrected.</li>
                <li><strong>Right to erasure:</strong> to have your data deleted in certain circumstances.</li>
                <li><strong>Right to restriction:</strong> to restrict the processing of your data in certain circumstances.</li>
                <li><strong>Right to data portability:</strong> to receive your data in a structured, commonly used, machine-readable format.</li>
                <li><strong>Right to object:</strong> to object to processing based on legitimate interests or for direct marketing.</li>
                <li><strong>Rights related to automated decision-making:</strong> not to be subject to solely automated decisions that produce legal or similarly significant effects.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:hello@intelisite.co.uk" className="text-gold hover:text-gold/80 transition-colors">
                  hello@intelisite.co.uk
                </a>. We will respond within one month. You also have the right to lodge a complaint with the Information Commissioner's Office at{" "}
                <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-gold hover:text-gold/80 transition-colors">
                  ico.org.uk
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">11. Marketing</h2>
              <p>
                We may send you marketing communications if you have requested information from us, purchased services from us, or provided your contact details in connection with our services, and you have not opted out of receiving such communications. You can opt out at any time by contacting us at{" "}
                <a href="mailto:hello@intelisite.co.uk" className="text-gold hover:text-gold/80 transition-colors">
                  hello@intelisite.co.uk
                </a>{" "}
                or by clicking the unsubscribe link in any marketing email.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">12. Cookies</h2>
              <p>
                Our website uses cookies and similar tracking technologies. Please refer to our{" "}
                <a href="/cookies" className="text-gold hover:text-gold/80 transition-colors">
                  Cookie Policy
                </a>{" "}
                for detailed information on how we use cookies, what types we deploy, and how you can control them.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">13. Children</h2>
              <p>
                Our website and services are not directed at children under the age of 16. We do not knowingly collect personal data from children under 16. If you believe we have inadvertently collected such data, please contact us immediately and we will take steps to delete it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">14. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. This Privacy Policy applies only to our website. We have no control over and accept no responsibility for the privacy practices or content of third-party sites. We encourage you to review the privacy policy of every website you visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">15. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Where changes are significant, we will endeavour to notify you by email or by a prominent notice on our website. Your continued use of our site following any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">16. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests relating to this Privacy Policy or our data practices, please contact us at:
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
