import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/918436969369"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Signature Developers on WhatsApp"
    >
      <FaWhatsapp size={25} />
    </a>
  );
}
