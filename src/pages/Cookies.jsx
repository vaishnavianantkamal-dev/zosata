import SubPage, { Cards, CtaBand } from '../components/SubPage.jsx'

export default function Cookies() {
  return (
    <SubPage
      pill="Cookies"
      title="Cookie and tracking policy"
      subtitle="We use cookies to improve experience, analytics, and performance on Zosata properties."
    >
      <Cards
        items={[
          { h: 'Essential cookies', p: 'Needed for security, login sessions, and core platform functionality.' },
          { h: 'Analytics cookies', p: 'Help us understand usage trends and improve product performance.' },
          { h: 'Preference cookies', p: 'Store settings like language and theme for a better experience.' },
        ]}
      />
      <CtaBand
        title="Need cookie-related support?"
        text="Contact us for data and privacy clarification requests."
        action={<a href="mailto:contact@zosata.com" className="btn btn-primary">Contact privacy team</a>}
      />
    </SubPage>
  )
}
