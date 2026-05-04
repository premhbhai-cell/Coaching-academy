export default function WhatsAppButton() {
  return (
    <div>
      <style>{`
        @keyframes whatsapp-pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .whatsapp-float-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 56px;
          height: 56px;
          background-color: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
          transition: all 0.3s ease;
          z-index: 999;
          text-decoration: none;
          border: none;
          padding: 0;
        }

        .whatsapp-float-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-float-button:active {
          transform: scale(0.95);
        }

        .whatsapp-float-button svg {
          width: 28px;
          height: 28px;
          fill: white;
        }

        @media (max-width: 768px) {
          .whatsapp-float-button {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 50px;
            height: 50px;
          }

          .whatsapp-float-button svg {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-float-button {
            bottom: 1rem;
            right: 1rem;
            width: 48px;
            height: 48px;
          }

          .whatsapp-float-button svg {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>

      <a
        href="https://wa.me/918076882138"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-button"
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          style={{ width: "32px", height: "32px" }}
        />
      </a>
    </div>
  );
}
