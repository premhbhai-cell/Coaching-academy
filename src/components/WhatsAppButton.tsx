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
        href="https://wa.me/918130112531"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-button"
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.94 1.303c-1.53.71-2.859 1.713-3.846 2.998C2.430 12.695 1.993 14.56 1.99 16.441c0 1.916.487 3.798 1.411 5.43l.01.021 2.275 6.437.672.028c1.584 0 3.088-.474 4.382-1.37l.028-.017 4.923-3.212c1.202-.784 2.217-1.914 2.948-3.289a9.873 9.873 0 001.441-5.185c.003-1.88-.483-3.744-1.405-5.428-.925-1.685-2.223-3.12-3.813-4.087-1.591-.966-3.408-1.476-5.308-1.476z" />
        </svg>
      </a>
    </div>
  );
}
