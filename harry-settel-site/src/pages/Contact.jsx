// src/pages/Contact.jsx
import { motion } from 'framer-motion';

const Contact = () => {
  const contacts = [
    {
      title: "Management",
      name: "Dexter Scott",
      email: "d.scott@bep-ny.com"
    },
    {
      title: "Touring",
      name: "Mike Criscuolo & Andrew Skikne UTA",
      emails: [
        "Criscuolo_m@unitedtalent.com",
        "Skikne_a@unitedtalent.com"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#040613] via-[#0a0f29] to-[#040613]">
      <div className="relative z-10 pt-32 px-8">
        <div className="max-w-3xl mx-auto space-y-24">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h2 className="text-7xl font-light text-white mb-8">
                {contact.title}
              </h2>
              
              <div className="space-y-4">
                <p className="text-2xl text-gray-200 font-light">
                  {contact.name}
                </p>
                
                {contact.email && (
                  <motion.a
                    href={`mailto:${contact.email}`}
                    className="block text-green-400 text-xl hover:text-green-300 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {contact.email}
                  </motion.a>
                )}
                
                {contact.emails && contact.emails.map((email, i) => (
                  <motion.a
                    key={i}
                    href={`mailto:${email}`}
                    className="block text-green-400 text-xl hover:text-green-300 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {email}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;