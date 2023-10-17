import { Input, Modal } from "antd";

function TableModal({ setIsModalOpen, isModalOpen }) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="modal__inner">
        <label>
          Name
          <Input placeholder="Name" />
        </label>

        <label>
          Status
          <Input placeholder="Status" />
        </label>

        <label>
          Price
          <Input placeholder="Price" />
        </label>

        <label>
          Duration
          <Input placeholder="Duration" />
        </label>

        <label>
          Created
          <Input placeholder="Created" />
        </label>
      </div>
    </Modal>
  );
}

export default TableModal;
