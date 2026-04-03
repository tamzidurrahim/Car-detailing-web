const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading text-xl font-bold tracking-wide">
          <span className="text-gradient-copper">DOOZY</span>
          <span className="text-foreground">DETAILING</span>
        </div>
        <div className="flex gap-8">
          {["Services", "About", "Gallery", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Doozy Detailing. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
