import SubPage, { Cards, CtaBand } from '../components/SubPage.jsx'

export default function Careers() {
  return (
    <SubPage
      pill="Careers"
      title="Build the future of restaurant commerce"
      subtitle="Join us in creating a premium WhatsApp-first platform for food businesses across India."
    >
      <Cards
        items={[
          { h: 'Product roles', p: 'Design and product thinkers who simplify complex ordering journeys.' },
          { h: 'Engineering roles', p: 'Frontend and backend engineers focused on speed and reliability.' },
          { h: 'Growth roles', p: 'Operators who help restaurant partners launch and scale fast.' },
        ]}
      />
      <CtaBand
        title="Ready to join Zosata?"
        text="Send your profile and portfolio to our hiring team."
        action={<a href="mailto:contact@zosata.com" className="btn btn-primary">Apply now</a>}
      />
    </SubPage>
  )
}
