import { useEffect, useId, useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import { profile } from '../../data/profile';
import { buildMailtoLink, isEmailServiceConfigured, sendContactMessage, type ContactMessage } from '../../lib/email';
import { Icon } from '../ui/Icon';

type Field = keyof ContactMessage;
type Errors = Partial<Record<Field, string>>;
type Status = { type: 'success' | 'error'; message: string } | null;

const EMPTY: ContactMessage = { firstName: '', lastName: '', email: '', subject: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: ContactMessage): Errors {
  const errors: Errors = {};
  if (!v.firstName.trim()) errors.firstName = 'Please enter your first name.';
  if (!v.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = 'That email address doesn’t look right.';
  if (!v.message.trim()) errors.message = 'Please write a short message.';
  else if (v.message.trim().length < 10) errors.message = 'Please add a little more detail (10+ characters).';
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactMessage>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const uid = useId();
  const fieldId = (f: Field) => `${uid}-${f}`;

  // Auto-hide the status banner after a while.
  useEffect(() => {
    if (!status) return;
    const t = window.setTimeout(() => setStatus(null), 8000);
    return () => window.clearTimeout(t);
  }, [status]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as Field;
    const next = { ...values, [name]: e.target.value };
    setValues(next);
    // Re-validate live only after the visitor has left the field once.
    if (touched[name]) setErrors(validate(next));
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as Field;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ firstName: true, email: true, message: true });

    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    const trimmed: ContactMessage = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    };

    if (!isEmailServiceConfigured) {
      window.location.href = buildMailtoLink(trimmed);
      setStatus({
        type: 'success',
        message: 'Your mail app has been opened with the message pre-filled. Please send it from there.',
      });
      return;
    }

    setSending(true);
    try {
      await sendContactMessage(trimmed);
      setStatus({ type: 'success', message: '✓ Message sent successfully! I’ll get back to you soon.' });
      setValues(EMPTY);
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        message: `Something went wrong. Please email me directly at ${profile.email}`,
      });
    } finally {
      setSending(false);
    }
  };

  const fieldProps = (name: Field) => {
    const error = touched[name] ? errors[name] : undefined;
    return {
      id: fieldId(name),
      name,
      value: values[name],
      onChange,
      onBlur,
      'aria-invalid': error ? true : undefined,
      'aria-describedby': error ? `${fieldId(name)}-error` : undefined,
      className: error ? 'has-error' : undefined,
    };
  };

  const errorText = (name: Field) =>
    touched[name] && errors[name] ? (
      <span className="field-error" id={`${fieldId(name)}-error`}>
        {errors[name]}
      </span>
    ) : null;

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={fieldId('firstName')}>
            First Name <span aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="given-name" placeholder="Kanchana" required {...fieldProps('firstName')} />
          {errorText('firstName')}
        </div>
        <div className="form-group">
          <label htmlFor={fieldId('lastName')}>Last Name</label>
          <input type="text" autoComplete="family-name" placeholder="Ariyasinghe" {...fieldProps('lastName')} />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor={fieldId('email')}>
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          autoComplete="email"
          placeholder="ariyasinghekanchana@gmail.com"
          required
          {...fieldProps('email')}
        />
        {errorText('email')}
      </div>

      <div className="form-group">
        <label htmlFor={fieldId('subject')}>Subject</label>
        <input type="text" placeholder="Project Inquiry / Job Opportunity" {...fieldProps('subject')} />
      </div>

      <div className="form-group">
        <label htmlFor={fieldId('message')}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Tell me about your project, idea, or opportunity..."
          required
          maxLength={3000}
          {...fieldProps('message')}
        />
        <div className="field-meta">
          {errorText('message')}
          <span className="char-count" aria-hidden="true">
            {values.message.length}/3000
          </span>
        </div>
      </div>

      <div role="status" aria-live="polite" className={`form-status${status ? ` ${status.type}` : ''}`}>
        {status?.message}
      </div>

      <button type="submit" className="btn-submit" disabled={sending} aria-busy={sending}>
        {sending ? (
          <>
            Sending… <Icon name="spinner" className="btn-icon spin" />
          </>
        ) : (
          <>
            Send Message <Icon name="send" className="btn-icon" />
          </>
        )}
      </button>
    </form>
  );
}
