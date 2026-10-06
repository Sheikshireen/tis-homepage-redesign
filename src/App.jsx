import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import ChapterNav from "./components/layout/ChapterNav";
import CustomCursor from "./components/layout/CustomCursor";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollProgress from "./components/layout/ScrollProgress";
import About from "./components/sections/About";
import CampusStats from "./components/sections/CampusStats";
import Enquire from "./components/sections/Enquire";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import LifeAtTulas from "./components/sections/LifeAtTulas";
import Recognition from "./components/sections/Recognition";
import Sports from "./components/sections/Sports";
import Voices from "./components/sections/Voices";
import WhyTulas from "./components/sections/WhyTulas";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { ctas } from "./data/content";

function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);

  const openEnquire = () => setEnquireOpen(true);

  const goToEnquire = () => {
    setEnquireOpen(false);
    document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <ChapterNav />
      <Header onEnquire={openEnquire} />
      <main className="pb-20 md:pb-0">
        <Hero />
        <About />
        <WhyTulas />
        <CampusStats />
        <Sports />
        <LifeAtTulas />
        <Recognition />
        <Voices />
        <Experience />
        <Enquire />
      </main>
      <Footer />

      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-tis-ink/10 bg-tis-cream/95 px-3 py-2 shadow-[0_-8px_30px_-18px_rgba(28,28,28,0.45)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-2">
          <Button
            as="a"
            href={ctas.apply.href}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="flex-1"
          >
            Apply
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="flex-1"
            onClick={openEnquire}
          >
            Enquire
          </Button>
          <a
            href={ctas.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp admissions"
            data-cursor="interactive"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>
          <a
            href={ctas.call.href}
            aria-label="Call admissions helpline"
            data-cursor="interactive"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-tis-ink text-white"
          >
            <Phone size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <Modal open={enquireOpen} onClose={() => setEnquireOpen(false)} title="Enquire Now">
        <p className="text-sm leading-relaxed text-tis-muted">
          Jump to the admissions form, call the helpline, or continue to the Apply Now portal.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button type="button" onClick={goToEnquire}>
            Go to enquiry form
          </Button>
          <Button
            as="a"
            href={ctas.apply.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            {ctas.apply.label}
          </Button>
          <Button as="a" href={ctas.call.href} variant="ghost">
            Call {ctas.call.label}
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default App;
