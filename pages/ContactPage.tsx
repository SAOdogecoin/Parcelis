import React, { useEffect } from 'react';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactHelp from '../components/ContactHelp';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <ContactHero />
      <ContactForm />
      <ContactHelp />
    </div>
  );
};

export default ContactPage;