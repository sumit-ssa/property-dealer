import { config } from "react-spring";

export const serviceTypes = [
  "Insurance Services",
  "Automobile Services",
  "Finance Services",
  "RTO Services",
];

export const subServiceTypes = {
  "Insurance Services": ["Life Insurance", "General Insurance"],
  "Automobile Services": ["Vehicle Services", "Claim & Services"],
  "Finance Services": ["Property Loan", "Vehicle Loan", "Purchase Loan"],
  "RTO Services": ["RC Renewal", "DL Making", "Document Creation"],
};

export function constructWhatsAppUrl(formData) {
  const message = `
New General Services Inquiry:
Name: ${formData.name}
Contact: ${formData.phone}
Email: ${formData.email}
Service: ${formData.serviceType}
Sub-Service: ${formData.subServiceType}
Description: ${formData.description}
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/919828253726?text=${encodedMessage}`;
}

export const springConfig = {
  ...config.gentle,
  tension: 200,
  friction: 20,
};
