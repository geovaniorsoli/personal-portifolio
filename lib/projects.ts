export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "stats"; items: string[] }
  | { type: "divider" }
  | {
      type: "image"
      src: string
      alt: string
      aspect?: "wide" | "square" | "portrait"
      objectPosition?: string
    }
  | { type: "image-pair"; images: { src: string; alt: string }[] }
  | { type: "carousel"; images: { src: string; alt: string }[] }
  | { type: "figma"; url: string }
  | { type: "link"; links: { url: string; label: string }[] }

export interface Project {
  id: string
  slug?: string
  title?: string
  subtitle?: string
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
    id: "proesp",
    slug: "proesp",
    title: "PROESP",
    subtitle:
      "Site completo para uma ONG ambiental que protege a Mata Atlântica em Campinas desde 1977.",
    year: 2026,
    image: "/projects/proesp/cover.png",
    tags: ["Web Design", "Desenvolvimento", "Landing Page", "Voluntário"],
    content: [
      { type: "heading", text: "O desafio" },
      {
        type: "paragraph",
        text: "A Associação Protetora da Diversidade das Espécies atua há quase cinco décadas com plantio de mudas, educação ambiental e defesa da Mata de Santa Genebra. Mas não tinha um site à altura dessa história — nem um caminho claro para quem quisesse doar ou virar voluntário.",
      },
      {
        type: "paragraph",
        text: "Para uma ONG, isso é perda direta: sem canal, o apoio que existe não chega.",
      },
      { type: "divider" },
      { type: "heading", text: "O que fiz" },
      {
        type: "paragraph",
        text: "Assumi o projeto do começo ao fim, sozinho — design e código.",
      },
      {
        type: "paragraph",
        text: "**Arquitetura de conteúdo.** Organizei o site em História, Estatuto, Projetos e Transparência. Essa última foi decisão deliberada: em ONG, transparência não é burocracia, é o que converte doador. Quem doa quer saber para onde vai o dinheiro.",
      },
      {
        type: "paragraph",
        text: "**Identidade visual.** Verde da mata como cor condutora, fotografia real das áreas preservadas e tipografia de peso alto nos títulos — passando solidez, coerente com uma instituição de 49 anos.",
      },
      {
        type: "paragraph",
        text: '**Duas ações, sem fricção.** Todo o site conduz a dois destinos: doar via PIX e se inscrever como voluntário, com formulário próprio. O CTA "Seja voluntário/doar" fica fixo na navegação, sempre a um clique.',
      },
      {
        type: "paragraph",
        text: "**Mobile em primeiro lugar.** A maior parte do tráfego chega pelo Instagram, então o site foi construído para o celular antes do desktop.",
      },
      { type: "divider" },
      { type: "heading", text: "Resultado" },
      {
        type: "paragraph",
        text: "A PROESP passou a ter uma presença digital compatível com o trabalho que faz há quase 50 anos — com canais de doação e voluntariado funcionando, e um espaço próprio para prestar contas do que realiza.",
      },
    ],
  },
  {
    id: "ed-ai",
    slug: "ed-ai",
    title: "ed.ai",
    subtitle:
      "Vídeo de lançamento da primeira ferramenta de inteligência artificial do mercado de aftermarket.",
    tool: "After Effects",
    year: 2025,
    image: "/projects/ed-ai/cover.png",
    video: "https://www.youtube.com/watch?v=iBunjZiBGr8",
    tags: ["Motion", "Vídeo", "Profissional"],
    content: [
      {
        type: "stats",
        items: [
          "**7 dias** do briefing à entrega",
          "**8 cenas**",
          "**Sem narração**",
          "**Trilha feita com IA**",
        ],
      },
      { type: "divider" },
      { type: "heading", text: "O desafio" },
      {
        type: "paragraph",
        text: "Apresentar ao mercado o ed.ai — assistente de IA integrado ao sistema Frota, que responde perguntas sobre a frota de veículos do Brasil com dados e insights comparativos.",
      },
      {
        type: "paragraph",
        text: "Três restrições definiram o projeto: o vídeo seria exibido **sem narração**, tendo que se sustentar sozinho; parte do produto **ainda não existia**, mas precisava aparecer para comunicar o potencial da ferramenta; e o prazo era de **7 dias**.",
      },
      { type: "heading", text: "Como resolvi" },
      {
        type: "paragraph",
        text: "*Uma demonstração, não uma explicação.* Estruturei o vídeo como um uso real da ferramenta em 8 cenas: o sistema Frota, o clique no ed.ai, a pergunta sendo digitada, a resposta chegando. Quem assiste entende o produto porque o vê funcionando.",
      },
      {
        type: "paragraph",
        text: "*Ritmo como argumento.* A promessa do ed.ai é fluidez — perguntar e já ter a resposta. Construí a montagem nesse encadeamento, com trilha de jazz autoral produzida com ferramentas de IA. O vídeo que apresenta a primeira IA do aftermarket foi sonorizado com IA.",
      },
      {
        type: "paragraph",
        text: "*Animação como protótipo.* As funcionalidades ainda não construídas foram animadas a partir do design pretendido, permitindo lançar a visão completa do produto antes de ela estar pronta.",
      },
      {
        type: "paragraph",
        text: '*Personalidade nos detalhes.* Cada espera ganhou um carregamento próprio, com linguagem automotiva: "Acelerando", "Aperte os cintos", "Pensando". O que seria tempo morto virou identidade.',
      },
      { type: "heading", text: "Resultado" },
      {
        type: "paragraph",
        text: "Entregue no prazo e usado na apresentação oficial do ed.ai — o primeiro contato do mercado com a ferramenta.",
      },
    ],
  },
  {
    id: "defenda-a-remonta",
    slug: "defenda-a-remonta",
    title: "Defenda a Remonta",
    subtitle:
      "Site de campanha para uma petição ambiental, desenvolvido em uma noite com 5 mil panfletos já impressos.",
    tool: "Canva Sites",
    year: 2025,
    image: "/projects/defenda-a-remonta/cover.png",
    tags: ["Web Design", "Landing Page", "Voluntário"],
    content: [
      {
        type: "paragraph",
        text: "Site de campanha para uma petição ambiental, feito em uma noite para salvar uma tiragem de 5 mil panfletos.",
      },
      {
        type: "stats",
        items: ["**1 noite** de execução", "**5.000 panfletos** já impressos", "**Voluntário**"],
      },
      { type: "divider" },
      { type: "heading", text: "O desafio" },
      {
        type: "paragraph",
        text: "A campanha já tinha ido para a gráfica: 5 mil panfletos impressos com um QR code apontando para o site. Só que o site não existia — quem havia assumido o projeto não conseguiu entregar.",
      },
      {
        type: "paragraph",
        text: "Não havia como reimprimir nem adiar. O material já estava pronto para distribuição, e cada panfleto levaria as pessoas a uma página em branco. Assumi a produção com um prazo de uma noite.",
      },
      { type: "heading", text: "Como resolvi" },
      {
        type: "paragraph",
        text: "*Uma página, um objetivo.* Com o tempo que havia, qualquer estrutura complexa era risco. Concentrei tudo em uma única ação — assinar a petição — com a causa explicada de forma direta acima dela.",
      },
      {
        type: "paragraph",
        text: "*A ferramenta certa para o prazo.* Desenvolvi no Canva Sites. Não era a plataforma ideal em recursos, mas era a que garantia site no ar e QR code funcionando dentro do prazo. Entregar valia mais do que escolher a ferramenta preferida.",
      },
      {
        type: "paragraph",
        text: "*Feito para o celular.* Todo o tráfego viria de pessoas escaneando um panfleto com o telefone na mão, muitas vezes na rua. O layout foi construído para esse cenário: leitura rápida e assinatura em poucos toques.",
      },
      { type: "heading", text: "Resultado" },
      {
        type: "paragraph",
        text: "O site entrou no ar antes da distribuição. Os 5 mil panfletos foram usados como planejado, e a campanha teve o canal de assinaturas funcionando.",
      },
      {
        type: "link",
        links: [{ url: "https://defendaremonta.my.canva.site/", label: "Visitar o site" }],
      },
    ],
  },
  {
    id: "vstore",
    slug: "vstore",
    title: "VStore",
    subtitle:
      "Site de venda de serviços com calculadora de preço automática. Mais de 300 vendas no mês de lançamento.",
    year: 2024,
    image: "/projects/vstore/cover.png",
    tags: ["Web Design", "Desenvolvimento", "Landing Page", "Freelance"],
    content: [
      {
        type: "paragraph",
        text: "Site de venda de serviços para o cenário competitivo de Valorant, com cálculo de preço automático e pedido fechado pelo WhatsApp.",
      },
      {
        type: "stats",
        items: [
          "**300+ vendas** no mês de lançamento",
          "**Calculadora automática**",
          "**Freelance**",
        ],
      },
      { type: "divider" },
      { type: "heading", text: "O desafio" },
      {
        type: "paragraph",
        text: "O cliente vendia serviços de elojob e coaching, mas cada orçamento era feito na mão pelo WhatsApp. O preço variava conforme o elo atual, o elo desejado e os adicionais que o cliente escolhia, e isso tornava o atendimento lento e sujeito a erro.",
      },
      {
        type: "paragraph",
        text: "O site precisava calcular esse valor sozinho e entregar o pedido pronto para o prestador.",
      },
      { type: "heading", text: "O que fiz" },
      {
        type: "paragraph",
        text: "Desenvolvi o site em colaboração direta com o cliente, que conhecia as regras de precificação do mercado.",
      },
      {
        type: "paragraph",
        text: "**Calculadora de preços.** Montei o algoritmo que soma o trajeto entre os elos e aplica o percentual de cada adicional, como seleção de horário, escolha de agentes, stream via Discord e entrega rápida. O total atualiza na hora, conforme a pessoa marca as opções.",
      },
      {
        type: "image",
        src: "/projects/vstore/calculadora.png",
        alt: "Calculadora de preços do VStore",
      },
      {
        type: "paragraph",
        text: "**Pedido direto no WhatsApp.** Ao concluir, o site monta o resumo do pedido e envia para o WhatsApp do prestador. Sem cadastro, sem carrinho, sem gateway de pagamento. O pagamento e o restante do atendimento seguem na conversa, que é como o mercado já funcionava.",
      },
      {
        type: "paragraph",
        text: "**Termos antes de fechar.** Incluí um modal de termos de uso com aceite obrigatório junto do resumo do pedido, deixando as regras de cobrança claras antes da confirmação.",
      },
      {
        type: "image",
        src: "/projects/vstore/carrinho.png",
        alt: "Modal de termos de uso e resumo do pedido do VStore",
      },
      {
        type: "paragraph",
        text: "**Identidade do jogo.** Interface escura com destaque em azul, arte dos elos e tipografia pesada, alinhada ao visual de Valorant e ao público que o cliente atende.",
      },
      { type: "heading", text: "Resultado" },
      {
        type: "paragraph",
        text: "O site passou de 300 vendas no mês de lançamento. O orçamento manual saiu do fluxo e o prestador passou a receber pedidos prontos, com serviço, adicionais e valor já definidos.",
      },
      {
        type: "link",
        links: [{ url: "https://vstore-valorant.vercel.app", label: "Ver site" }],
      },
    ],
  },
  {
    id: "quadro",
    slug: "quadro",
    title: "Quadro",
    subtitle: "Identidade visual de uma marca pessoal, com tom moderno e minimalista.",
    tool: "Figma",
    year: 2024,
    image: "/projects/quadro/cover.png",
    imagePosition: "right",
    tags: ["Branding", "Identidade Visual", "Estudo"],
    content: [
      {
        type: "stats",
        items: ["**Símbolo**", "**Tipografia**", "**Paleta**", "**4 versões** de aplicação"],
      },
      { type: "divider" },
      { type: "heading", text: "O conceito" },
      {
        type: "paragraph",
        text: "Quadro é um projeto pessoal com o posicionamento creative insight. A identidade precisava traduzir isso sem apelar para ornamento: algo direto, geométrico e atemporal.",
      },
      { type: "heading", text: "O símbolo" },
      {
        type: "image",
        src: "/projects/quadro/symbol-light.png",
        alt: "Símbolo da marca Quadro em fundo claro",
        aspect: "square",
      },
      {
        type: "paragraph",
        text: "O Q é construído com duas formas. Um círculo com o miolo vazado, e um ponto que ocupa o lugar do rabo da letra.",
      },
      {
        type: "paragraph",
        text: "Esse ponto é o único elemento em cor de toda a marca, e ele volta na assinatura escrita como o ponto final de Quadro. O símbolo e a palavra usam o mesmo recurso, então funcionam juntos ou separados.",
      },
      {
        type: "image",
        src: "/projects/quadro/symbol-dark.png",
        alt: "Símbolo da marca Quadro em fundo escuro",
        aspect: "square",
      },
      {
        type: "paragraph",
        text: "Desenhei quatro versões para cobrir as aplicações: positiva, negativa, monocromática e sobre fundo escuro. A leitura se mantém em qualquer fundo, e a versão mono resolve os casos de impressão em uma cor.",
      },
      { type: "heading", text: "Tipografia" },
      {
        type: "paragraph",
        text: "Neue Haas Grotesk, em quatro pesos: 55 roman, 65 medium, 75 bold e 95 black.",
      },
      {
        type: "paragraph",
        text: "É uma grotesca neutra, que sustenta o tom minimalista sem competir com o símbolo. Os quatro pesos dão hierarquia suficiente para qualquer peça, do título ao texto de apoio.",
      },
      { type: "heading", text: "Paleta" },
      {
        type: "paragraph",
        text: "Quatro neutros e uma cor de destaque.",
      },
      {
        type: "paragraph",
        text: "Black 1D1D1D, secondary 444444, light D6D6D6 e white F2F2F2 formam a base. O azul 4557FF entra sozinho, sempre em pouca quantidade, marcando o ponto do símbolo e os pontos de atenção nas peças.",
      },
      {
        type: "paragraph",
        text: "A escolha de trabalhar com um único acento mantém a identidade calma e faz o azul valer mais toda vez que aparece.",
      },
      { type: "heading", text: "Aplicação" },
      {
        type: "image",
        src: "/projects/quadro/wordmark-dark.png",
        alt: "Aplicação do logotipo Quadro em fundo escuro",
        objectPosition: "right",
      },
      {
        type: "paragraph",
        text: "O círculo e o quadrado do símbolo viram elementos gráficos nas composições, criando um sistema visual que vai além do logo.",
      },
    ],
  },
  {
    id: "afeb",
    slug: "afeb",
    title: "AFEB",
    subtitle:
      "Identidade em preto e branco para um campeonato escolar de xadrez, com o cavalo integrado ao logotipo.",
    year: 2025,
    image: "/projects/afeb/cover.png",
    tags: ["Branding", "Identidade Visual", "Voluntário"],
    content: [
      {
        type: "stats",
        items: ["**Preto e branco**", "**2 versões** de assinatura", "**Voluntário**"],
      },
      { type: "divider" },
      { type: "heading", text: "O projeto" },
      {
        type: "paragraph",
        text: "A AFEB organiza um campeonato de xadrez para estudantes. Apoiei o projeto voluntariamente, criando a identidade visual.",
      },
      { type: "heading", text: "O símbolo" },
      {
        type: "image",
        src: "/projects/afeb/cover.png",
        alt: "Logotipo horizontal da AFEB com o cavalo integrado à letra A",
      },
      {
        type: "paragraph",
        text: "O cavalo ocupa o espaço entre o A e o FEB, funcionando ao mesmo tempo como letra e como símbolo. Quem lê entende a sigla, e quem olha reconhece o xadrez na mesma imagem.",
      },
      {
        type: "paragraph",
        text: "A peça está dividida ao meio pela linha que separa o positivo do negativo, repetindo dentro da marca a lógica de casa clara e casa escura do tabuleiro.",
      },
      { type: "heading", text: "Preto e branco" },
      {
        type: "image-pair",
        images: [
          { src: "/projects/afeb/cover.png", alt: "Versão positiva do logotipo AFEB" },
          { src: "/projects/afeb/horizontal-dark.png", alt: "Versão negativa do logotipo AFEB" },
        ],
      },
      {
        type: "paragraph",
        text: "Trabalhar só com preto e branco veio do próprio jogo. Além de coerente com o tema, garante que a marca funcione em qualquer aplicação, de camiseta bordada a impressão em uma cor, sem perder força.",
      },
      {
        type: "paragraph",
        text: "O logotipo foi desenhado em pesos altos e formas fechadas, o que mantém a leitura mesmo em tamanhos pequenos, como crachá ou medalha.",
      },
      { type: "heading", text: "Duas assinaturas" },
      {
        type: "image",
        src: "/projects/afeb/vertical.png",
        alt: "Versão vertical do logotipo AFEB",
        aspect: "portrait",
      },
      {
        type: "paragraph",
        text: "Criei uma versão horizontal e uma vertical, com as letras rotacionadas e empilhadas ao lado do cavalo.",
      },
      {
        type: "paragraph",
        text: "A vertical resolve os formatos estreitos, como banner de lateral de quadra, faixa e post em stories, sem precisar reduzir a marca até ela sumir.",
      },
    ],
  },
  {
    id: "bibi",
    slug: "bibi",
    title: "Bibi",
    subtitle:
      "Landing page de catálogo de autopeças, entregue em 7 dias e redesenhada depois com base em dados de uso.",
    year: 2025,
    image: "/projects/bibi/cover.png",
    tags: ["UI/UX", "Web Design", "Landing Page", "Redesign", "Profissional"],
    content: [
      {
        type: "paragraph",
        text: "Landing page para venda de catálogo de autopeças, entregue sob prazo de feira e redesenhada depois com base em dados reais de uso.",
      },
      {
        type: "stats",
        items: ["**7 dias** na primeira entrega", "**Clarity + CS** na análise", "**Duas versões**"],
      },
      { type: "divider" },
      { type: "heading", text: "A primeira entrega" },
      {
        type: "paragraph",
        text: "O Bibi é um catálogo que permite ao mecânico achar a peça certa pela placa do veículo. A landing precisava estar no ar para uma feira do setor, com sete dias de prazo e sem possibilidade de adiar.",
      },
      {
        type: "paragraph",
        text: "Entreguei a página no prazo, com a estrutura completa: apresentação do produto, passo a passo de uso, números do catálogo, planos e dúvidas frequentes.",
      },
      {
        type: "image",
        src: "/projects/bibi/old.png",
        alt: "Primeira versão da landing page do Bibi",
      },
      { type: "heading", text: "O que os dados mostraram" },
      {
        type: "paragraph",
        text: "Depois de um tempo no ar, analisei o comportamento real dos visitantes no Clarity e cruzei com o que o time de CS ouvia de quem cancelava.",
      },
      {
        type: "paragraph",
        text: "Dois problemas apareceram. As pessoas não entendiam o produto antes de assinar, porque a página descrevia a ferramenta sem mostrar ela funcionando. E a escolha entre três planos, com uma tabela comparando funcionalidades, transferia para o visitante uma decisão que ele não tinha informação para tomar.",
      },
      {
        type: "paragraph",
        text: "O resultado era assinatura feita com expectativa errada, que virava cancelamento.",
      },
      { type: "heading", text: "O redesenho" },
      {
        type: "image",
        src: "/projects/bibi/cover.png",
        alt: "Nova versão da landing page do Bibi",
      },
      {
        type: "paragraph",
        text: "**Experimentar antes de decidir.** Coloquei o campo de busca por placa no topo da página. A pessoa usa o produto antes de assinar, então entende o que está comprando.",
      },
      {
        type: "paragraph",
        text: '**Um plano em vez de três.** Substituí a tabela comparativa por uma oferta única com sete dias grátis. A decisão saiu de "qual dos três serve para mim" para "vale a pena testar", que é uma pergunta muito mais fácil de responder.',
      },
      {
        type: "paragraph",
        text: "**Mostrar em vez de descrever.** Entraram um carrossel com as categorias de peça, as marcas parceiras com logo, um passo a passo em quatro etapas e um vídeo do produto em uso.",
      },
      {
        type: "paragraph",
        text: "**Menos texto, mais hierarquia.** Reorganizei o conteúdo para que a informação essencial aparecesse primeiro e o detalhe ficasse acessível a quem quisesse, nas dúvidas frequentes.",
      },
      { type: "heading", text: "O que fica" },
      {
        type: "paragraph",
        text: "O projeto passou pelo ciclo completo: entregar sob pressão, medir o comportamento real, ouvir quem atende o cliente e refazer com base no que os dados mostraram.",
      },
      {
        type: "link",
        links: [
          { url: "https://www.bibipecas.com.br", label: "Ver primeira versão" },
          { url: "https://bibi-web-two.vercel.app", label: "Ver nova versão" },
        ],
      },
    ],
  },
  {
    id: "artesan-burguer",
    slug: "artesan-burguer",
    title: "Artesan Burguer",
    subtitle:
      "Motion tipográfico do slogan da marca, feito como freelance para uma agência de publicidade.",
    tool: "After Effects",
    year: 2024,
    image: "https://img.youtube.com/vi/Kc5kmaR0rBI/maxresdefault.jpg",
    video: "https://youtu.be/Kc5kmaR0rBI",
    tags: ["Motion", "Vídeo", "Freelance"],
    content: [
      {
        type: "paragraph",
        text: "Peça de motion tipográfico construída em cima do slogan da marca.",
      },
      {
        type: "stats",
        items: ["**Freelance** para agência", "**Motion tipográfico**", "**After Effects**"],
      },
      { type: "divider" },
      { type: "heading", text: "O projeto" },
      {
        type: "paragraph",
        text: "Trabalho freelance para uma agência de publicidade, atendendo a Artesan Burguer. A peça tinha um escopo bem definido: dar movimento ao slogan e à tipografia da marca, sem inventar uma linguagem nova.",
      },
      { type: "heading", text: "Como resolvi" },
      {
        type: "paragraph",
        text: "**A tipografia como protagonista.** Sem personagem, sem cenário, sem locução. A leitura acontece pela forma como as palavras entram, se compõem e saem de quadro.",
      },
      {
        type: "paragraph",
        text: "**Respeitar a marca.** Trabalhar dentro de uma identidade já existente é diferente de criar do zero. A animação precisava soar como a marca, então parti dos elementos que a agência já usava e dei movimento a eles.",
      },
      {
        type: "paragraph",
        text: "**Ritmo de peça publicitária.** Curto, direto e feito para funcionar em feed, onde o vídeo tem poucos segundos para prender a atenção.",
      },
      { type: "heading", text: "Resultado" },
      {
        type: "paragraph",
        text: "A peça foi entregue à agência e usada na comunicação da marca.",
      },
      {
        type: "link",
        links: [{ url: "https://youtu.be/Kc5kmaR0rBI", label: "Ver vídeo" }],
      },
    ],
  },
  {
    id: "intelliauto",
    slug: "intelliauto",
    title: "Intelliauto",
    subtitle:
      "Refatoração completa de um sistema de catálogo automotivo, com nova infraestrutura e interface reconstruída sobre o design system.",
    tool: "Figma",
    year: 2026,
    image: "/projects/intelliauto/flow-map.png",
    tags: ["UI/UX", "Web Design", "Redesign", "Interface/App", "Profissional"],
    content: [
      {
        type: "paragraph",
        text: "Refatoração completa do sistema principal, com nova stack e interface reconstruída sobre o design system.",
      },
      {
        type: "stats",
        items: ["**Reconstrução completa**", "**Design system** aplicado", "**Modo claro e escuro**"],
      },
      { type: "divider" },
      { type: "heading", text: "O contexto" },
      {
        type: "paragraph",
        text: "Um cliente externo pediu mudanças nas regras do sistema. Ao avaliar o esforço, ficou claro que refazer compensava mais do que adaptar: dava para trocar a infraestrutura, adotar linguagens mais otimizadas e, junto disso, resolver a interface, que estava defasada.",
      },
      {
        type: "paragraph",
        text: "Assumi a parte de design, redesenhando o produto inteiro com base no design system que já era o padrão da empresa.",
      },
      {
        type: "image",
        src: "/projects/intelliauto/flow-map.png",
        alt: "Mapa de fluxos do Intelliauto no Figma",
      },
      {
        type: "paragraph",
        text: "O escopo cobriu o sistema todo: catálogo, cadastro de produtos e veículos, características, gestão, relatórios e busca avançada.",
      },
      { type: "heading", text: "O que mudou" },
      {
        type: "image-pair",
        images: [
          { src: "/projects/intelliauto/veiculo-old.png", alt: "Cadastro de veículo antes do redesenho" },
          { src: "/projects/intelliauto/veiculo-new.png", alt: "Cadastro de veículo depois do redesenho" },
        ],
      },
      {
        type: "paragraph",
        text: "**Campos com significado.** O cadastro antigo mostrava mais de vinte campos seguidos sob um único título. Agrupei tudo em blocos nomeados, como Montadora e Origem, Veículo, Configurações, Produção e Códigos Externos. A informação é a mesma, mas agora o usuário entende o que está preenchendo e por quê.",
      },
      {
        type: "paragraph",
        text: "**Navegação com hierarquia.** O menu lateral era uma lista longa e plana. Reorganizei em categorias, com breadcrumb no topo, para que a pessoa saiba onde está dentro de um sistema grande.",
      },
      {
        type: "paragraph",
        text: '**Botões que dizem para onde vão.** No lugar de um "Gravar" genérico, as ações de avanço passaram a nomear o próximo passo, como "Motor" e "Ir para Referências Cruzadas". O formulário virou um fluxo.',
      },
      {
        type: "paragraph",
        text: "**Menos abas, mais agrupamento.** Consolidei abas que dividiam demais o cadastro, reduzindo o número de etapas sem esconder informação.",
      },
      {
        type: "image-pair",
        images: [
          { src: "/projects/intelliauto/produto-old.png", alt: "Cadastro de produto antes do redesenho" },
          { src: "/projects/intelliauto/produto-new.png", alt: "Cadastro de produto depois do redesenho" },
        ],
      },
      {
        type: "paragraph",
        text: "**Modo claro e escuro.** O design system já previa os dois temas por variável, então o sistema nasceu com suporte a ambos, além de busca global e seletor de idioma no topo.",
      },
      { type: "heading", text: "O que fica" },
      {
        type: "paragraph",
        text: "A refatoração mostrou o design system funcionando no cenário mais exigente possível: reconstruir um produto inteiro, mantendo consistência entre dezenas de telas e reduzindo o tempo de criação de cada uma.",
      },
    ],
  },
  {
    id: "design-system-fraga",
    slug: "design-system-fraga",
    title: "Design System Fraga",
    subtitle:
      "75 componentes e 8 famílias de cor com acessibilidade AA/AAA — hoje é o padrão visual da empresa.",
    year: 2025,
    image: "/projects/design-system-fraga/cover.png",
    tags: ["Figma", "Profissional", "Design"],
    content: [
      {
        type: "paragraph",
        text: "Nasceu de uma dor real. A empresa não tinha padronização nem identidade visual própria — cada projeto reinventava a roda.",
      },
      {
        type: "paragraph",
        text: "O que construí. Um design system completo, do zero e por iniciativa própria: 75 componentes, 8 famílias de cor com escala de 50 a 900, e contraste AA/AAA documentado em cada token — acessibilidade validada na origem, não conferida depois.",
      },
      {
        type: "paragraph",
        text: "Onde chegou. Hoje é o padrão visual da Fraga, adotado em todos os novos projetos, incluindo a refatoração completa do sistema principal.",
      },
      {
        type: "carousel",
        images: [
          { src: "/projects/design-system-fraga/badges.png", alt: "Badges do design system Fraga" },
          { src: "/projects/design-system-fraga/buttons.png", alt: "Botões do design system Fraga" },
          { src: "/projects/design-system-fraga/inputs.png", alt: "Inputs do design system Fraga" },
          { src: "/projects/design-system-fraga/tabs.png", alt: "Tabs do design system Fraga" },
        ],
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        type: "image",
        src: "/projects/design-system-fraga/colors.png",
        alt: "Famílias de cor do design system Fraga",
      },
      {
        type: "paragraph",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "image",
        src: "/projects/design-system-fraga/in-action.png",
        alt: "Design system Fraga em uso no Figma",
      },
      {
        type: "figma",
        url: "https://www.figma.com/design/CvJttOmyPhcW9F3iZzXtPf/Design-System-Fraga?node-id=1-2&t=PbxLXtW8lrCM27xf-1",
      },
    ],
  },
  { id: "proj-1", tags: ["Landing Page", "Web Design"] },
  { id: "proj-2", tags: ["UI/UX", "Freelancer"] },
  { id: "proj-3", tags: ["Voluntário", "Web Design"] },
]

export const PROJECT_TAGS = Array.from(
  new Set(PROJECTS.flatMap((project) => project.tags))
)
