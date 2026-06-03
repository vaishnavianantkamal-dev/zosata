import { Link } from 'react-router-dom'
import SubPage, { Cards, CtaBand } from '../components/SubPage.jsx'

export default function Blog() {
  return (
    <SubPage
      pill="Blog"
      title="Growth stories for modern restaurants"
      subtitle="Insights on WhatsApp commerce, menu strategy, and operational scaling for food brands."
    >
      <Cards
        items={[
          { h: 'Commission-free growth', p: 'How cloud kitchens move from aggregator dependency to direct channels.' },
          { h: 'WhatsApp conversion playbook', p: 'Conversation design patterns that reduce order drop-offs.' },
          { h: 'Retention loops', p: 'Create repeat ordering with lifecycle messaging and loyalty campaigns.' },
        ]}
      />
      <CtaBand
        title="Want practical playbooks?"
        text="Subscribe for weekly restaurant growth tactics."
        action={<Link to="/contact" className="btn btn-primary">Join updates</Link>}
      />
    </SubPage>
  )
}
