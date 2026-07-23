import {
  AddressBook,
  Article,
  ArrowsClockwise,
  Bell,
  Binoculars,
  BookOpen,
  CalendarBlank,
  CalendarCheck,
  CalendarPlus,
  ChalkboardTeacher,
  ChartBar,
  ChartLineUp,
  ChatCircle,
  ChatCircleText,
  CheckCircle,
  Clock,
  ClockCounterClockwise,
  DeviceMobile,
  EnvelopeSimple,
  Eye,
  Faders,
  FileArrowUp,
  FileDoc,
  FileMagnifyingGlass,
  FileText,
  Flag,
  Funnel,
  Globe,
  HandCoins,
  Headset,
  Image,
  Lightning,
  LinkSimple,
  MagnifyingGlass,
  Megaphone,
  Money,
  Package,
  PaperPlaneTilt,
  PencilLine,
  Receipt,
  Robot,
  Scales,
  Shield,
  ShieldCheck,
  Signature,
  Sparkle,
  Stack,
  Stamp,
  Storefront,
  Tag,
  Target,
  TrendUp,
  Trophy,
  Truck,
  UserFocus,
  UserList,
  UsersThree,
  Vault,
  VideoCamera,
  Wallet,
  WhatsappLogo,
} from '@phosphor-icons/react';
import toolCampanhas from '../../assets/tool-campanhas.jpg';
import toolComentarios from '../../assets/tool-comentarios.jpg';
import toolBlog from '../../assets/tool-blog.jpg';
import toolTrafego from '../../assets/tool-trafego.jpg';
import toolConcorrencia from '../../assets/tool-concorrencia.jpg';
import toolProposta from '../../assets/tool-proposta.jpg';
import toolOutbound from '../../assets/tool-outbound.jpg';
import toolSdr from '../../assets/tool-sdr.jpg';
import toolFluxo from '../../assets/tool-fluxo.jpg';
import toolEscalas from '../../assets/tool-escalas.jpg';
import toolWiki from '../../assets/tool-wiki.jpg';
import toolTriagem from '../../assets/tool-triagem.jpg';
import toolContratos from '../../assets/tool-contratos.jpg';
import avatarMaky from '../../assets/avatar-maky.png';
import avatarWaz from '../../assets/avatar-waz.png';
import avatarFin from '../../assets/avatar-fin.png';
import avatarOpy from '../../assets/avatar-opy-new.png';
import avatarJuri from '../../assets/avatar-juri-new.png';
import avatarPipo from '../../assets/avatar-pipo-new.png';
import enAgents from '../../i18n/agents/en';
import esAgents from '../../i18n/agents/es';

/**
 * Skills:
 * - `label` is shown on the card; `Icon` is the leading Phosphor icon.
 * - `icon: false` renders a card-only pill without icons ("Ver mais").
 * - `cardHidden: true` hides the tool from the card (modal-only).
 * - `modal` carries the rich per-tool modal content (title, subtitle,
 *   quote, feature cards and the "para quem é" block). Tools without it
 *   fall back to a simple video modal.
 * `accent` tints each agent's modal (header dot, quote bar, section
 *   labels, feature icons and the "para quem é" gradient).
 * `modalSegment` overrides `segment` in the modal header when longer.
 */
