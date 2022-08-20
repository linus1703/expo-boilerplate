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
  SignedOutState: NavigatorScreenParams<SignedOutParamList> | undefined;
  SignedInState: NavigatorScreenParams<SignedInParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type SignedInParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type SignedOutParamList = {
  SignIn: undefined;
};

export type RootTabScreenProps<Screen extends keyof SignedInParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<SignedInParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
