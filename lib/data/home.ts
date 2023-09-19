import { ICardData, IEventsData, IFaqList } from "@/interface";
import { course1, course2, course3, serviceImg1, serviceImg2 } from "../assets";

export const servicesData: ICardData[] = [
  {
    title: "Online Health Consultation with MBBS or BHMS or BDS Doctor",
    fees: "100 (INR)",
    thumbnail: serviceImg1,
    href: "/",
  },
  {
    title: "Online Astrology Consultation",
    fees: "1100 (INR)",
    thumbnail: serviceImg2,
    href: "/",
  },
];

export const courseInfoData: ICardData[] = [
  {
    title: "Digital Marketing",
    fees: "Fees - 1300 (INR) (fluctuate over time)",
    thumbnail: course1,
    href: "/",
  },
  {
    title: "Basic Share market Knowledge",
    fees: "Fees - 1000 (INR) for India",
    thumbnail: course2,
    href: "/",
  },
  {
    title: "Spoken English Courses",
    fees: "Fees - 1000 (INR) for India",
    thumbnail: course3,
    href: "/",
  },
];

export const eventsData: IEventsData[] = [
  {
    date: "🔰",
    title:
      "WE HELD FREE TRAINING FOR DIGITAL MARKETING, GRAPHIC DESIGN, FACEBOOK MARKETING ETC",
  },
  {
    date: "🔰",
    title: "WE HELD FREE TRAINING FOR BASIC SHARE MARKET KNOWLEDGE",
  },
];

export const faqsList: IFaqList[] = [
  {
    q: "❓What is lifechangebd platform?",
    a: "Lifechangebd Platform is a platform where you will be able to enhance your performance through learning As you show your talents on Facebook, Youtbube,Instagram and tiktok etc like that you could able to show your talents in lifechange bd E-learning Platform as it is a digital marketing platform where you can learn. Besides learning you will be able to improve your work ability or performance.",
  },
  {
    q: "❓Do we need any admission fees ?",
    a: "Yes you need to pay admission fees for taking the course , product or services",
  },
  {
    q: "❓Can we do this from the comfort of our home ?",
    a: "Yes you can take this course or services from your home only because it's is a online process",
  },
  {
    q: "❓What kind of documents and gadgets do we need to do this Course ?",
    a: "There's not much requirements you will need for doing this Courses you just need an electronic device like a mobile or a laptop, a steady internet connection.",
  },

  {
    q: "❓Is this a part-time or a full-time Work?",
    a: "It's not a work or its not a job it's only a learning and earning process you need to join here as a learner besides of learning you will be able to earn selling some courses goods or services",
  },
];
