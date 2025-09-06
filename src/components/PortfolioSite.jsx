import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Mail,
  Linkedin,
  Dribbble,
  Globe,
  Search,
  Filter,
  ChevronRight,
} from "lucide-react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

const projetos = [
  // {
  //   id: "p1",
  //   titulo: "Dashboard Financeiro",
  //   categoria: "Web",
  //   descricao: "Dashboard com visualizações ricas e foco na eficiência de decisões.",
  //   imagem: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
  //   ferramentas: ["Figma", "Design System", "Acessibilidade"],
  // },
  // {
  //   id: "p2",
  //   titulo: "App de Bem-estar",
  //   categoria: "Mobile",
  //   descricao: "App de hábitos com microinterações e jornadas personalizadas.",
  //   imagem: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop",
  //   ferramentas: ["Figma", "Protótipo", "Motion"],
  // },
  // {
  //   id: "p3",
  //   titulo: "Sistema de Marca",
  //   categoria: "Branding",
  //   descricao: "Sistema de identidade, tokens e guidelines para múltiplos produtos.",
  //   imagem: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d1?q=80&w=1400&auto=format&fit=crop",
  //   ferramentas: ["Tokens", "Guidelines", "Componentes"],
  // },
  // {
  //   id: "p4",
  //   titulo: "App de Delivery",
  //   categoria: "Mobile",
  //   descricao: "Fluxo de pedidos otimizado com foco em conversão e retenção.",
  //   imagem: "https://images.unsplash.com/photo-1519741491144-4f0c8b98f8a8?q=80&w=1400&auto=format&fit=crop",
  //   ferramentas: ["Pesquisa", "Protótipos", "Usabilidade"],
  // },
  // {
  //   id: "p5",
  //   titulo: "Site de Marketing",
  //   categoria: "Web",
  //   descricao: "Landing page focada em conversão com testes A/B e copy otimizada.",
  //   imagem: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1400&auto=format&fit=crop",
  //   ferramentas: ["Figma", "A/B", "Analytics"],
  // },
];

