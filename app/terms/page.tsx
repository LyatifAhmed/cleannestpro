import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CleanNestPro",
  description:
    "Terms of service governing the use of CleanNestPro, a premium home cleaning coordination service operating between the UK and Antalya.",
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
            These Terms of Service govern your use of the CleanNestPro website,
            enquiries, and any services arranged through it. By using this
            website or submitting a request, you agree to these terms.
          </p>

          <div className="mt-10 space-y-10">
            {/* 1 */}
            <section>
              <h2 className="text-2xl font-semibold">
                1. Nature of the service
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                CleanNestPro operates as a coordination and service facilitation
                platform. We connect customers with selected independent local
                service providers in Antalya.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                CleanNestPro does not directly employ cleaners or carry out
                cleaning services itself unless explicitly stated. Services are
                delivered by third-party independent professionals or companies.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold">
                2. Third-party providers
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Cleaning services are performed by independent third-party
                  providers who are not employees or agents of CleanNestPro.
                </p>

                <p>
                  While we aim to work only with carefully selected and trusted
                  local partners, CleanNestPro does not guarantee the actions,
                  conduct, or performance of any third-party provider.
                </p>

                <p>
                  Any agreement for the actual cleaning service is between you
                  (the customer) and the service provider, unless explicitly
                  stated otherwise in writing.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold">
                3. Quotes and estimates
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Any price range displayed on the website is indicative only
                  and does not constitute a binding offer.
                </p>

                <p>
                  Final pricing may vary based on property condition, size,
                  access requirements, timing, and any additional services
                  requested.
                </p>

                <p>
                  A confirmed quote is only valid once reviewed and agreed via
                  direct communication.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold">
                4. Booking and confirmation
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Submitting a form or enquiry does not constitute a confirmed
                booking. A booking is only confirmed once explicitly agreed by
                both parties following review of the request.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold">
                5. Customer responsibilities
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  You agree to provide accurate, complete, and up-to-date
                  information when requesting a quote or service.
                </p>

                <p>
                  You must disclose any relevant details including access
                  instructions, property condition, pets, hazards, or building
                  restrictions.
                </p>

                <p>
                  Failure to provide accurate information may affect pricing,
                  service quality, or availability.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold">
                6. Cancellations and changes
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Any cancellations or changes should be communicated as early as
                possible. Conditions may vary depending on timing and the
                individual service provider’s policy.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold">
                7. Payments and third-party processing
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Payments may be processed via third-party providers such as
                  Stripe or other secure international payment systems.
                </p>

                <p>
                  CleanNestPro does not store or directly process sensitive
                  payment details.
                </p>

                <p>
                  Payment terms, timing, and refund conditions will be confirmed
                  separately as part of the booking agreement.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold">
                8. Liability and limitations
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  To the maximum extent permitted by law, CleanNestPro shall not
                  be liable for any indirect, incidental, or consequential
                  losses.
                </p>

                <p>
                  CleanNestPro is not responsible for the actions, omissions, or
                  performance of third-party service providers.
                </p>

                <p>
                  Any claims relating to service execution should be addressed
                  directly with the service provider, unless otherwise agreed.
                </p>
              </div>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold">
                9. Service availability
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Availability is not guaranteed and may vary based on location,
                timing, operational capacity, and provider availability.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-semibold">
                10. Company information
              </h2>

              <div className="mt-4 space-y-3 leading-8 text-slate-600">
                <p>
                  CleanNestPro operates under Generation Beta Digital Ltd, a
                  company registered in the United Kingdom.
                </p>

                <p>
                  Registered office: 3rd Floor, 86–90 Paul Street, London EC2A
                  4NE, United Kingdom
                </p>

                <p>Company Number: 16274319</p>
                <p>ICO Registration: ZB883806</p>
              </div>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-semibold">
                11. Changes to terms
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may update these Terms of Service at any time. Continued use
                of the website constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-semibold">12. Contact</h2>

              <p className="mt-4 leading-8 text-slate-600">
                For any questions regarding these terms, please contact us via
                the website or through the email provided in your communication.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}