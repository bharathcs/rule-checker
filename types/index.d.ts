declare type BooleanSupplier = () => boolean;
export declare function and(...conds: BooleanSupplier[]): BooleanSupplier;
export declare function or(...conds: BooleanSupplier[]): BooleanSupplier;
export declare function not(cond: BooleanSupplier): BooleanSupplier;
export {};
