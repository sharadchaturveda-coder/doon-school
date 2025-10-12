import ContactForm from '../../blocks/contact-form';

export default function ContactFormSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-6">Send Us a Message</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about admissions, programs, or want to schedule a campus visit?
            Fill out the form below and we'll get back to you promptly.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
