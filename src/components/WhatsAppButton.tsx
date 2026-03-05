import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://www.whatsapp.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-[hsl(0,0%,100%)] p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
