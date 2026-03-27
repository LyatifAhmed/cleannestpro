export const metadata = {
  title: "Privacy Policy | CleanNestPro",
  description:
    "Privacy Policy for CleanNestPro, premium home cleaning services in Antalya.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm text-slate-500">Last updated: March 2026</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 leading-8 text-slate-600">
            CleanNestPro respects your privacy and is committed to protecting
            your personal information. This Privacy Policy explains what
            information we collect, how we use it, and how we handle it when
            you use our website or contact us for cleaning services in Antalya.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold">1. Information we collect</h2>
              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  We may collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Full name</li>
                  <li>Phone number / WhatsApp number</li>
                  <li>Email address</li>
                  <li>Preferred language</li>
                  <li>Property location and quote request details</li>
                  <li>Special notes, access details, and service preferences</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                2. How we use your information
              </h2>
              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>We use your information to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Respond to your quote requests</li>
                  <li>Communicate with you about requested services</li>
                  <li>Arrange and coordinate cleaning appointments</li>
                  <li>Provide customer support</li>
                  <li>Improve our website and service experience</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                3. Legal basis and service communication
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                By submitting a quote request or contacting us through WhatsApp
                or email, you consent to us using your submitted details to
                respond to your enquiry and discuss the requested service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                4. Sharing of information
              </h2>
              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  We do not sell your personal data. We may share relevant
                  information only when necessary to help deliver the requested
                  service, for example with local service providers or
                  operational partners involved in arranging your booking.
                </p>
                <p>
                  We may also use third-party tools for communication, website
                  hosting, and payment processing.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Payment information</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Payment details may be processed by third-party payment
                providers. We do not store full card details on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Data retention</h2>
              <p className="mt-4 leading-8 text-slate-600">
                We retain personal information only for as long as reasonably
                necessary to respond to enquiries, provide services, maintain
                records, and comply with legal or operational requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Cookies and analytics</h2>
              <p className="mt-4 leading-8 text-slate-600">
                This website may use basic analytics, cookies, or similar
                technologies to understand website usage and improve the user
                experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Your rights</h2>
              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Depending on your location, you may have the right to request
                  access to, correction of, or deletion of your personal data.
                </p>
                <p>
                  To make a privacy-related request, please contact us using the
                  contact details provided on this website.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Contact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                If you have any questions about this Privacy Policy, please
                contact CleanNestPro through the contact options provided on the
                website.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}