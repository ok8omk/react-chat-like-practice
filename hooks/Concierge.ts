import type { Item } from "types";

export const MOTIVATION_OPTIONS = {
  offer: "仕事を探したい",
  magazine: "業界の知識を深めたい",
} as const;

export const CERTIFICATION_OPTIONS = {
  teach: "教員免許",
  childminder: "保育士",
  pt: "理学療法士",
  ot: "作業療法士",
  st: "言語聴覚士",
} as const;

export class Concierge {
  say(text: string): Item {
    return {
      position: "left",
      type: "text",
      text,
    };
  }

  hearMotivation(onAnswer: (value: string) => void): Item {
    return {
      position: "left",
      type: "radio-form",
      text: "現在のご状況を教えてください。",
      name: "motivation",
      options: Object.entries(MOTIVATION_OPTIONS).map(([key, value]) => {
        return { label: value, value: key };
      }),
      onAnswer,
    };
  }

  hearCertifications(onAnswer: (values: string[]) => void): Item {
    return {
      position: "left",
      type: "check-form",
      text: "お持ちの資格を教えてください。(複数回答可)",
      name: "certifications",
      options: Object.entries(CERTIFICATION_OPTIONS).map(([key, value]) => {
        return { label: value, value: key };
      }),
      onAnswer,
    };
  }
}
