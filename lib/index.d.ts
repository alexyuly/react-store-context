import * as React from 'react';
export declare type StoreProps<T> = {
    state: T;
    setState<K extends keyof T>(state: ((prevState: Readonly<T>, props: Readonly<T>) => (Pick<T, K> | T | null)) | (Pick<T, K> | T | null), callback?: () => void): void;
};
export interface StoreProviderProps {
    children?: React.ReactNode;
}
export interface Store<T = {}> {
    Consumer: React.ComponentType<React.ConsumerProps<StoreProps<T>>>;
    Provider: React.ComponentType<StoreProviderProps>;
}
export declare function createStore<T>(initialState?: T): Store<T>;
export interface ProviderProps {
    children?: React.ReactNode;
    stores: Store[];
}
export declare class Provider extends React.Component<ProviderProps> {
    renderStores(stores: Store[]): {};
    render(): {};
}
export interface ConsumerProps<T = {}> {
    store: StoreProps<T>;
}
export declare function consumeStore<T, P>(store: Store<T>): (Cmp: React.ComponentType<P>) => React.ComponentType<P & ConsumerProps<T>>;
