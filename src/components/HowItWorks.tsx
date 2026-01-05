import { Sun, Zap, Home, PiggyBank } from "lucide-react";

const steps = [
  {
    icon: Sun,
    title: "A fazenda produz energia",
    description: "Painéis solares captam a luz do sol e geram energia limpa e renovável.",
  },
  {
    icon: Zap,
    title: "Energia injetada na rede",
    description: "A energia gerada é enviada para a rede elétrica da distribuidora.",
  },
  {
    icon: Home,
    title: "Distribuída para você",
    description: "A energia chega até sua casa ou empresa pela mesma rede já existente.",
  },
  {
    icon: PiggyBank,
    title: "Você economiza",
    description: "Receba desconto na sua conta sem investir em placas ou instalação.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-muted/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Energia compartilhada de forma simples
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sem complicação, sem burocracia. Veja como você pode economizar na conta de luz em 4 passos.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-4" />
              )}

              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          * Consulte regras e condições. Desconto flexível por estado.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
