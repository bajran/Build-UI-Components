import { useEffect, useRef } from "react";
import type { Modal as ModalType } from "../../../types/Modal";
import styles from "./Modal.module.css";

export const Modal: React.FC<ModalType> = (props) => {
  const { title, bodyContent, footer, isOpen, onClose } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          className={styles.container}
          onClick={handleClick}
          role="dialog"
          aria-modal={true}
        >
          <div className={styles.modal}>
            <header className={styles.header} aria-label="Title">
              {title}
            </header>
            <article className={styles.body} aria-label="Body Content">
              {typeof bodyContent === "function"
                ? bodyContent?.()
                : bodyContent}
            </article>
            <footer aria-label="Footer" className={styles.footer}>
              {typeof footer === "function" ? footer?.() : footer}
            </footer>
          </div>
        </div>
      )}
    </>
  );
};
