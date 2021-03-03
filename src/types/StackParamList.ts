import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { TicketData } from './interfaces';

export type StackParamList = {
    Home: undefined;
    Description: {
        item: TicketData
    };
    CartPage: undefined;
    BuyPage: undefined;
}

export type StackNavProps<T extends keyof StackParamList> = {
     navigation: StackNavigationProp<StackParamList, T>
     route: RouteProp<StackParamList, T>
}

