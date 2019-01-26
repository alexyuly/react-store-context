/// <reference types="react" />
declare module "index" {
    import * as React from 'react';
    type StoreAttributes<T> = {
        state: T;
        setState: (update: Partial<T>) => void;
    };
    export interface Store<T> {
        Consumer: React.ComponentType<React.ConsumerProps<StoreAttributes<T>>>;
        Provider: React.ComponentType;
    }
    export function createStore<T>(initialState?: T): Store<T>;
}