const categorias = ["Todos", "Web", "Mobile", "Branding"];

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function PortfolioSite() {
  const [busca, setBusca] = useState('');
  const [ativo, setAtivo] = useState('Todos');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const filtrados = useMemo(() => {
    return projetos.filter(p => (ativo === 'Todos' || p.categoria === ativo) &&
      (busca.trim() === '' || (p.titulo + ' ' + p.descricao + ' ' + p.ferramentas.join(' ')).toLowerCase().includes(busca.toLowerCase()))
    );
  }, [ativo, busca]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
      <a href="#main" className="sr-only focus:not-sr-only fixed top-3 left-3 bg-indigo-600 text-white px-3 py-2 rounded-lg z-50">Pular para o conteúdo</a>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-neutral-200/50 dark:border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 grid place-content-center text-white font-bold">R</div>
            <div className="text-sm font-semibold">Renato • UI/UX</div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600 focus-visible:outline-none">Sobre</a>
            <a href="#work" className="hover:text-indigo-600">Portfólio</a>
            <a href="#process" className="hover:text-indigo-600">Processo</a>
            <a href="#contact" className="hover:text-indigo-600">Contato</a>
            <button className="ml-3 px-4 py-2 rounded-xl bg-indigo-600 text-white inline-flex items-center gap-2" onClick={() => window.location = '#contact'}>
              Contrate-me <ChevronRight className="w-4 h-4" />
            </button>
            <button aria-label="Alternar tema" onClick={() => setDark(d => !d)} className="ml-2 p-2 rounded-lg border border-neutral-200 dark:border-neutral-800">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button aria-label="Alternar tema" onClick={() => setDark(d => !d)} className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="min-h-[72vh] grid lg:grid-cols-2 gap-10 items-center py-12">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-3 text-xs rounded-full px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 w-max">Disponível para freelance</div>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Design de produtos claros e centrados no usuário</h1>
              <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">Crio experiências digitais acessíveis e de alto impacto usando design orientado por pesquisa, pensamento sistêmico e motion design.</p>
              <div className="mt-6 flex gap-3">
                <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow-lg hover:opacity-95">Veja meu trabalho <ChevronRight className="w-4 h-4" /></a>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800">Entre em contato</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
              <div className="absolute -inset-6 blur-3xl bg-gradient-to-br from-indigo-500/20 to-pink-400/10"></div>
              <img src="https://cdn.discordapp.com/attachments/1214274556332609606/1335053622500921405/unknown.png?ex=68bd8353&is=68bc31d3&hm=26fa13d54c2c06254c272fd7ecb56407f0afb7c2063bbc10a353c42c8a08544c" alt="Retrato do designer" className="relative h-[440px] w-full object-cover" />
            </div>
          </Reveal>
        </section>

        {/* Sobre */}
        <section id="about" className="py-16">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold">Sobre mim</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">Combino pesquisa em UX, pensamento sistêmico e design visual para criar produtos úteis e agradáveis. Gosto de trabalhar em colaboração com equipes multidisciplinares.</p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800">Currículo</a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800">Estudos de caso</a>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Design UI', 'Pesquisa UX', 'Prototipagem', 'Sistemas de Design', 'Branding', 'Handoff'].map((s, i) => (
                <Reveal key={s} delay={i * 0.05}>
                  <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 shadow-sm">
                    <div className="text-indigo-600 w-12 h-12 rounded-xl grid place-content-center bg-indigo-50 dark:bg-indigo-900/20 font-semibold">{s.charAt(0)}</div>
                    <h3 className="mt-3 font-semibold">{s}</h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Trabalho de alta qualidade focado em clareza e escalabilidade.</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Portfólio */}
        <section id="work" className="py-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">Projetos selecionados</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Filtre, busque e explore detalhes dos projetos entregues.</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <input aria-label="Buscar projetos" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar projetos..." className="pl-9 pr-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent focus:ring-2 focus:ring-indigo-500/30" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="hidden sm:flex gap-2" role="tablist">
                  {categorias.map(cat => (
                    <button key={cat} onClick={() => setAtivo(cat)} className={`px-3 py-1.5 rounded-full text-sm ${ativo === cat ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-800/30' : 'border border-neutral-200 dark:border-neutral-800'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtrados.map((p, i) => (
                <motion.article key={p.id} layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.35 }} className="group bg-white dark:bg-neutral-900/30 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
                  <div className="relative overflow-hidden">
                    <img src={p.imagem} alt={p.titulo} className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 bg-neutral-900/80 text-white text-xs px-2 py-1 rounded">{p.categoria}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg">{p.titulo}</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.descricao}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.ferramentas.map(t => <span key={t} className="px-2 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200">{t}</span>)}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <a href="#" className="text-sm inline-flex items-center gap-2 text-indigo-600">Ver estudo de caso <ChevronRight className="w-4 h-4" /></a>
                      <div className="text-sm text-neutral-500">2025</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Processo */}
        <section id="process" className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Processo</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Um processo simples e repetível para reduzir riscos e gerar impacto.</p>

            <div className="mt-10 grid md:grid-cols-4 gap-6">
              {['Pesquisa', 'Wireframes', 'Protótipos', 'UI Final'].map((step, i) => (
                <Reveal key={step} delay={i * 0.05}>
                  <div className="p-6 bg-white dark:bg-neutral-900/30 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <div className="w-14 h-14 rounded-xl grid place-content-center bg-indigo-50 dark:bg-indigo-900/20 font-semibold">{i + 1}</div>
                    <h4 className="mt-3 font-semibold">{step}</h4>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Breve explicação do passo e sua importância.</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contact" className="py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold">Vamos conversar</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Disponível para freelance e colaborações. Escolha o canal que preferir.</p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <a href="https://wa.me/0000000000" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-green-600 text-white"><FaWhatsapp /> WhatsApp</a>
                <a href="https://discord.gg/" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800"><FaDiscord /> Discord</a>
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800"><Mail /> Email</a>
              </div>
              <div className="mt-6 flex gap-4">
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"><Linkedin /></a>
                <a href="#" aria-label="Dribbble" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"><Dribbble /></a>
                <a href="#" aria-label="Portfólio" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"><Globe /></a>
              </div>
            </div>

            <div>
              <form
                action="https://formspree.io/f/xrbarpab"
                method="POST"
                className="rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 grid gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-transparent"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  rows="4"
                  className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition"
                >
                  Enviar
                </button>
                <p className="text-xs text-neutral-500 mt-2">
                  Sua mensagem será enviada diretamente para meu e-mail via Formspree.
                </p>
              </form>

            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-neutral-200/60 dark:border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
          <div>© {new Date().getFullYear()} Renato • UI/UX</div>
          <div className="flex gap-4 items-center">
            <a href="#main" className="hover:underline">Voltar ao topo</a>
            <div className="h-6 w-px bg-neutral-200/60 hidden sm:block" />
            <div>Feito com ❤️</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
