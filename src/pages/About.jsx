import { Link } from 'react-router-dom'
import SubPage, { Cards, CtaBand } from '../components/SubPage.jsx'

export default function About() {
  return (
    <SubPage
      pill="About"
      title="Built for India-first restaurant growth"
      subtitle="Zosata helps restaurants own customers, reduce commissions, and scale direct ordering through WhatsApp."
    >
      <Cards
        items={[
          { h: 'Our mission', p: 'Give every restaurant a high-margin digital channel they fully control.' },
          { h: 'Our philosophy', p: 'Simple UX, powerful automation, and measurable business outcomes.' },
          { h: 'Our impact', p: 'Brands save 25-35% on commission while increasing repeat orders.' },
        ]}
      />
      <CtaBand
        title="Partner with the Zosata team"
        text="Let us design your direct ordering playbook."
        action={<Link to="/contact" className="btn btn-primary">Become partner</Link>}
      />
    </SubPage>
  )
}
