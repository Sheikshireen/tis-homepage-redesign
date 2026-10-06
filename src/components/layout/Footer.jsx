import { brand, contact, ctas, footerNote } from "../../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-tis-ink/10 bg-tis-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src={brand.logo}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white object-contain p-1"
            />
            <div>
              <p className="font-display text-lg font-bold">{brand.name}</p>
              <p className="text-sm text-white/65">{brand.location}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">{contact.address}</p>
          <div className="mt-5 space-y-1 text-sm">
            <p>
              Helpline:{" "}
              <a
                href={ctas.call.href}
                className="text-tis-teal underline-offset-2 hover:underline"
                data-cursor="interactive"
              >
                {contact.helpline}
              </a>
            </p>
            <p>
              Landline: {contact.landline.join(" · ")}
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-tis-teal underline-offset-2 hover:underline"
                data-cursor="interactive"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold tracking-[0.18em] uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a href={ctas.virtualTour.href} data-cursor="interactive" className="hover:text-white">
                Virtual Tour
              </a>
            </li>
            <li>
              <a href={ctas.brochure.href} data-cursor="interactive" className="hover:text-white">
                Brochure
              </a>
            </li>
            <li>
              <a href={ctas.calendar.href} data-cursor="interactive" className="hover:text-white">
                Calendar
              </a>
            </li>
            <li>
              <a href={ctas.faq.href} data-cursor="interactive" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href={ctas.fedena.href} data-cursor="interactive" className="hover:text-white">
                Fedena Login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold tracking-[0.18em] uppercase">
            Connect
          </h3>
          <ul className="mb-6 flex flex-wrap gap-2">
            {contact.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="interactive"
                  className="inline-flex rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:border-tis-teal hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-xs text-white/55">
            {contact.policies.map((item) => (
              <li key={item.label}>
                <a href={item.href} data-cursor="interactive" className="hover:text-white/80">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45 md:px-8">
        {footerNote}
      </div>
    </footer>
  );
}
