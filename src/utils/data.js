import { Shield, Home, Car, Banknote, FileText } from "lucide-react";
import insurance1 from "../assets/insurance1.jpg";
import insurance2 from "../assets/insurance2.jpg";
import insurance3 from "../assets/insurance3.jpg";

import automobile1 from "../assets/automobile1.jpg";
import automobile2 from "../assets/automobile2.jpg";
import automobile3 from "../assets/automobile3.jpg";

import finance1 from "../assets/finance1.jpg";
import finance2 from "../assets/finance2.jpg";
import finance3 from "../assets/finance3.jpg";

import rto1 from "../assets/rto1.jpg";
import rto2 from "../assets/rto2.jpg";
import rto3 from "../assets/rto3.jpg";

import villa1 from "../assets/villa1.jpg";
import villa2 from "../assets/villa2.jpg";
import villa3 from "../assets/villa3.jpg";

export const ServicesData = [
  {
    Icon: Shield,
    title: "Insurance Services",
    paragraphs: [
      "We provide comprehensive insurance solutions to secure your future and assets.",
      "Whether you're buying your first home, selling a commercial property, or looking for investment opportunities, we provide comprehensive support throughout the entire process. Our commitment to excellence ensures that your real estate goals become a reality.",
    ],
    images: [insurance1, insurance2, insurance3],
    pointers: [
      {
        name: "Life Insurance",
        desc: "Protect your loved ones with customized life insurance policies.",
      },
      {
        name: "General Insurance",
        desc: "Safeguard your valuable possessions with tailored general insurance plans.",
      },
    ],
  },
  {
    Icon: Car,
    title: "Automobile Services",
    paragraphs: [
      "Ensure your vehicles are in top condition and get seamless assistance for claims and services",
    ],
    images: [automobile1, automobile2, automobile3],
    pointers: [
      {
        name: "Vehicle Services",
        desc: "Maintenance and repair services to keep your vehicles running smoothly.",
      },
      {
        name: "Claim & Services",
        desc: "Assistance with insurance claims and related processes for your vehicles.",
      },
    ],
  },
  {
    Icon: Banknote,
    title: "Finance Services",
    paragraphs: [
      "Get access to financial solutions that cater to your personal and business needs.",
    ],
    images: [finance1, finance2, finance3],
    pointers: [
      {
        name: "Property Loans",
        desc: "Financing options for residential and commercial properties.",
      },
      {
        name: "Vehicle Loans",
        desc: "Easy loans to help you purchase your dream vehicle.",
      },
      {
        name: "Purchase Loans",
        desc: "Flexible loan solutions for various purchases.",
      },
      {
        name: "Other Finance Services",
        desc: "Explore additional financial products tailored for you.",
      },
    ],
  },
  {
    Icon: FileText,
    title: "RTO Services",
    paragraphs: [
      "Simplify vehicle-related documentation with our RTO services.",
    ],
    images: [rto1, rto2, rto3],
    pointers: [
      {
        name: "Vehicle Document Creation",
        desc: "Assistance in creating essential vehicle documents.",
      },
      {
        name: "RC Renewal",
        desc: "Hassle-free renewal of Registration Certificates.",
      },
      {
        name: "DL Making",
        desc: "Get your Driving License easily with our expert guidance",
      },
    ],
  },
  {
    Icon: Home,
    title: "Real Estate Services",
    paragraphs: [
      "Explore a wide range of real estate solutions for buying, selling, or renting properties.",
    ],
    images: [villa1, villa2, villa3],
    pointers: [
      {
        name: "Plots",
        desc: "Find the perfect land for your dream projects.",
      },
      {
        name: "Flats",
        desc: "Discover comfortable flats suited to your lifestyle.",
      },
      {
        name: "Villas",
        desc: "Luxurious villa options for a premium living experience.",
      },
      {
        name: "Sell/Purchase/Rent",
        desc: "Comprehensive support for all your property transactions",
      },
    ],
  },
];
