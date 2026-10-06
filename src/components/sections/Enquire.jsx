import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { contact, ctas, enquire } from "../../data/content";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

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
      <div className="mx-auto max-w-7xl">
        <Reveal variant="clipUp">
          <p className="text-xs font-semibold tracking-[0.22em] text-tis-teal-deep uppercase">
            {enquire.title}
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-tis-red md:text-6xl lg:text-7xl">
            {enquire.headline}
          </h2>
          <p className="mt-4 max-w-xl text-base text-tis-muted md:text-lg">{enquire.body}</p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal delay={0.08}>
            <div className="space-y-3">
              <Button
                as="a"
                href={ctas.apply.href}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                data-cursor-label="APPLY"
                className="w-full justify-center text-base md:text-lg"
              >
                {ctas.apply.label}
              </Button>
              <a
                href="#enquire-form"
                data-cursor="interactive"
                data-cursor-label="ENQUIRE"
                className="flex w-full items-center justify-center rounded-full border border-tis-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-tis-ink transition hover:border-tis-teal hover:text-tis-teal-deep"
              >
                {ctas.enquire.label}
              </a>
              <a
                href={ctas.call.href}
                data-cursor="interactive"
                className="flex items-center gap-3 rounded-2xl border border-tis-ink/8 bg-white px-4 py-3 transition hover:border-tis-red/25"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-tis-ink text-white">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs tracking-[0.16em] text-tis-muted uppercase">
                    Call
                  </span>
                  <span className="font-display text-lg font-bold">{contact.helpline}</span>
                </span>
              </a>
              <a
                href={ctas.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="interactive"
                className="flex items-center gap-3 rounded-2xl border border-tis-ink/8 bg-white px-4 py-3 transition hover:border-tis-teal"
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
              <div className="flex flex-wrap gap-3 pt-2 text-sm">
                <a
                  href={ctas.virtualTour.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="interactive"
                  className="underline-offset-4 hover:text-tis-red hover:underline"
                >
                  {ctas.virtualTour.label}
                </a>
                <span className="text-tis-ink/30">·</span>
                <a
                  href={ctas.brochure.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="interactive"
                  className="underline-offset-4 hover:text-tis-red hover:underline"
                >
                  {ctas.brochure.label}
                </a>
              </div>
              <p className="pt-4 text-sm leading-relaxed text-tis-muted">{contact.address}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              id="enquire-form"
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
                  Thank you. Please call or WhatsApp the admissions helpline to continue.
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
                <Button type="submit" size="lg" variant="secondary">
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
