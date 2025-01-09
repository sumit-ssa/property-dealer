import { config } from "react-spring";

export const propertyTypes = ["Plot", "Flat", "Villa"];

export const transactionTypes = ["Buy", "Sell", "Rent"];

export function constructWhatsAppUrl(formData) {
  const message = `
New Real Estate Inquiry:
Name: ${formData.name}
Contact: ${formData.phone}
Email: ${formData.email}
Property Type: ${formData.propertyType}
Transaction Type: ${formData.transactionType}
Preferred Location: ${formData.location}
Budget: ${formData.budget}
Additional Information: ${formData.additionalInfo}
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/917340043726?text=${encodedMessage}`;
}

export const springConfig = {
  ...config.gentle,
  tension: 200,
  friction: 20,
};
