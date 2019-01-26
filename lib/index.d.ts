import * as React from 'react';
declare type StoreAttributes<T> = {
    state: T;
    setState: (update: Partial<T>) => void;
};
export interface Store<T> {
    Consumer: React.ComponentType<React.ConsumerProps<StoreAttributes<T>>>;
    Provider: React.ComponentType;
}
export declare function createStore<T>(initialState?: T): Store<T>;
export {};
