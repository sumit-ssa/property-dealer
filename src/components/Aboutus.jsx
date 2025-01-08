import heroImage from "../assets/hero-image.jpg";
import SliderSection from "./section/SliderSection";

export default function About() {
  const aboutData = {
    title: "Welcome to The Insurance Zone!",
    paragraphs: [
      "I am Surindeer Gahlot an experienced insurance professional who has been working in the field since 2006. I have over 18 years of experience in the insurance industry, having worked with a variety of insurance products and services.",
      "Today, I provide personal and business insurance solutions to my clients through The Insurance Zone, as well as my services in real estate. My goal is to provide my clients with the information and services they need for their financial security and stability.",
    ],
    images: [heroImage],
    ctaText: "know more",
    ctaLink: "/about",
  };

  return <SliderSection data={aboutData} />;
}
