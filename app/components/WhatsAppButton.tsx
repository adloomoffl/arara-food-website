"use client";

export default function WhatsAppButton() {
  const phoneNumber = "919645420727";
  const message = encodeURIComponent(
    "Hello ARARA FOOD, I would like to enquire about your products."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with ARARA FOOD on WhatsApp at +91 96454 20727"
        id="whatsapp-floating-button"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm0 1.67c2.21 0 4.27.86 5.83 2.42 1.55 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32c-.82-1.3-1.26-2.82-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24zm-3.1 3.66c-.22 0-.59.08-.89.41-.3.33-1.15 1.12-1.15 2.74 0 1.62 1.18 3.18 1.34 3.4.16.22 2.33 3.56 5.64 4.99.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.63-.1 1.95-.8 2.22-1.58.28-.78.28-1.44.2-1.58-.08-.14-.3-.22-.63-.39-.33-.17-1.96-.97-2.26-1.08-.3-.11-.52-.17-.74.16-.22.33-.85 1.09-1.04 1.31-.19.22-.38.24-.71.08-.33-.16-1.4-.51-2.67-1.64-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.02-.57-.08-.16-.71-1.7-.96-2.33-.25-.6-.51-.52-.7-.53-.18-.01-.4-.01-.62-.01z" />
          </svg>
        </span>
        <span className="whatsapp-label">
          <span className="whatsapp-title">Chat with us</span>
          <span className="whatsapp-number">+91 96454 20727</span>
        </span>
      </a>
    </aside>
  );
}
