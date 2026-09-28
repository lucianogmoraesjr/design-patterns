export abstract class Pizza {
  protected description: string | undefined;
  protected price: number = 0;

  public abstract getDescription(): string | undefined;
  public abstract getPrice(): number;
}
