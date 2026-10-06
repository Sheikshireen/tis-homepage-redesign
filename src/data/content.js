const MEDIA = "https://tis.edu.in/_next/static/media";

export const brand = {
  name: "Tulas International School",
  shortName: "TIS",
  taglineLead: "LET'S DO",
  taglineAccent: "it",
  taglineEnd: "with Tulas",
  logo: `${MEDIA}/schoolLogo.95f6e121.png`,
  established: 2012,
  trust: "Rishabh Educational Trust",
  curriculum: "CBSE",
  location: "Dehradun, Uttarakhand",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why Tulas", href: "#why" },
  { label: "Campus", href: "#campus" },
  { label: "Sports", href: "#sports" },
  { label: "Recognition", href: "#recognition" },
  { label: "Voices", href: "#voices" },
  { label: "Experience", href: "#experience" },
  { label: "Enquire", href: "#enquire" },
];

export const ctas = {
  apply: {
    label: "Apply Now",
    href: "https://admission.tis.edu.in/",
  },
  enquire: {
    label: "Enquire Now",
    href: "#enquire",
  },
  call: {
    label: "+91-9837983791",
    href: "tel:+919837983791",
  },
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/919837983791",
  },
  virtualTour: {
    label: "Virtual Tour",
    href: "https://tis.edu.in/virtual-tour/",
  },
  brochure: {
    label: "Brochure",
    href: "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf",
  },
  calendar: {
    label: "Calendar",
    href: "https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf",
  },
  faq: {
    label: "FAQ",
    href: "https://tis.edu.in/faq/",
  },
  fedena: {
    label: "Fedena Login",
    href: "https://tis.fedena.com/",
  },
};

export const hero = {
  eyebrow: "CBSE Co-ed Boarding & Day School · Dehradun",
  supporting:
    "Academic excellence, holistic development, and a campus built to prepare students as global leaders.",
  image: `${MEDIA}/schoolTopView.6e263e02.webp`,
  imageAlt: "Aerial view of Tulas International School campus in Dehradun",
};

export const about = {
  id: "about",
  title: "About TIS",
  headline: "Education through seamless opportunities.",
  body: "Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.",
  points: [
    "One of India’s top boarding and day schools in Dehradun",
    "CBSE curriculum focused on academic excellence and holistic development",
    "A community that encourages leadership, innovation, and lifelong learning",
  ],
  image: `${MEDIA}/Image%202.0c5295c9.webp`,
  imageAlt: "Students on the Tulas International School campus",
};

export const whyTulas = {
  id: "why",
  title: "Why Tulas",
  items: [
    {
      quote: "We feel supported in what we do and nudged further to do more",
      body: "At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.",
      image: `${MEDIA}/ladyInPink.c358aa8f.png`,
      imageAlt: "Tulas student in pink representing arts and expression",
    },
    {
      quote: "Tulas helped me thrive and become the best version of myself",
      body: "When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.",
      image: `${MEDIA}/manInBlue.46316cbf.png`,
      imageAlt: "Tulas student in blue representing growth and belonging",
    },
  ],
};

export const campusStats = {
  id: "campus",
  title: "Campus at a Glance",
  subtitle: "A pollution-free campus designed for learning, sport, and care.",
  items: [
    {
      value: 22,
      suffix: "",
      label: "Acre pollution-free campus",
      image: `${MEDIA}/campus.e67b1a0a.png`,
      imageAlt: "Tulas campus grounds",
    },
    {
      value: 16,
      suffix: "+",
      label: "Olympic sports",
      image: `${MEDIA}/sports.e695b690.png`,
      imageAlt: "Sports facilities at Tulas",
    },
    {
      value: 24,
      suffix: "×7",
      label: "Medical assistance",
      image: `${MEDIA}/medical.e87071fe.png`,
      imageAlt: "Medical care support at Tulas",
    },
    {
      value: 6,
      suffix: ":1",
      label: "Student–teacher ratio",
      image: `${MEDIA}/ratio.6ca07c6a.png`,
      imageAlt: "Students with teachers at Tulas",
    },
  ],
};

export const sports = {
  id: "sports",
  title: "Sports & Beyond",
  question: "Sports?",
  headline: "It’s not just a facility. At Tulas it’s the foundation!",
  body: "16+ sports curated to bring joy and discipline to your life.",
  secretPrompt: "At Tulas, we always ask, “What’s the secret to making school awesome?”",
  secretAnswer:
    "The secret to making one's school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.",
  items: [
    { name: "Archery", image: `${MEDIA}/archery.7a805345.png` },
    { name: "Cycling", image: `${MEDIA}/cycling.80dbb9b1.png` },
    { name: "Hockey", image: `${MEDIA}/hockey.219fe552.png` },
    { name: "Swimming", image: `${MEDIA}/swimming.d4285534.png` },
    { name: "Taekwondo", image: `${MEDIA}/taekwando.86e26406.png` },
    { name: "Football", image: `${MEDIA}/football.ca61e5d0.png` },
    { name: "Shooting Range", image: `${MEDIA}/shooting.b0b11d74.png` },
    { name: "Horse Riding", image: `${MEDIA}/horseRiding.8f259127.png` },
    { name: "Billiards", image: `${MEDIA}/billiards-single.a1e831c6.png` },
    { name: "Squash", image: `${MEDIA}/squash.ffa0360a.png` },
    { name: "Volleyball", image: `${MEDIA}/volleyball.045be884.png` },
    { name: "Basketball", image: `${MEDIA}/basketball.fa70909d.png` },
    { name: "Cricket", image: `${MEDIA}/Cricket.b06b18ca.png` },
    { name: "Lawn Tennis", image: `${MEDIA}/lawnTennis.7b3b894a.png` },
    { name: "Badminton", image: `${MEDIA}/badminton.a314ff00.png` },
    { name: "Table Tennis", image: `${MEDIA}/tableTennis.61f6bd56.png` },
  ],
};

