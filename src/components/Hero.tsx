import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a economia de energia com a iGreen.");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fazenda solar com painéis gerando energia limpa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />

      <div className="container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in">
            <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm px-4 py-1.5">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              100% Digital
            </Badge>
            <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm px-4 py-1.5">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              Sem Fidelidade
            </Badge>
            <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm px-4 py-1.5">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Cashback
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Desconto na conta de energia{" "}
            <span className="text-accent">sem investimentos.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/80 mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Economize até 15% na sua conta com energia compartilhada — 100% digital e sem instalação obrigatória.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#formulario" className="group">
                Consulte seu desconto
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale no WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-6 text-primary-foreground/60 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-secondary flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>+10.000 clientes satisfeitos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
