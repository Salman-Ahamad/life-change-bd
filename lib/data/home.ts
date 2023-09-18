import { ICard, IEventsData } from "@/interface";
import { course1, course2, course3, serviceImg1, serviceImg2 } from "../assets";

export const servicesData: ICard[] = [
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

export const courseInfoData: ICard[] = [
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
    date: "19 FEB",
    title: "WE HELD FREE TRAINING FOR DIGITAL MARKETING",
  },
  {
    date: "02 MAR",
    title: "WE HELD FREE TRAINING FOR BASIC SHARE MARKET KNOWLEDGE",
  },
  {
    date: "20 MAR",
    title: "WE HELD FREE TRAINING FOR BASIC CRYPTOCURRENCY KNOWLEDGE",
  },
];
