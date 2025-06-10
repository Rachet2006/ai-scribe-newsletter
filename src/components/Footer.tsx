
import { Zap, Linkedin, Github, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rishitjain006", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Rachet2006", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/nexttech_brief/?hl=en", label: "Instagram" },
    { icon: Mail, href: "mailto:rishit@nexttechbrief.com", label: "Email" }
  ];

  const footerLinks = {
    Newsletter: [
      { label: "Latest Issue", href: "#newsletter" },
      { label: "Archive", href: "#newsletter" },
      { label: "Subscribe", href: "#subscribe" }
    ],
    Company: [{ label: "About", href: "#about" }],
    Resources: [{ label: "Tools", href: "#about" }]
  };

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="NextTech Brief logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#14B8A6] bg-clip-text text-transparent">
                The NextTech Brief
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Your weekly source for AI breakthroughs, practical applications, and industry insights. 
              Stay ahead of the curve with expert analysis and curated content.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href !== "#" ? "_blank" : "_self"}
                  rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-sm"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 NextTech Brief. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
