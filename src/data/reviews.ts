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
 * Avaliacoes reais 5 estrelas verificadas no Perfil da Empresa no Google
 * ("Fix - Servicos e Reparos (Marido de Aluguel)") com links diretos individuais.
 * Trechos mantidos enxutos para preservar a legibilidade e proporcao dos cards.
 */
export const GOOGLE_REVIEWS: ReadonlyArray<GoogleReview> = [
  {
    author: 'Renata de Araujo Tozatti',
    initial: 'R',
    accent: 'green',
    tag: 'Chuveiro e Torneira · Google',
    text: 'Fizemos a instalação de um chuveiro e também de uma torneira elétrica. Ótimo serviço prestado, com gentileza, cuidado e capricho.',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/LiRii5X3TTSAPNvi6',
  },
  {
    author: 'João l Gruber',
    initial: 'J',
    accent: 'blue',
    tag: 'Fechadura Digital · Google',
    text: 'Realizei instalação de fechadura eletrônica e máquina de lavar roupa. Horário marcado, compareceu sem atrasos. Boa comunicação pelo whatsapp (rápida e clara).',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/CEwhZdHM6LVgUqXR9',
  },
  {
    author: 'Fanny Duarte Napoles',
    initial: 'F',
    accent: 'purple',
    tag: 'Pontualidade e Preço · Google',
    text: 'Serviço impecável, preço justo, o técnico chegou na hora combinada recomendo muito! Voltarei a usar com certeza!',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/XVzgVzQSdzYoPNuD7',
  },
  {
    author: 'Amanda Moresco',
    initial: 'A',
    accent: 'orange',
    tag: 'Instalação de Cortina · Google',
    text: 'O técnico Osmar é super atencioso e cuidadoso. Super recomendo e com um valor justo. Daria mais que 5 estrelas, mas não posso.',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/Gpc1aAnc8x27C8V16',
  },
  {
    author: 'Camila Maia',
    initial: 'C',
    accent: 'green',
    tag: 'Lustre, TV e Elétrica · Google',
    text: 'Instalaram lustre e suportes de tv, além de reparos elétricos, com troca de interruptores e extensões de fiação. Recomendo fortemente a todos!',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/PdK68VUmFDXxATf69',
  },
  {
    author: 'Chaiene Lopes',
    initial: 'C',
    accent: 'blue',
    tag: 'Agilidade e Limpeza · Google',
    text: 'Atendimento excelente! Arrumou tudo o que eu precisava com muita eficiência, agilidade e cuidado. Serviço muito bem feito e limpo.',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/KupHy5Mso46gPnWG6',
  },
  {
    author: 'Francisco B',
    initial: 'F',
    accent: 'purple',
    tag: 'Serviço Elétrico · Google',
    text: 'Serviço de ótima qualidade, atendimento claro e objetivo. Super recomendo! Precisava de um serviço elétrico e por não ter nenhuma referência na cidade, não poderia ter sido melhor.',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/X2YFFQDcaAtNk2VJ8',
  },
  {
    author: 'Carla R Oliveira',
    initial: 'C',
    accent: 'orange',
    tag: 'Reparo e Instalação · Google',
    text: 'Excelente serviço. O prestador foi super atencioso, cuidadoso no reparo e instalação. Recomendo e com certeza volto a contratar!',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/fYKwSpib6nABiK3L8',
  },
  {
    author: 'Cristiano da Silva Teixeira',
    initial: 'C',
    accent: 'green',
    tag: 'Hidráulica e Esgoto · Google',
    text: 'Já haviam passado dois outros profissionais por aqui sem resolver. O técnico da FIX resolveu em menos de uma hora e o resultado ficou muito bom.',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/EthctC5gwTt6i7Bx8',
  },
  {
    author: 'Cynthia Mayara',
    initial: 'C',
    accent: 'blue',
    tag: 'Qualidade e Transparência · Google',
    text: 'Não pude ser melhor atendida, a empresa está de parabéns, prestativo, a trabalho de alta qualidade, explicou tudo para nós a respeito do que precisávamos fazer.',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/rxgL5SjimSvwp44o7',
  },
  {
    author: 'Carla Niehues Coelho',
    initial: 'C',
    accent: 'purple',
    tag: 'Cliente Recorrente · Google',
    text: 'Profissional muito qualificado e faz um serviço impecável!!! Depois q conheci a empresa só chamo ele.. super recomendo',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/9tinTZ2NBuJoEcQn8',
  },
  {
    author: 'Luciano Hartmann',
    initial: 'L',
    accent: 'orange',
    tag: 'Atendimento Profissional · Google',
    text: 'Ótimo serviço prestado, pessoal educado e profissional. Indico e se precisar chamarei novamente.',
    rating: 5,
    sourceUrl: 'https://maps.app.goo.gl/y6V6jBUVbyopuEyy5',
  },
];
