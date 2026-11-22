import type { IconName } from "@components/atoms/icon";
import type { ServiceSlug } from "@data/services";

export type ServiceContent = {
  headline: string;
  sub: string;
  chips: string[];
  who: string[];
  pain: { title: string; text: string };
  included: { icon: IconName; title: string; text: string }[];
  steps: { title: string; us: string; you: string }[];
  differentials: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  caseStudy: {
    sector: string;
    client: string;
    headline: string;
    challenge: string;
    built: string;
    changed: string;
    metrics: { value: string; label: string }[];
  };
  cta: string;
  others: ServiceSlug[];
};

/**
 * Conteúdo das páginas /servicos/$slug. Textos vindos do desenho.
 * TODO: substituir o caso de estudo (fictício) por um caso real.
 */
export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContent> = {
  web: {
    headline: "Aplicações seguras, feitas para o teu negócio crescer.",
    sub: "Do painel de gestão ao portal do cliente: plataformas web completas, estáveis e mantidas em Luanda.",
    chips: ["multitenant", "APIs", "cloud / VPS"],
    who: [
      "Empresas que precisam de um portal ou painel à medida",
      "Instituições com vários utilizadores e perfis diferentes",
      "Equipas que querem lançar um produto digital próprio",
    ],
    pain: {
      title: "Folhas soltas e ferramentas que não falam entre si.",
      text: "Quando o negócio cresce, o improviso deixa de aguentar: dados duplicados, acessos sem controlo e sistemas lentos. Uma plataforma web própria põe tudo no mesmo sítio, com quem pode ver o quê.",
    },
    included: [
      {
        icon: "layout-panel-left",
        title: "Painel de gestão",
        text: "Onde a tua equipa trabalha todos os dias.",
      },
      {
        icon: "users",
        title: "Portal do cliente",
        text: "Área reservada para clientes ou formandos.",
      },
      {
        icon: "shield",
        title: "Perfis e permissões",
        text: "Cada pessoa vê apenas o que lhe cabe.",
      },
      {
        icon: "funnel",
        title: "APIs e integrações",
        text: "Ligação a outros sistemas que já usas.",
      },
      {
        icon: "server",
        title: "Arquitectura multitenant",
        text: "Um espaço por cliente, quando o modelo o pede.",
      },
      {
        icon: "chart-no-axes-column",
        title: "Monitorização e backups",
        text: "Alertas e cópias desde o primeiro dia.",
      },
    ],
    steps: [
      {
        title: "Descoberta",
        us: "Levantamos requisitos e utilizadores.",
        you: "Explicas o processo e quem vai usar.",
      },
      {
        title: "Desenho",
        us: "Preparamos ecrãs e uma proposta por fases.",
        you: "Validas os ecrãs e as prioridades.",
      },
      {
        title: "Construção",
        us: "Entregamos por fase, com tudo visível.",
        you: "Testas e dás feedback.",
      },
      {
        title: "Operação",
        us: "Lançamos, monitorizamos e damos suporte.",
        you: "Usas e dizes o que falta.",
      },
    ],
    differentials: [
      {
        title: "Código teu",
        text: "Recebes o código-fonte e a documentação da tua plataforma. Podes mudar de fornecedor sem perder nada.",
      },
      {
        title: "Suporte em Luanda",
        text: "Quando algo falha, falas com quem construiu a plataforma, no teu fuso horário.",
      },
      {
        title: "Estabilidade medida",
        text: "Monitorização e alertas desde o primeiro dia. Disponibilidade-alvo de 99,99%.",
      },
      {
        title: "Proposta por fases",
        text: "Começas por uma primeira versão e evoluis. Sabes o que recebes em cada fase.",
      },
    ],
    faq: [
      {
        q: "Quanto tempo demora?",
        a: "Depende do âmbito. Na proposta por fases, cada fase tem o seu prazo.",
      },
      {
        q: "O código fica meu?",
        a: "Sim. Entregamos o código-fonte e a documentação.",
      },
      {
        q: "Preciso de tratar do alojamento?",
        a: "Não. Configuramos o alojamento, a monitorização e os backups.",
      },
      {
        q: "Posso começar com uma versão mínima?",
        a: "Sim. Começamos pela primeira fase e evoluímos a partir dela.",
      },
    ],
    caseStudy: {
      sector: "Distribuição",
      client: "Distribuidora Kilamba",
      headline:
        "Encomendas B2B por portal, sem WhatsApp nem folhas de cálculo.",
      challenge:
        "As encomendas chegavam por WhatsApp e eram passadas à mão para uma folha. Havia erros de preço e ninguém sabia o estado de cada pedido.",
      built:
        "Um portal web com catálogo, preços por cliente, encomendas online e estado de cada pedido, entregue em duas fases.",
      changed:
        "A equipa deixou de reescrever encomendas, e os clientes acompanham o pedido sozinhos.",
      metrics: [
        { value: "−60%", label: "Tempo a registar encomendas" },
        { value: "0", label: "Folhas de cálculo no processo" },
        { value: "2", label: "Fases, a primeira em 6 semanas" },
      ],
    },
    cta: "Vamos falar da tua plataforma web.",
    others: ["medida", "erp", "websites"],
  },
  medida: {
    headline: "Sistemas desenhados em torno dos teus processos.",
    sub: "Quando nenhuma ferramenta pronta serve, construímos a tua: código documentado, testado e teu.",
    chips: ["requisitos", "testes", "documentação"],
    who: [
      "Empresas com processos próprios que as ferramentas prontas não cobrem",
      "Equipas que juntam folhas e aplicações para fazer um só trabalho",
      "Instituições que precisam de um sistema que mais ninguém tem",
    ],
    pain: {
      title: "Adaptas o negócio ao software, em vez de o contrário.",
      text: "Ferramentas genéricas obrigam a passos manuais e a soluções de recurso. Um sistema à medida segue o teu processo, tem só o que usas e cresce contigo.",
    },
    included: [
      {
        icon: "file-text",
        title: "Levantamento de requisitos",
        text: "Percebemos o processo antes de escrever código.",
      },
      {
        icon: "layout-panel-left",
        title: "Desenho de fluxos e ecrãs",
        text: "Validas antes de construirmos.",
      },
      {
        icon: "code-xml",
        title: "Desenvolvimento por fases",
        text: "Entregas visíveis, uma fase de cada vez.",
      },
      {
        icon: "shield",
        title: "Testes e revisão",
        text: "Cada entrega é testada antes de chegar a ti.",
      },
      {
        icon: "download",
        title: "Documentação técnica",
        text: "Para qualquer equipa poder continuar o trabalho.",
      },
      {
        icon: "chart-no-axes-column",
        title: "Alojamento e manutenção",
        text: "Monitorização, backups e evolução contínua.",
      },
    ],
    steps: [
      {
        title: "Descoberta",
        us: "Mapeamos o processo e os requisitos.",
        you: "Mostras como trabalhas hoje.",
      },
      {
        title: "Desenho",
        us: "Preparamos fluxos, ecrãs e proposta por fases.",
        you: "Validas e defines prioridades.",
      },
      {
        title: "Construção",
        us: "Desenvolvemos e testamos fase a fase.",
        you: "Experimentas e dás feedback.",
      },
      {
        title: "Operação",
        us: "Lançamos, monitorizamos e evoluímos.",
        you: "Usas e pedes melhorias.",
      },
    ],
    differentials: [
      {
        title: "Código teu",
        text: "O sistema é teu: código-fonte e documentação entregues, sem dependências escondidas.",
      },
      {
        title: "Suporte em Luanda",
        text: "Quem desenhou o sistema responde quando precisas, no teu fuso horário.",
      },
      {
        title: "Estabilidade medida",
        text: "Testes antes de cada entrega e monitorização em produção.",
      },
      {
        title: "Proposta por fases",
        text: "Começas pelo essencial e evoluis. Cada fase tem objectivo e preço claros.",
      },
    ],
    faq: [
      {
        q: "Em que difere de comprar software pronto?",
        a: "O sistema segue o teu processo, em vez de te obrigar a mudar o teu processo.",
      },
      {
        q: "Quanto custa?",
        a: "Depende do âmbito. A proposta por fases mostra o preço de cada fase, em kwanzas.",
      },
      {
        q: "Fico dependente da Linkora?",
        a: "Não. O código-fonte e a documentação são teus.",
      },
      {
        q: "Posso começar pequeno?",
        a: "Sim, pela fase mais importante para o teu negócio.",
      },
    ],
    caseStudy: {
      sector: "Logística",
      client: "Logística Zango",
      headline: "Planeamento de rotas e entregas feito à medida do negócio.",
      challenge:
        "Nenhum software do mercado se adaptava às regras de entrega da empresa, e as rotas eram planeadas à mão todas as manhãs.",
      built:
        "Um sistema à medida com atribuição de rotas, estado das entregas e relatório diário, com testes e documentação.",
      changed:
        "O planeamento da manhã passou de horas a minutos, e o código e a documentação ficaram da empresa.",
      metrics: [
        { value: "minutos", label: "Planeamento diário, antes eram horas" },
        { value: "100%", label: "Código e documentação do cliente" },
        { value: "3", label: "Fases entregues e validadas" },
      ],
    },
    cta: "Vamos falar do teu sistema à medida.",
    others: ["web", "erp", "automacoes"],
  },
  erp: {
    headline: "Stock, facturação e operações num só sistema.",
    sub: "Deixa as folhas de cálculo. Um sistema de gestão adaptado à realidade angolana, estável e mantido em Luanda.",
    chips: ["stock", "facturação", "relatórios"],
    who: [
      "PMEs com stock, vendas e facturação em ferramentas separadas",
      "Empresas que já passaram do Excel mas ainda não têm sistema",
      "Gestores que querem números fiáveis para decidir",
    ],
    pain: {
      title: "Cada departamento com a sua folha, e nenhum número bate certo.",
      text: "Stock que não corresponde ao armazém, facturas feitas à mão e relatórios que demoram dias. Um ERP junta stock, vendas e facturação numa só fonte de verdade.",
    },
    included: [
      {
        icon: "server",
        title: "Stock e armazéns",
        text: "Entradas, saídas e alertas de mínimo.",
      },
      {
        icon: "file-text",
        title: "Facturação e documentos",
        text: "Facturas, recibos e notas, em kwanzas.",
      },
      {
        icon: "funnel",
        title: "Compras e fornecedores",
        text: "Encomendas e contas dos fornecedores.",
      },
      {
        icon: "users",
        title: "Clientes e contas correntes",
        text: "Histórico e saldos de cada cliente.",
      },
      {
        icon: "chart-no-axes-column",
        title: "Relatórios para a gestão",
        text: "Vendas, stock e receita, sempre actualizados.",
      },
      {
        icon: "shield",
        title: "Perfis e permissões",
        text: "Cada pessoa vê apenas o que lhe cabe.",
      },
    ],
    steps: [
      {
        title: "Descoberta",
        us: "Mapeamos stock, vendas e facturação actuais.",
        you: "Partilhas os processos e documentos que usas.",
      },
      {
        title: "Desenho",
        us: "Definimos módulos e plano de migração dos dados.",
        you: "Validas os fluxos e os perfis.",
      },
      {
        title: "Construção",
        us: "Configuramos e migramos por módulos.",
        you: "Testas com dados reais.",
      },
      {
        title: "Operação",
        us: "Arranque acompanhado e formação da equipa.",
        you: "Usas em produção, com apoio.",
      },
    ],
    differentials: [
      {
        title: "Código teu",
        text: "O sistema e a documentação são teus. Sem licenças por utilizador nem dependências escondidas.",
      },
      {
        title: "Suporte em Luanda",
        text: "A equipa que configurou o ERP responde quando precisas, no teu fuso horário.",
      },
      {
        title: "Estabilidade medida",
        text: "Um ERP que pára custa vendas. Monitorização, backups e alertas desde o primeiro dia.",
      },
      {
        title: "Proposta por fases",
        text: "Começamos pelo módulo mais urgente, por exemplo stock, e acrescentamos os restantes.",
      },
    ],
    faq: [
      {
        q: "Conseguem trazer os dados que já tenho?",
        a: "Planeamos a migração dos dados existentes na fase de desenho.",
      },
      {
        q: "Vários utilizadores com perfis diferentes?",
        a: "Sim. Cada pessoa vê apenas o que lhe cabe.",
      },
      {
        q: "O código fica meu?",
        a: "Sim. Entregamos o código-fonte e a documentação.",
      },
      {
        q: "Posso começar por um só módulo?",
        a: "Sim. Começamos pelo mais urgente e acrescentamos os restantes.",
      },
    ],
    caseStudy: {
      sector: "Comércio",
      client: "Comercial Mussulo",
      headline: "Stock, compras e facturação num único sistema.",
      challenge:
        "O stock estava numa folha, a facturação noutro programa, e os números nunca batiam certo ao fim do mês.",
      built:
        "Um ERP com stock, compras, vendas e facturação ligados, começando pelo módulo de stock.",
      changed:
        "O fecho do mês passou a sair do sistema, sem reconciliação manual.",
      metrics: [
        { value: "1", label: "Sistema em vez de três" },
        { value: "3 dias", label: "Fecho do mês, antes eram 10" },
        { value: "Kz", label: "Facturação e relatórios em kwanzas" },
      ],
    },
    cta: "Vamos falar do teu ERP.",
    others: ["web", "crm", "automacoes"],
  },
  crm: {
    headline: "Clientes e oportunidades com visibilidade para quem decide.",
    sub: "Um CRM simples e à tua medida: sabes quem contactar, em que ponto está cada negócio e quanto vai entrar.",
    chips: ["pipeline", "contactos", "indicadores"],
    who: [
      "Equipas comerciais que gerem contactos em folhas e mensagens",
      "Empresas que perdem oportunidades por falta de acompanhamento",
      "Gestores que querem ver o funil de vendas num só sítio",
    ],
    pain: {
      title: "Oportunidades que se perdem porque ninguém as acompanhou.",
      text: "Contactos espalhados por telemóveis e folhas, propostas sem seguimento e nenhuma visão do que vai fechar. Um CRM põe cada cliente e cada negócio num funil visível.",
    },
    included: [
      {
        icon: "users",
        title: "Gestão de contactos",
        text: "Cada cliente com o seu histórico.",
      },
      {
        icon: "funnel",
        title: "Pipeline de vendas",
        text: "Do primeiro contacto ao fecho do negócio.",
      },
      {
        icon: "file-text",
        title: "Tarefas e lembretes",
        text: "Ninguém esquece um seguimento.",
      },
      {
        icon: "layout-panel-left",
        title: "Propostas e documentos",
        text: "Tudo associado ao cliente certo.",
      },
      {
        icon: "chart-no-axes-column",
        title: "Indicadores comerciais",
        text: "Vendas, conversão e previsão de receita.",
      },
      {
        icon: "shield",
        title: "Perfis e permissões",
        text: "Cada comercial vê o que lhe cabe.",
      },
    ],
    steps: [
      {
        title: "Descoberta",
        us: "Mapeamos o teu processo de vendas.",
        you: "Descreves como vendes hoje.",
      },
      {
        title: "Desenho",
        us: "Definimos as fases do funil e os campos.",
        you: "Validas o funil e os indicadores.",
      },
      {
        title: "Construção",
        us: "Configuramos e importamos os contactos.",
        you: "Testas com negócios reais.",
      },
      {
        title: "Operação",
        us: "Arranque acompanhado e formação da equipa.",
        you: "Usas no dia-a-dia e dizes o que falta.",
      },
    ],
    differentials: [
      {
        title: "Código teu",
        text: "O CRM e a documentação são teus, sem dependências escondidas.",
      },
      {
        title: "Suporte em Luanda",
        text: "Quem configurou o CRM responde quando precisas, no teu fuso horário.",
      },
      {
        title: "Estabilidade medida",
        text: "Os teus contactos e negócios protegidos por backups e monitorização.",
      },
      {
        title: "Proposta por fases",
        text: "Começas pelo funil de vendas e acrescentas o resto depois.",
      },
    ],
    faq: [
      {
        q: "Posso importar os meus contactos?",
        a: "Planeamos a importação das listas existentes na fase de desenho.",
      },
      {
        q: "Serve para equipas pequenas?",
        a: "Sim. O CRM é dimensionado ao tamanho da tua equipa.",
      },
      {
        q: "Posso ligá-lo a outros sistemas?",
        a: "Sim, através de integrações, se o projecto o pedir.",
      },
      {
        q: "O código fica meu?",
        a: "Sim. Entregamos o código-fonte e a documentação.",
      },
    ],
    caseStudy: {
      sector: "Imobiliário",
      client: "Imobiliária Talatona",
      headline: "Todos os contactos e negócios num funil de vendas visível.",
      challenge:
        "Os contactos estavam espalhados por telemóveis e cadernos. Perdiam-se seguimentos e ninguém via o estado de cada negócio.",
      built:
        "Um CRM com funil de vendas, lembretes de seguimento e histórico de cada cliente, com a lista de contactos importada.",
      changed:
        "Cada comercial sabe o que fazer a seguir, e a direcção vê o funil todo num ecrã.",
      metrics: [
        { value: "1", label: "Funil único para toda a equipa" },
        { value: "0", label: "Contactos perdidos em telemóveis" },
        { value: "Diário", label: "Lembretes de seguimento" },
      ],
    },
    cta: "Vamos falar do teu CRM.",
    others: ["erp", "automacoes", "web"],
  },
  automacoes: {
    headline: "Tarefas repetitivas a correr sozinhas.",
    sub: "Integramos os teus sistemas e criamos fluxos que fazem o trabalho repetitivo e avisam quando algo falha.",
    chips: ["integrações", "fluxos", "alertas"],
    who: [
      "Equipas que copiam dados de um sistema para outro à mão",
      "Empresas com processos repetitivos que consomem horas",
      "Gestores que querem alertas em vez de verificações manuais",
    ],
    pain: {
      title: "Pessoas qualificadas a fazer trabalho de máquina.",
      text: "Copiar dados, enviar os mesmos avisos e conferir listas ocupa horas e gera erros. Uma automação executa o fluxo sempre da mesma maneira e avisa quando algo corre mal.",
    },
    included: [
      {
        icon: "funnel",
        title: "Integração entre sistemas",
        text: "Os teus sistemas a falar entre si.",
      },
      {
        icon: "code-xml",
        title: "Fluxos automáticos",
        text: "Regras que correm sem intervenção.",
      },
      {
        icon: "file-text",
        title: "Avisos e alertas",
        text: "Mensagem ou email quando algo falha.",
      },
      {
        icon: "chart-no-axes-column",
        title: "Registo de execuções",
        text: "Sabes o que correu e quando.",
      },
      {
        icon: "shield",
        title: "Controlo de acessos",
        text: "Credenciais e permissões seguras.",
      },
      {
        icon: "server",
        title: "Monitorização contínua",
        text: "Alerta se um fluxo parar.",
      },
    ],
    steps: [
      {
        title: "Descoberta",
        us: "Identificamos as tarefas a automatizar.",
        you: "Indicas o que consome mais tempo.",
      },
      {
        title: "Desenho",
        us: "Desenhamos fluxos e regras de excepção.",
        you: "Validas as regras.",
      },
      {
        title: "Construção",
        us: "Construímos e testamos com dados reais.",
        you: "Confirmas os resultados.",
      },
      {
        title: "Operação",
        us: "Pomos em produção, com monitorização.",
        you: "Deixas de fazer à mão.",
      },
    ],
    differentials: [
      {
        title: "Código teu",
        text: "Os fluxos e as integrações são teus, documentados.",
      },
      {
        title: "Suporte em Luanda",
        text: "Se um fluxo falhar, quem o construiu responde.",
      },
      {
        title: "Estabilidade medida",
        text: "Cada fluxo tem monitorização e alertas de falha.",
      },
      {
        title: "Proposta por fases",
        text: "Automatizamos primeiro a tarefa que mais pesa.",
      },
    ],
    faq: [
      {
        q: "Que sistemas conseguem integrar?",
        a: "Depende das ligações que cada sistema oferece. Avaliamos isso na descoberta.",
      },
      {
        q: "E se um fluxo falhar?",
        a: "Recebes um alerta e o registo mostra o que aconteceu.",
      },
      {
        q: "Posso começar por uma só tarefa?",
        a: "Sim. Começamos pela que consome mais tempo.",
      },
      {
        q: "O código fica meu?",
        a: "Sim. Entregamos o código-fonte e a documentação.",
      },
    ],
    caseStudy: {
      sector: "Serviços",
      client: "Grupo Ingombota",
      headline:
        "Facturas e avisos enviados sozinhos quando chega uma encomenda.",
      challenge:
        "Pessoal qualificado passava horas a copiar dados entre sistemas, a criar facturas e a avisar clientes, com erros frequentes.",
      built:
        "Automações que criam a factura, avisam o cliente e registam cada execução, com alerta quando algo falha.",
      changed:
        "As tarefas repetitivas passaram a correr sozinhas, e a equipa só intervém nas excepções.",
      metrics: [
        { value: "−80%", label: "Tempo em tarefas repetitivas" },
        { value: "24/7", label: "Execução com registo e alertas" },
        { value: "3", label: "Fluxos automatizados na primeira fase" },
      ],
    },
    cta: "Vamos falar das tuas automações.",
    others: ["erp", "crm", "medida"],
  },
  websites: {
    headline: "Presença digital clara, que transmite confiança.",
    sub: "Websites institucionais rápidos, claros e responsivos, pensados para gerar contactos.",
    chips: ["desempenho", "SEO", "responsivo"],
    who: [
      "Empresas que precisam de uma presença profissional online",
      "Clínicas, escolas e instituições que querem transmitir confiança",
      "Negócios que querem ser encontrados e contactados",
    ],
    pain: {
      title: "Um site desactualizado diz mais sobre ti do que gostarias.",
      text: "Sites lentos, confusos ou que não se vêem bem no telemóvel afastam clientes. Um website institucional bem feito explica o que fazes e facilita o contacto.",
    },
    included: [
      {
        icon: "layout-panel-left",
        title: "Design à medida",
        text: "Com a identidade da tua organização.",
      },
      {
        icon: "code-xml",
        title: "Desenvolvimento responsivo",
        text: "Bom em computador e telemóvel.",
      },
      {
        icon: "funnel",
        title: "SEO base",
        text: "Para seres encontrado nas pesquisas.",
      },
      {
        icon: "file-text",
        title: "Formulários de contacto",
        text: "Pedidos directos para a tua equipa.",
      },
      {
        icon: "chart-no-axes-column",
        title: "Desempenho",
        text: "Páginas leves e rápidas.",
      },
      {
        icon: "download",
        title: "Gestão de conteúdos",
        text: "Para actualizares textos e imagens.",
      },
    ],
    steps: [
      {
        title: "Descoberta",
        us: "Percebemos a tua organização e o teu público.",
        you: "Partilhas objectivos e materiais.",
      },
      {
        title: "Desenho",
        us: "Preparamos estrutura, design e textos.",
        you: "Aprovas o design.",
      },
      {
        title: "Construção",
        us: "Desenvolvemos e testamos em vários ecrãs.",
        you: "Revês os conteúdos.",
      },
      {
        title: "Operação",
        us: "Publicamos e acompanhamos o site.",
        you: "Passas a ser encontrado.",
      },
    ],
    differentials: [
      {
        title: "Código teu",
        text: "O site é teu: código e conteúdos entregues.",
      },
      {
        title: "Suporte em Luanda",
        text: "Alterações e dúvidas tratadas pela mesma equipa.",
      },
      {
        title: "Estabilidade medida",
        text: "Alojamento monitorizado e com backups.",
      },
      {
        title: "Proposta por fases",
        text: "Começas por um site essencial e as páginas crescem depois.",
      },
    ],
    faq: [
      {
        q: "Quanto tempo demora um website?",
        a: "Depende do número de páginas. A proposta indica o prazo de cada fase.",
      },
      {
        q: "Posso actualizar os conteúdos?",
        a: "Sim. Mostramos como o fazer na entrega.",
      },
      {
        q: "Tratam do alojamento e do domínio?",
        a: "Sim. Configuramos o alojamento e ajudamos com o domínio.",
      },
      { q: "O site fica meu?", a: "Sim. Entregamos o código e os conteúdos." },
    ],
    caseStudy: {
      sector: "Saúde",
      client: "Clínica Vida",
      headline: "Um website claro que leva os pacientes a marcar consulta.",
      challenge:
        "O site era lento, difícil de usar no telemóvel e não deixava claro como marcar uma consulta.",
      built:
        "Um website institucional responsivo, com serviços, equipa e marcação de consulta a um toque.",
      changed:
        "O site passou a ser o primeiro contacto da clínica, e as marcações chegam ao telefone da recepção.",
      metrics: [
        { value: "<2 s", label: "Carregamento no telemóvel" },
        { value: "1 toque", label: "Para marcar consulta" },
        { value: "100%", label: "Responsivo, do telemóvel ao ecrã grande" },
      ],
    },
    cta: "Vamos falar do teu website.",
    others: ["web", "medida", "crm"],
  },
};
