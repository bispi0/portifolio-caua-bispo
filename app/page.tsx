import { Github, Instagram, Mail, Code, BookOpen, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[var(--background)] text-[var(--foreground)] antialiased transition-colors duration-300">
      
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wider text-blue-500">CAUÃ.dev</span>
          <nav className="flex gap-6 text-sm font-medium opacity-80">
            <a href="#sobre" className="hover:text-blue-500 transition-colors">Sobre</a>
            <a href="#habilidades" className="hover:text-blue-500 transition-colors">Habilidades</a>
            <a href="#projetos" className="hover:text-blue-500 transition-colors">Projetos</a>
            <a href="#certificados" className="hover:text-blue-500 transition-colors">Certificados</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        
        {/* HERO SECTION / APRESENTAÇÃO */}
        <section id="sobre" className="flex flex-col items-start gap-4 pt-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <User size={14} /> Disponível para novos aprendizados
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Olá, eu sou o <span className="text-blue-500">Cauã</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Desenvolvedor em início de carreira, focado em construir bases sólidas em programação e tecnologia da informação. Prone a resolver problemas e criar soluções digitais.
          </p>
          
          {/* REDES SOCIAIS / CONTATO */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://github.com/bispi0" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all border border-zinc-200 dark:border-zinc-800 font-medium text-sm">
              <Github size={18} /> GitHub
            </a>
            <a href="https://instagram.com/bispi0" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all border border-zinc-200 dark:border-zinc-800 font-medium text-sm">
              <Instagram size={18} /> Instagram
            </a>
            <a href="mailto:cauarecuperar@gmail.com" 
               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all font-medium text-sm shadow-md shadow-blue-500/10">
              <Mail size={18} /> Entrar em Contato
            </a>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="space-y-6">
          <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
            <Code className="text-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight">Habilidades Técnicas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-lg mb-1">Python</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Nível Básico. Desenvolvimento de scripts, lógica estruturada e automações simples.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-lg mb-1">CSS</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Nível Básico. Estilização de páginas web, layouts responsivos e uso de frameworks como Tailwind.</p>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="space-y-6">
          <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
            <Code className="text-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight">Projetos em Destaque</h2>
          </div>
          <div className="group relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-blue-500/50 transition-all">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 block">Projeto Principal</span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">Trabalho de Conclusão de Curso (TCC)</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
              Desenvolvimento de projeto acadêmico aplicando conceitos práticos de tecnologia, estruturação de ideias e resolução de demandas reais.
            </p>
            <div className="flex gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-200 dark:bg-zinc-800">Em Desenvolvimento</span>
            </div>
          </div>
        </section>

        {/* CERTIFICADOS */}
        <section id="certificados" className="space-y-6">
          <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
            <BookOpen className="text-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight">Certificações</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 mt-1">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-base leading-tight">Tecnologia da Informação e Comunicação</h3>
                <p className="text-xs text-zinc-500 mt-1">Formação Fundamental</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 mt-1">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-base leading-tight">Lógica de Programação</h3>
                <p className="text-xs text-zinc-500 mt-1">Algoritmos e Estruturas de Dados</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Cauã. Todos os direitos reservados.</p>
          <p>Criado com Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
