export type Position =  "left" | "right" | "center";

export type Option = {
  label: string;
  value: string;
};

export type TextProps = {
  text: string;
}

export type RadioFormProps = {
  text?: string;
  name: string;
  options: Option[];
}

export type CheckFormProps = {
  text?: string;
  name: string;
  options: Option[];
}

export type Item = { position: Position } & (
  ({ type: 'text' } & TextProps) |
  ({ type: 'radio-form' } & RadioFormProps) |
  ({ type: 'check-form' } & RadioFormProps)
)