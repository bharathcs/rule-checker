type BooleanSupplier = () => boolean;

export function and(...conds: BooleanSupplier[]): BooleanSupplier {
  return () => conds.map((x) => x()).reduce((prev, curr) => prev && curr, true);
}

export function or(...conds: BooleanSupplier[]): BooleanSupplier {
  return () => conds.map((x) => x()).reduce((prev, curr) => prev || curr, true);
}

export function not(cond: BooleanSupplier): BooleanSupplier {
  return () => !cond();
}
