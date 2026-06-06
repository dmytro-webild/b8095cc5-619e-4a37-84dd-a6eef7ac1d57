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
          name: "Ana Sayfa",          id: "#hero"},
        {
          name: "Misyonumuz",          id: "#about"},
        {
          name: "Programlarımız",          id: "#features"},
        {
          name: "Etkimiz",          id: "#metrics"},
        {
          name: "Ekibimiz",          id: "#team"},
        {
          name: "Referanslar",          id: "#testimonials"},
        {
          name: "Ortaklarımız",          id: "#social-proof"},
        {
          name: "Sıkça Sorulan Sorular",          id: "#faq"},
        {
          name: "İletişim",          id: "#contact"},
      ]}
      brandName="Genç Vizyon"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Genç Vizyon"
      description="Türk Hukuk Sistemine, Yasal Gerekliliklere ve Yerel Düzenlemelere Uyumlu İçeriklerle Geleceğin Adalet Liderlerini Yetiştiriyoruz. Gençleri daha adil bir dünya şekillendirmeye güçlendiriyoruz."
      buttons={[
        {
          text: "Programlarımızı Keşfedin",          href: "#features"},
        {
          text: "Topluluğumuza Katılın",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-low-angle-shot-building-with-concrete-stairs-beautiful-carvings-roubaix-france_181624-16665.jpg",          imageAlt: "Türkiye Adalet Sarayı"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/retro-world-theatre-day-scenes_23-2151211381.jpg",          imageAlt: "TBMM Genel Kurulu"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-typesetting-parts_23-2149609871.jpg",          imageAlt: "Hukuk Kitaplığı"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/university-students-consulting-with-their-professor-while-standing-hallway_637285-9253.jpg",          imageAlt: "Genç Hukukçular Tartışıyor"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-gesture-expressing-different-feelings_23-2150061925.jpg",          imageAlt: "İnsan Hakları Teması"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/big-building-kilkenny-castle-park-dukes-meadows_181624-22980.jpg",          imageAlt: "Adalet Sarayı Girişi"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Misyonumuz: Yeni Nesil Sivil Liderleri Güçlendirmek ve Türk Hukuk Sistemine Uyumlu İçerikler Sunmak"},
      ]}
      buttons={[
        {
          text: "Daha Fazla Bilgi Edinin",          href: "#features"},
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
          id: "f1",          title: "Türk Hukuk Simülasyonları",          descriptions: [
            "Türk hukukunda örnek dava, tartışma ve politika geliştirme senaryolarına katılın.",            "Hukuki muhakeme ve savunuculuk becerilerini geliştirin."],
          imageSrc: "http://img.b2bpic.net/free-photo/women-protesting-together-their-rights_23-2149124678.jpg",          imageAlt: "Türk Hukuk Simülasyonu"},
        {
          id: "f2",          title: "Sivil Liderlik Atölyeleri",          descriptions: [
            "Topluluk önünde konuşma, eleştirel düşünme ve etik liderlik ilkelerinde ustalaşın.",            "Tartışmaları yönetmeyi ve fikir birliği sağlamayı öğrenin."],
          imageSrc: "http://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104637.jpg",          imageAlt: "Sivil Liderlik Atölyesi"},
        {
          id: "f3",          title: "İnsan Hakları Savunuculuğu",          descriptions: [
            "Uluslararası insan hakları hukuku ve küresel adalet sorunlarını inceleyin.",            "Kampanyalar geliştirin ve değişim için savunuculuk yapın."],
          imageSrc: "http://img.b2bpic.net/free-photo/people-protesting-with-placards-outdoors-world-environment-day_23-2149571873.jpg",          imageAlt: "İnsan Hakları Tartışması"},
        {
          id: "f4",          title: "Türk Anayasa Hukuku İncelemeleri",          descriptions: [
            "Dönüm noktası niteliğindeki Türk hukuki vakalarını ve bunların toplum üzerindeki etkilerini analiz edin.",            "Demokratik yönetişimin temellerini anlayın."],
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-american-flag-with-judge-gavel_23-2148230120.jpg",          imageAlt: "Türk Anayasa Hukuku Çalışmaları"},
      ]}
      title="Türk Hukuk Sistemine Odaklı Etkili Programlarımız"
      description="Titizlikle hazırlanmış programlarımız, Türk hukuk sisteminin gerekliliklerine uygun olarak eleştirel düşünme, topluluk önünde konuşma ve hukuki muhakeme becerilerini sürükleyici, gerçek dünya bağlamında geliştirir."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "500+",          title: "Yetişen Gelecek Liderleri",          items: [
            "10+ Ülkeden Katılımcılar",            "Çeşitli Arka Planlar"],
        },
        {
          id: "m2",          value: "95%",          title: "Program Memnuniyeti",          items: [
            "'Mükemmel' veya 'Çok İyi' olarak derecelendirildi",            "Sürekli İyileştirme"],
        },
        {
          id: "m3",          value: "20+",          title: "Küresel Ortaklıklar",          items: [
            "STK'lar, Hukuk Firmaları, Üniversiteler",            "Genişleyen Ağ"],
        },
      ]}
      title="Sayılarla Etkimiz: Türk Gençliği İçin Adalet"
      description="Katılımcılarımızın daha adil ve katılımcı bir gelecek için gösterdiği büyüme ve başarıyı ölçüyoruz."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={true}
      title="Değerli Akademisyenlerimiz ve Mentorlarımızla Tanışın"
      tag="Lider Kadromuz"
      membersAnimation="slide-up"
      members={[
        {
          id: "t1",          name: "Dr. Evelyn Reed",          imageSrc: "http://img.b2bpic.net/free-photo/woman-standing-near-bookshelf-office_23-2148042696.jpg",          imageAlt: "Dr. Evelyn Reed"},
        {
          id: "t2",          name: "Prof. Marcus Thorne",          imageSrc: "http://img.b2bpic.net/free-photo/woman-artist-holds-painting-brushes-gray-background-high-quality-photo_114579-23003.jpg",          imageAlt: "Prof. Marcus Thorne"},
        {
          id: "t3",          name: "Ms. Anya Sharma",          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-studying-together-exam_23-2149038433.jpg",          imageAlt: "Ms. Anya Sharma"},
        {
          id: "t4",          name: "Mr. Julian Vance",          imageSrc: "http://img.b2bpic.net/free-photo/speaker-talking-tech-conference-exploring-latest-ai-technology-trends_482257-105806.jpg",          imageAlt: "Mr. Julian Vance"},
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
          id: "test1",          name: "Ayşe Yılmaz",          role: "2023 Mezunu, Hukuk Fakültesi Öğrencisi",          testimonial: "Apex Juris eşsiz bir deneyim sundu. Uygulama mahkemeleri inanılmaz derecede gerçekçiydi ve hukuki muhakeme becerilerimi beklentimin ötesinde geliştirdi. Gerçekten dönüştürücüydü!",          imageSrc: "http://img.b2bpic.net/free-photo/young-black-ceo-having-fun-after-successful-deal-with-foreign-partners-showing-thumbs-up-indoor-portrait-happy-freelance-african-specialist-fooling-around-office-with-chinese-colleague_197531-3857.jpg",          imageAlt: "Ayşe Yılmaz",          icon: Star,
        },
        {
          id: "test2",          name: "Can Demir",          role: "Mevcut Katılımcı",          testimonial: "İnsan hakları atölyeleri, küresel adaletsizliklere gözlerimi açtı ve bana fark yaratacak araçları sağladı. İlham verici ve güçlendiriciydi!",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-confident-man_1098-18449.jpg",          imageAlt: "Can Demir",          icon: Star,
        },
        {
          id: "test3",          name: "Elif Kaya",          role: "Gelecek Vadeden Diplomat",          testimonial: "Topluluk önünde konuşma en büyük korkumdu. Apex Juris'in eğitmenleri özgüvenimi dönüştürdü ve şimdi karmaşık fikirleri netlik ve inançla ifade edebiliyorum.",          imageSrc: "http://img.b2bpic.net/free-photo/positive-woman-making-notes-outdoor-cafe_1262-19014.jpg",          imageAlt: "Elif Kaya",          icon: Star,
        },
        {
          id: "test4",          name: "Mehmet Ali",          role: "Hukuk Çalışmaları Öğrencisi",          testimonial: "Anayasa hukuku modüllerinin derinliği olağanüstüydü. Gerçek bir hukuk fakültesinde, derin hukuki kavramlarla boğuşuyormuş gibi hissettirdi.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-cheerful-casual-male-student-with-notepads-joyfully-looking-camera-library-university_574295-1603.jpg",          imageAlt: "Mehmet Ali",          icon: Star,
        },
        {
          id: "test5",          name: "Zeynep Özdemir",          role: "Toplum Aktivisti",          testimonial: "Akademik konuların ötesinde, Apex Juris tutkulu akranlardan oluşan bir topluluk inşa etti. Bu ağ ve mentorluk paha biçilmez.",          imageSrc: "http://img.b2bpic.net/free-photo/rad-passion-indy-soulful-spirit_53876-13836.jpg",          imageAlt: "Zeynep Özdemir",          icon: Star,
        },
      ]}
      title="Geleceğin Hukuk Liderlerinden Sesler"
      description="Apex Juris'in hırslı katılımcılarımızın zihinlerini ve kariyerlerini nasıl şekillendirdiğini dinleyin."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Türkiye Barolar Birliği",        "Adalet Akademisi",        "Türkiye Büyük Millet Meclisi Gençlik Forumu",        "Uluslararası İnsan Hakları Koalisyonu",        "Etkin Liderlik Enstitüsü",        "Sivil Eğitim İttifakı",        "Geleceğin Avukatları Ağı",        "Dünya Münazara Birliği",        "Türkiye Noterler Birliği",        "Üniversite Hukuk Fakülteleri"]}
      title="Önde Gelen Kurumlar Tarafından Güvenilen"
      description="Programlarımız, dünya çapındaki saygın akademik ve sivil toplum kuruluşları tarafından tanınmakta ve desteklenmektedir."
      showCard={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Apex Juris programlarına kimler katılabilir?",          content: "Programlarımız, adalet, liderlik ve sivil katılım alanlarına ilgi duyan hırslı lise öğrencileri (14-18 yaş) için tasarlanmıştır. Programa özel gereksinimler değişiklik gösterebilir."},
        {
          id: "q2",          title: "Apex Juris'e katılmanın faydaları nelerdir?",          content: "Katılımcılar eleştirel düşünme, topluluk önünde konuşma, hukuki muhakeme ve insan hakları savunuculuğu becerileri geliştirir. Paha biçilmez deneyim kazanır, akranları ve mentorlarla ağ kurar ve hukuk, kamu hizmeti ve diplomasi alanındaki kariyerlere hazırlanırlar."},
        {
          id: "q3",          title: "Burs veya finansal yardım sağlıyor musunuz?",          content: "Evet, Apex Juris erişilebilirliğe önem vermektedir. Sınırlı sayıda ihtiyaç bazlı burs ve finansal yardım seçeneği sunuyoruz. Başvuru detayları için lütfen 'Kabul' sayfamızı ziyaret edin."},
        {
          id: "q4",          title: "Mezunlar hangi kariyer yollarını izler?",          content: "Mezunlarımız genellikle avukat, yargıç, diplomat, politika yapıcı, insan hakları savunucusu, eğitimci ve sivil toplum kuruluşlarında lider olarak kariyer yaparlar. Birçoğu, hukuk, siyaset bilimi ve uluslararası ilişkiler alanında önde gelen üniversitelerde eğitimlerine devam etmektedir."},
      ]}
      title="Sıkça Sorulan Sorular: Türk Adalet Sistemi Odaklı Programlarımız"
      description="Programlarımız, uygunluk kriterleri ve etkimiz hakkında sıkça sorulan soruların yanıtlarını bulun."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      text="Adaletin Geleceğini Şekillendirmeye Hazır mısınız? Apex Juris'e Katılın."
      buttons={[
        {
          text: "Şimdi Başvurun",          href: "#"},
        {
          text: "Bize Ulaşın",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Apex Juris"
      columns={[
        {
          title: "Hakkımızda",          items: [
            {
              label: "Misyonumuz",              href: "#about"},
            {
              label: "Ekibimiz",              href: "#team"},
            {
              label: "Etkimiz",              href: "#metrics"},
          ],
        },
        {
          title: "Programlarımız",          items: [
            {
              label: "Hukuki Simülasyonlar",              href: "#features"},
            {
              label: "Sivil Liderlik",              href: "#features"},
            {
              label: "İnsan Hakları",              href: "#features"},
          ],
        },
        {
          title: "Kaynaklar",          items: [
            {
              label: "Sıkça Sorulan Sorular",              href: "#faq"},
            {
              label: "Blog",              href: "#"},
            {
              label: "Ortaklıklar",              href: "#social-proof"},
          ],
        },
        {
          title: "İletişim",          items: [
            {
              label: "Bize Ulaşın",              href: "#contact"},
            {
              label: "Başvur",              href: "#"},
            {
              label: "Bizi Destekleyin",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Apex Juris. Tüm hakları saklıdır."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
