/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  SignedOutState: NavigatorScreenParams<SignedOutStackParamList> | undefined;
  SignedInState: NavigatorScreenParams<SignedInParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof SignedOutStackParamList> =
  NativeStackScreenProps<SignedOutStackParamList, Screen>;

export type SignedInParamList = {
  Home: undefined;
};

export type SignedOutStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type RootTabScreenProps<Screen extends keyof SignedInParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<SignedInParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
