import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { contact, ctas, enquire } from "../../data/content";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  className: "",
  consent: false,
};

export default function Enquire() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.phone || !form.className || !form.consent) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id={enquire.id} className="bg-tis-cream px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal variant="clipUp">
          <SectionHeading
            eyebrow={enquire.title}
            title={enquire.headline}
            subtitle={enquire.body}
          />
          <div className="mt-8 space-y-3">
            <Button
              as="a"
              href={ctas.apply.href}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto"
            >
              {ctas.apply.label}
            </Button>
            <a
              href={ctas.call.href}
              data-cursor="interactive"
              className="flex items-center gap-3 rounded-2xl border border-tis-ink/8 bg-white px-4 py-3 text-tis-ink transition hover:border-tis-red/30 hover:text-tis-red"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-tis-red text-white">
                <Phone size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs tracking-[0.16em] text-tis-muted uppercase">
                  Admission Helpline
                </span>
                <span className="font-display text-lg font-bold">{contact.helpline}</span>
              </span>
            </a>
            <a
              href={ctas.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="flex items-center gap-3 rounded-2xl border border-tis-ink/8 bg-white px-4 py-3 text-tis-ink transition hover:border-tis-teal hover:text-tis-teal-deep"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-tis-teal text-tis-ink">
                <MessageCircle size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs tracking-[0.16em] text-tis-muted uppercase">
                  WhatsApp
                </span>
                <span className="font-display text-lg font-bold">Chat with admissions</span>
              </span>
            </a>
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-tis-muted">
            {contact.address}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="border border-tis-ink/10 bg-white p-6 md:p-8"
            noValidate
          >
            <h3 className="font-display text-2xl font-bold">Enquire Now</h3>
            <p className="mt-2 text-sm text-tis-muted">
              Demo enquiry form for this redesign assessment — no data is sent to a server.
            </p>

            {submitted ? (
              <p
                role="status"
                className="mt-6 rounded-2xl bg-tis-teal/15 px-4 py-3 text-sm text-tis-ink"
              >
                Thank you. Your enquiry details are ready — please call or WhatsApp the
                admissions helpline to continue.
              </p>
            ) : null}

            <div className="mt-6 grid gap-4">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Full Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  autoComplete="name"
                  className="rounded-xl border border-tis-ink/15 bg-tis-cream px-4 py-3 outline-none transition focus:border-tis-teal"
                  placeholder="Enter your full name"
                />
              </label>

              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Email (optional)</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  className="rounded-xl border border-tis-ink/15 bg-tis-cream px-4 py-3 outline-none transition focus:border-tis-teal"
                  placeholder="Enter email id"
                />
              </label>

              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Mobile Number</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                  autoComplete="tel"
                  className="rounded-xl border border-tis-ink/15 bg-tis-cream px-4 py-3 outline-none transition focus:border-tis-teal"
                  placeholder="Enter your mobile number"
                />
              </label>

              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Select Class</span>
                <select
                  name="className"
                  value={form.className}
                  onChange={onChange}
                  required
                  className="rounded-xl border border-tis-ink/15 bg-tis-cream px-4 py-3 outline-none transition focus:border-tis-teal"
                >
                  <option value="">Select Class</option>
                  {enquire.classes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-start gap-3 text-sm text-tis-muted">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={onChange}
                  required
                  className="mt-1"
                  data-cursor="interactive"
                />
                <span>{enquire.consent}</span>
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" size="lg">
                  Submit Enquiry
                </Button>
                <Button
                  as="a"
                  href={ctas.apply.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="lg"
                >
                  {ctas.apply.label}
                </Button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
