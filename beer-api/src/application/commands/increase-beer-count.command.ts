export class IncreaseBeerCountCommand {
  constructor(
    public readonly countId: number,
    public readonly currentCount: number,
  ) {}
}
