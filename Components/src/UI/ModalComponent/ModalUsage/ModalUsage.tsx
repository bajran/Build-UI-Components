import { useState } from "react";
import { Modal } from "../Modal/Modal";
import styles from "./ModalUsage.module.css";

export const ModuleUsage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      <div
        className={[styles.container, showModal && styles.scrollLock]
          .filter(Boolean)
          .join(" ")}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic.
        </p>
      </div>
      <Modal
        onClose={handleCloseModal}
        title={"This is Component"}
        bodyContent={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam
          illo, unde aliquid beatae itaque obcaecati delectus reprehenderit
          quidem magni, eveniet corporis. Nulla quam repellat modi dignissimos
          maxime. Culpa, hic`}
        isOpen={showModal}
        footer={() => (
          <button onClick={handleCloseModal} style={{ padding: "4px" }}>
            Close Modal
          </button>
        )}
      />
    </>
  );
};
