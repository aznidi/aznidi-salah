import React from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis."),
  email: Yup.string().email("Adresse email invalide.").required("L'email est requis."),
  message: Yup.string().required("Le message est requis."),
});

function Contact() {
  // Handler de soumission de formulaire
  const handleSubmit = (values) => {
    // Vous pouvez ici gérer l'envoi des données du formulaire (par exemple vers un API)
    console.log(values);
  };

  return (
    <section id="contactez-moi" className="font-poppins relative isolate px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-500 min-h-screen flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Contactez-moi
      </motion.h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="w-full max-w-lg space-y-8 p-6">
            {/* Nom */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="name" className="text-lg">Nom</label>
              <Field
                id="name"
                name="name"
                className="mt-2 p-3 rounded-md bg-gray-700 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Votre nom"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="email" className="text-lg">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-2 p-3 rounded-md bg-gray-700 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Votre email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Message */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="message" className="text-lg">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="mt-2 p-3 rounded-md bg-gray-700 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Votre message"
                rows="4"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full mt-6 bg-yellow-500 text-gray-800 font-semibold py-3 rounded-md hover:bg-yellow-400 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Envoyer
            </motion.button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Contact;
