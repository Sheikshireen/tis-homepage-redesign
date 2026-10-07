import { brand, contact, ctas, footerNote } from "../../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-tis-on-dark/12 bg-tis-ink text-tis-on-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src={brand.logo}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-accent-cream object-contain p-1"
            />
            <div>
              <p className="font-display text-lg font-bold">{brand.name}</p>
              <p className="text-sm text-on-panel-muted">{brand.location}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-on-panel-muted">{contact.address}</p>
          <div className="mt-5 space-y-1 text-sm text-on-panel-muted">
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
            <p>Landline: {contact.landline.join(" · ")}</p>
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
          <ul className="space-y-2 text-sm text-on-panel-muted">
            <li>
              <a
                href={ctas.virtualTour.href}
                data-cursor="interactive"
                className="hover:text-tis-on-dark"
              >
                Virtual Tour
              </a>
            </li>
            <li>
              <a href={ctas.brochure.href} data-cursor="interactive" className="hover:text-tis-on-dark">
                Brochure
              </a>
            </li>
            <li>
              <a href={ctas.calendar.href} data-cursor="interactive" className="hover:text-tis-on-dark">
                Calendar
              </a>
            </li>
            <li>
              <a href={ctas.faq.href} data-cursor="interactive" className="hover:text-tis-on-dark">
                FAQ
              </a>
            </li>
            <li>
              <a href={ctas.fedena.href} data-cursor="interactive" className="hover:text-tis-on-dark">
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
                  className="inline-flex rounded-full border border-tis-on-dark/20 px-3 py-1.5 text-xs text-on-panel-muted hover:border-tis-teal hover:text-tis-on-dark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-xs text-on-panel-muted/80">
            {contact.policies.map((item) => (
              <li key={item.label}>
                <a href={item.href} data-cursor="interactive" className="hover:text-tis-on-dark">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-tis-on-dark/10 px-5 py-5 text-center text-xs text-on-panel-muted/75 md:px-8">
        {footerNote}
      </div>
    </footer>
  );
}
