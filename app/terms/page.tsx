export const metadata = {
  title: "Terms | CleanNestPro",
  description:
    "Terms of service for CleanNestPro, premium home cleaning services in Antalya.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm text-slate-500">Last updated: March 2026</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-6 leading-8 text-slate-600">
            These Terms of Service govern your use of the CleanNestPro website
            and any enquiries, quotes, and services requested through it. By
            using this website or contacting us, you agree to these terms.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold">1. Our service</h2>
              <p className="mt-4 leading-8 text-slate-600">
                CleanNestPro provides a platform for customers to request
                premium home cleaning-related services in Antalya. Quotes,
                scheduling, and service availability may depend on location,
                property details, timing, and operational capacity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. Quotes and estimates</h2>
              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Any price range shown on the website is indicative only and
                  does not constitute a final binding quote.
                </p>
                <p>
                  Final pricing may vary depending on the property size,
                  condition, requested extras, access requirements, timing, and
                  other relevant details.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. Booking requests</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Submitting a form or sending a message does not automatically
                create a confirmed booking. A service is only considered
                confirmed once details have been reviewed and expressly agreed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. Customer responsibilities</h2>
              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>You agree to provide accurate information when requesting a quote.</p>
                <p>
                  You are responsible for sharing any relevant details that may
                  affect the service, including property access, pets, parking,
                  building rules, and the general condition of the property.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Cancellations and changes</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Requests to change or cancel an agreed appointment should be
                made as early as possible. Depending on notice and scheduling,
                cancellation or rebooking conditions may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Availability</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Service availability is not guaranteed and may depend on timing,
                location, cleaner availability, and operational circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Payments</h2>
              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Where payment is requested, it may be processed through
                  third-party providers. Payment timing, methods, and any refund
                  conditions will be communicated at the time of confirmation.
                </p>
                <p>
                  Unless expressly stated otherwise, no website content should
                  be interpreted as a guarantee of instant online booking.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Liability</h2>
              <p className="mt-4 leading-8 text-slate-600">
                To the maximum extent permitted by law, CleanNestPro shall not
                be liable for indirect, incidental, or consequential losses
                arising from the use of the website or from service enquiries,
                except where liability cannot be excluded by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Website content</h2>
              <p className="mt-4 leading-8 text-slate-600">
                We may update, change, or remove website content, service
                descriptions, or quote information at any time without prior
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">10. Contact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                If you have any questions about these Terms of Service, please
                contact us using the contact options shown on the website.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}