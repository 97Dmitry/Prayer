export interface IPrayer {
  title: string;
  description: string;
  checked: boolean;
}

export interface IState {
  currentPrayers: Record<number, IPrayer>;
}
