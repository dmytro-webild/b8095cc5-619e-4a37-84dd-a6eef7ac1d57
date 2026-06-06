"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="medium"
        background="circleGradient"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Our Mission",
          id: "#about",
        },
        {
          name: "Programs",
          id: "#features",
        },
        {
          name: "Impact",
          id: "#metrics",
        },
        {
          name: "Leadership",
          id: "#team",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Partners",
          id: "#social-proof",
        },
        {
          name: "FAQs",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Apex Juris"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Apex Juris"
      description="Cultivating Future Leaders in Justice, Civic Engagement, and Human Rights. Empowering youth to shape a more just world."
      buttons={[
        {
          text: "Explore Programs",
          href: "#features",
        },
        {
          text: "Join Our Community",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-low-angle-shot-building-with-concrete-stairs-beautiful-carvings-roubaix-france_181624-16665.jpg",
          imageAlt: "Scales of Justice in Grand Hall",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/retro-world-theatre-day-scenes_23-2151211381.jpg",
          imageAlt: "Parliamentary Chamber with Cinematic Lighting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-typesetting-parts_23-2149609871.jpg",
          imageAlt: "Legal Bookshelf with Golden Accents",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/university-students-consulting-with-their-professor-while-standing-hallway_637285-9253.jpg",
          imageAlt: "Youth Delegates Debating in a Conference Room",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-gesture-expressing-different-feelings_23-2150061925.jpg",
          imageAlt: "Abstract Representation of Human Rights",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/big-building-kilkenny-castle-park-dukes-meadows_181624-22980.jpg",
          imageAlt: "Classic Architectural Pillars with Spotlight",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Mission: Empowering the Next Generation of Civic Leaders",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Justice Simulations",
          descriptions: [
            "Engage in mock trials, debates, and policy development exercises.",
            "Develop legal reasoning and advocacy skills.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/women-protesting-together-their-rights_23-2149124678.jpg",
          imageAlt: "Mock trial simulation",
        },
        {
          id: "f2",
          title: "Civic Leadership Workshops",
          descriptions: [
            "Master public speaking, critical thinking, and ethical leadership principles.",
            "Learn to lead discussions and drive consensus.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104637.jpg",
          imageAlt: "Public speaking workshop",
        },
        {
          id: "f3",
          title: "Human Rights Advocacy",
          descriptions: [
            "Explore international human rights law and global justice issues.",
            "Develop campaigns and advocate for change.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/people-protesting-with-placards-outdoors-world-environment-day_23-2149571873.jpg",
          imageAlt: "Human rights discussion",
        },
        {
          id: "f4",
          title: "Constitutional Law Deep Dive",
          descriptions: [
            "Analyze landmark legal cases and their impact on society.",
            "Understand the foundations of democratic governance.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-american-flag-with-judge-gavel_23-2148230120.jpg",
          imageAlt: "Studying constitutional law",
        },
      ]}
      title="Programs Designed for Impact"
      description="Our meticulously crafted programs develop critical thinking, public speaking, and legal reasoning in an immersive, real-world context."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "500+",
          title: "Future Leaders Trained",
          items: [
            "Participants in 10+ countries",
            "Diverse backgrounds",
          ],
        },
        {
          id: "m2",
          value: "95%",
          title: "Program Satisfaction",
          items: [
            "Rated 'excellent' or 'very good'",
            "Continuous improvement",
          ],
        },
        {
          id: "m3",
          value: "20+",
          title: "Global Partnerships",
          items: [
            "NGOs, legal firms, universities",
            "Expanding network",
          ],
        },
      ]}
      title="Our Impact in Numbers"
      description="Measuring the growth and success of our participants in fostering a more just and engaged future."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={true}
      title="Meet Our Esteemed Faculty & Mentors"
      tag="Our Leadership"
      membersAnimation="slide-up"
      members={[
        {
          id: "t1",
          name: "Dr. Evelyn Reed",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-standing-near-bookshelf-office_23-2148042696.jpg",
          imageAlt: "Dr. Evelyn Reed",
        },
        {
          id: "t2",
          name: "Prof. Marcus Thorne",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-artist-holds-painting-brushes-gray-background-high-quality-photo_114579-23003.jpg",
          imageAlt: "Prof. Marcus Thorne",
        },
        {
          id: "t3",
          name: "Ms. Anya Sharma",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-studying-together-exam_23-2149038433.jpg",
          imageAlt: "Ms. Anya Sharma",
        },
        {
          id: "t4",
          name: "Mr. Julian Vance",
          imageSrc: "http://img.b2bpic.net/free-photo/speaker-talking-tech-conference-exploring-latest-ai-technology-trends_482257-105806.jpg",
          imageAlt: "Mr. Julian Vance",
        },
      ]}
      memberVariant="card"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "test1",
          name: "Sarah J.",
          role: "Alumna, Class of 2023",
          testimonial: "Apex Juris provided an unparalleled experience. The mock trials were incredibly realistic and honed my legal reasoning beyond expectation. Truly transformative!",
          imageSrc: "http://img.b2bpic.net/free-photo/young-black-ceo-having-fun-after-successful-deal-with-foreign-partners-showing-thumbs-up-indoor-portrait-happy-freelance-african-specialist-fooling-around-office-with-chinese-colleague_197531-3857.jpg",
          imageAlt: "Sarah J.",
          icon: Star,
        },
        {
          id: "test2",
          name: "Michael K.",
          role: "Current Participant",
          testimonial: "The human rights workshops opened my eyes to global injustices and equipped me with the tools to make a difference. Inspiring and empowering!",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-confident-man_1098-18449.jpg",
          imageAlt: "Michael K.",
          icon: Star,
        },
        {
          id: "test3",
          name: "Emily W.",
          role: "Aspiring Diplomat",
          testimonial: "Public speaking was my biggest fear. Apex Juris's coaches transformed my confidence, and now I can articulate complex ideas with clarity and conviction.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-woman-making-notes-outdoor-cafe_1262-19014.jpg",
          imageAlt: "Emily W.",
          icon: Star,
        },
        {
          id: "test4",
          name: "David R.",
          role: "Legal Studies Student",
          testimonial: "The depth of the constitutional law modules was exceptional. It felt like being in a real law school, grappling with profound legal concepts.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-cheerful-casual-male-student-with-notepads-joyfully-looking-camera-library-university_574295-1603.jpg",
          imageAlt: "David R.",
          icon: Star,
        },
        {
          id: "test5",
          name: "Jessica P.",
          role: "Community Activist",
          testimonial: "Beyond the academics, Apex Juris built a community of passionate peers. The network and mentorship are invaluable.",
          imageSrc: "http://img.b2bpic.net/free-photo/rad-passion-indy-soulful-spirit_53876-13836.jpg",
          imageAlt: "Jessica P.",
          icon: Star,
        },
      ]}
      title="Voices of Our Future Leaders"
      description="Hear how Apex Juris has shaped the minds and careers of our ambitious participants."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Global Justice Initiative",
        "Constitutional Law Society",
        "Youth Parliament Forum",
        "International Human Rights Coalition",
        "Elite Leadership Institute",
        "Civic Education Alliance",
        "Future Advocates Network",
        "World Debate Union",
        "National Bar Association",
        "University Law Departments",
      ]}
      title="Trusted by Leading Institutions"
      description="Our programs are recognized and supported by esteemed academic and civic organizations worldwide."
      showCard={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Who is eligible for Apex Juris programs?",
          content: "Our programs are designed for ambitious high school students (ages 14-18) with a demonstrated interest in justice, leadership, and civic engagement. Specific program requirements may vary.",
        },
        {
          id: "q2",
          title: "What are the benefits of joining Apex Juris?",
          content: "Participants develop critical thinking, public speaking, legal reasoning, and human rights advocacy skills. They gain invaluable experience, network with peers and mentors, and prepare for careers in law, public service, and diplomacy.",
        },
        {
          id: "q3",
          title: "Do you offer scholarships or financial aid?",
          content: "Yes, Apex Juris is committed to accessibility. We offer a limited number of need-based scholarships and financial aid options. Please visit our 'Admissions' page for details on how to apply.",
        },
        {
          id: "q4",
          title: "What kind of career paths do alumni pursue?",
          content: "Our alumni often pursue careers as lawyers, judges, diplomats, policymakers, human rights advocates, educators, and leaders in non-profit organizations. Many continue their studies at top universities in law, political science, and international relations.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common inquiries about our programs, eligibility, and impact."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready to Shape the Future of Justice? Join Apex Juris."
      buttons={[
        {
          text: "Apply Now",
          href: "#",
        },
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Apex Juris"
      columns={[
        {
          title: "About Us",
          items: [
            {
              label: "Our Mission",
              href: "#about",
            },
            {
              label: "Leadership",
              href: "#team",
            },
            {
              label: "Impact",
              href: "#metrics",
            },
          ],
        },
        {
          title: "Programs",
          items: [
            {
              label: "Justice Simulations",
              href: "#features",
            },
            {
              label: "Civic Leadership",
              href: "#features",
            },
            {
              label: "Human Rights",
              href: "#features",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Partnerships",
              href: "#social-proof",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Apply",
              href: "#",
            },
            {
              label: "Support Us",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Apex Juris. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
