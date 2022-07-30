declare type KeyMap = {
    [key: string]: string;
};
export declare const useCompStates: (validStates: string[], options?: {
    default: null;
}) => {
    validCompStates: KeyMap;
    compState: string | number;
    setCompState: (compState: keyof KeyMap) => void;
};
export declare const hello: (message: string) => void;
export {};
//# sourceMappingURL=index.d.ts.map