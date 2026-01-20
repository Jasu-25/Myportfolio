import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { contactDetails } from "@/data";
import { motion, Variants } from "framer-motion";
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const delayedSectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};
export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={delayedSectionVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-1 space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                  <detail.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{detail.label}</h3>
                  <a href={detail.href} className="text-muted-foreground hover:text-indigo-600 transition-colors">
                    {detail.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}