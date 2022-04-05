export interface SelectPropsInterface {
  onSelect: (selectKeyWord: string) => void;
  options: string[];
  label?: string;
}
