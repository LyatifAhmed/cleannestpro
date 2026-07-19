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
          <p className="text-sm text-slate-500">Last updated: July 2026</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-6 leading-8 text-slate-600">
            These Terms of Service govern your use of the CleanNestPro website,
            quote process, bookings, payments, and any cleaning services
            coordinated through CleanNestPro. By using this website, submitting
            a request, accepting a quote, or completing payment, you agree to
            these terms.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold">
                1. Nature of the service
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  CleanNestPro operates as a cleaning coordination and service
                  facilitation platform. We receive enquiries, review service
                  requirements, prepare or communicate quotes, coordinate
                  bookings, collect payments where applicable, and connect
                  customers with selected independent local service providers in
                  Antalya.
                </p>

                <p>
                  Unless explicitly stated otherwise in writing, CleanNestPro
                  does not directly employ the cleaners who attend the property.
                  Cleaning services may be delivered by independent
                  professionals or local cleaning companies.
                </p>

                <p>
                  The identity of the contracting or attending service provider,
                  and any service-specific arrangements, may be confirmed in the
                  quotation, booking confirmation, or related correspondence.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                2. Third-party service providers
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Cleaning services may be performed by independent third-party
                  providers who are not employees of CleanNestPro.
                </p>

                <p>
                  We aim to work with suitable and trusted local providers, but
                  the availability, identity, and composition of the assigned
                  cleaning team may change where reasonably necessary.
                </p>

                <p>
                  CleanNestPro may share information reasonably required to
                  assess, prepare for, and deliver the service, including your
                  name, contact details, property location, access instructions,
                  booking time, property details, and requested tasks.
                </p>

                <p>
                  Nothing in these terms removes any responsibility that
                  CleanNestPro or a service provider cannot lawfully exclude.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                3. Quotes and estimates
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Any price range displayed automatically on the website is an
                  indicative estimate only and does not constitute a binding
                  offer.
                </p>

                <p>
                  Final pricing may vary based on the property type, size,
                  condition, access requirements, furnishing, number of
                  bathrooms, requested extras, timing, availability, supplies,
                  and any information provided by the customer.
                </p>

                <p>
                  A final quote becomes valid only when it has been issued or
                  confirmed by CleanNestPro through email or another agreed
                  communication channel. Unless otherwise stated, a quote is
                  subject to availability and may expire if it is not accepted
                  within the period stated in the communication.
                </p>

                <p>
                  If the property condition or scope of work is materially
                  different from the information supplied, the provider may
                  pause the service and request approval for an adjusted price,
                  reduced scope, additional time, or rescheduling. No additional
                  charge will be taken without appropriate notice and agreement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                4. Booking and confirmation
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Submitting a form, requesting a quote, or receiving an
                  estimated price does not create a confirmed booking.
                </p>

                <p>A booking is confirmed only after:</p>

                <ol className="list-decimal space-y-2 pl-6">
                  <li>CleanNestPro has issued or confirmed the final quote;</li>
                  <li>you have accepted the quote;</li>
                  <li>
                    any payment required to reserve the booking has been
                    successfully completed; and
                  </li>
                  <li>
                    CleanNestPro has sent a booking confirmation by email or
                    another agreed communication channel.
                  </li>
                </ol>

                <p>
                  A preferred date or time is not guaranteed until the booking
                  has been confirmed. Where a quote states that a slot is being
                  held temporarily, the slot may be released if payment is not
                  received within the stated period.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                5. Payments and Stripe processing
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  CleanNestPro may require full or partial advance payment to
                  secure a booking. Where payment is required, we may send a
                  secure payment link provided by Stripe or another authorised
                  payment provider.
                </p>

                <p>
                  CleanNestPro does not store your full card number or card
                  security code on its website or servers. Payment information
                  is processed by the relevant payment provider under its own
                  terms and privacy notice.
                </p>

                <p>
                  You are responsible for ensuring that the payment information
                  provided is accurate and that you are authorised to use the
                  selected payment method.
                </p>

                <p>
                  A payment may be refused, delayed, reviewed, or cancelled
                  where required for fraud prevention, sanctions compliance,
                  payment verification, technical security, or legal reasons.
                </p>

                <p>
                  Prices will be shown in the currency stated in the final quote.
                  Your bank or card provider may apply exchange-rate differences
                  or international transaction charges, which are outside
                  CleanNestPro&apos;s control.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                6. Cancellations, changes, and refunds
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Cancellation or change requests must be communicated to
                  CleanNestPro as early as possible using the contact details in
                  your booking correspondence.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="grid grid-cols-[1.2fr_0.8fr] bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                    <span>Notice before appointment</span>
                    <span>Standard refund</span>
                  </div>

                  <div className="grid grid-cols-[1.2fr_0.8fr] border-t border-slate-200 px-4 py-3 text-sm">
                    <span>At least 48 hours</span>
                    <span>100%</span>
                  </div>

                  <div className="grid grid-cols-[1.2fr_0.8fr] border-t border-slate-200 px-4 py-3 text-sm">
                    <span>Between 24 and 48 hours</span>
                    <span>50%</span>
                  </div>

                  <div className="grid grid-cols-[1.2fr_0.8fr] border-t border-slate-200 px-4 py-3 text-sm">
                    <span>Less than 24 hours</span>
                    <span>Normally non-refundable</span>
                  </div>
                </div>

                <p>
                  The reduced or non-refundable amount reflects time reserved,
                  provider commitments, preparation, and the reduced likelihood
                  of filling the appointment at short notice.
                </p>

                <p>
                  Reasonable date or time changes may be accommodated subject to
                  availability. A requested change is not effective until
                  confirmed by CleanNestPro. Repeated or late changes may be
                  treated as a cancellation.
                </p>

                <p>
                  If CleanNestPro cannot provide the agreed service on the
                  confirmed booking date due to our fault and no acceptable
                  replacement or rescheduled appointment is agreed, you will
                  receive a full refund of the amount paid for that booking.
                </p>

                <p>
                  Approved refunds are returned to the original payment method
                  where possible. The time required for the refunded amount to
                  appear is determined by the payment provider, card network,
                  and your bank.
                </p>

                <p>
                  These cancellation terms do not limit any mandatory statutory
                  cancellation or refund rights that apply to you.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                7. Customer responsibilities
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  You agree to provide accurate, complete, and up-to-date
                  information when requesting a quote or booking.
                </p>

                <p>You must disclose relevant information including:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>the true size and condition of the property;</li>
                  <li>access, parking, security, and building restrictions;</li>
                  <li>pets, pests, hazardous materials, or health risks;</li>
                  <li>
                    fragile, valuable, damaged, or unusually delicate items;
                  </li>
                  <li>
                    recent construction, renovation, heavy soiling, mould,
                    bodily fluids, or specialist cleaning requirements; and
                  </li>
                  <li>
                    any tasks that were not included in the original request.
                  </li>
                </ul>

                <p>
                  You are responsible for securing money, jewellery, documents,
                  medicines, keys, electronics, and other valuable or sensitive
                  items before the service begins.
                </p>

                <p>
                  Failure to provide accurate information may affect the price,
                  duration, service quality, safety, or availability and may
                  result in an adjusted quote, reduced scope, postponement, or
                  cancellation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                8. Property access and service conditions
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  You must ensure that safe and timely access to the property is
                  available at the confirmed appointment time.
                </p>

                <p>
                  Unless otherwise agreed, the property should have working
                  electricity, running water, appropriate lighting, and a
                  reasonably safe working environment.
                </p>

                <p>
                  If access cannot be obtained, the customer is absent when
                  attendance is required, keys are unavailable, or entry
                  instructions are inaccurate, the booking may be treated as a
                  late cancellation and may be non-refundable.
                </p>

                <p>
                  A provider may refuse, stop, reduce, or reschedule work where
                  conditions are unsafe, unlawful, abusive, materially different
                  from those disclosed, or require specialist equipment or
                  qualifications that were not agreed in advance.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                9. Service standards and limitations
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Services will be arranged and carried out with reasonable care
                  and skill, subject to the agreed scope, available time,
                  property condition, and access.
                </p>

                <p>
                  Cleaning improves the condition and presentation of a
                  property, but no guarantee is made that every stain, mark,
                  odour, discolouration, scale deposit, mould trace, permanent
                  damage, or pre-existing defect can be removed.
                </p>

                <p>
                  Unless specifically included in writing, the service does not
                  include specialist biohazard cleaning, pest treatment,
                  exterior high-level window cleaning, hazardous waste removal,
                  restoration work, repair work, or tasks requiring regulated
                  specialist qualifications.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                10. Complaints, damage, and re-clean requests
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Any service concern, alleged damage, missing item, or request
                  for corrective cleaning should be reported to CleanNestPro as
                  soon as reasonably possible and preferably within 24 hours of
                  the service.
                </p>

                <p>
                  You should provide clear details and, where relevant,
                  photographs or other supporting evidence. You must allow a
                  reasonable opportunity to review the issue and, where
                  appropriate, arrange corrective work before engaging another
                  provider or incurring additional costs.
                </p>

                <p>
                  Reporting within 24 hours helps us investigate while the
                  circumstances are recent. It does not remove any legal right
                  that cannot lawfully be limited by a contractual reporting
                  period.
                </p>

                <p>
                  CleanNestPro may offer a re-clean, partial refund, full refund,
                  or another reasonable remedy depending on the circumstances,
                  agreed scope, and applicable law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                11. Payment disputes and chargebacks
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  If you believe a payment is incorrect or a refund is due,
                  please contact CleanNestPro first so that we have a reasonable
                  opportunity to investigate and resolve the matter.
                </p>

                <p>
                  You must not knowingly submit a false, misleading, or
                  fraudulent payment dispute or chargeback. We may provide the
                  payment provider or card issuer with relevant evidence,
                  including the accepted quote, these terms, booking
                  confirmation, communications, attendance records, service
                  evidence, cancellation information, and refund records.
                </p>

                <p>
                  Nothing in this section prevents you from exercising a lawful
                  right to dispute a genuinely unauthorised or incorrectly
                  processed payment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                12. Liability and legal rights
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Nothing in these terms excludes or limits liability for death
                  or personal injury caused by negligence, fraud, fraudulent
                  misrepresentation, or any other liability that cannot lawfully
                  be excluded or limited.
                </p>

                <p>
                  Nothing in these terms affects mandatory consumer rights,
                  including any right for services to be performed with
                  reasonable care and skill.
                </p>

                <p>
                  Subject to the paragraphs above and to the maximum extent
                  permitted by law, CleanNestPro is not liable for indirect or
                  consequential loss, loss of profit, loss of business, loss of
                  opportunity, or losses that were not reasonably foreseeable
                  when the booking was made.
                </p>

                <p>
                  CleanNestPro is not responsible for pre-existing damage,
                  ordinary wear and tear, inherent defects, manufacturer
                  defects, colour fading, unstable fittings, or damage resulting
                  from inaccurate instructions or undisclosed risks.
                </p>

                <p>
                  Where the law permits a financial limitation, CleanNestPro&apos;s
                  total liability arising from a booking will not exceed the
                  amount paid for that booking. This limitation does not apply
                  where it would be unlawful or unfair to do so.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                13. Delays and events outside reasonable control
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  CleanNestPro and the service provider are not responsible for
                  delay or failure caused by events outside reasonable control,
                  including severe weather, road closures, transport disruption,
                  illness, accidents, utility failure, government action,
                  building access restrictions, civil disturbance, or emergency
                  conditions.
                </p>

                <p>
                  Where such an event affects a confirmed booking, we will
                  communicate as soon as reasonably possible and seek to
                  reschedule the service or provide an appropriate refund for
                  any service that cannot be delivered.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                14. Service availability
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Availability is not guaranteed and may vary based on location,
                timing, operational capacity, provider availability, property
                condition, and the requested scope. CleanNestPro may decline a
                request before confirmation without obligation to provide a
                reason, except where prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                15. Website and automated assistant
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  Website content, estimated prices, and responses from any
                  automated assistant are provided for general information and
                  preliminary guidance.
                </p>

                <p>
                  Automated responses do not constitute a final quote, confirmed
                  booking, professional advice, or binding commitment.
                  CleanNestPro may correct errors or clarify information before
                  a booking is confirmed.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                16. Privacy
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Personal information is handled in accordance with the
                CleanNestPro Privacy Policy. By requesting or booking a service,
                you acknowledge that relevant information may be shared with
                selected providers and payment processors where necessary to
                arrange and deliver the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                17. Governing law and disputes
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-600">
                <p>
                  These terms and any non-contractual obligations arising from
                  them are governed by the laws of England and Wales, subject to
                  any mandatory consumer protection laws that apply in the
                  country where you live or where the service is performed.
                </p>

                <p>
                  The courts of England and Wales will have jurisdiction, but
                  this does not remove any right a consumer may have to bring a
                  claim in another court where mandatory law permits.
                </p>

                <p>
                  Before starting formal proceedings, both parties should first
                  attempt to resolve the matter through reasonable written
                  communication.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                18. Company information
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

            <section>
              <h2 className="text-2xl font-semibold">
                19. Changes to these terms
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may update these terms to reflect changes in the service,
                payment process, provider arrangements, or legal requirements.
                The updated version will be posted on this page with a revised
                date. Changes will not retrospectively reduce rights already
                attached to a confirmed booking unless required by law or agreed
                with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">20. Contact</h2>

              <p className="mt-4 leading-8 text-slate-600">
                For questions, cancellation requests, complaints, or refund
                enquiries relating to these terms, please contact CleanNestPro
                using the website or the email address included in your quote or
                booking correspondence.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}