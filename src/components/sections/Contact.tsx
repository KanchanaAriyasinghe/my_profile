import { contactMethods } from '../../data/contact';
import type { ContactMethod } from '../../types';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';

function ContactRow({ method }: { method: ContactMethod }) {
  const content = (
    <>
      <span className="icon-tile icon-tile--sm">
        <Icon name={method.icon} />
      </span>
      <div>
        <p className="contact-label">{method.label}</p>
        <p className="contact-value">{method.value}</p>
      </div>
      {method.href && <Icon name="arrow-right" className="contact-arrow" />}
    </>
  );

  if (!method.href) return <div className="contact-row">{content}</div>;

  const external = method.href.startsWith('http');
  return (
    <a
      href={method.href}
      className="contact-row"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  );
}

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" label="Contact" title="Let's work" accent="together">
          Have a role, project or idea in mind? Send a message or reach out on any channel below.
        </SectionHeading>

        <div className="contact-grid">
          <address className="card contact-list">
            {contactMethods.map((m) => (
              <ContactRow key={m.label} method={m} />
            ))}
          </address>

          <div className="card contact-form-card">
            <h3>Send a message</h3>
            <p>Fields marked * are required.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
