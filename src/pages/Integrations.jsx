import { Link } from 'react-router-dom'
import SubPage, { Cards, CtaBand } from '../components/SubPage.jsx'

export default function Integrations() {
  return (
    <SubPage
      pill="Integrations"
      title="Connect your full restaurant stack"
      subtitle="Unify WhatsApp orders with payments, kitchen operations, and customer engagement tools."
    >
      <Cards
        items={[
          { h: 'Payment gateways', p: 'UPI, cards, and direct merchant settlement integrations.' },
          { h: 'POS sync', p: 'Push incoming orders to your POS and kitchen workflows automatically.' },
          { h: 'CRM & campaigns', p: 'Retarget repeat buyers with segmented WhatsApp communication.' },
        ]}
      />
      <CtaBand
        title="Need a custom integration?"
        text="Our team helps map your current stack and deploy fast."
        action={<Link to="/contact" className="btn btn-primary">Talk integration team</Link>}
      />
    </SubPage>
  )
}
