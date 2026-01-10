export interface Version {
  tag: string;
  label: string;
  default?: boolean;
}

export const VERSIONS: Version[] = [
  {
    tag: "1.0.1",
    label: "v1.0.1",
    default: true,
  },
  {
    tag: "1.0.0",
    label: "v1.0.0",
  },
];

export const CURRENT_VERSION = "dev";
