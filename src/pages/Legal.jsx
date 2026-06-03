import { useEffect, useState, useRef } from 'react'

const TOC = {
  privacy: [
    { id: 'pp-who', label: 'Who We Are' },
    { id: 'pp-collect', label: 'Information We Collect' },
    { id: 'pp-use', label: 'How We Use Your Info' },
    { id: 'pp-sharing', label: 'Sharing Your Data' },
    { id: 'pp-retention', label: 'Data Retention' },
    { id: 'pp-rights', label: 'Your Rights' },
    { id: 'pp-security', label: 'Data Security' },
    { id: 'pp-cookies', label: 'Cookies & Tracking' },
    { id: 'pp-third', label: 'Third-Party Platforms' },
    { id: 'pp-changes', label: 'Changes to Policy' },
    { id: 'pp-contact', label: 'Contact Us' },
  ],
  terms: [
    { id: 't-intro', label: 'Introduction' },
    { id: 't-who', label: 'Who We Are' },
    { id: 't-account', label: 'Account Registration' },
    { id: 't-billing', label: 'Subscription & Billing' },
    { id: 't-whatsapp', label: 'WhatsApp Data' },
    { id: 't-use', label: 'Acceptable Use' },
    { id: 't-prohibited', label: 'Prohibited Activities' },
    { id: 't-content', label: 'Content & Data Ownership' },
    { id: 't-ip', label: 'Intellectual Property' },
    { id: 't-third', label: 'Third-Party Platforms' },
    { id: 't-liability', label: 'Limitation of Liability' },
    { id: 't-indemnify', label: 'Indemnification' },
    { id: 't-termination', label: 'Termination' },
    { id: 't-law', label: 'Governing Law' },
    { id: 't-changes', label: 'Changes to Terms' },
    { id: 't-contact', label: 'Contact Us' },
  ],
}

function Sec({ id, num, title, children }) {
  return (
    <div className="legal-section" id={id}>
      <div className="section-header">
        <div className="section-num">{num}</div>
        <div className="section-title">{title}</div>
      </div>
      {children}
    </div>
  )
}

function ContactCard() {
  return (
    <div className="contact-card">
      <div className="contact-row"><span className="contact-lbl">Company</span><span className="contact-val">Dotflo Technologies (operating Zosata)</span></div>
      <div className="contact-row"><span className="contact-lbl">Email</span><a href="mailto:contact@zosata.com" className="contact-val green">contact@zosata.com</a></div>
      <div className="contact-row"><span className="contact-lbl">WhatsApp / Call</span><a href="tel:+919927270503" className="contact-val">+91 99272 70503</a></div>
    </div>
  )
}

