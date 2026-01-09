import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, Cookie, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao início
                    </Link>

                    <div className="glass glow-border rounded-2xl p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-primary/10">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h1 className="text-3xl font-bold">Política de Privacidade</h1>
                        </div>

                        <p className="text-muted-foreground mb-8">
                            Última atualização: Janeiro de 2026
                        </p>

                        <div className="space-y-8">
                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <Eye className="w-5 h-5 text-accent" />
                                    <h2 className="text-xl font-semibold">
                                        Coleta de Informações
                                    </h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Este site coleta apenas as informações fornecidas
                                    voluntariamente através do formulário de contato: nome, email
                                    e mensagem. Estas informações são utilizadas exclusivamente
                                    para responder às suas solicitações.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <Cookie className="w-5 h-5 text-accent" />
                                    <h2 className="text-xl font-semibold">Cookies</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Utilizamos cookies apenas para armazenar sua preferência de
                                    consentimento. Nenhum cookie de rastreamento ou analytics é
                                    utilizado neste site.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <Lock className="w-5 h-5 text-accent" />
                                    <h2 className="text-xl font-semibold">
                                        Segurança dos Dados
                                    </h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    As mensagens enviadas pelo formulário de contato são
                                    processadas através do serviço FormSubmit.co, que utiliza
                                    criptografia HTTPS para transmissão segura. Não armazenamos
                                    dados em bancos de dados próprios.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <Mail className="w-5 h-5 text-accent" />
                                    <h2 className="text-xl font-semibold">Contato</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Para questões relacionadas à privacidade ou para solicitar a
                                    exclusão de seus dados, entre em contato através do email:{" "}
                                    <a
                                        href="mailto:cristiano@cristianomartins.net"
                                        className="text-primary hover:underline"
                                    >
                                        cristiano@cristianomartins.net
                                    </a>
                                </p>
                            </section>

                            <section className="pt-4 border-t border-border">
                                <p className="text-sm text-muted-foreground">
                                    Este site está em conformidade com a Lei Geral de Proteção de
                                    Dados (LGPD - Lei nº 13.709/2018).
                                </p>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
