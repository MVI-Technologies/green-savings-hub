import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, CheckCircle2, MessageCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const estados = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    estado: "",
    telefone: "",
    email: "",
    consumo: "",
    aceitePrivacidade: false,
  });

  const whatsappNumber = "5551992878953";
  const whatsappMessage = encodeURIComponent("Olá! Acabei de preencher o formulário e gostaria de falar sobre minha economia de energia.");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.aceitePrivacidade) {
      toast({
        title: "Atenção",
        description: "Você precisa aceitar a política de privacidade para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em até 48h com seu cálculo estimado.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="formulario" className="py-20 lg:py-32 bg-primary/5">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Solicite sua Análise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Consulte seu desconto agora
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preencha o formulário e receba o cálculo estimado do seu desconto em até 48h.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground font-medium">
                  Nome completo *
                </Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {/* Estado */}
              <div className="space-y-2">
                <Label htmlFor="estado" className="text-foreground font-medium">
                  Estado *
                </Label>
                <Select
                  value={formData.estado}
                  onValueChange={(value) => handleInputChange("estado", value)}
                  required
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione seu estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {estados.map((estado) => (
                      <SelectItem key={estado} value={estado}>
                        {estado}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-foreground font-medium">
                  Telefone / WhatsApp *
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange("telefone", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </div>

            {/* Consumo */}
            <div className="space-y-2">
              <Label htmlFor="consumo" className="text-foreground font-medium">
                Consumo médio mensal (kWh)
              </Label>
              <Select
                value={formData.consumo}
                onValueChange={(value) => handleInputChange("consumo", value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione ou deixe 'Não sei'" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nao-sei">Não sei</SelectItem>
                  <SelectItem value="0-200">Até 200 kWh</SelectItem>
                  <SelectItem value="200-400">200 a 400 kWh</SelectItem>
                  <SelectItem value="400-600">400 a 600 kWh</SelectItem>
                  <SelectItem value="600-1000">600 a 1.000 kWh</SelectItem>
                  <SelectItem value="1000+">Mais de 1.000 kWh</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="privacidade"
                checked={formData.aceitePrivacidade}
                onCheckedChange={(checked) => handleInputChange("aceitePrivacidade", checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="privacidade" className="text-sm text-muted-foreground font-normal cursor-pointer">
                Li e aceito a{" "}
                <a href="#" className="text-primary hover:underline">
                  política de privacidade
                </a>{" "}
                e autorizo o contato para apresentação da proposta.
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Solicitar análise grátis
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl">
              Solicitação enviada!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Recebemos seus dados. Nossa equipe entrará em contato em até 48h com seu cálculo estimado de economia.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar agora no WhatsApp
              </a>
            </Button>
            <Button variant="outline" onClick={() => setIsSuccess(false)}>
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LeadForm;
