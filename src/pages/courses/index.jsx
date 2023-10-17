import { Button } from "antd";
import EditableTable from "./components/editableTable";
import { useState } from "react";
import TableModal from "./components/tableModal";

function CoursesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState([
    {
      key: 1,
      name: "Kompyuter Savodhonligi",
      status: 1,
      price: "300 000",
      duration: 1,
      created: "00-00-0000",
    },
    {
      key: 2,
      name: "Frontend Dasturlash",
      status: 1,
      price: "200 000",
      duration: 2,
      created: "00-00-0000",
    },
    {
      key: 3,
      name: "Grafik Dizayn",
      status: 1,
      price: "100 000",
      duration: 3,
      created: "00-00-0000",
    },
  ]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="table__wrapper">
      <Button type="primary" onClick={showModal} className="add__btn">
        Add
      </Button>
      <TableModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <EditableTable
        showModal={showModal}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default CoursesPage;
