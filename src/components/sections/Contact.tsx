import { contactMethods } from '../../data/contact';
import type { ContactMethod } from '../../types';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';

function ContactCard({ method }: { method: ContactMethod }) {
  const isLocation = method.icon === 'map-pin';
  const content = (
    <>
      <div className={`contact-icon${isLocation ? ' contact-icon--location' : ''}`}>
        <Icon name={method.icon} />
      </div>
      <div>
        <p className="contact-card-label">{method.label}</p>
        <p className="contact-card-value">{method.value}</p>
        {method.hint && <p className="contact-location-sub">{method.hint}</p>}
      </div>
    </>
  );
  const className = `contact-card${isLocation ? ' contact-card--location' : ''}`;

  if (!method.href) return <div className={className}>{content}</div>;

  const external = method.href.startsWith('http');
  return (
    <a
      href={method.href}
      className={className}
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
        <SectionHeading id="contact-title" label="Get In Touch" title="Contact" accent="Me">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </SectionHeading>
        <div className="contact-grid">
          <address className="contact-info">
            {contactMethods.map((m) => (
              <ContactCard key={m.label} method={m} />
            ))}
          </address>
          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
