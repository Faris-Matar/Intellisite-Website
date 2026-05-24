import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Website Terms of Use — InteliSite</title>
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
            Website Terms of Use
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
              <h2 className="font-display text-2xl text-bone mb-3">1. About These Terms</h2>
              <p>
                These terms of use ("Terms") govern your use of the InteliSite website located at{" "}
                <a href="https://www.intelisite.co.uk" className="text-gold hover:text-gold/80 transition-colors">
                  www.intelisite.co.uk
                </a>{" "}
                (the "Site"). By accessing or using the Site, you confirm that you accept these Terms and agree to comply with them. If you do not agree, please do not use the Site. These Terms apply to all users of the Site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">2. Changes to These Terms</h2>
              <p>
                We may revise these Terms at any time by amending this page. We encourage you to check this page periodically to take notice of any changes. Your continued use of the Site following any change constitutes your acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">3. Permitted Use</h2>
              <p>You may use the Site only for lawful purposes. You must not use the Site:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>In any way that breaches any applicable local, national, or international law or regulation.</li>
                <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.</li>
                <li>To transmit any unsolicited or unauthorised advertising or promotional material.</li>
                <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
                <li>To attempt to gain unauthorised access to any part of the Site or any server, computer, or database connected to the Site.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">4. Intellectual Property</h2>
              <p>
                The Site and all content on it, including but not limited to text, images, graphics, logos, design elements, code, and software (collectively, "Content"), is owned by or licensed to InteliSite and is protected by copyright, trade mark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or in any way exploit any of the Content, in whole or in part, without our prior written consent. Nothing in these Terms grants you any licence to use any intellectual property rights belonging to us or our licensors.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">5. Information on the Website</h2>
              <p>
                The content on the Site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on the Site. Although we make reasonable efforts to update the information on the Site, we make no representations, warranties, or guarantees, whether express or implied, that the content on the Site is accurate, complete, or up to date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">6. Links to Other Websites</h2>
              <p>
                The Site may contain links to third-party websites and resources. These links are provided for your information only. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them. The inclusion of a link does not imply our endorsement of the linked site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">7. Disclaimer of Warranties</h2>
              <p>
                The Site is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We reserve the right to suspend or withdraw the Site at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, InteliSite and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site or the content on it, whether based on warranty, contract, tort (including negligence), statute, or any other legal theory, and whether or not we have been informed of the possibility of such damage. Our total liability to you in connection with your use of the Site shall not exceed £100.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">9. Privacy and Cookies</h2>
              <p>
                Your use of the Site is also governed by our{" "}
                <a href="/privacy" className="text-gold hover:text-gold/80 transition-colors">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/cookies" className="text-gold hover:text-gold/80 transition-colors">
                  Cookie Policy
                </a>, which are incorporated into these Terms by reference.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">10. Indemnity</h2>
              <p>
                You agree to indemnify, defend, and hold harmless InteliSite and its directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to your use of the Site or your breach of these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">11. Severability</h2>
              <p>
                If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable from the remaining provisions and shall not affect their validity and enforceability.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">12. No Waiver</h2>
              <p>
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. A waiver of any provision in one instance shall not constitute a continuing waiver or a waiver in other instances.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">13. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and InteliSite in relation to your use of the Site and supersede all prior communications, representations, and agreements, whether oral or written, relating to the same subject matter.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">14. Governing Law</h2>
              <p>
                These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales. You and we both agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone mb-3">15. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
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
