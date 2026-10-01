export type Context = Record<string, number>;

export interface Expression {
  interpret(context: Context): number;
}
