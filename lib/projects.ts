export type ContentBlock =
  | { type: "heading"; text: string; textEn?: string }
  | { type: "subheading"; text: string; textEn?: string }
  | { type: "paragraph"; text: string; textEn?: string }
  | { type: "note"; text: string; textEn?: string }
  | { type: "divider" }
  | {
      type: "image"
      src: string
      alt: string
      altEn?: string
      aspect?: "wide" | "square" | "portrait"
      objectPosition?: string
    }
  | {
      type: "image-pair"
      images: { src: string; alt: string; altEn?: string; caption?: string; captionEn?: string }[]
    }
  | { type: "carousel"; images: { src: string; alt: string; altEn?: string }[] }
  | { type: "link"; links: { url: string; label: string; labelEn?: string }[] }

export interface Project {
  id: string
  slug?: string
  title?: string
  subtitle?: string
  subtitleEn?: string
  tool?: string
  year?: number
  image?: string
  imagePosition?: string
  video?: string
  tags: string[]
  content?: ContentBlock[]
}

export const PROJECTS: Project[] = [
  {
    id: "intelliauto",
    slug: "intelliauto",
    title: "Intelliauto",
    subtitle:
      "Refatoração completa de um sistema de catálogo automotivo, com nova infraestrutura e interface reconstruída sobre o design system.",
    subtitleEn:
      "Full rebuild of an automotive catalog system, with new infrastructure and an interface reconstructed on top of the design system.",
    tool: "Figma",
    year: 2026,
    image: "/projects/intelliauto/flow-map.png",
    tags: ["Profissional", "Redesign"],
    content: [
      {
        type: "paragraph",
        text: "Refatoração completa do sistema principal, com nova stack e interface reconstruída sobre o [design system](/projetos/design-system-fraga).",
        textEn:
          "Full rebuild of the main system, with a new stack and an interface reconstructed on top of the [design system](/projetos/design-system-fraga).",
      },
      { type: "heading", text: "O contexto", textEn: "The context" },
      {
        type: "paragraph",
        text: "Um cliente externo pediu mudanças nas regras do sistema. Ao avaliar o esforço, ficou claro que refazer compensava mais do que adaptar: dava para trocar a infraestrutura, adotar linguagens mais otimizadas e, junto disso, atualizar a interface.",
        textEn:
          "An external client requested changes to the system's rules. When we assessed the effort involved, it became clear that rebuilding paid off more than adapting: we could swap the infrastructure, adopt more optimized languages, and update the interface at the same time.",
      },
      {
        type: "paragraph",
        text: "Como parte do time de design, redesenhei o produto inteiro com base no [design system](/projetos/design-system-fraga) que desenvolvi e que já estava se tornando o padrão da empresa.",
        textEn:
          "As part of the design team, I redesigned the entire product based on the [design system](/projetos/design-system-fraga) I had developed, which was already becoming the company's standard.",
      },
      {
        type: "paragraph",
        text: "O escopo cobriu o sistema todo: 18 menus e cerca de 70 módulos. Meu papel inicial foi enxugar a quantidade de telas diferentes que tratavam do mesmo contexto, entregando um sistema mais enxuto, mas com as mesmas funcionalidades, agora redesenhadas e organizadas.",
        textEn:
          "The scope covered the entire system: 18 menus and around 70 modules. My initial role was to cut down the number of different screens handling the same context, delivering a leaner system with the same functionality, now redesigned and organized.",
      },
      { type: "divider" },
      { type: "heading", text: "O que mudou", textEn: "What changed" },
      {
        type: "paragraph",
        text: "Paleta de cores repensada, com azul como cor principal e roxo como secundária; formulários grandes viraram wizards com validação por etapa; telas traduzidas, com melhor organização e disposição das informações para mais clareza visual; nomenclaturas repensadas; campos desnecessários removidos; e breadcrumbs adicionados para facilitar o entendimento da navegação.",
        textEn:
          "Color palette rethought, with blue as the primary color and purple as secondary; large forms turned into step-validated wizards; screens reorganized, with better layout and information hierarchy for more visual clarity; naming rethought; unnecessary fields removed; and breadcrumbs added to make navigation easier to follow.",
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/projects/intelliauto/veiculo-old.png",
            alt: "Cadastro de veículo antes do redesenho",
            altEn: "Vehicle registration before the redesign",
            caption: "Sistema antigo",
            captionEn: "Old system",
          },
          {
            src: "/projects/intelliauto/veiculo-new.png",
            alt: "Cadastro de veículo depois do redesenho",
            altEn: "Vehicle registration after the redesign",
            caption: "Sistema novo",
            captionEn: "New system",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "A refatoração mostrou o [design system](/projetos/design-system-fraga) funcionando no cenário mais exigente possível: reconstruir um produto inteiro, mantendo consistência entre dezenas de telas e reduzindo o tempo de criação de cada uma.",
        textEn:
          "The rebuild put the [design system](/projetos/design-system-fraga) to work in the most demanding scenario possible: reconstructing an entire product while keeping consistency across dozens of screens and reducing the time it took to build each one.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias envolvidas", textEn: "Technologies involved" },
      {
        type: "paragraph",
        text: "**Figma.** Prototipação de todas as telas e design system.",
        textEn: "**Figma.** Prototyping of all screens and the design system.",
      },
      {
        type: "paragraph",
        text: "**Confluence.** Documentação técnica das telas, com as regras e o comportamento de cada módulo para o time de desenvolvimento.",
        textEn:
          "**Confluence.** Technical documentation of the screens, with the rules and behavior of each module for the development team.",
      },
    ],
  },
  {
    id: "design-system-fraga",
    slug: "design-system-fraga",
    title: "Design System Fraga",
    subtitle:
      "21 componentes e cerca de 600 variantes, com acessibilidade AA/AAA documentada. Hoje é o padrão visual da empresa.",
    subtitleEn:
      "21 components and around 600 variants, with AA/AAA accessibility documented. Today it's the company's visual standard.",
    year: 2025,
    image: "/projects/design-system-fraga/cover.png",
    tags: ["Profissional"],
    content: [
      { type: "heading", text: "O contexto", textEn: "The context" },
      {
        type: "paragraph",
        text: "A empresa não tinha padronização nem identidade visual própria. Cada projeto começava do zero e reinventava os mesmos elementos, o que gerava telas diferentes para problemas iguais.",
        textEn:
          "The company had no standardization or visual identity of its own. Every project started from scratch and reinvented the same elements, which resulted in different screens for identical problems.",
      },
      {
        type: "paragraph",
        text: "Comecei o design system por iniciativa própria, como projeto paralelo. Levou pouco mais de um ano para ficar completo, construído aos poucos entre as demandas do dia a dia.",
        textEn:
          "I started the design system on my own initiative, as a side project. It took a little over a year to complete, built gradually alongside day-to-day demands.",
      },
      { type: "divider" },
      { type: "heading", text: "O que construí", textEn: "What I built" },
      {
        type: "paragraph",
        text: "**Componentes com variantes.** 21 componentes, entre alerts, accordions, badges, buttons e inputs, somando cerca de 600 variantes. Cada um já vem com seus estados prontos, então aplicar virou uma questão de escolher a variante certa.",
        textEn:
          "**Components with variants.** 21 components, including alerts, accordions, badges, buttons, and inputs, totaling around 600 variants. Each one already comes with its states ready, so applying it became a matter of picking the right variant.",
      },
      {
        type: "carousel",
        images: [
          {
            src: "/projects/design-system-fraga/badges.png",
            alt: "Badges do design system Fraga",
            altEn: "Badges from the Fraga design system",
          },
          {
            src: "/projects/design-system-fraga/buttons.png",
            alt: "Botões do design system Fraga",
            altEn: "Buttons from the Fraga design system",
          },
          {
            src: "/projects/design-system-fraga/inputs.png",
            alt: "Inputs do design system Fraga",
            altEn: "Inputs from the Fraga design system",
          },
          {
            src: "/projects/design-system-fraga/tabs.png",
            alt: "Tabs do design system Fraga",
            altEn: "Tabs from the Fraga design system",
          },
        ],
      },
      {
        type: "paragraph",
        text: "**Paleta autoral.** Desenvolvi a paleta do zero, em escala de 100 a 900. Ela cobre desde a base da página até os estados de interação, com um tom definido para cada função.",
        textEn:
          "**Original palette.** I developed the palette from scratch, on a 100 to 900 scale. It covers everything from the page background to interaction states, with a defined shade for each function.",
      },
      {
        type: "image",
        src: "/projects/design-system-fraga/colors.png",
        alt: "Famílias de cor do design system Fraga",
        altEn: "Color families from the Fraga design system",
      },
      {
        type: "paragraph",
        text: "**Contraste documentado em cada token.** Todos os tokens têm o nível de contraste registrado em AA ou AAA. A acessibilidade foi resolvida na definição da cor, antes de qualquer tela ser desenhada.",
        textEn:
          "**Contrast documented in every token.** All tokens have their contrast level recorded as AA or AAA. Accessibility was solved at the color-definition stage, before any screen was drawn.",
      },
      {
        type: "paragraph",
        text: "**Padronização com ganho de tempo.** Com estados e variantes prontos, o time monta telas mais rápido e as decisões visuais param de se repetir a cada projeto.",
        textEn:
          "**Standardization that saves time.** With states and variants ready to go, the team assembles screens faster, and visual decisions stop being repeated on every project.",
      },
      { type: "divider" },
      { type: "heading", text: "O que fica", textEn: "What remains" },
      {
        type: "paragraph",
        text: "Hoje o design system é o padrão visual da Fraga, adotado em todos os novos projetos, incluindo a [refatoração completa do sistema principal](/projetos/intelliauto).",
        textEn:
          "Today the design system is Fraga's visual standard, adopted in every new project, including the [full rebuild of the main system](/projetos/intelliauto).",
      },
      {
        type: "image",
        src: "/projects/design-system-fraga/in-action.png",
        alt: "Design system Fraga em uso no Figma",
        altEn: "Fraga design system in use in Figma",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias envolvidas", textEn: "Technologies involved" },
      {
        type: "paragraph",
        text: "**Figma.** Biblioteca completa de componentes, tokens e estilos, publicada e consumida pelos times.",
        textEn:
          "**Figma.** Complete library of components, tokens, and styles, published and consumed by the teams.",
      },
      {
        type: "link",
        links: [
          {
            url: "https://www.figma.com/design/CvJttOmyPhcW9F3iZzXtPf/Design-System-Fraga?node-id=1-2&t=PbxLXtW8lrCM27xf-1",
            label: "Acessar no Figma",
            labelEn: "Open in Figma",
          },
        ],
      },
    ],
  },
  {
    id: "ed-ai",
    slug: "ed-ai",
    title: "Ed.AI",
    subtitle:
      "Vídeo de lançamento da primeira ferramenta de inteligência artificial do mercado de aftermarket.",
    subtitleEn:
      "Launch video for the first artificial intelligence tool in the aftermarket industry.",
    tool: "After Effects",
    year: 2025,
    image: "/projects/ed-ai/cover.png",
    video: "https://www.youtube.com/watch?v=iBunjZiBGr8",
    tags: ["Profissional", "Motion"],
    content: [
      { type: "heading", text: "O desafio", textEn: "The challenge" },
      {
        type: "paragraph",
        text: "Apresentar ao mercado o ed.ai, assistente de IA integrado ao sistema Frota, que responde perguntas sobre a frota de veículos do Brasil com dados e insights comparativos.",
        textEn:
          "Introduce ed.ai to the market: an AI assistant integrated into the Frota system that answers questions about Brazil's vehicle fleet with data and comparative insights.",
      },
      {
        type: "paragraph",
        text: "Três restrições definiram o projeto: o vídeo seria exibido sem narração e precisava se sustentar sozinho; parte do produto ainda não existia, mas precisava aparecer para comunicar o potencial da ferramenta; e o prazo era de 7 dias.",
        textEn:
          "Three constraints defined the project: the video would run without narration and had to stand on its own; part of the product didn't exist yet, but still needed to appear on screen to communicate the tool's potential; and the deadline was 7 days.",
      },
      { type: "divider" },
      { type: "heading", text: "Como resolvi", textEn: "How I approached it" },
      {
        type: "paragraph",
        text: "**Estrutura de uso real.** Montei o vídeo em 8 cenas que mostram a ferramenta sendo usada: o sistema Frota, o acesso ao ed.ai, a pergunta sendo digitada, a resposta chegando. Quem assiste entende o produto ao ver o funcionamento.",
        textEn:
          "**Real-use structure.** I built the video around 8 scenes that show the tool being used: the Frota system, accessing ed.ai, the question being typed, the answer coming in. Whoever watches understands the product by seeing it work.",
      },
      {
        type: "paragraph",
        text: "**Ritmo como argumento.** A promessa do ed.ai é fluidez: perguntar e já ter a resposta. Construí a montagem nesse encadeamento, com trilha de jazz produzida com ferramentas de IA. O vídeo que apresenta a primeira IA do aftermarket foi sonorizado com IA.",
        textEn:
          "**Pace as the argument.** ed.ai's promise is fluidity: ask and get the answer right away. I built the edit around that same flow, with a jazz score produced using AI tools. The video introducing the first AI in the aftermarket was itself scored with AI.",
      },
      {
        type: "paragraph",
        text: "**Animação como protótipo.** As funcionalidades ainda não construídas foram animadas a partir do design pretendido, o que permitiu mostrar a visão completa do produto antes de ela estar pronta.",
        textEn:
          "**Animation as prototype.** Features that hadn't been built yet were animated based on the intended design, which made it possible to show the product's full vision before it was actually ready.",
      },
      {
        type: "paragraph",
        text: '**Personalidade nos detalhes.** Cada espera ganhou um carregamento próprio, com linguagem automotiva: "Acelerando", "Aperte os cintos", "Pensando". Os tempos de espera passaram a comunicar a identidade do produto.',
        textEn:
          '**Personality in the details.** Every wait got its own loading message, in automotive language: "Accelerating," "Buckle up," "Thinking." Loading times started communicating the product\'s identity.',
      },
      { type: "divider" },
      { type: "heading", text: "Resultado", textEn: "Result" },
      {
        type: "paragraph",
        text: "Entregue no prazo e usado na apresentação oficial do ed.ai, o primeiro contato do mercado com a ferramenta. Depois disso, o vídeo passou a abrir as palestras institucionais sobre a ferramenta desenvolvida pelo time de P&D e virou material de divulgação nas redes sociais.",
        textEn:
          "Delivered on time and used in ed.ai's official presentation, the market's first contact with the tool. After that, the video went on to open institutional talks about the tool developed by the R&D team and became promotional material on social media.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias envolvidas", textEn: "Technologies involved" },
      {
        type: "paragraph",
        text: "**After Effects.** Animação e montagem das cenas.",
        textEn: "**After Effects.** Animation and editing of the scenes.",
      },
      {
        type: "paragraph",
        text: "**Figma.** Protótipo do produto e criação dos elementos de tela.",
        textEn: "**Figma.** Product prototype and creation of screen elements.",
      },
      {
        type: "paragraph",
        text: "**Illustrator.** Vetorização dos elementos gráficos.",
        textEn: "**Illustrator.** Vectorizing the graphic elements.",
      },
      {
        type: "paragraph",
        text: "**Moises.ai.** Produção da trilha sonora a partir da direção musical definida para o vídeo.",
        textEn:
          "**Moises.ai.** Soundtrack production based on the musical direction defined for the video.",
      },
      {
        type: "link",
        links: [
          { url: "https://www.youtube.com/watch?v=iBunjZiBGr8", label: "Ver vídeo", labelEn: "Watch video" },
        ],
      },
    ],
  },
  {
    id: "bibi",
    slug: "bibi",
    title: "Bibi",
    subtitle:
      "Landing page de catálogo de autopeças, entregue em 7 dias e redesenhada depois com base em dados de uso.",
    subtitleEn:
      "Auto parts catalog landing page, delivered in 7 days and later redesigned based on usage data.",
    year: 2025,
    image: "/projects/bibi/cover.png",
    tags: ["Profissional", "Redesign"],
    content: [
      {
        type: "paragraph",
        text: "Landing page para venda de catálogo de autopeças, entregue sob prazo de feira e redesenhada depois com base em dados reais de uso.",
        textEn:
          "Landing page for selling an auto parts catalog, delivered under a trade show deadline and later redesigned based on real usage data.",
      },
      { type: "heading", text: "A primeira entrega", textEn: "The first delivery" },
      {
        type: "paragraph",
        text: "O Bibi é um catálogo que permite ao mecânico achar a peça certa pela placa do veículo. A landing precisava estar no ar para uma feira do setor, com sete dias de prazo e sem possibilidade de adiar.",
        textEn:
          "Bibi is a catalog that lets mechanics find the right part using the vehicle's license plate. The landing page needed to be live for an industry trade show, with a seven-day deadline and no room to push it back.",
      },
      {
        type: "paragraph",
        text: "Entreguei a página no prazo, com a estrutura completa: apresentação do produto, passo a passo de uso, números do catálogo, planos e dúvidas frequentes.",
        textEn:
          "I delivered the page on time, with the full structure in place: product overview, step-by-step usage guide, catalog numbers, plans, and FAQ.",
      },
      {
        type: "image",
        src: "/projects/bibi/old.png",
        alt: "Primeira versão da landing page do Bibi",
        altEn: "First version of the Bibi landing page",
      },
      { type: "divider" },
      { type: "heading", text: "O que os dados mostraram", textEn: "What the data showed" },
      {
        type: "paragraph",
        text: "Depois de um tempo no ar, analisei o comportamento real dos visitantes no Clarity e cruzei com o que o time de CS ouvia de quem cancelava.",
        textEn:
          "After the page had been live for a while, I analyzed real visitor behavior in Clarity and cross-referenced it with what the CS team was hearing from people who canceled.",
      },
      {
        type: "paragraph",
        text: "Dois problemas apareceram. As pessoas não entendiam o produto antes de assinar, porque a página descrevia a ferramenta sem mostrar ela funcionando. E a escolha entre três planos, com uma tabela comparando funcionalidades, transferia para o visitante uma decisão que ele não tinha informação para tomar.",
        textEn:
          "Two problems stood out. People didn't understand the product before subscribing, because the page described the tool without showing it in action. And the choice between three plans, with a table comparing features, pushed onto the visitor a decision they didn't have enough information to make.",
      },
      {
        type: "paragraph",
        text: "O resultado era assinatura feita com expectativa errada, que virava cancelamento.",
        textEn: "The result was subscriptions made on the wrong expectations, which turned into cancellations.",
      },
      { type: "divider" },
      { type: "heading", text: "O redesenho", textEn: "The redesign" },
      {
        type: "image",
        src: "/projects/bibi/cover.png",
        alt: "Nova versão da landing page do Bibi",
        altEn: "New version of the Bibi landing page",
      },
      {
        type: "note",
        text: "A segunda versão ainda não foi oficializada pela empresa. Ela está no ar em ambiente de testes, em fase de análise.",
        textEn:
          "The second version hasn't been officially rolled out by the company yet. It's live in a testing environment, under review.",
      },
      {
        type: "paragraph",
        text: "**Experimentar antes de decidir.** Coloquei o campo de busca por placa no topo da página. A pessoa usa o produto antes de assinar, então entende o que está comprando.",
        textEn:
          "**Try before you decide.** I placed the license-plate search field at the top of the page. People use the product before subscribing, so they understand what they're buying.",
      },
      {
        type: "paragraph",
        text: '**Um plano em vez de três.** Substituí a tabela comparativa por uma oferta única com sete dias grátis. A decisão saiu de "qual dos três serve para mim" para "vale a pena testar", que é uma pergunta muito mais fácil de responder.',
        textEn:
          '**One plan instead of three.** I replaced the comparison table with a single offer with seven days free. The decision shifted from "which of the three fits me" to "is it worth trying," which is a much easier question to answer.',
      },
      {
        type: "paragraph",
        text: "**Mostrar em vez de descrever.** Entraram um carrossel com as categorias de peça, as marcas parceiras com logo, um passo a passo em quatro etapas e um vídeo do produto em uso.",
        textEn:
          "**Show instead of describe.** In came a carousel with part categories, partner brands with their logos, a four-step walkthrough, and a video of the product in use.",
      },
      {
        type: "paragraph",
        text: "**Menos texto, mais hierarquia.** Reorganizei o conteúdo para que a informação essencial aparecesse primeiro e o detalhe ficasse acessível a quem quisesse, nas dúvidas frequentes.",
        textEn:
          "**Less text, more hierarchy.** I reorganized the content so essential information came first, with details available to anyone who wanted them, in the FAQ.",
      },
      { type: "divider" },
      { type: "heading", text: "O que fica", textEn: "What remains" },
      {
        type: "paragraph",
        text: "O projeto passou pelo ciclo completo: entregar sob pressão, medir o comportamento real, ouvir quem atende o cliente e refazer com base no que os dados mostraram.",
        textEn:
          "The project went through the full cycle: delivering under pressure, measuring real behavior, listening to the people who talk to customers, and rebuilding based on what the data showed.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias usadas", textEn: "Technologies used" },
      { type: "subheading", text: "Primeira versão", textEn: "First version" },
      {
        type: "paragraph",
        text: "**Figma.** Protótipo interativo da página, usado para alinhar o produto antes do desenvolvimento.",
        textEn:
          "**Figma.** Interactive prototype of the page, used to align the product before development.",
      },
      {
        type: "paragraph",
        text: "**Desenvolvimento.** Implementação feita por uma agência terceira junto com o time de desenvolvimento interno.",
        textEn:
          "**Development.** Implementation done by a third-party agency together with the internal development team.",
      },
      { type: "subheading", text: "Segunda versão", textEn: "Second version" },
      {
        type: "paragraph",
        text: "**Microsoft Clarity.** Análise do comportamento real dos visitantes, base para as decisões do redesenho.",
        textEn:
          "**Microsoft Clarity.** Analysis of real visitor behavior, the basis for the redesign decisions.",
      },
      {
        type: "paragraph",
        text: "**Figma.** Protótipo da nova página.",
        textEn: "**Figma.** Prototype of the new page.",
      },
      {
        type: "paragraph",
        text: "**Figma MCP com Claude Code.** Ligação entre design e código, gerando as telas a partir do próprio arquivo do Figma.",
        textEn:
          "**Figma MCP with Claude Code.** A link between design and code, generating the screens directly from the Figma file.",
      },
      {
        type: "paragraph",
        text: "**shadcn/ui.** Biblioteca de componentes da interface.",
        textEn: "**shadcn/ui.** Interface component library.",
      },
      {
        type: "paragraph",
        text: "**Next.js.** Front-end da nova versão.",
        textEn: "**Next.js.** Front end of the new version.",
      },
      {
        type: "paragraph",
        text: "**Vercel.** Hospedagem do ambiente, sem custo de infraestrutura.",
        textEn: "**Vercel.** Environment hosting, with no infrastructure cost.",
      },
      {
        type: "link",
        links: [
          { url: "https://www.bibipecas.com.br", label: "Ver primeira versão", labelEn: "See first version" },
          { url: "https://bibi-web-two.vercel.app", label: "Ver nova versão", labelEn: "See new version" },
        ],
      },
    ],
  },
  {
    id: "vstore",
    slug: "vstore",
    title: "VStore",
    subtitle:
      "Site de venda de serviços com calculadora de preço automática. Mais de 300 vendas no mês de lançamento.",
    subtitleEn:
      "Service sales site with an automatic price calculator. Over 300 sales in the launch month.",
    year: 2024,
    image: "/projects/vstore/cover.png",
    tags: ["Freelance", "Web Dev"],
    content: [
      {
        type: "paragraph",
        text: "Site de venda de serviços para o cenário competitivo de Valorant, com cálculo de preço automático e pedido fechado pelo WhatsApp.",
        textEn:
          "Service sales site for the competitive Valorant scene, with automatic price calculation and orders closed through WhatsApp.",
      },
      { type: "heading", text: "O desafio", textEn: "The challenge" },
      {
        type: "paragraph",
        text: "O cliente vendia serviços de elojob e coaching, mas cada orçamento era feito na mão pelo WhatsApp. O preço variava conforme o elo atual, o elo desejado e os adicionais que o cliente escolhia, e isso tornava o atendimento lento e sujeito a erro.",
        textEn:
          "The client sold rank-boosting and coaching services, but every quote was put together by hand over WhatsApp. The price varied depending on the current rank, the desired rank, and the add-ons the customer chose, which made service slow and error-prone.",
      },
      {
        type: "paragraph",
        text: "O site precisava calcular esse valor sozinho e entregar o pedido pronto para o prestador.",
        textEn: "The site needed to calculate that value on its own and hand the provider a ready-made order.",
      },
      { type: "heading", text: "O que fiz", textEn: "What I did" },
      {
        type: "paragraph",
        text: "Desenvolvi o site em colaboração direta com o cliente, que conhecia as regras de precificação do mercado.",
        textEn:
          "I built the site in direct collaboration with the client, who knew the market's pricing rules.",
      },
      {
        type: "paragraph",
        text: "**Calculadora de preços.** Montei o algoritmo que soma o trajeto entre os elos e aplica o percentual de cada adicional, como seleção de horário, escolha de agentes, stream via Discord e entrega rápida. O total atualiza na hora, conforme a pessoa marca as opções.",
        textEn:
          "**Price calculator.** I built the algorithm that sums the distance between ranks and applies the percentage for each add-on, such as time-slot selection, agent choice, Discord streaming, and rush delivery. The total updates instantly as the person checks the options.",
      },
      {
        type: "image",
        src: "/projects/vstore/calculadora.png",
        alt: "Calculadora de preços do VStore",
        altEn: "VStore price calculator",
      },
      {
        type: "paragraph",
        text: "**Pedido direto no WhatsApp.** Ao concluir, o site monta o resumo do pedido e envia para o WhatsApp do prestador. Sem cadastro, sem carrinho, sem gateway de pagamento. O pagamento e o restante do atendimento seguem na conversa, que é como o mercado já funcionava.",
        textEn:
          "**Order straight to WhatsApp.** Once finished, the site puts together an order summary and sends it to the provider's WhatsApp. No sign-up, no cart, no payment gateway. Payment and the rest of the service continue in the conversation, which is how the market already worked.",
      },
      {
        type: "paragraph",
        text: "**Termos antes de fechar.** Incluí um modal de termos de uso com aceite obrigatório junto do resumo do pedido, deixando as regras de cobrança claras antes da confirmação.",
        textEn:
          "**Terms before closing.** I added a terms-of-use modal with mandatory acceptance alongside the order summary, making the billing rules clear before confirmation.",
      },
      {
        type: "image",
        src: "/projects/vstore/carrinho.png",
        alt: "Modal de termos de uso e resumo do pedido do VStore",
        altEn: "VStore terms-of-use modal and order summary",
      },
      {
        type: "paragraph",
        text: "**Identidade do jogo.** Interface escura com destaque em azul, arte dos elos e tipografia pesada, alinhada ao visual de Valorant e ao público que o cliente atende.",
        textEn:
          "**Game identity.** Dark interface with blue highlights, rank artwork, and bold typography, aligned with Valorant's visual style and the audience the client serves.",
      },
      { type: "heading", text: "Resultado", textEn: "Result" },
      {
        type: "paragraph",
        text: "O site passou de 300 vendas no mês de lançamento. O orçamento manual saiu do fluxo e o prestador passou a receber pedidos prontos, com serviço, adicionais e valor já definidos.",
        textEn:
          "The site passed 300 sales in its launch month. Manual quoting was removed from the flow, and the provider started receiving ready-made orders, with service, add-ons, and price already defined.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias usadas", textEn: "Technologies used" },
      {
        type: "paragraph",
        text: "**Next.js.** Front-end.",
        textEn: "**Next.js.** Front end.",
      },
      {
        type: "paragraph",
        text: "**Hero.UI.** Biblioteca de componentes da interface.",
        textEn: "**Hero.UI.** Interface component library.",
      },
      {
        type: "paragraph",
        text: "**Vercel.** Hospedagem do ambiente, sem custo de infraestrutura e gestão de domínio.",
        textEn: "**Vercel.** Environment hosting, with no infrastructure cost and domain management.",
      },
      {
        type: "link",
        links: [{ url: "https://vstore-valorant.vercel.app", label: "Ver site", labelEn: "View site" }],
      },
    ],
  },
  {
    id: "proesp",
    slug: "proesp",
    title: "PROESP",
    subtitle:
      "Site completo para uma ONG ambiental que protege a Mata Atlântica em Campinas desde 1977.",
    subtitleEn:
      "Full site for an environmental NGO that has protected the Atlantic Forest in Campinas since 1977.",
    year: 2026,
    image: "/projects/proesp/cover.png",
    tags: ["Voluntário", "Web Dev"],
    content: [
      { type: "heading", text: "O desafio", textEn: "The challenge" },
      {
        type: "paragraph",
        text: "A Associação Protetora da Diversidade das Espécies atua há quase cinco décadas com plantio de mudas, educação ambiental e defesa da Mata de Santa Genebra. Mas não tinha um site à altura dessa história, nem um caminho claro para quem quisesse doar ou virar voluntário.",
        textEn:
          "Associação Protetora da Diversidade das Espécies has worked for almost five decades on tree planting, environmental education, and defending the Santa Genebra Forest. But it had no site that matched that history, and no clear path for anyone who wanted to donate or become a volunteer.",
      },
      {
        type: "paragraph",
        text: "Para uma ONG, isso é perda direta: sem canal, o apoio que existe não chega.",
        textEn: "For an NGO, that's a direct loss: without a channel, the support that exists never arrives.",
      },
      { type: "divider" },
      { type: "heading", text: "O que fiz", textEn: "What I did" },
      {
        type: "paragraph",
        text: "Assumi o projeto do começo ao fim, sozinho: design e código.",
        textEn: "I took on the project from start to finish, on my own: design and code.",
      },
      {
        type: "paragraph",
        text: "**Arquitetura de conteúdo.** Organizei o site em História, Estatuto, Projetos e Transparência. Essa última foi decisão deliberada: em ONG, transparência não é burocracia, é o que converte doador. Quem doa quer saber para onde vai o dinheiro.",
        textEn:
          "**Content architecture.** I organized the site into History, Bylaws, Projects, and Transparency. That last one was a deliberate decision: for an NGO, transparency isn't bureaucracy, it's what converts donors. Whoever gives wants to know where the money goes.",
      },
      {
        type: "paragraph",
        text: "**Identidade visual.** Verde da mata como cor condutora, fotografia real das áreas preservadas e tipografia de peso alto nos títulos, passando solidez, coerente com uma instituição de 49 anos.",
        textEn:
          "**Visual identity.** Forest green as the guiding color, real photography of the preserved areas, and bold-weight typography in the headings, conveying solidity, in line with an institution that's 49 years old.",
      },
      {
        type: "paragraph",
        text: '**Duas ações, sem fricção.** Todo o site conduz a dois destinos: doar via PIX e se inscrever como voluntário, com formulário próprio. O CTA "Seja voluntário/doar" fica fixo na navegação, sempre a um clique.',
        textEn:
          '**Two actions, no friction.** The whole site leads to two destinations: donating via PIX and signing up as a volunteer, through a dedicated form. The "Volunteer/Donate" CTA stays fixed in the navigation, always one click away.',
      },
      {
        type: "paragraph",
        text: "**Mobile em primeiro lugar.** A maior parte do tráfego chega pelo Instagram, então o site foi construído para o celular antes do desktop.",
        textEn:
          "**Mobile first.** Most of the traffic arrives from Instagram, so the site was built for mobile before desktop.",
      },
      { type: "divider" },
      { type: "heading", text: "Resultado", textEn: "Result" },
      {
        type: "paragraph",
        text: "A PROESP passou a ter uma presença digital compatível com o trabalho que faz há quase 50 anos, com canais de doação e voluntariado funcionando, e um espaço próprio para prestar contas do que realiza.",
        textEn:
          "PROESP now has a digital presence that matches the work it has done for almost 50 years, with working donation and volunteering channels, and a dedicated space to report on what it accomplishes.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias envolvidas", textEn: "Technologies involved" },
      {
        type: "paragraph",
        text: "**Figma.** Protótipo da nova página.",
        textEn: "**Figma.** Prototype of the new page.",
      },
      {
        type: "paragraph",
        text: "**Figma MCP com Claude Code.** Ligação entre design e código, gerando as telas a partir do próprio arquivo do Figma.",
        textEn:
          "**Figma MCP with Claude Code.** A link between design and code, generating the screens directly from the Figma file.",
      },
      {
        type: "paragraph",
        text: "**shadcn/ui.** Biblioteca de componentes da interface.",
        textEn: "**shadcn/ui.** Interface component library.",
      },
      {
        type: "paragraph",
        text: "**Next.js.** Front-end da nova versão.",
        textEn: "**Next.js.** Front end of the new version.",
      },
      {
        type: "paragraph",
        text: "**Vercel.** Hospedagem do ambiente, sem custo de infraestrutura.",
        textEn: "**Vercel.** Environment hosting, with no infrastructure cost.",
      },
      {
        type: "paragraph",
        text: "**Vercel Analytics.** Implementado para gestão e análise de tráfego de usuários e comportamento, gerando relatórios para a organização.",
        textEn:
          "**Vercel Analytics.** Implemented for managing and analyzing user traffic and behavior, generating reports for the organization.",
      },
      {
        type: "link",
        links: [{ url: "https://proesp.vercel.app/", label: "Acessar o site", labelEn: "Visit the site" }],
      },
    ],
  },
  {
    id: "defenda-a-remonta",
    slug: "defenda-a-remonta",
    title: "Defenda a Remonta",
    subtitle:
      "Site de campanha para uma petição ambiental, desenvolvido em uma noite com 5 mil panfletos já impressos.",
    subtitleEn:
      "Campaign site for an environmental petition, built in one night with 5,000 flyers already printed.",
    tool: "Canva Sites",
    year: 2026,
    image: "/projects/defenda-a-remonta/cover.png",
    tags: ["Voluntário", "Redesign"],
    content: [
      {
        type: "paragraph",
        text: "Site de campanha para uma petição ambiental, feito em uma noite para salvar uma tiragem de 5 mil panfletos.",
        textEn:
          "Campaign site for an environmental petition, built in one night to save a print run of 5,000 flyers.",
      },
      { type: "heading", text: "O desafio", textEn: "The challenge" },
      {
        type: "paragraph",
        text: "A campanha já tinha ido para a gráfica: 5 mil panfletos impressos com um QR code apontando para o site. Só que o site não existia. Quem havia assumido o projeto não conseguiu entregar.",
        textEn:
          "The campaign had already gone to print: 5,000 flyers with a QR code pointing to the site. Except the site didn't exist. Whoever had taken on the project hadn't been able to deliver.",
      },
      {
        type: "paragraph",
        text: "Não havia como reimprimir nem adiar. O material já estava pronto para distribuição e cada panfleto levaria as pessoas a uma página em branco. Assumi a produção com o prazo de uma noite.",
        textEn:
          "There was no reprinting and no pushing the date back. The material was already set for distribution, and every flyer would send people to a blank page. I took over production with a one-night deadline.",
      },
      {
        type: "paragraph",
        text: "O prazo era só metade do problema. A causa impunha a outra: 162 hectares de mata atlântica em risco de virar loteamento. A página precisava explicar o que estava em jogo para quem nunca tinha ouvido falar do assunto e converter essa leitura em assinatura, dentro dos poucos segundos de atenção de alguém parado na rua.",
        textEn:
          "The deadline was only half the problem. The cause set the other half: 162 hectares of Atlantic Forest at risk of becoming a housing development. The page needed to explain what was at stake to people who'd never heard about it, and convert that reading into a signature, within the few seconds of attention someone standing on the street would give it.",
      },
      { type: "divider" },
      { type: "heading", text: "Como resolvi", textEn: "How I approached it" },
      {
        type: "paragraph",
        text: "**Uma página, um objetivo.** Com o tempo disponível, qualquer estrutura complexa era risco. Concentrei a página em uma única ação, assinar a petição, com a causa explicada de forma direta acima dela.",
        textEn:
          "**One page, one goal.** With the time available, any complex structure was a risk. I focused the page on a single action, signing the petition, with the cause explained directly above it.",
      },
      {
        type: "paragraph",
        text: "**A causa em blocos curtos.** Dividi o conteúdo em três perguntas: o que está em jogo, o que querem fazer e o que a gente quer. Cada bloco tem uma frase de destaque e fundo próprio, então a pessoa entende o essencial mesmo passando os olhos.",
        textEn:
          "**The cause in short blocks.** I split the content into three questions: what's at stake, what they want to do, and what we want. Each block has a headline sentence and its own background, so people grasp the essentials even at a glance.",
      },
      {
        type: "paragraph",
        text: "**Cor conduzindo a leitura.** Laranja para a urgência, vermelho para a ameaça e verde para o que se quer preservar. A sequência de cores conta a narrativa da campanha antes do texto ser lido.",
        textEn:
          "**Color guiding the reading.** Orange for urgency, red for the threat, and green for what needs preserving. The color sequence tells the campaign's story before the text is even read.",
      },
      {
        type: "paragraph",
        text: "**Feito para o celular.** Todo o tráfego viria de pessoas escaneando um panfleto com o telefone na mão, muitas vezes na rua. O layout foi construído para esse cenário: leitura rápida, botão de assinar sempre à vista e assinatura em poucos toques.",
        textEn:
          "**Built for mobile.** All the traffic would come from people scanning a flyer with a phone in hand, often on the street. The layout was built for that scenario: quick reading, the sign button always in view, and a signature in just a few taps.",
      },
      {
        type: "paragraph",
        text: "**A ferramenta já estava definida.** A pessoa que assumiu o projeto antes tinha começado o site no Canva Sites, e recomeçar em outra plataforma consumiria o pouco tempo que restava. Continuei do ponto onde estava, aprendendo a ferramenta durante a própria produção.",
        textEn:
          "**The tool was already set.** Whoever had taken on the project before had started the site in Canva Sites, and starting over on another platform would eat up what little time remained. I picked up from where it was, learning the tool during production itself.",
      },
      { type: "divider" },
      { type: "heading", text: "Resultado", textEn: "Result" },
      {
        type: "paragraph",
        text: "O site entrou no ar antes da distribuição e os 5 mil panfletos foram usados como planejado. O abaixo-assinado chegou a 12.844 assinaturas e 6.348 compartilhamentos.",
        textEn:
          "The site went live before distribution, and the 5,000 flyers were used as planned. The petition reached 12,844 signatures and 6,348 shares.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias usadas", textEn: "Technologies used" },
      {
        type: "paragraph",
        text: "**Canva Sites.** Plataforma herdada da produção anterior, onde o site foi finalizado e publicado em uma noite, com o QR code dos panfletos apontando para a página no ar.",
        textEn:
          "**Canva Sites.** Platform inherited from the previous production, where the site was finished and published in one night, with the flyers' QR code pointing to the live page.",
      },
      {
        type: "link",
        links: [{ url: "https://defendaremonta.my.canva.site/", label: "Visitar o site", labelEn: "Visit the site" }],
      },
    ],
  },
  {
    id: "artesan-burguer",
    slug: "artesan-burguer",
    title: "Artesan Burguer",
    subtitle:
      "Motion tipográfico do slogan da marca, feito como freelance para uma agência de publicidade.",
    subtitleEn:
      "Typographic motion piece for the brand's slogan, made as freelance work for an advertising agency.",
    tool: "After Effects",
    year: 2024,
    image: "https://img.youtube.com/vi/Kc5kmaR0rBI/maxresdefault.jpg",
    video: "https://youtu.be/Kc5kmaR0rBI",
    tags: ["Freelance", "Motion"],
    content: [
      {
        type: "paragraph",
        text: "Peça de motion tipográfico construída em cima do slogan da marca.",
        textEn: "Typographic motion piece built around the brand's slogan.",
      },
      { type: "heading", text: "O projeto", textEn: "The project" },
      {
        type: "paragraph",
        text: "Trabalho freelance para uma agência de publicidade, atendendo a Artesan Burguer. A peça tinha um escopo bem definido: dar movimento ao slogan e à tipografia da marca, sem inventar uma linguagem nova.",
        textEn:
          "Freelance work for an advertising agency, serving Artesan Burguer. The piece had a well-defined scope: bring movement to the brand's slogan and typography, without inventing a new visual language.",
      },
      { type: "heading", text: "Como resolvi", textEn: "How I approached it" },
      {
        type: "paragraph",
        text: "**A tipografia como protagonista.** Sem personagem, sem cenário, sem locução. A leitura acontece pela forma como as palavras entram, se compõem e saem de quadro.",
        textEn:
          "**Typography as the lead.** No character, no set, no voiceover. The reading happens through the way the words enter, arrange themselves, and leave the frame.",
      },
      {
        type: "paragraph",
        text: "**Respeitar a marca.** Trabalhar dentro de uma identidade já existente é diferente de criar do zero. A animação precisava soar como a marca, então parti dos elementos que a agência já usava e dei movimento a eles.",
        textEn:
          "**Respecting the brand.** Working within an existing identity is different from creating from scratch. The animation needed to sound like the brand, so I started from the elements the agency already used and gave them movement.",
      },
      {
        type: "paragraph",
        text: "**Ritmo de peça publicitária.** Curto, direto e feito para funcionar em feed, onde o vídeo tem poucos segundos para prender a atenção.",
        textEn:
          "**The pace of an ad.** Short, direct, and built to work in-feed, where a video has only a few seconds to hold attention.",
      },
      { type: "heading", text: "Resultado", textEn: "Result" },
      {
        type: "paragraph",
        text: "A peça foi entregue à agência e usada na comunicação da marca, sendo exposta em uma TV na hamburgueria.",
        textEn:
          "The piece was delivered to the agency and used in the brand's communication, displayed on a TV inside the restaurant.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias usadas", textEn: "Technologies used" },
      {
        type: "paragraph",
        text: "**After Effects.** Para animação dos elementos.",
        textEn: "**After Effects.** For animating the elements.",
      },
      {
        type: "link",
        links: [{ url: "https://youtu.be/Kc5kmaR0rBI", label: "Ver vídeo", labelEn: "Watch video" }],
      },
    ],
  },
  {
    id: "quadro",
    slug: "quadro",
    title: "Quadro",
    subtitle: "Identidade visual de uma marca pessoal, com tom moderno e minimalista.",
    subtitleEn: "Visual identity for a personal brand, with a modern, minimalist tone.",
    tool: "Figma",
    year: 2025,
    image: "/projects/quadro/cover.png",
    imagePosition: "right",
    tags: ["Pessoal", "Branding"],
    content: [
      { type: "heading", text: "O conceito", textEn: "The concept" },
      {
        type: "paragraph",
        text: "Quadro é um projeto pessoal com o posicionamento creative insight. A identidade precisava traduzir isso sem apelar para ornamento: algo direto, geométrico e atemporal.",
        textEn:
          "Quadro is a personal project positioned around creative insight. The identity needed to translate that without leaning on ornament: something direct, geometric, and timeless.",
      },
      { type: "heading", text: "O símbolo", textEn: "The symbol" },
      {
        type: "image",
        src: "/projects/quadro/symbol-light.png",
        alt: "Símbolo da marca Quadro em fundo claro",
        altEn: "Quadro brand symbol on a light background",
        aspect: "square",
      },
      {
        type: "paragraph",
        text: "O Q é construído com duas formas. Um círculo com o miolo vazado, e um ponto que ocupa o lugar do rabo da letra.",
        textEn:
          "The Q is built from two shapes. A circle with a hollow center, and a dot that takes the place of the letter's tail.",
      },
      {
        type: "paragraph",
        text: "Esse ponto é o único elemento em cor de toda a marca, e ele volta na assinatura escrita como o ponto final de Quadro. O símbolo e a palavra usam o mesmo recurso, então funcionam juntos ou separados.",
        textEn:
          "That dot is the only colored element in the entire brand, and it comes back in the wordmark as the period at the end of Quadro. The symbol and the word use the same device, so they work together or apart.",
      },
      {
        type: "image",
        src: "/projects/quadro/symbol-dark.png",
        alt: "Símbolo da marca Quadro em fundo escuro",
        altEn: "Quadro brand symbol on a dark background",
        aspect: "square",
      },
      {
        type: "paragraph",
        text: "Desenhei quatro versões para cobrir as aplicações: positiva, negativa, monocromática e sobre fundo escuro. A leitura se mantém em qualquer fundo, e a versão mono resolve os casos de impressão em uma cor.",
        textEn:
          "I designed four versions to cover the use cases: positive, negative, monochrome, and on a dark background. Legibility holds up on any background, and the mono version handles single-color print cases.",
      },
      { type: "heading", text: "Tipografia", textEn: "Typography" },
      {
        type: "paragraph",
        text: "Neue Haas Grotesk, em quatro pesos: 55 roman, 65 medium, 75 bold e 95 black.",
        textEn: "Neue Haas Grotesk, in four weights: 55 roman, 65 medium, 75 bold, and 95 black.",
      },
      {
        type: "paragraph",
        text: "É uma grotesca neutra, que sustenta o tom minimalista sem competir com o símbolo. Os quatro pesos dão hierarquia suficiente para qualquer peça, do título ao texto de apoio.",
        textEn:
          "It's a neutral grotesque that supports the minimalist tone without competing with the symbol. The four weights provide enough hierarchy for any piece, from headline to supporting text.",
      },
      { type: "heading", text: "Paleta", textEn: "Palette" },
      {
        type: "paragraph",
        text: "Quatro neutros e uma cor de destaque.",
        textEn: "Four neutrals and one accent color.",
      },
      {
        type: "paragraph",
        text: "Black 1D1D1D, secondary 444444, light D6D6D6 e white F2F2F2 formam a base. O azul 4557FF entra sozinho, sempre em pouca quantidade, marcando o ponto do símbolo e os pontos de atenção nas peças.",
        textEn:
          "Black 1D1D1D, secondary 444444, light D6D6D6, and white F2F2F2 form the base. Blue 4557FF stands alone, always used sparingly, marking the symbol's dot and the points of attention across the pieces.",
      },
      {
        type: "paragraph",
        text: "A escolha de trabalhar com um único acento mantém a identidade calma e faz o azul valer mais toda vez que aparece.",
        textEn:
          "Working with a single accent keeps the identity calm and makes the blue count for more every time it appears.",
      },
      { type: "heading", text: "Aplicação", textEn: "Application" },
      {
        type: "image",
        src: "/projects/quadro/wordmark-dark.png",
        alt: "Aplicação do logotipo Quadro em fundo escuro",
        altEn: "Application of the Quadro logotype on a dark background",
        objectPosition: "right",
      },
      {
        type: "paragraph",
        text: "O círculo e o quadrado do símbolo viram elementos gráficos nas composições, criando um sistema visual que vai além do logo.",
        textEn:
          "The circle and the square from the symbol become graphic elements within the compositions, creating a visual system that goes beyond the logo.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias usadas", textEn: "Technologies used" },
      {
        type: "paragraph",
        text: "**Figma.** Para criação de marca.",
        textEn: "**Figma.** For brand creation.",
      },
    ],
  },
  {
    id: "afeb",
    slug: "afeb",
    title: "AFEB",
    subtitle:
      "Identidade em preto e branco para um campeonato escolar de xadrez, com o cavalo integrado ao logotipo.",
    subtitleEn:
      "Black-and-white identity for a school chess championship, with the knight built into the logotype.",
    year: 2024,
    image: "/projects/afeb/cover.png",
    tags: ["Voluntário", "Branding"],
    content: [
      { type: "heading", text: "O projeto", textEn: "The project" },
      {
        type: "paragraph",
        text: "A AFEB organiza um campeonato de xadrez para estudantes. Apoiei o projeto voluntariamente, criando a identidade visual.",
        textEn:
          "AFEB organizes a chess championship for students. I supported the project as a volunteer, creating the visual identity.",
      },
      { type: "heading", text: "O símbolo", textEn: "The symbol" },
      {
        type: "image",
        src: "/projects/afeb/cover.png",
        alt: "Logotipo horizontal da AFEB com o cavalo integrado à letra A",
        altEn: "AFEB horizontal logotype with the knight integrated into the letter A",
      },
      {
        type: "paragraph",
        text: "O cavalo ocupa o espaço entre o A e o FEB, funcionando ao mesmo tempo como letra e como símbolo. Quem lê entende a sigla, e quem olha reconhece o xadrez na mesma imagem.",
        textEn:
          "The knight occupies the space between the A and the FEB, working at once as a letter and as a symbol. Whoever reads it understands the acronym, and whoever looks at it recognizes chess in the same image.",
      },
      {
        type: "paragraph",
        text: "A peça está dividida ao meio pela linha que separa o positivo do negativo, repetindo dentro da marca a lógica de casa clara e casa escura do tabuleiro.",
        textEn:
          "The mark is split down the middle by the line separating positive from negative, echoing the board's light-square, dark-square logic within the brand itself.",
      },
      { type: "heading", text: "Preto e branco", textEn: "Black and white" },
      {
        type: "image-pair",
        images: [
          {
            src: "/projects/afeb/cover.png",
            alt: "Versão positiva do logotipo AFEB",
            altEn: "Positive version of the AFEB logotype",
          },
          {
            src: "/projects/afeb/horizontal-dark.png",
            alt: "Versão negativa do logotipo AFEB",
            altEn: "Negative version of the AFEB logotype",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Trabalhar só com preto e branco veio do próprio jogo. Além de coerente com o tema, garante que a marca funcione em qualquer aplicação, de camiseta bordada a impressão em uma cor, sem perder força.",
        textEn:
          "Working in black and white alone came from the game itself. Besides being true to the theme, it ensures the brand works in any application, from an embroidered t-shirt to single-color print, without losing impact.",
      },
      {
        type: "paragraph",
        text: "O logotipo foi desenhado em pesos altos e formas fechadas, o que mantém a leitura mesmo em tamanhos pequenos, como crachá ou medalha.",
        textEn:
          "The logotype was drawn with heavy weights and closed shapes, which keeps it legible even at small sizes, like a badge or a medal.",
      },
      { type: "heading", text: "Duas assinaturas", textEn: "Two lockups" },
      {
        type: "image",
        src: "/projects/afeb/vertical.png",
        alt: "Versão vertical do logotipo AFEB",
        altEn: "Vertical version of the AFEB logotype",
        aspect: "portrait",
      },
      {
        type: "paragraph",
        text: "Criei uma versão horizontal e uma vertical, com as letras rotacionadas e empilhadas ao lado do cavalo.",
        textEn:
          "I created a horizontal version and a vertical one, with the letters rotated and stacked beside the knight.",
      },
      {
        type: "paragraph",
        text: "A vertical resolve os formatos estreitos, como banner de lateral de quadra, faixa e post em stories, sem precisar reduzir a marca até ela sumir.",
        textEn:
          "The vertical version handles narrow formats, like a courtside banner, a sash, or a story post, without having to shrink the mark until it disappears.",
      },
      { type: "divider" },
      { type: "heading", text: "Tecnologias usadas", textEn: "Technologies used" },
      {
        type: "paragraph",
        text: "**Photoshop.** Para criação de marca.",
        textEn: "**Photoshop.** For brand creation.",
      },
    ],
  },
]

export const WORK_TAGS = ["Voluntário", "Profissional", "Freelance", "Pessoal"]

export const TYPE_TAGS = ["Web Dev", "Motion", "Branding", "Redesign"]

export const PROJECT_YEARS = Array.from(
  new Set(
    PROJECTS.map((project) => project.year).filter(
      (year): year is number => year !== undefined
    )
  )
)
  .sort((a, b) => b - a)
  .map(String)
