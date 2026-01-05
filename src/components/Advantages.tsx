import {
  Wallet,
  Ban,
  FileCheck,
  Gift,
  Sun,
  TrendingDown,
  Users,
  ShieldCheck,
} from "lucide-react";

const advantages = [
  {
    icon: TrendingDown,
    title: "Economia mensal garantida",
    description: "Reduza até 15% na sua conta de luz todos os meses.",
  },
  {
    icon: Ban,
    title: "Sem custos de instalação",
    description: "Nenhum investimento inicial necessário para começar.",
  },
  {
    icon: FileCheck,
    title: "Sem burocracia",
    description: "Processo 100% digital e simplificado em poucos minutos.",
  },
  {
    icon: Gift,
    title: "Cashback sustentável",
    description: "Indique amigos e ganhe créditos para zerar sua conta.",
  },
  {
    icon: Sun,
    title: "Opção de placas próprias",
    description: "Se preferir, instale placas e maximize sua economia.",
  },
  {
    icon: Wallet,
    title: "Média/alta tensão",
    description: "Descontos ainda maiores para empresas de maior porte.",
  },
];

const Advantages = () => {
  return (
    <section id="vantagens" className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Vantagens
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Por que escolher a iGreen?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Além de economizar, você contribui para um futuro mais sustentável. 
              Energia limpa, economia real e benefícios exclusivos para você.
            </p>

            {/* Highlight Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cashback Sustentável</h3>
                  <p className="text-primary-foreground/80">
                    Indique amigos e acumule créditos. Quanto mais indicações, maior sua economia — 
                    podendo até zerar sua conta de luz!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-5 border border-border/50 shadow-soft hover:shadow-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Empresa Certificada</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Regulamentação ANEEL</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Energia 100% Renovável</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
