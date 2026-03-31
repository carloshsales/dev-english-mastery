import type { VocabularyTerm } from "../types/VocabularyTerm";

export const VocabularyData: VocabularyTerm[] = [
  {
    id: '1',
    term: 'Middleware',
    definition: 'Software that acts as a bridge between a database and applications.',
    translation: 'Software que atua como ponte entre banco de dados e aplicações.',
    example: 'Express.js uses middleware to handle requests.',
    category: 'Backend',
    isMastered: false
  },
  {
    id: "2",
    term: "Hydration",
    definition: "The process where client-side JavaScript takes over a static HTML page rendered by the server to make it interactive.",
    translation: "O processo em que o JavaScript no lado do cliente assume o controle de uma página HTML estática renderizada pelo servidor para torná-la interativa.",
    example: "Next.js uses hydration to attach event listeners to server-rendered components.",
    category: "Frontend",
    isMastered: false
  },
  {
    id: "3",
    term: "Idempotency",
    definition: "A property of an operation where it can be applied multiple times without changing the result beyond the initial application.",
    translation: "Uma propriedade de uma operação onde ela pode ser aplicada várias vezes sem alterar o resultado além da aplicação inicial.",
    example: "HTTP GET and PUT methods are designed to be idempotent.",
    category: "Backend",
    isMastered: false
  },
  {
    id: "4",
    term: "CI/CD Pipeline",
    definition: "A series of automated steps to build, test, and deploy code changes to production.",
    translation: "Uma série de etapas automatizadas para build, teste e deploy de mudanças de código para produção.",
    example: "GitHub Actions is a popular tool for creating a CI/CD pipeline.",
    category: "DevOps",
    isMastered: false
  },
  {
    id: "5",
    term: "Data Normalization",
    definition: "The process of organizing data in a database to reduce redundancy and improve data integrity.",
    translation: "O processo de organizar dados em um banco de dados para reduzir a redundância e melhorar a integidde dos dados.",
    example: "Applying the Third Normal Form (3NF) is a common task in data normalization.",
    category: "Data",
    isMastered: false
  },
  {
    id: "6",
    term: "Raycasting",
    definition: "A technique used in games to determine line-of-sight or to detect intersections of a ray with objects in the world.",
    translation: "Uma técnica usada em jogos para determinar a linha de visão ou detectar interseções de um raio com objetos no mundo.",
    example: "The player's weapon uses raycasting to check if a bullet hit an enemy.",
    category: "Gamedev",
    isMastered: false
  },
  {
    id: "7",
    term: "Technical Debt",
    definition: "The implied cost of additional rework caused by choosing an easy or quick solution now instead of using a better approach that would take longer.",
    translation: "O custo implícito de retrabalho adicional causado pela escolha de uma solução fácil ou rápida agora, em vez de uma abordagem melhor que levaria mais tempo.",
    example: "Skipping unit tests to meet a deadline increases technical debt.",
    category: "General",
    isMastered: false
  }
];