const AGENTS = [
  {
    name: 'Maky',
    segment: 'Marketing',
    modalSegment: 'Marketing & Conteúdo',
    accent: '#f45dac',
    description:
      'Sua estrategista de marketing. Cria conteúdo, entende o mercado e mantém sua marca sempre presente.',
    avatar: { src: avatarMaky },
    skills: [
      {
        label: 'Análise concorrentes',
        Icon: Binoculars,
        image: toolConcorrencia,
        modal: {
          title: 'Análise de Concorrentes',
          subtitle:
            'Veja o que o concorrente posta, o que performa, e transforme isso em post seu com um clique.',
          quote:
            '“Ficar de olho no concorrente”, na prática, é entrar no Instagram de um por um, no olho, sem registro e sem comparação. As ferramentas de social listening que resolvem isso são caras e feitas para agência, não para quem toca uma confeitaria e vive no WhatsApp.',
          features: [
            {
              Icon: CalendarBlank,
              title: 'Monitoramento diário',
              text: 'Escolha os perfis e acompanhe frequência, formatos, engajamento e crescimento de seguidores, sem entrar em conta por conta.',
            },
            {
              Icon: ChartBar,
              title: 'Tabela comparativa',
              text: 'Você vs. concorrência lado a lado, com evolução ao longo do tempo e agrupamento por tipo de concorrente.',
            },
            {
              Icon: Trophy,
              title: 'Melhores posts',
              text: 'Ranking dos conteúdos que mais performaram no segmento, para enxergar o que está funcionando.',
            },
            {
              Icon: Sparkle,
              title: 'Um clique vira post',
              text: 'Achou um post que bombou? A Maky rascunha uma versão própria e original no seu calendário de conteúdo.',
            },
          ],
          forWho: {
            text: 'Para quem depende do Instagram para vender e sente que está atrás: food, varejo local e serviços visuais. Especialmente forte para quem já usa a Maky.',
            note: 'Escopo honesto: Instagram-only e coleta prospectiva. Os dados começam a ser capturados a partir do momento em que o concorrente é adicionado (é assim que a Meta funciona para perfis de terceiros). Não prometa “histórico dos últimos 6 meses”.',
          },
        },
      },
      {
        label: 'Blog / AEO',
        Icon: Article,
        image: toolBlog,
        modal: {
          title: 'Geração de Blog (AEO)',
          subtitle:
            'Faça sua empresa aparecer nas respostas do ChatGPT, Claude e Gemini.',
          quote:
            'O jogo de ser encontrado mudou. Cada vez mais gente pergunta ao ChatGPT “qual a melhor confeitaria para bolo de casamento?”, e a IA responde citando algumas empresas. Se a sua não tem presença de conteúdo na web, ela simplesmente não existe para esses modelos: nunca será lembrada nem recomendada.',
          features: [
            {
              Icon: Stack,
              title: 'Geração em escala',
              text: 'Não é um texto por vez: o módulo produz muitos textos para criar volume de presença, e volume é o que move o ponteiro no AEO.',
            },
            {
              Icon: Package,
              title: 'Otimizado para a IA',
              text: 'A régua de sucesso é aparecer na resposta do ChatGPT, Claude e Gemini, não quantas pessoas leram o post.',
            },
            {
              Icon: Globe,
              title: 'Pegada digital da marca',
              text: 'Os textos constroem o que os modelos passam a associar ao seu negócio: o que faz, onde atua, produtos e contexto.',
            },
            {
              Icon: Flag,
              title: 'Largue na frente',
              text: 'Quem constrói presença nas LLMs agora vira a resposta-padrão; quem espera corre atrás depois que o concorrente já chegou.',
            },
          ],
          forWho: {
            text: 'Para qualquer negócio que queira ser descoberto e recomendado, especialmente quem compete por “o melhor / mais próximo / mais confiável” da categoria: food, serviços locais, comércio e profissionais que vivem de indicação.',
            note: 'Parte da venda é educação de mercado: o cliente muitas vezes nem sabe que a busca migrou para a IA. É uma dor que você cria na conversa e resolve na sequência.',
          },
        },
      },
      {
        label: 'Tráfego pago',
        Icon: ChartLineUp,
        image: toolTrafego,
        modal: {
          title: 'Mídia Paga',
          subtitle:
            'Tráfego pago no Google sem virar especialista: a Maky monta, você só aprova.',
          quote:
            'Anúncio no Google é um dos caminhos mais diretos para vender mais, mas é uma porta fechada para a maioria das PMEs: ou o dono não sabe por onde começar, ou paga caro numa agência, ou tenta sozinho, queima verba e desiste achando que “não funciona”.',
          features: [
            {
              Icon: Sparkle,
              title: 'Campanha criada com IA',
              text: 'A Maky estrutura a campanha inteira e cuida do anúncio, tirando você da barreira técnica do Google Ads.',
            },
            {
              Icon: ShieldCheck,
              title: 'Você aprova antes de publicar',
              text: 'Nada vai ao ar sem o seu “vai”. Você revisa e aprova antes de qualquer verba ser gasta, com controle e segurança sobre o investimento.',
            },
            {
              Icon: TrendUp,
              title: 'Foco em vendas',
              text: 'O objetivo é direto: colocar o negócio na frente de quem está pesquisando o que você vende e converter em mais vendas.',
            },
            {
              Icon: Megaphone,
              title: 'Maky como gestora de tráfego',
              text: 'Sem aprender a plataforma nem contratar ninguém: a Maky assume esse papel com o contexto da marca que já carrega.',
            },
          ],
          forWho: {
            text: 'Para negócios que dependem de atrair cliente novo e hoje não fazem (ou fazem mal) tráfego pago: food, comércio local, serviços, e-commerce de SMB. Forte para quem sente que “só o orgânico não dá conta”.',
            note: 'Resolve as duas objeções clássicas de uma vez: a complexidade (a Maky faz por você) e o medo de queimar dinheiro (nada vai ao ar sem a sua aprovação).',
          },
        },
      },
      {
        label: 'Campanhas',
        Icon: CalendarPlus,
        image: toolCampanhas,
        modal: {
          title: 'Campanhas',
          subtitle:
            'A Maky cria e agenda seus posts no Instagram: o feed anda sozinho.',
          quote:
            'Todo mundo sabe que precisa “postar no Instagram”, mas na prática não acontece com constância. O dono não tem tempo, nem repertório de design e copy, e posta quando lembra, deixando o feed abandonado, sem estratégia. E constância é justamente o que faz diferença no Instagram.',
          features: [
            {
              Icon: Sparkle,
              title: 'Criação com IA',
              text: 'A Maky produz a publicação, imagem e texto, a partir do contexto da marca que já carrega. Nada de página em branco.',
            },
            {
              Icon: Image,
              title: 'Estático e carrossel',
              text: 'Cobre os dois formatos mais usados no feed: o post único e o carrossel de múltiplas imagens.',
            },
            {
              Icon: CalendarCheck,
              title: 'Agendamento',
              text: 'A publicação é programada para sair na hora certa, sem precisar lembrar de postar nem estar na frente do celular.',
            },
            {
              Icon: Stack,
              title: 'Conversa com o ecossistema',
              text: 'O conteúdo pode nascer do calendário de posts, de um insight da Análise de Concorrentes ou da base de Marca.',
            },
          ],
          forWho: {
            text: 'Para negócios que vivem de presença no Instagram e sofrem para manter constância: food, varejo local e serviços com apelo visual. Forte para quem “anda sumido” e quer resolver sem contratar social media nem virar designer.',
            note: 'A maioria das PMEs não tem problema de saber que precisa postar; tem problema de execução. Este módulo ataca a execução: a Maky cria e agenda, e o feed passa a andar sozinho.',
          },
        },
      },
      {
        label: 'Comentários',
        Icon: ChatCircleText,
        image: toolComentarios,
        modal: {
          title: 'Automação de Comentários',
          subtitle:
            'Comentou no post, recebe DM automática. Do comentário à conversa onde a venda acontece.',
          quote:
            'Comentário em post é intenção de compra parada esperando resposta. Alguém comenta “quanto custa?”, “quero!”, e ou ninguém responde, ou responde horas depois, quando o interesse já esfriou. Acompanhar comentário por comentário na mão é impossível, e a venda vaza todos os dias.',
          features: [
            {
              Icon: ChatCircle,
              title: 'Resposta automática',
              text: 'O post não fica com comentário sem resposta: a interação acontece na hora, o que também ajuda o alcance do conteúdo.',
            },
            {
              Icon: PaperPlaneTilt,
              title: 'Comentário vira DM',
              text: 'Quem comenta recebe uma mensagem no direct automaticamente, migrando da vitrine (o post) para o balcão (a conversa), onde se fecha.',
            },
            {
              Icon: Funnel,
              title: 'Regras configuráveis',
              text: 'Dispare a partir de qualquer comentário, ou só de quem menciona um assunto específico, filtrando quem tem intenção real.',
            },
            {
              Icon: TrendUp,
              title: 'Escala comprovada',
              text: 'Funciona em volumes impossíveis de responder na mão. Já é um dos módulos de maior sucesso, inclusive com clientes grandes.',
            },
          ],
          forWho: {
            text: 'Para negócios com movimento no Instagram e comentários rolando: food, varejo, infoprodutos, serviços. Forte para quem sente que “chega muito comentário e a gente não dá conta” e quer replicar o “comenta que te mando no direct” das marcas grandes.',
            note: 'Um dos módulos mais fáceis de vender: a dor é óbvia (todo mundo já perdeu venda por não responder), a mecânica já é desejada, e o sucesso com clientes grandes é prova social pura.',
          },
        },
      },
    ],
  },
  {
    name: 'Waz',
    segment: 'Vendas e Atendimento',
    accent: '#2dc76a',
    description:
      'Transforma conversas em contratos. Prospecta, negocia e atende seus clientes 24/7.',
    avatar: { src: avatarWaz },
    comingSoon: true,
    skills: [
      {
        label: 'Outbound WhatsApp',
        modalLabel: 'Prospecção outbound Whatsapp e ligação',
        Icon: WhatsappLogo,
        image: toolOutbound,
        modal: {
          title: 'Disparo de WhatsApp',
          subtitle:
            'Fale com a base inteira de uma vez: oficial, escalável e sem risco de bloqueio.',
          quote:
            'Falar com todos os clientes hoje é feito de três jeitos ruins: um a um na mão (não escala), lista de transmissão limitada e trabalhosa, ou ferramenta pirata que derruba o número. O Disparo resolve os três, rodando sobre a API oficial da Meta.',
          features: [
            {
              Icon: CheckCircle,
              title: 'Oficial e sem ban',
              text: 'Campanhas em massa sobre a API oficial da Meta, com templates aprovados, mantendo o número saudável.',
            },
            {
              Icon: Target,
              title: 'Listas segmentadas',
              text: 'Separe a base em grupos (ativos, inativos, VIPs, por bairro) e direcione cada campanha só para quem interessa.',
            },
            {
              Icon: ChatCircle,
              title: 'Marketing e utilidade',
              text: 'Promoções e novidades, ou avisos e comunicados (mudança de horário, fechamento): cada intenção no seu formato.',
            },
            {
              Icon: Clock,
              title: 'Agendamento e entrega',
              text: 'Programe a campanha para a melhor hora e acompanhe o status de entrega contato a contato.',
            },
          ],
          forWho: {
            text: 'Para negócios com base no WhatsApp que precisam comunicar em volume: food, delivery, confeitaria, varejo local. Quem hoje “manda promoção no grupo”.',
            note: 'O diferencial não é mandar em massa (qualquer pirata faz, até o número cair); é fazer certo, oficial e dentro do mesmo lugar onde já roda a operação Squad. A resposta cai no WhatsApp e é tratada pelos agentes.',
          },
        },
      },
      {
        label: 'SDR',
        modalLabel: 'SDR no Whatsapp',
        Icon: Headset,
        image: toolSdr,
        modal: {
          title: 'Atendimento Automático',
          subtitle:
            'Atendimento no automático, mas com o tom, as regras e o conhecimento da sua empresa.',
          quote:
            'Cliente que manda mensagem quer resposta rápida: cada minuto de demora é venda que esfria. Mas a PME não tem gente para responder o dia todo, muito menos de madrugada ou no fim de semana. O dono responde do próprio celular, atrasado e sem padrão; e quando delega, cada um responde de um jeito, com informação errada ou fora do tom.',
          features: [
            {
              Icon: Clock,
              title: 'Responde na hora, sempre',
              text: 'As conversas são atendidas na hora, sem depender de alguém disponível, a qualquer momento do dia, inclusive de madrugada e no fim de semana.',
            },
            {
              Icon: Faders,
              title: 'Do jeito que você quer',
              text: 'O negócio configura o tom de voz, o que pode e o que não pode dizer, as regras da casa. A resposta reflete a identidade da marca, não um padrão genérico.',
            },
            {
              Icon: CheckCircle,
              title: 'Consistência',
              text: 'Todo cliente recebe o mesmo nível de atendimento, sempre no padrão definido, sem depender de quem está do outro lado num dado momento.',
            },
            {
              Icon: Stack,
              title: 'Fecha o ciclo',
              text: 'O cliente que caiu numa conversa por um comentário, um disparo ou um anúncio é atendido aqui, do jeito certo, ligando atrair e converter.',
            },
          ],
          forWho: {
            text: 'Para praticamente todo negócio que recebe mensagem de cliente: food, comércio, serviços, e-commerce. Forte para quem “perde cliente por demora”, para quem responde tudo no próprio celular sem dar conta, e para quem tem várias pessoas atendendo e sofre com falta de padrão.',
            note: 'É atendimento automático que não parece automático: não é uma árvore de respostas fixas, é a personalidade e o conhecimento da marca respondendo. Um módulo de base, que quase qualquer cliente entende e quer.',
          },
        },
      },
      {
        label: 'Gerador de propostas',
        modalLabel: 'Gerador de propostas comerciais',
        Icon: FileText,
        image: toolProposta,
        modal: {
          title: 'Proposta Comercial',
          subtitle:
            'Da página em branco à proposta pronta em minutos, com a linguagem da sua marca.',
          quote:
            'Montar proposta trava a venda: copiar a antiga, trocar o nome, ajustar preço na mão, formatar slide. Quanto mais demora, mais frio fica o lead, e proposta às pressas sai com erro e visual pobre bem na hora da decisão.',
          features: [
            {
              Icon: Robot,
              title: 'IA cria do zero',
              text: 'A IA escreve e estrutura a proposta inteira: texto, estrutura e apresentação. Você sai do branco direto para revisar.',
            },
            {
              Icon: Image,
              title: 'Slides ou documento',
              text: 'Templates Squad em dois formatos: apresentação visual para reunião ou documento formal de leitura.',
            },
            {
              Icon: Tag,
              title: 'Seu próprio modelo',
              text: 'Suba o modelo que você já usa e a IA cria seguindo aquele padrão, mantendo o tom e a cara da empresa.',
            },
            {
              Icon: Money,
              title: 'Desconto flexível',
              text: 'Abata por produto ou no preço final, na hora, do jeito que a conversa pedir, sem recalcular na mão.',
            },
          ],
          forWho: {
            text: 'Para quem vende via proposta e sente o processo lento ou artesanal: serviços, B2B de SMB, ticket médio/alto. Forte para quem já tem um modelo próprio e não quer abrir mão dele.',
            note: 'O ganho não é só velocidade; é velocidade sem perder identidade. Menos atrito entre “cliente pediu” e “proposta na mão dele” é diretamente mais venda.',
          },
        },
      },
      {
        label: 'CRM',
        Icon: AddressBook,
        comingSoon: true,
        modal: {
          title: 'CRM',
          subtitle:
            'Do primeiro contato ao pós-venda, toda a jornada do cliente num lugar só.',
          quote:
            'Lead no WhatsApp, negociação na cabeça, cliente antigo esquecido. Sem um lugar pra organizar isso, oportunidade se perde no meio do caminho e ninguém sabe em que pé está cada conversa.',
          features: [
            {
              Icon: Funnel,
              title: 'Gestão de leads',
              text: 'Organize e acompanhe cada lead dentro do app, com visão clara de onde cada um está no funil.',
            },
            {
              Icon: ArrowsClockwise,
              title: 'Vendas → pós-venda',
              text: 'Leva o cliente de forma fluida da área de vendas para o pós-venda, sem perder o histórico.',
            },
            {
              Icon: Headset,
              title: 'Atendimento junto',
              text: 'Conecta o atendimento à jornada, mantendo tudo sobre o cliente no mesmo lugar.',
            },
            {
              Icon: CheckCircle,
              title: 'Nada se perde',
              text: 'Cada conversa e etapa fica registrada, então nenhuma oportunidade some por falta de acompanhamento.',
            },
          ],
        },
      },
      {
        label: 'Coach de Vendas',
        Icon: ChalkboardTeacher,
        comingSoon: true,
        modal: {
          title: 'Coach de Vendas',
          subtitle:
            'Treine seu vendedor de verdade com roleplay, gravação e análise de reuniões.',
          quote:
            'Vendedor aprende na base do erro, queimando lead real. Sem treino e sem feedback do que rolou nas reuniões, a performance do time fica no achismo e demora pra evoluir.',
          features: [
            {
              Icon: ChalkboardTeacher,
              title: 'Roleplay de reunião',
              text: 'Simula uma reunião de vendas com o vendedor pra treinar antes de encarar o cliente real.',
            },
            {
              Icon: VideoCamera,
              title: 'Grava reuniões',
              text: 'Registra as reuniões reais do time pra rever e estudar depois, sem depender da memória.',
            },
            {
              Icon: ChartLineUp,
              title: 'Análise de performance',
              text: 'Analisa as conversas e aponta onde o vendedor pode melhorar, com base concreta.',
            },
            {
              Icon: TrendUp,
              title: 'Time mais afiado',
              text: 'Transforma treino e feedback em rotina, elevando a performance de venda de forma contínua.',
            },
          ],
        },
      },
      {
        label: 'Busca de leads',
        modalLabel: 'Busca e Enriquecimento de Leads',
        Icon: UserFocus,
        comingSoon: true,
        modal: {
          title: 'Busca e Enriquecimento de Leads',
          subtitle:
            'Chegue na reunião sabendo tudo, com leads prontos e enriquecidos pro seu vendedor.',
          quote:
            'Seu vendedor liga no escuro. Sem saber quem é o lead, do que a empresa precisa nem por onde começar, a conversa começa fria e a venda fica mais difícil do que precisava ser.',
          features: [
            {
              Icon: Globe,
              title: 'Leads da internet',
              text: 'Cria listas de leads a partir de pesquisas na web, sem garimpar contato a contato na mão.',
            },
            {
              Icon: FileArrowUp,
              title: 'Importe sua planilha',
              text: 'Já tem uma base? Suba sua própria planilha de leads e enriqueça a partir dela.',
            },
            {
              Icon: Stack,
              title: 'Enriquecimento essencial',
              text: 'Preenche cada lead com as informações que o vendedor precisa pra abordar com contexto.',
            },
            {
              Icon: UserFocus,
              title: 'Vendedor preparado',
              text: 'Entrega o máximo de informação relevante antes do contato, deixando a abordagem simples e prática.',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Fin',
    segment: 'Finanças',
    accent: '#47bff1',
    description:
      'Mantém suas contas em ordem. Acompanha entradas, saídas e a saúde financeira do seu negócio.',
    avatar: { src: avatarFin },
    comingSoon: true,
    skills: [
      {
        label: 'Fluxo de caixa',
        Icon: Wallet,
        image: toolFluxo,
        modal: {
          title: 'Fluxo de Caixa',
          subtitle:
            'O que entrou, o que saiu, quanto sobrou e quanto deve entrar no próximo mês.',
          quote:
            'A saúde financeira da maioria das PMEs mora num lugar frágil: uma planilha desatualizada, um caderno ou a memória do dono. Ele não sabe de verdade quanto lucra, não enxerga para onde o dinheiro vai e vive no escuro sobre o mês que vem, o que leva a decisão ruim e susto no fim do mês.',
          features: [
            {
              Icon: Stack,
              title: 'Pagamentos centralizados',
              text: 'Todos os pagamentos dos clientes num só lugar, em vez de espalhados em planilhas, apps e anotações soltas.',
            },
            {
              Icon: ChartBar,
              title: 'Entradas, saídas e lucro',
              text: 'A visão essencial da saúde do negócio, clara e imediata: quanto entra, quanto sai e o que efetivamente sobra.',
            },
            {
              Icon: TrendUp,
              title: 'Projeção do próximo mês',
              text: 'Uma estimativa de quanto deve entrar nos próximos meses, para planejar compras, fôlego de caixa e crescimento com previsibilidade.',
            },
          ],
          forWho: {
            text: 'Para todo negócio que fatura mas não tem controle financeiro estruturado: food, comércio, serviços, autônomos. Forte para quem já cresceu um pouco e sente que “entra dinheiro mas não sei para onde vai”.',
            note: 'Amarra a operação: de um lado a Squad ajuda a faturar (marketing, disparo, tráfego), do outro ajuda a controlar o que já entra. É o módulo de organização e paz de espírito.',
          },
        },
      },
      {
        label: 'Emissão de NF',
        Icon: Receipt,
        comingSoon: true,
        modal: {
          title: 'Emissão de NF',
          subtitle:
            'Emita notas fiscais sem sair do app: o financeiro fica mais leve.',
          quote:
            'Emitir nota é aquela burocracia que trava o dia: sistema separado, processo confuso e sempre a sensação de que dá pra errar. Pra maioria das PMEs, é dor de cabeça garantida todo mês.',
          features: [
            {
              Icon: Receipt,
              title: 'NF pelo app',
              text: 'Emite notas fiscais direto na plataforma, sem pular pra outro sistema.',
            },
            {
              Icon: Wallet,
              title: 'Financeiro apoiado',
              text: 'Tira parte do peso burocrático da área financeira, integrando a emissão à operação.',
            },
            {
              Icon: CheckCircle,
              title: 'Menos erro',
              text: 'Processo mais simples e centralizado reduz a chance de erro na emissão.',
            },
            {
              Icon: Stack,
              title: 'Tudo integrado',
              text: 'A emissão vive junto do resto do financeiro do negócio, num fluxo só.',
            },
          ],
        },
      },
      {
        label: 'Links de pagamentos',
        Icon: LinkSimple,
        comingSoon: true,
        modal: {
          title: 'Links de Pagamento',
          subtitle:
            'Gere um link e receba na hora, sem passar cartão nem esperar boleto compensar.',
          quote:
            'Cobrar cliente fora da loja física é sempre um problema: pedir dado de cartão por mensagem é arriscado, boleto demora a compensar, e Pix manual exige copiar chave e conferir comprovante na mão. O dono perde tempo e ainda passa insegurança pro cliente.',
          features: [
            {
              Icon: LinkSimple,
              title: 'Link em segundos',
              text: 'Gere um link de pagamento pra qualquer venda, sem precisar de maquininha nem sistema à parte.',
            },
            {
              Icon: CheckCircle,
              title: 'Várias formas de pagamento',
              text: 'O cliente escolhe Pix, cartão ou boleto na hora de pagar, sem você precisar negociar a forma.',
            },
            {
              Icon: Bell,
              title: 'Confirmação automática',
              text: 'Assim que o pagamento cai, o status atualiza sozinho, sem precisar checar extrato ou pedir comprovante.',
            },
            {
              Icon: Money,
              title: 'Recebimento mais rápido',
              text: 'Menos fricção pro cliente pagar significa menos venda perdida por demora ou insegurança.',
            },
          ],
        },
      },
      {
        label: 'Cobrança de cliente',
        Icon: HandCoins,
        comingSoon: true,
        modal: {
          title: 'Cobrança de Cliente',
          subtitle:
            'Cobre quem está devendo de forma automática, sem o desconforto de mandar mensagem cobrando.',
          quote:
            'Ninguém gosta de cobrar cliente: é chato, parece grosseria, e muita gente acaba relaxando e deixando o valor pendurado. O resultado é dinheiro que já era pra ter entrado e continua fora do caixa.',
          features: [
            {
              Icon: Bell,
              title: 'Lembrete automático',
              text: 'Dispara lembrete de cobrança sozinho, sem você precisar lembrar nem escrever a mensagem.',
            },
            {
              Icon: Clock,
              title: 'Régua de cobrança',
              text: 'Define quando cobrar antes e depois do vencimento, num fluxo que se repete sem esforço.',
            },
            {
              Icon: ChatCircle,
              title: 'Tom da sua marca',
              text: 'A mensagem de cobrança segue o tom que você define, sem soar robótica ou agressiva.',
            },
            {
              Icon: TrendUp,
              title: 'Menos inadimplência',
              text: 'Cobrança consistente reduz o valor parado e melhora o fluxo de caixa do negócio.',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Opy',
    segment: 'Operações',
    accent: '#26bec4',
    description:
      'Faz a operação girar. Organiza escalas e garante que nada saia do lugar.',
    avatar: { src: avatarOpy },
    comingSoon: true,
    skills: [
      {
        label: 'Escalas',
        modalLabel: 'Gestão de escalas',
        Icon: CalendarCheck,
        image: toolEscalas,
        modal: {
          title: 'Escala',
          subtitle:
            'Escalas de times grandes, sempre dentro da lei e sem nenhum horário descoberto.',
          quote:
            'Montar escala de time grande é um pesadelo: quem faz na mão (planilha, grupo de WhatsApp, quadro na parede) vive com três medos: deixar um horário descoberto, estourar a jornada legal de alguém e o vai-e-volta infinito de trocas. Numa operação 7/7, um furo de cobertura é loja sem gente e prejuízo direto.',
          features: [
            {
              Icon: UsersThree,
              title: 'Times grandes e turnos variados',
              text: 'Pensado para operações complexas, com muita gente e turnos diferentes, incluindo funcionamento 7/7.',
            },
            {
              Icon: ShieldCheck,
              title: 'Sempre dentro da lei',
              text: 'Os horários respeitam os limites legais de jornada, protegendo a empresa de passar do ponto sem querer.',
            },
            {
              Icon: Eye,
              title: 'Visibilidade total',
              text: 'O gestor vê, num lugar só, quem está trabalhando e quantas horas por dia cada um faz.',
            },
            {
              Icon: Bell,
              title: 'Alerta de horário descoberto',
              text: 'Se algum turno fica sem cobertura, o sistema aciona o gestor. Nunca fica um buraco passando despercebido.',
            },
            {
              Icon: CalendarBlank,
              title: 'Escala clara para o colaborador',
              text: 'Cada pessoa sabe de antemão quando trabalha, quando folga e que horas sai.',
            },
            {
              Icon: ArrowsClockwise,
              title: 'Troca pedida pelo colaborador',
              text: 'Quem precisa trocar horário solicita direto pelo módulo, tirando o gestor do meio de cada negociação informal.',
            },
          ],
          forWho: {
            text: 'Para operações com equipe grande, turnos e funcionamento estendido ou diário: food (restaurantes, delivery, cozinhas), varejo, atendimento contínuo, qualquer negócio 7/7. Ideal para clientes maiores, com estrutura de time relevante.',
            note: 'Ataca dois ângulos que raramente vêm juntos: segurança para o gestor (sem furo de cobertura, sem estourar jornada) e autonomia para o colaborador (todos sabem sua escala e pedem troca sozinhos).',
          },
        },
      },
      {
        label: 'Gravações de reuniões',
        modalLabel: 'Gravação de Reuniões',
        Icon: VideoCamera,
        comingSoon: true,
        modal: {
          title: 'Gravação de Reuniões',
          subtitle:
            'Grave toda reunião do time pra recordar e analisar depois.',
          quote:
            'Reunião acaba e metade do que foi combinado se perde. Ninguém lembra o detalhe, não dá pra revisar, e decisão importante vira “foi mais ou menos assim”.',
          features: [
            {
              Icon: VideoCamera,
              title: 'Grava tudo',
              text: 'Registra as reuniões do time pra nada importante se perder no calor da conversa.',
            },
            {
              Icon: ClockCounterClockwise,
              title: 'Recorde depois',
              text: 'Volte a qualquer reunião pra lembrar o que foi dito e combinado.',
            },
            {
              Icon: ChartBar,
              title: 'Analise com calma',
              text: 'Revê e analisa a reunião depois, extraindo o que importa.',
            },
            {
              Icon: Stack,
              title: 'Memória do time',
              text: 'Cria um histórico de reuniões que o time pode consultar quando precisar.',
            },
          ],
        },
      },
      {
        label: 'Otimizador de entregas',
        modalLabel: 'Otimizador de Entregas',
        Icon: Truck,
        comingSoon: true,
        modal: {
          title: 'Otimizador de Entregas',
          subtitle:
            'Entregue melhor e mais barato, com a logística do seu canal próprio otimizada.',
          quote:
            'Entrega mal planejada é dinheiro e tempo jogados fora: rota ruim, entregador rodando à toa, cliente esperando. Pra quem vende no canal próprio, a logística vira gargalo em vez de vantagem.',
          features: [
            {
              Icon: Truck,
              title: 'Rotas otimizadas',
              text: 'Organiza e otimiza o sistema de entregas pra rodar de forma mais eficiente.',
            },
            {
              Icon: Storefront,
              title: 'Canal próprio forte',
              text: 'Ideal pra quem quer fortalecer o próprio canal de vendas e não depender só de marketplace.',
            },
            {
              Icon: Money,
              title: 'Menos custo',
              text: 'Logística mais enxuta significa menos gasto por entrega e menos tempo perdido.',
            },
            {
              Icon: CheckCircle,
              title: 'Cliente atendido',
              text: 'Entrega mais rápida e organizada melhora a experiência de quem compra.',
            },
          ],
        },
      },
      {
        label: 'Controle de estoque',
        modalLabel: 'Controle de Estoque',
        Icon: Package,
        comingSoon: true,
        modal: {
          title: 'Controle de Estoque',
          subtitle:
            'Saiba exatamente o que tem, com controle de suprimentos e estoque sem susto.',
          quote:
            'Faltou insumo no meio do movimento, ou sobrou produto encalhando dinheiro. Sem controle de estoque, o negócio vive entre a falta que trava a venda e o excesso que come o caixa.',
          features: [
            {
              Icon: Package,
              title: 'Estoque na mão',
              text: 'Controla todos os suprimentos e o estoque da empresa num lugar só.',
            },
            {
              Icon: CheckCircle,
              title: 'Sem ruptura',
              text: 'Ajuda a não deixar faltar item essencial no meio da operação.',
            },
            {
              Icon: ChartBar,
              title: 'Sem encalhe',
              text: 'Enxerga o que está parado pra não deixar dinheiro preso em excesso de estoque.',
            },
            {
              Icon: Target,
              title: 'Base pra decisão',
              text: 'Dá a visão que o negócio precisa pra comprar na hora e na quantidade certas.',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Juri',
    segment: 'Jurídico',
    accent: '#b89afa',
    description:
      'Seu departamento jurídico sempre de plantão. Revisa, organiza e acompanha todos os seus contratos.',
    avatar: { src: avatarJuri },
    comingSoon: true,
    skills: [
      {
        label: 'Gestão de contratos',
        modalLabel: 'Assinatura e gestão de contratos',
        Icon: Signature,
        image: toolContratos,
        modal: {
          title: 'Gestor de Contratos',
          subtitle:
            'Um cofre inteligente de contratos para quem não tem jurídico. Reúne, entende e lembra.',
          quote:
            'O empresário assina contratos o tempo todo: fornecedores, aluguel, funcionários, softwares. Eles ficam espalhados no e-mail, em assinadores e em PDFs perdidos. O resultado: renovação automática que ninguém viu passar, multa por cancelar fora do prazo e o contrato que não se acha quando precisa.',
          features: [
            {
              Icon: Vault,
              title: 'Cofre único',
              text: 'Centraliza contratos do ClickSign, Assinafy e ZapSign num só painel, com busca por nome, contraparte ou conteúdo e filtros por status.',
            },
            {
              Icon: FileMagnifyingGlass,
              title: 'Leitura por IA',
              text: 'Faz OCR do PDF e extrai os termos que importam: outra parte, valor, vigência, renovação, aviso prévio e multa. O contrato “traduzido” em campos.',
            },
            {
              Icon: Bell,
              title: 'Alerta de renovação',
              text: 'Marca como “vencendo” os contratos cujo prazo se aproxima (padrão 60 dias), com contagem regressiva e a data-limite para decidir.',
            },
            {
              Icon: EnvelopeSimple,
              title: 'E-mail gerado por IA',
              text: 'Um clique gera o rascunho de renovação ou cancelamento, já com o contexto do contrato, pronto para revisar e enviar.',
            },
            {
              Icon: PencilLine,
              title: 'Assinatura e acompanhamento',
              text: 'Envia para assinatura e mostra o progresso (“X de Y assinaram”), sem precisar entrar em cada assinador.',
            },
            {
              Icon: ClockCounterClockwise,
              title: 'Histórico e pastas',
              text: 'Uma linha do tempo de cada contrato (criado, enviado, cada parte assinando, concluído) e pastas para organizar por categoria.',
            },
          ],
          forWho: {
            text: 'Para donos de PME sem jurídico próprio (padaria, restaurante, loja, clínica, prestador, agência) que assinam de 5 a algumas dezenas de contratos e vivem a dor de prazo e organização. “Pare de perder prazo e de procurar contrato.”',
            note: 'Pitch honesto: gera o e-mail pronto para você enviar (não dispara sozinho) e o aviso de vencimento é in-app, não WhatsApp. Se for demonstrar envio ao vivo, teste antes: o fluxo com ClickSign ainda não foi validado ponta a ponta.',
          },
        },
      },
      {
        label: 'Gerador de documentos',
        modalLabel: 'Gerador de Contrato',
        Icon: FileDoc,
        comingSoon: true,
        modal: {
          title: 'Gerador de Contrato',
          subtitle:
            'Controle todos os contratos do time, criados e gerenciados num lugar só.',
          quote:
            'Contrato espalhado em e-mail, pasta e gaveta, sem ninguém sabendo o que está vigente, vencendo ou pendente. Aí some documento, perde prazo, e vira risco jurídico bobo.',
          features: [
            {
              Icon: FileText,
              title: 'Cria contratos',
              text: 'Gera os contratos que a equipe precisa, sem começar do zero toda vez.',
            },
            {
              Icon: Vault,
              title: 'Tudo centralizado',
              text: 'Controla e gerencia todos os contratos do time num só lugar.',
            },
            {
              Icon: CheckCircle,
              title: 'Nada se perde',
              text: 'Mantém os documentos organizados e acessíveis, sem caça ao contrato certo.',
            },
            {
              Icon: Shield,
              title: 'Menos risco',
              text: 'Visão clara do que está ativo e pendente reduz o risco de furo e prazo perdido.',
            },
          ],
        },
      },
      {
        label: 'Assinatura Digital',
        Icon: Stamp,
        comingSoon: true,
        modal: {
          title: 'Assinatura Digital',
          subtitle:
            'Envie, assine e valide contratos digitalmente, sem imprimir nada.',
          quote:
            'Fechar contrato ainda esbarra em imprimir, assinar, escanear e mandar de volta. Quando depende de várias pessoas, o documento fica dias parado esperando assinatura, e a venda ou a contratação trava junto.',
          features: [
            {
              Icon: PencilLine,
              title: 'Assine de qualquer lugar',
              text: 'Assinatura digital pelo celular ou computador, sem imprimir nem escanear documento.',
            },
            {
              Icon: ShieldCheck,
              title: 'Validade jurídica',
              text: 'Assinaturas com validade legal, prontas para valer nos contratos do dia a dia.',
            },
            {
              Icon: UsersThree,
              title: 'Várias partes',
              text: 'Envie para todos os signatários de uma vez e acompanhe quem já assinou.',
            },
            {
              Icon: Lightning,
              title: 'Fecha mais rápido',
              text: 'Encurta o caminho entre o acordo fechado e o contrato assinado, sem documento parado.',
            },
          ],
        },
      },
      {
        label: 'Revisão de contratos',
        modalLabel: 'Revisão de Contratos',
        Icon: Scales,
        comingSoon: true,
        modal: {
          title: 'Revisão de Contratos',
          subtitle:
            'A Juri lê o contrato antes de você assinar e aponta o que merece atenção.',
          quote:
            'Assinar contrato sem entender tudo é rotina em pequena empresa: o texto é longo, o juridiquês confunde e contratar advogado para cada revisão custa caro. A cláusula problemática só aparece quando o prejuízo já aconteceu.',
          features: [
            {
              Icon: FileMagnifyingGlass,
              title: 'Leitura completa',
              text: 'A Juri analisa o contrato inteiro e traduz o juridiquês em linguagem simples.',
            },
            {
              Icon: Flag,
              title: 'Pontos de atenção',
              text: 'Destaca cláusulas de risco, como multas, renovação automática e prazos escondidos.',
            },
            {
              Icon: ChatCircle,
              title: 'Tire dúvidas',
              text: 'Pergunte sobre qualquer trecho e receba a explicação na hora, sem agendar reunião.',
            },
            {
              Icon: Shield,
              title: 'Assine com segurança',
              text: 'Você entende o que está assinando antes de se comprometer, reduzindo o risco jurídico.',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Pipo',
    segment: 'Recursos Humanos',
    accent: '#f2913d',
    description:
      'Cuida do seu time de ponta a ponta. Recruta talentos e organiza o conhecimento da empresa.',
    avatar: { src: avatarPipo },
    comingSoon: true,
    skills: [
      {
        label: 'Triagem de CVs',
        Icon: UserList,
        image: toolTriagem,
        modal: {
          title: 'Recrutamento',
          subtitle:
            'O RH inteligente para quem não tem RH. Uma pilha de currículos vira uma shortlist priorizada pela IA.',
          quote:
            'Contratar em pequeno negócio hoje é: currículo chegando por WhatsApp, e-mail e indicação, ninguém com tempo de ler tudo, decisão no achismo e nenhum registro do processo. Sem planilha e sem software de RH caro.',
          features: [
            {
              Icon: Globe,
              title: 'Portal com a sua marca',
              text: 'Página de vagas com logo, capa, cores e depoimentos. O candidato se candidata, anexa o CV e responde a triagem, tudo por um link público compartilhável.',
            },
            {
              Icon: Target,
              title: 'Triagem por IA',
              text: 'Lê o LinkedIn, faz OCR do currículo e dá uma nota de aderência de 0 a 100, com selo de cobertura. Nunca chuta: sem dado, reduz a confiança.',
            },
            {
              Icon: Stack,
              title: 'Funil organizado',
              text: 'Kanban de arrastar e soltar, filtros por aderência, ficha completa e linha do tempo de cada candidato.',
            },
            {
              Icon: FileArrowUp,
              title: 'Do resumo à proposta',
              text: 'Resumo com pontos fortes e de atenção, perguntas de entrevista geradas por IA e carta de proposta em Word pronta em segundos.',
            },
          ],
          forWho: {
            text: 'Para donos de PME e RH enxuto que contratam sem ATS e recebem muitos currículos para poucas vagas: varejo, food service, atendimento, operações.',
            note: 'A IA não decide sozinha: ela organiza e prioriza, a palavra final é sempre do recrutador. (Envio automático por WhatsApp está temporariamente desativado; hoje a proposta sai em .docx para envio pelo canal preferido.)',
          },
        },
      },
      {
        label: 'Wiki interno',
        modalLabel: 'Wiki Interno de empresas',
        Icon: BookOpen,
        image: toolWiki,
        modal: {
          title: 'Wiki',
          subtitle:
            'Ensine o Pipo uma vez. Ele treina e responde sua equipe para sempre.',
          quote:
            'O conhecimento do negócio (regras da casa, procedimentos, políticas, cultura) vive na sua cabeça e na de poucos. Cada funcionário novo exige o mesmo treinamento do zero, a equipe interrompe você o dia todo, e quem sai leva o conhecimento embora.',
          features: [
            {
              Icon: Lightning,
              title: 'Comece em minutos',
              text: 'Cole ou envie o material que já existe (PDF, Word, slides, até escaneado). O Pipo extrai tudo e vira artigos organizados, mas nada entra sem a sua revisão.',
            },
            {
              Icon: DeviceMobile,
              title: 'Trilhas que rodam sozinhas',
              text: 'Onboarding liberado dia a dia (Dia 0, Dia 1, Semana 1...) com mini-quizzes. Um link no celular: sem app, sem senha.',
            },
            {
              Icon: ChatCircle,
              title: 'Assistente 24/7',
              text: 'A equipe pergunta ao Pipo e recebe a resposta oficial da casa, com a fonte citada, e as perguntas repetidas param de chegar em você.',
            },
            {
              Icon: Shield,
              title: 'Confiável por construção',
              text: 'Só usa conteúdo aprovado e nunca inventa. Quando uma resposta não resolve, o artigo sai de circulação até você reconfirmar.',
            },
          ],
          forWho: {
            text: 'Para donos e gestores de serviço (restaurantes, confeitarias, salões, clínicas, lojas) que treinam gente com frequência e vivem respondendo as mesmas perguntas. Especialmente times com rotatividade.',
            note: 'Quando alguém experiente sai, o conhecimento fica na base, não vai embora com a pessoa. Você responde uma vez, vira artigo, e ninguém pergunta de novo.',
          },
        },
      },
      {
        label: 'PDI',
        Icon: TrendUp,
        comingSoon: true,
        modal: {
          title: 'PDI',
          subtitle:
            'Desenvolva cada colaborador com um plano feito sob medida pro seu negócio.',
          quote:
            'Você sabe que precisa desenvolver o time, mas montar um plano pra cada pessoa dá trabalho e acaba não saindo. Sem PDI, o colaborador não sabe pra onde crescer e a empresa perde talento por falta de caminho.',
          features: [
            {
              Icon: UserList,
              title: 'Plano individual',
              text: 'Cria planos de desenvolvimento individuais (PDI) para cada colaborador, um a um.',
            },
            {
              Icon: Target,
              title: 'Contexto do negócio',
              text: 'Monta o plano com base no histórico e nas necessidades reais da empresa e da função.',
            },
            {
              Icon: Flag,
              title: 'Direção clara',
              text: 'Dá ao colaborador um caminho de crescimento definido, em vez de evolução no improviso.',
            },
            {
              Icon: TrendUp,
              title: 'Retém talento',
              text: 'Ajuda a segurar gente boa, mostrando que existe futuro dentro da empresa.',
            },
          ],
        },
      },
      {
        label: 'Prospecção candidatos',
        modalLabel: 'Prospecção de Candidato',
        Icon: MagnifyingGlass,
        comingSoon: true,
        modal: {
          title: 'Prospecção de Candidato',
          subtitle:
            'Ache o candidato certo com busca ativa nas plataformas pela vaga que você precisa.',
          quote:
            'Contratar bem é difícil e demorado: você posta a vaga e espera, ou garimpa perfil por perfil sem método. Enquanto isso, a vaga aberta pesa na operação e o candidato ideal passa batido.',
          features: [
            {
              Icon: MagnifyingGlass,
              title: 'Busca ativa',
              text: 'Pesquisa em plataformas pra encontrar candidatos, em vez de só esperar quem se aplica.',
            },
            {
              Icon: Target,
              title: 'Match com a vaga',
              text: 'Procura o melhor perfil para a vaga específica que você está tentando preencher.',
            },
            {
              Icon: Funnel,
              title: 'Menos garimpo',
              text: 'Faz o trabalho pesado de varrer perfis, entregando candidatos que fazem sentido.',
            },
            {
              Icon: Lightning,
              title: 'Contrata mais rápido',
              text: 'Encurta o caminho entre abrir a vaga e ter bons nomes na mão.',
            },
          ],
        },
      },
    ],
  },
];

const byName = (name) => AGENTS.find((agent) => agent.name === name);

/* Card order: Marketing, Operações, Vendas e Atendimento,
   Jurídico, Finanças, Recursos Humanos */
export const CHARACTERS = [
  byName('Maky'),
  byName('Opy'),
  byName('Waz'),
  byName('Juri'),
  byName('Fin'),
  byName('Pipo'),
];

/* --- i18n: sobrepõe apenas o TEXTO por idioma; ícones/imagens/cores ficam na
   estrutura PT acima. Campo não traduzido cai para o português (fonte). --- */
const OVERRIDES = { en: enAgents, es: esAgents };

function mergeSkill(skill, sv) {
  if (!sv) return skill;
  const ms = { ...skill };
  if (sv.label) ms.label = sv.label;
  if (sv.modalLabel) ms.modalLabel = sv.modalLabel;
  if (skill.modal && sv.modal) {
    const m = sv.modal;
    const mm = { ...skill.modal };
    if (m.title) mm.title = m.title;
    if (m.subtitle) mm.subtitle = m.subtitle;
    if (m.quote) mm.quote = m.quote;
    if (m.features && skill.modal.features) {
      mm.features = skill.modal.features.map((f, j) => {
        const fv = m.features[j];
        return fv
          ? { ...f, ...(fv.title && { title: fv.title }), ...(fv.text && { text: fv.text }) }
          : f;
      });
    }
    if (skill.modal.forWho && m.forWho) {
      mm.forWho = {
        ...skill.modal.forWho,
        ...(m.forWho.text && { text: m.forWho.text }),
        ...(m.forWho.note && { note: m.forWho.note }),
      };
    }
    ms.modal = mm;
  }
  return ms;
}

function mergeAgent(agent, ov) {
  if (!ov) return agent;
  const merged = { ...agent };
  if (ov.segment) merged.segment = ov.segment;
  if (ov.modalSegment) merged.modalSegment = ov.modalSegment;
  if (ov.description) merged.description = ov.description;
  if (ov.skills) merged.skills = agent.skills.map((s, i) => mergeSkill(s, ov.skills[i]));
  return merged;
}

/* Agentes já no idioma pedido (com fallback PT por campo). Use nos componentes:
   const { locale } = useLocale(); const chars = getCharacters(locale); */
export function getCharacters(locale) {
  const ov = OVERRIDES[locale];
  if (!ov) return CHARACTERS;
  return CHARACTERS.map((agent) => mergeAgent(agent, ov[agent.name]));
}
