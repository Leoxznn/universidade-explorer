import { NavigatorScreenParams } from '@react-navigation/native';

import { Curso } from '../data/cursos';

// Telas da pilha que fica dentro da tab "Home" e os parâmetros que cada uma recebe
export type HomeStackParamList = {
  Home: undefined;
  Course: { curso: Curso };
  Students: { curso: Curso };
  Profile: { nome: string; curso: string };
};

// Tabs da barra inferior
export type TabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  Sobre: undefined;
};
