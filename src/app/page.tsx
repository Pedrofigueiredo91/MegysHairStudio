
export default function Home() {
  const links = [
    { name: "Book With Fresha", url: "https://www.fresha.com/a/megys-hair-studio-london-254-258-goswell-road-z9fyea5m/booking?allOffer=true&cartId=f3612740-e61c-41cc-8211-f5667965fee5 "},
    { name: "Instagram", url: "https://www.instagram.com/megyshairstudio/?hl=en" },
    { name: "Contact me on WhatsApp", url: "https://wa.me/447507711655" },
    { name: "Leave me a review on Google", url: "https://www.google.com/search?q=megys+hair+studio+london+reviews" },
  ];

  return (
    <main className="landing-container">
      <section className="profile-section">
        <img
          src="/logo.svg"
          alt="Megys Hair Studio Logo"
          className="profile-image"
        />
        <p className="studio-desc">
          Welcome! Book your appointment, follow me, and explore my work.
        </p>
      </section>
      <section className="links-section">
        {links.map((link) => (
          <a
            key={link.name}
            className="link-card"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name === "Instagram" && (
              <img src="/instagram.svg" alt="Instagram" style={{ width: 24, height: 24, marginRight: 8 }} />
            )}
            {link.name === "Book With Fresha" && (
              <img src="/Fresha.svg" alt="Fresha" style={{ width: 24, height: 24, marginRight: 8 }} />
            )}
            {link.name === "Leave me a review on Google" && (
              <img src="/google.svg" alt="Google" style={{ width: 24, height: 24, marginRight: 8 }} />
            )}
            {link.name === "Contact me on WhatsApp" && (
              <img src="/whatsapp.svg" alt="WhatsApp" style={{ width: 24, height: 24, marginRight: 8 }} />
            )}
            <span>{link.name}</span>
          </a>
        ))}
      </section>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Megys Hair Studio</p>
      </footer>
    </main>
  );
}
