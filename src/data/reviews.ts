import { FIX_REVIEWS_URL } from './business';

export interface GoogleReview {
  author: string;
  initial: string;
  accent: 'green' | 'blue' | 'purple' | 'orange';
  tag: string;
  text: string;
  rating: 5;
  sourceUrl: string;
}

/**
 * Avaliações reais de clientes da Fix Serviços (Fix - Serviços e Reparos) em Blumenau,
 * obtidas de listagem pública espelhada do Perfil da Empresa no Google (nota 5/5).
 * Textos mantidos em extensão equilibrada (3–5 linhas) para preservar a harmonia visual dos cartões.
 */
export const GOOGLE_REVIEWS: ReadonlyArray<GoogleReview> = [
  {
    author: 'Renata de Araujo Tozatti',
    initial: 'R',
    accent: 'green',
    tag: 'Chuveiro e Torneira · Google',
    text: 'Fizemos a instalação de um chuveiro e também de uma torneira elétrica. Ótimo serviço prestado, com gentileza, cuidado e capricho. Recomendamos bastante o Osmar e equipe da Fix!',
    rating: 5,
    sourceUrl: FIX_REVIEWS_URL,
  },
  {
    author: 'Amanda Moresco',
    initial: 'A',
    accent: 'blue',
    tag: 'Instalação de Cortina · Google',
    text: 'Amei o atendimento, desde o whatsapp... Em 1 hora ou menos eles resolveram meu problema. O técnico Osmar é super atencioso e cuidadoso. Super recomendo e com um valor justo.',
    rating: 5,
    sourceUrl: FIX_REVIEWS_URL,
  },
  {
    author: 'Chaiene Lopes',
    initial: 'C',
    accent: 'purple',
    tag: 'Agilidade e Limpeza · Google',
    text: 'Atendimento excelente! Arrumou tudo o que eu precisava com muita eficiência, agilidade e cuidado. Serviço muito bem feito e limpo. Pessoas muito educadas e gentis. Com certeza recomendo.',
    rating: 5,
    sourceUrl: FIX_REVIEWS_URL,
  },
  {
    author: 'Rafaela Oliveira',
    initial: 'R',
    accent: 'orange',
    tag: 'Reparo e Instalação · Google',
    text: 'Excelente serviço. O prestador foi super atencioso, cuidadoso no reparo e instalação. Recomendo e com certeza volto a contratar!',
    rating: 5,
    sourceUrl: FIX_REVIEWS_URL,
  },
  {
    author: 'Cynthia Mayara',
    initial: 'C',
    accent: 'green',
    tag: 'Qualidade e Orientação · Google',
    text: 'Não pude ser melhor atendida, a empresa está de parabéns, trabalho de alta qualidade, explicou tudo para nós a respeito do que precisávamos fazer. Indicarei para todos pq vale a pena.',
    rating: 5,
    sourceUrl: FIX_REVIEWS_URL,
  },
  {
    author: 'Carla Niehues Coelho',
    initial: 'C',
    accent: 'blue',
    tag: 'Cliente Recorrente · Google',
    text: 'Profissional muito qualificado e faz um serviço impecável!!! Depois q conheci a empresa só chamo ele.. super recomendo.',
    rating: 5,
    sourceUrl: FIX_REVIEWS_URL,
  },
  {
    author: 'Luciano Hartmann',
    initial: 'L',
    accent: 'purple',
    tag: 'Atendimento Profissional · Google',
    text: 'Ótimo serviço prestado, pessoal educado e profissional. Indico e se precisar chamarei novamente.',
    rating: 5,
    sourceUrl: FIX_REVIEWS_URL,
  },
];
