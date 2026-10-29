// Dados simulados (mock) dos cursos e dos seus estudantes
export type Curso = {
  id: string;
  nome: string;
  descricao: string;
  estudantes: string[];
};

export const cursos: Curso[] = [
  {
    id: '1',
    nome: 'Engenharia',
    descricao:
      'Curso focado na resolução de problemas técnicos através da matemática, da física e do projeto de sistemas.',
    estudantes: ['Ana', 'João', 'Maria'],
  },
  {
    id: '2',
    nome: 'Informática',
    descricao:
      'Curso dedicado ao desenvolvimento de software, redes de computadores, bases de dados e inteligência artificial.',
    estudantes: ['Pedro', 'Sofia', 'Tiago'],
  },
  {
    id: '3',
    nome: 'Medicina',
    descricao:
      'Curso que forma profissionais de saúde capazes de diagnosticar, tratar e prevenir doenças.',
    estudantes: ['Beatriz', 'Rui', 'Inês'],
  },
];
