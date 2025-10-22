import React from "react";
import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "서비스": ["기능 소개", "이용 가이드", "커뮤니티", "FAQ"],
    "회사": ["소개", "팀", "블로그", "문의하기"],
    "정책": ["이용약관", "개인정보처리방침", "환불정책"],
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@maumi.co" },
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground/95 to-foreground text-white/80 py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">마</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">마음이</span>
                <span className="text-xs text-white/60">Maumi</span>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              20-30대 여성을 위한 따뜻한 마음챙김 명상 플랫폼.<br />
              나만의 힐링 콘텐츠로 일상에 평화를 더하세요.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © {currentYear} 마음이 (Maumi). All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              마음을 담아 만든 따뜻한 플랫폼 💝
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
