import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5551992878953";

  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">iGreen</span>
            </div>
            <p className="text-secondary-foreground/70 mb-6 max-w-md">
              Energia limpa e economia na sua conta de luz. 
              Faça parte da revolução energética brasileira.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#vantagens" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Vantagens
                </a>
              </li>
              <li>
                <a href="#app" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  App iGreen Club
                </a>
              </li>
              <li>
                <a href="#faq" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>(51) 99287-8953</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@igreen.com.br"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>contato@igreen.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/50 text-center md:text-left">
            © {currentYear} iGreen Energia S.A. CNPJ: 00.000.000/0001-00. Todos os direitos reservados.
          </p>
          <p className="text-sm text-secondary-foreground/50">
            Feito com 💚 para um futuro sustentável
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