export default function Legal() {
  const [page, setPage] = useState('privacy')
  const [active, setActive] = useState('')
  const contentRef = useRef(null)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [page])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    const root = contentRef.current
    if (root) root.querySelectorAll('.legal-section').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [page])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="legal-wrap">
      <aside className="toc-sidebar">
        <div className="toc-label">On this page</div>
        <ul className="toc-list">
          {TOC[page].map((s) => (
            <li key={s.id}>
              <a
                className={active === s.id ? 'active' : ''}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <main className="legal-content" ref={contentRef}>
        <div className="page-tabs">
          <button className={'tab' + (page === 'privacy' ? ' active' : '')} onClick={() => setPage('privacy')}>🔒 Privacy Policy</button>
          <button className={'tab' + (page === 'terms' ? ' active' : '')} onClick={() => setPage('terms')}>📄 Terms of Service</button>
        </div>

        {/* PRIVACY */}
        <div className={'page' + (page === 'privacy' ? ' active' : '')}>
          <div className="legal-hero">
            <div className="legal-eyebrow">Privacy Policy</div>
            <h1>Your data, <em>your rights</em></h1>
            <p>We are committed to protecting your personal data and being transparent about how we use it. This policy explains everything clearly.</p>
            <div className="meta-chips">
              <div className="meta-chip">Operated by <span>Dotflo Technologies</span></div>
              <div className="meta-chip">Effective <span>2026</span></div>
              <div className="meta-chip">Applies to <span>Zosata Platform</span></div>
            </div>
          </div>

          <Sec id="pp-who" num="01" title="Who We Are">
            <div className="prose">
              <p><strong>Zosata</strong> is a WhatsApp-native food ordering platform for restaurants, operated by <strong>Dotflo Technologies</strong>. We help restaurants take orders directly via WhatsApp — without aggregator commissions — through automated chatbot flows, menu management, and direct payment settlement.</p>
              <p>We are committed to user privacy, data transparency, and responsible data management. Your privacy is one of our top priorities.</p>
            </div>
          </Sec>

          <Sec id="pp-collect" num="02" title="Information We Collect">
            <div className="info-box yellow">
              <div className="info-box-head">⚠️ WhatsApp Conversation Data</div>
              <div className="prose">We collect and store <strong>WhatsApp conversation data</strong> that takes place between businesses (restaurants) using Zosata and their end customers. This includes messages exchanged during the ordering process, order details, and any information customers provide within those conversations.</div>
            </div>
            <div className="prose"><p><strong>A. Information You Provide Directly (Restaurant Owners / Business Users)</strong></p></div>
            <ul className="legal-list">
              <li><strong>Account Registration:</strong> Name, email address, phone number, password, business name, and language preference.</li>
              <li><strong>Restaurant Profile:</strong> Restaurant name, cuisine type, menu items, pricing, photos, and operating hours.</li>
              <li><strong>Billing & Payment Details:</strong> Billing name, address, payment method details (handled securely by third-party processors), and transaction history.</li>
              <li><strong>Menu Content:</strong> Food item descriptions, categories, prices, and images you upload to the platform.</li>
              <li><strong>WhatsApp Business Number:</strong> The WhatsApp Business number you connect to the Zosata platform.</li>
            </ul>
            <div className="prose" style={{ marginTop: 18 }}><p><strong>B. WhatsApp Conversation & Order Data (from End-Customer Interactions)</strong></p></div>
            <div className="info-box green">
              <div className="info-box-head">📱 What We Store from Customer Conversations</div>
              <div className="prose">When an end-customer places an order through your WhatsApp channel powered by Zosata, we collect and store the following data from that conversation:</div>
            </div>
            <ul className="legal-list">
              <li><strong>Customer Phone Number:</strong> The WhatsApp phone number of the end-customer who messages the restaurant.</li>
              <li><strong>Delivery Address:</strong> Any address the customer shares during the ordering process (e.g., "42 MG Road, Sector 5, Gurgaon"). <em>This is stored to fulfil the order and for the restaurant's records.</em></li>
              <li><strong>Order Details:</strong> Items ordered, quantities, sizes, customisations, and order value.</li>
              <li><strong>Conversation Messages:</strong> The chat transcript between the customer and the Zosata-powered chatbot for that order session.</li>
              <li><strong>Order Timestamps:</strong> Time and date of order placement and confirmation.</li>
              <li><strong>Payment Status:</strong> Whether payment was completed (we do <strong>not</strong> store card numbers or raw payment data — this is handled by PCI-DSS compliant payment processors).</li>
            </ul>
            <div className="prose" style={{ marginTop: 18 }}><p><strong>C. Information Collected Automatically</strong></p></div>
            <ul className="legal-list">
              <li><strong>Usage Data:</strong> Pages visited in the dashboard, features accessed, and time spent.</li>
              <li><strong>Device & Technical Data:</strong> IP address, browser type, operating system, and device identifiers.</li>
              <li><strong>Log Files:</strong> System logs from API usage including timestamped metadata.</li>
            </ul>
          </Sec>

          <Sec id="pp-use" num="03" title="How We Use Your Information">
            <table className="legal-table">
              <thead><tr><th>Data Type</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td>Restaurant account data</td><td>Account management, authentication, billing, and support</td></tr>
                <tr><td>WhatsApp conversation data</td><td>Powering the chatbot order flow; storing order records for the restaurant</td></tr>
                <tr><td>Customer delivery addresses</td><td>Order fulfilment — displayed to the restaurant for delivery dispatch</td></tr>
                <tr><td>Customer phone numbers</td><td>Order identity; allowing restaurants to contact customers about their order</td></tr>
                <tr><td>Order details & history</td><td>Restaurant order dashboard; analytics for the restaurant owner</td></tr>
                <tr><td>Usage & device data</td><td>Platform performance, bug fixing, and security monitoring</td></tr>
              </tbody>
            </table>
            <div className="info-box red">
              <div className="info-box-head">🚫 What We Do NOT Do</div>
              <ul className="legal-list" style={{ margin: 0 }}>
                <li>We do <strong>not</strong> sell your data or your customers' data to any third party.</li>
                <li>We do <strong>not</strong> use WhatsApp conversation data or customer addresses to train generalised AI or machine learning models.</li>
                <li>We do <strong>not</strong> share one restaurant's customer data with any other restaurant or business.</li>
                <li>We do <strong>not</strong> store raw credit card or payment card numbers.</li>
              </ul>
            </div>
          </Sec>

          <Sec id="pp-sharing" num="04" title="Sharing Your Data">
            <div className="prose"><p>We share data only when necessary to provide the service. We do not sell personal information.</p></div>
            <ul className="legal-list">
              <li><strong>Payment Processors:</strong> Stripe, Razorpay, or similar PCI-DSS compliant processors — for handling payments securely.</li>
              <li><strong>WhatsApp / Meta:</strong> Message delivery is facilitated via the WhatsApp Business API. Meta's own privacy policies govern their platform.</li>
              <li><strong>Cloud Infrastructure:</strong> Our hosting and storage providers operate under strict data processing agreements.</li>
              <li><strong>Law Enforcement:</strong> Only when legally required by a valid court order or applicable law.</li>
              <li><strong>Dotflo Technologies (Parent Company):</strong> Zosata is operated by Dotflo Technologies, which has access to platform data as the operating entity.</li>
            </ul>
          </Sec>

          <Sec id="pp-retention" num="05" title="Data Retention">
            <div className="prose"><p>We retain your data for as long as your account is active, or as required by applicable law. Specifically:</p></div>
            <ul className="legal-list">
              <li><strong>WhatsApp conversation & order data:</strong> Retained for the duration of the restaurant's active subscription, plus up to 90 days after account closure, unless a deletion request is made.</li>
              <li><strong>Customer delivery addresses:</strong> Stored alongside the associated order record. Restaurants can delete order history from their dashboard.</li>
              <li><strong>Billing records:</strong> Retained for up to 7 years as required by financial regulations.</li>
              <li><strong>Account data:</strong> Deleted within 30 days of account deletion request (backup deletion may take up to 30 additional days).</li>
            </ul>
          </Sec>

          <Sec id="pp-rights" num="06" title="Your Rights">
            <div className="prose"><p>Depending on your location, you may have the following rights regarding your personal data:</p></div>
            <ul className="legal-list">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements).</li>
              <li><strong>Data Portability:</strong> Request your data in a machine-readable format.</li>
              <li><strong>Objection:</strong> Object to certain types of processing.</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for any processing based on consent.</li>
            </ul>
            <div className="prose" style={{ marginTop: 14 }}><p>To exercise any of these rights, contact us at <strong>contact@zosata.com</strong> or via WhatsApp on <strong>+91 99272 70503</strong>.</p></div>
            <div className="info-box green" style={{ marginTop: 18 }}>
              <div className="info-box-head">🏠 End-Customer Rights (Customers of Restaurants)</div>
              <div className="prose">If you are an end-customer who placed an order via a restaurant's WhatsApp channel powered by Zosata, and you wish to have your data (including your phone number, delivery address, or order history) deleted, please contact the restaurant directly <strong>or</strong> email us at <strong>contact@zosata.com</strong> with the restaurant's name and your phone number. We will action deletion requests within 30 days.</div>
            </div>
          </Sec>

          <Sec id="pp-security" num="07" title="Data Security">
            <div className="prose"><p>We implement industry-standard technical and organisational measures to protect your data:</p></div>
            <ul className="legal-list">
              <li>Encryption in transit (TLS 1.3) and at rest (AES-256) for all sensitive data, including WhatsApp conversation records and delivery addresses.</li>
              <li>Strict access controls — only authorised personnel with a legitimate business need can access stored conversation data.</li>
              <li>Regular security audits and vulnerability assessments.</li>
              <li>Payment data never stored on our servers — handled by PCI-DSS compliant processors only.</li>
              <li>Incident detection and response protocols, including breach notification where required by law.</li>
            </ul>
          </Sec>

          <Sec id="pp-cookies" num="08" title="Cookies & Tracking">
            <div className="prose">
              <p>Zosata uses cookies and similar tracking technologies on our website and dashboard to improve user experience, analyse traffic, and enable core functionality. By using our site, you consent to the use of cookies unless you disable them via your browser settings.</p>
              <p>We do not use cookies to track end-customers of restaurants — cookie tracking applies only to users of the Zosata dashboard and website.</p>
            </div>
          </Sec>

          <Sec id="pp-third" num="09" title="Third-Party Platforms">
            <div className="prose"><p>Zosata integrates with WhatsApp (Meta), payment gateways (Razorpay, Stripe), and cloud infrastructure providers. These services are governed by their own privacy policies. We recommend reviewing them directly. Zosata is not responsible for the privacy practices of third-party platforms.</p></div>
          </Sec>

          <Sec id="pp-changes" num="10" title="Changes to This Policy">
            <div className="prose"><p>We may update this Privacy Policy from time to time. Material changes will be communicated via email or an in-app notification. Your continued use of Zosata after changes constitutes your acceptance of the updated policy.</p></div>
          </Sec>

          <Sec id="pp-contact" num="11" title="Contact Us">
            <div className="prose"><p>For privacy-related concerns, data deletion requests, or to exercise your rights:</p></div>
            <ContactCard />
          </Sec>
        </div>

        {/* TERMS */}
        <div className={'page' + (page === 'terms' ? ' active' : '')}>
          <div className="legal-hero">
            <div className="legal-eyebrow">Terms of Service</div>
            <h1>Our terms, <em>simply stated</em></h1>
            <p>These terms govern your use of the Zosata platform. By using Zosata, you agree to these terms. Please read them carefully.</p>
            <div className="meta-chips">
              <div className="meta-chip">Operated by <span>Dotflo Technologies</span></div>
              <div className="meta-chip">Effective <span>2026</span></div>
              <div className="meta-chip">Platform <span>Zosata</span></div>
            </div>
          </div>

          <Sec id="t-intro" num="01" title="Introduction">
            <div className="prose">
              <p>Welcome to <strong>Zosata</strong>, a WhatsApp-native food ordering platform for restaurants, operated by <strong>Dotflo Technologies</strong>. Please read these Terms of Service ("Terms") carefully before using our platform at <em>zosata.com</em> and all associated services.</p>
              <p>By accessing or using Zosata, you agree to be bound by these Terms. If you do not agree, you may not use the service.</p>
            </div>
          </Sec>

          <Sec id="t-who" num="02" title="Who We Are">
            <div className="prose">
              <p>Zosata is a SaaS platform that enables restaurants and food businesses to receive orders directly through WhatsApp — without paying commission to food aggregators. We provide chatbot automation, menu management, and order management tools.</p>
              <p>Zosata is owned and operated by <strong>Dotflo Technologies</strong>. All contractual relationships are with Dotflo Technologies.</p>
            </div>
          </Sec>

          <Sec id="t-account" num="03" title="Account Registration">
            <div className="prose"><p>To use Zosata, you must create an account. By registering, you agree to:</p></div>
            <ul className="legal-list">
              <li>Provide accurate, current, and complete information about yourself and your business.</li>
              <li>Keep your login credentials confidential and not share them with unauthorised parties.</li>
              <li>Be responsible for all activity that occurs under your account.</li>
              <li>Be at least 18 years of age or of legal age in your jurisdiction.</li>
              <li>Notify us immediately at <strong>contact@zosata.com</strong> if you suspect unauthorised access to your account.</li>
            </ul>
            <div className="prose" style={{ marginTop: 12 }}><p>We reserve the right to suspend or terminate accounts at our discretion, including for violations of these Terms or suspected fraudulent activity.</p></div>
          </Sec>

          <Sec id="t-billing" num="04" title="Subscription, Billing & Payments">
            <div className="prose"><p>Zosata offers subscription plans (details at zosata.com/pricing). By subscribing, you agree to:</p></div>
            <ul className="legal-list">
              <li>Pay all applicable subscription fees as per the current pricing page.</li>
              <li>Authorise us to charge your provided payment method on a recurring basis.</li>
              <li>Plans auto-renew unless cancelled before the renewal date.</li>
              <li>Refunds are granted only under specific conditions as stated in our Refund Policy.</li>
            </ul>
            <div className="info-box green">
              <div className="info-box-head">🏦 Zero Commission Model</div>
              <div className="prose">Zosata charges a flat monthly subscription fee. We take <strong>zero commission</strong> on any orders placed through your WhatsApp channel. All order payments go directly from the customer to your merchant bank account. Zosata is never in the payment flow.</div>
            </div>
          </Sec>

          <Sec id="t-whatsapp" num="05" title="WhatsApp Ordering Data & Your Responsibilities">
            <div className="info-box yellow">
              <div className="info-box-head">📱 Important — WhatsApp Conversation Storage</div>
              <div className="prose">By using Zosata, you acknowledge and agree that <strong>WhatsApp conversation data</strong> exchanged between your restaurant's WhatsApp number (powered by Zosata) and your customers — including messages, order details, and customer-provided delivery addresses — will be stored on Zosata's servers to facilitate the ordering service.</div>
            </div>
            <div className="prose" style={{ marginTop: 14 }}><p>As a restaurant owner using Zosata, you are responsible for:</p></div>
            <ul className="legal-list">
              <li>Informing your customers, where required by applicable law, that their conversation data (including delivery addresses and order details) is stored and processed by Zosata / Dotflo Technologies.</li>
              <li>Ensuring you have a lawful basis to collect and process your customers' personal data through the Zosata platform.</li>
              <li>Using customer data (including phone numbers and addresses obtained via Zosata) only for legitimate order fulfilment and customer communication purposes related to their orders.</li>
              <li>Not using Zosata's WhatsApp tools to send unsolicited spam, promotional broadcasts, or messages that violate WhatsApp's Business Messaging Policy.</li>
              <li>Complying with WhatsApp's Terms of Service and Business Policy at all times when using your connected WhatsApp Business number.</li>
            </ul>
          </Sec>

          <Sec id="t-use" num="06" title="Acceptable Use Policy">
            <div className="prose"><p>You agree not to use Zosata to:</p></div>
            <ul className="legal-list">
              <li>Violate any local, national, or international laws or regulations.</li>
              <li>Abuse messaging features to spam, mislead, or harass customers.</li>
              <li>Upload malware, interfere with platform stability, or attempt to scrape platform data.</li>
              <li>Impersonate any person, restaurant, or organisation.</li>
              <li>Promote hate speech, violence, or discrimination.</li>
              <li>Resell or sublicense Zosata's services without our written consent.</li>
            </ul>
            <div className="prose" style={{ marginTop: 12 }}><p>We reserve the right to suspend or permanently ban users for violations without prior notice.</p></div>
          </Sec>

          <Sec id="t-prohibited" num="07" title="Prohibited Businesses & Activities">
            <div className="prose"><p>Zosata is designed for <strong>legitimate food and beverage businesses</strong>. The following are strictly prohibited:</p></div>
            <ul className="legal-list">
              <li>Illegal or unlicensed food businesses that do not comply with applicable food safety regulations.</li>
              <li>Distribution of illegal substances or controlled substances.</li>
              <li>Sale of counterfeit or stolen goods.</li>
              <li>Money laundering or fraudulent financial activity.</li>
              <li>Any other activity that is illegal under applicable local, national, or international law.</li>
            </ul>
            <div className="info-box red">
              <div className="info-box-head">⚠️ Consequences of Violation</div>
              <div className="prose">Accounts found to be in violation will be immediately suspended or terminated without prior notice, with no refund of subscription fees. We will cooperate fully with law enforcement authorities where required.</div>
            </div>
          </Sec>

          <Sec id="t-content" num="08" title="User Content & Data Ownership">
            <div className="prose">
              <p>You retain ownership of all content you upload to Zosata — including your menu, images, and business information. By using our platform, you grant Zosata (Dotflo Technologies) a non-exclusive, worldwide licence to store, display, and process such content solely as necessary to provide the service to you.</p>
              <p>You must ensure your content does not violate third-party rights, applicable laws, or WhatsApp/Meta platform policies.</p>
            </div>
          </Sec>

          <Sec id="t-ip" num="09" title="Intellectual Property">
            <div className="prose">
              <p>All intellectual property in the Zosata platform — including software, chatbot logic, UI, logos, and brand assets — is owned by Dotflo Technologies and protected by applicable intellectual property laws.</p>
              <p>You may not copy, reverse-engineer, decompile, or create derivative works based on any part of the Zosata platform without our prior written consent. You may not use the Zosata or Dotflo Technologies name, logos, or branding without permission.</p>
            </div>
          </Sec>

          <Sec id="t-third" num="10" title="Third-Party Platforms">
            <div className="prose">
              <p>Zosata integrates with WhatsApp (Meta), payment gateways, and other third-party services. You agree to abide by the terms and policies of these platforms. Zosata is not responsible for disruptions, policy changes, or actions taken by third-party services, including WhatsApp/Meta restricting or suspending your WhatsApp Business number.</p>
            </div>
          </Sec>

          <Sec id="t-liability" num="11" title="Limitation of Liability">
            <div className="prose"><p>To the maximum extent permitted by applicable law, Dotflo Technologies / Zosata is not liable for:</p></div>
            <ul className="legal-list">
              <li>Lost profits, revenue, or data arising from your use of the platform.</li>
              <li>Service interruptions, downtime, or platform failures.</li>
              <li>Actions, restrictions, or policy changes made by WhatsApp/Meta or other third-party platforms.</li>
              <li>Loss or breach of customer data resulting from your own misuse or failure to secure your account.</li>
            </ul>
            <div className="prose" style={{ marginTop: 12 }}><p>Our total liability to you in any circumstance is limited to the total subscription fees you paid to us in the 3 months prior to the incident giving rise to the claim.</p></div>
          </Sec>

          <Sec id="t-indemnify" num="12" title="Indemnification">
            <div className="prose"><p>You agree to indemnify, defend, and hold harmless Dotflo Technologies, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising from:</p></div>
            <ul className="legal-list">
              <li>Your use or misuse of the Zosata platform.</li>
              <li>Your violation of these Terms or applicable laws.</li>
              <li>Any content or data you submit through your account, including WhatsApp messages sent to customers.</li>
              <li>Your failure to comply with WhatsApp's Business Messaging Policy.</li>
              <li>Any dispute between you and your customers arising from orders placed via Zosata.</li>
            </ul>
          </Sec>

          <Sec id="t-termination" num="13" title="Termination">
            <div className="prose">
              <p>We may suspend or terminate your access to Zosata at our sole discretion, with or without prior notice, for violations of these Terms or for any other legitimate business reason.</p>
              <p>Upon termination: your licence to use the service ends immediately; you may request deletion of your data as per our Privacy Policy; you may not create a new account if your previous account was terminated for violations.</p>
              <p>You may cancel your subscription at any time through your account dashboard or by contacting us.</p>
            </div>
          </Sec>

          <Sec id="t-law" num="14" title="Governing Law & Disputes">
            <div className="prose">
              <p>These Terms are governed by the laws of India. Any dispute arising from your use of Zosata shall first be attempted to be resolved informally by contacting our support team. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of India.</p>
              <p>You waive the right to participate in class action lawsuits against Dotflo Technologies / Zosata.</p>
            </div>
          </Sec>

          <Sec id="t-changes" num="15" title="Changes to These Terms">
            <div className="prose">
              <p>We may update these Terms from time to time. Material changes will be communicated via email or an in-app notification at least 7 days before taking effect. Your continued use of Zosata after changes constitutes your acceptance of the updated Terms.</p>
            </div>
          </Sec>

          <Sec id="t-contact" num="16" title="Contact Us">
            <div className="prose"><p>For legal enquiries or questions about these Terms:</p></div>
            <ContactCard />
          </Sec>
        </div>
      </main>
    </div>
  )
}
