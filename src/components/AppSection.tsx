import { Button } from "@/components/ui/button";
import { BarChart3, Receipt, Gift, Trophy, Download } from "lucide-react";
import appMockup1 from "@/assets/app-mockup-1.png";
import appMockup2 from "@/assets/app-mockup-2.png";

const features = [
  {
    icon: BarChart3,
    title: "Acompanhe sua economia",
    description: "Veja em tempo real quanto você está economizando.",
  },
  {
    icon: Receipt,
    title: "2ª via do boleto",
    description: "Acesse e pague suas faturas diretamente pelo app.",
  },
  {
    icon: Gift,
    title: "Descontos em parceiros",
    description: "Ofertas exclusivas em estabelecimentos parceiros.",
  },
  {
    icon: Trophy,
    title: "Sorteio anual",
    description: "Participe de sorteios exclusivos para clientes.",
  },
];

const AppSection = () => {
  return (
    <section id="app" className="py-20 lg:py-32 bg-secondary overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-secondary-foreground">
            <span className="text-primary-glow font-semibold text-sm uppercase tracking-wider">
              iGreen Club
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Tudo na palma da sua mão
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-10">
              Com o app iGreen Club, você acompanha sua economia, acessa benefícios exclusivos 
              e participa de promoções especiais. Baixe agora e comece a aproveitar!
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-secondary-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/20"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Google Play
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/20"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  App Store
                </a>
              </Button>
            </div>
          </div>

          {/* App Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
              
              {/* First Phone */}
              <div className="relative z-10 w-56 sm:w-64 animate-float">
                <img
                  src={appMockup1}
                  alt="iGreen Club App - Tela de economia"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              
              {/* Second Phone */}
              <div className="absolute -right-16 sm:-right-24 top-16 w-48 sm:w-56 animate-float" style={{ animationDelay: "0.5s" }}>
                <img
                  src={appMockup2}
                  alt="iGreen Club App - Tela de cashback"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
