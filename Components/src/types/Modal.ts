import type { JSX } from "react";

export type Modal = {
  title: string;
  bodyContent: string | (() => JSX.Element);
  footer?: string | (() => JSX.Element);
  isOpen?: boolean;
  onClose: () => void;
};
