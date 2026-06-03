import { Link } from 'react-router-dom'
import SubPage, { Cards, CtaBand } from '../components/SubPage.jsx'

export default function Pricing() {
  return (
    <SubPage
      pill="Pricing"
      title="Simple plans. Zero commission."
      subtitle="Predictable monthly pricing for restaurants that want direct WhatsApp ordering and higher margins."
    >
      <Cards
        items={[
          { h: 'Starter', p: 'Perfect for single outlets with chatbot ordering and menu hosting.' },
          { h: 'Growth', p: 'For expanding brands needing advanced automations, campaigns, and analytics.' },
          { h: 'Enterprise', p: 'Custom workflows, SLA support, and multi-city orchestration for chains.' },
        ]}
      />
      <CtaBand
        title="Want a custom quote for your brand?"
        text="Talk to our team and get a rollout plan tailored for your city and order volume."
        action={<Link to="/contact" className="btn btn-primary">Book pricing call</Link>}
      />
    </SubPage>
  )
}
