import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <section
      id="contact"
      className="px-6 py-20 border-t"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-xl mx-auto">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold mb-6 text-center"
        >
          Have a project in mind?
        </h2>

        {status === "success" && (
          <div
            className="mb-6 p-4 bg-green-50 text-green-700 text-sm rounded"
            role="status"
          >
            Thanks! Your message has been sent successfully.
          </div>
        )}

        {status === "error" && (
          <div
            className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded"
            role="alert"
          >
            Something went wrong. Please try again.
          </div>
        )}

       <Formik
  initialValues={{ name: "", email: "", message: "" }}
  validationSchema={validationSchema}
  onSubmit={async (_, { resetForm }) => {
    try {
      setStatus("loading");
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      resetForm();
    } catch {
      setStatus("error");
    }
  }}
>

          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm mb-1">
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border px-3 py-2"
                  aria-invalid={Boolean(errors.name && touched.name)}
                  aria-describedby="name-error"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  id="name-error"
                  className="text-sm text-red-600 mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border px-3 py-2"
                  aria-invalid={Boolean(errors.email && touched.email)}
                  aria-describedby="email-error"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  id="email-error"
                  className="text-sm text-red-600 mt-1"
                  role="alert"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="w-full border px-3 py-2 min-h-[120px]"
                  aria-invalid={Boolean(errors.message && touched.message)}
                  aria-describedby="message-error"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  id="message-error"
                  className="text-sm text-red-600 mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || status === "loading"}
                className="w-full py-2 bg-black text-white disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
