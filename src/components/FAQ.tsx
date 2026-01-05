import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a economia na conta de luz?",
    answer: "A iGreen gera energia em fazendas solares e injeta na rede elétrica. Essa energia é creditada na sua conta, gerando desconto. Você continua recebendo energia da mesma distribuidora, mas paga menos.",
  },
  {
    question: "Preciso pagar algum valor inicial?",
    answer: "Não! Não há custos de adesão, instalação ou mensalidade. Você só paga sua conta de luz, que já vem com desconto aplicado automaticamente.",
  },
  {
    question: "Preciso instalar placas solares na minha casa?",
    answer: "Não é necessário. A energia é gerada em fazendas solares da iGreen e compartilhada com você pela rede elétrica. Se preferir, oferecemos também a opção de instalação de placas.",
  },
  {
    question: "Existe contrato de fidelidade?",
    answer: "Não temos fidelidade. Você pode cancelar a qualquer momento sem multas ou burocracias.",
  },
  {
    question: "Em quanto tempo começo a economizar?",
    answer: "Após o cadastro e aprovação (geralmente em até 48h), você já começa a receber os créditos de energia na próxima fatura. O desconto aparece automaticamente na sua conta de luz.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Tire suas dúvidas
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border/50 px-6 shadow-soft data-[state=open]:shadow-card data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