export const recognition = {
  id: "recognition",
  title: "Recognition",
  subtitle: "We believe in celebrating the hard work and perseverance of the best!",
  rankings: [
    {
      place: "In Dehradun",
      title: "Co-Educational Boarding School in Dehradun by Education Today",
    },
    {
      place: "In Uttarakhand",
      title: "Co-Educational Boarding School in North India by Education Today",
    },
    {
      place: "In North India",
      title: "Co-Educational Boarding School in North India by Outlook",
    },
    {
      place: "In India",
      title: "Co-Educational Boarding School in India by Education Today",
    },
  ],
  collaborationsLabel: "12+ Collaborations",
};

export const visitors = {
  title: "Influential Personalities On Campus",
  items: [
    {
      name: "Sakshi Malik",
      note: "First Indian wrestler to win a medal at the Rio 2016 Olympics; Padma Shri Awardee 2017",
      image: `${MEDIA}/SakshiMalik.91174bf4.webp`,
    },
    {
      name: "Vishesh Bhriguvanshi",
      note: "Indian Basketball Team Captain & major FIBA Asia Championship player",
      image: `${MEDIA}/VisheshBhriguvanshi.52af8bfd.webp`,
    },
    {
      name: "Prakashi Tomar & Late Ms Chandro Tomar",
      note: "Known as Shooter Dadi; 30 National Championship winners",
      image: `${MEDIA}/PrakashiTomar.339dbb95.webp`,
    },
    {
      name: "Abhishek Verma",
      note: "Arjuna Awardee; Asian Games Gold Medalist in Archery 2013",
      image: `${MEDIA}/AbhishekVerma.18f9d349.webp`,
    },
    {
      name: "Aditi Gopichand Swami",
      note: "Arjuna Awardee; World Champion in Archery 2024",
      image: `${MEDIA}/AditiGopichandSwami.b7afa246.webp`,
    },
    {
      name: "Laxmi Agarwal",
      note: "Founder and President of The Laxmi Foundation; International Women Empowerment Award recipient",
      image: `${MEDIA}/LakshmiAgarwal.7405df5d.webp`,
    },
  ],
};

export const testimonials = [
  {
    name: "Tashi Tsering",
    relation: "F/O Jigmet Skaldon",
    quote:
      "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.",
  },
  {
    name: "Namita Agarwal",
    relation: "M/O Krishna Agarwal",
    quote:
      "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
  },
  {
    name: "Sandeep Kumar",
    relation: "F/O Aryan",
    quote:
      "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
  },
  {
    name: "Pinky Sharma",
    relation: "M/O Swastik Sharma",
    quote:
      "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.",
  },
  {
    name: "Suresh Kumar",
    relation: "F/O Aditya Kumar",
    quote:
      "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme.",
  },
  {
    name: "Ashu Arora",
    relation: "M/O Manisha Changrani",
    quote:
      "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.",
  },
];

export const experience = {
  id: "experience",
  title: "Experience TIS",
  headline: "Dive into our virtual tour",
  body: "Explore the campus, spaces, and spirit of Tulas from wherever you are—then take the next step with our brochure.",
  image: `${MEDIA}/polo.973ddbae.webp`,
  imageAlt: "Students experiencing campus life at Tulas International School",
};

export const enquire = {
  id: "enquire",
  title: "Enquire / Admissions",
  headline: "Begin your Tulas journey",
  body: "Share a few details and our admissions team will connect with you. Classes IV to XII.",
  classes: [
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII",
  ],
  consent:
    "I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun",
};

export const contact = {
  address:
    "Tulas International School, Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
  landline: ["0135-2699444", "0135-2699666"],
  helpline: "+91-9837983791",
  email: "info@tis.edu.in",
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/tulasinternationalschool/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/tulasinternationalschool/?hl=en",
    },
    {
      label: "X / Twitter",
      href: "https://twitter.com/tulas_intschool?lang=en",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
    },
  ],
  policies: [
    { label: "Privacy Policy", href: "https://tis.edu.in/privacy-policy/" },
    { label: "Terms & Conditions", href: "https://tis.edu.in/terms-conditions/" },
    { label: "Disclaimer", href: "https://tis.edu.in/disclaimer/" },
    {
      label: "Disciplinary Policy",
      href: "https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf",
    },
    {
      label: "Mobile Phone Policy",
      href: "https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf",
    },
    {
      label: "Child Welfare & Safety Policy",
      href: "https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf",
    },
  ],
};

export const footerNote =
  "Copyright © 2026 Tulas International School, Dehradun. Homepage redesign assessment project.";
