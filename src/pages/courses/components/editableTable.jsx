import { Table } from "antd";
import { DeleteIcon, EditIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EditableTable = ({ data, setData }) => {
  const handleDeleteRow = (targetIndex) => {
    // eslint-disable-next-line react/prop-types
    setData(data.filter((_, idx) => idx !== targetIndex));
  };

  const columns = [
    {
      title: <p className="key__box">#</p>,
      dataIndex: "number",
      key: "number",
      render: (_, key) => <div className="key__box">{key.key}</div>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="name__box">
          <Link to="/">{text}</Link>
        </div>
      ),
    },
    {
      title: <p className="price__box">Status</p>,
      dataIndex: "status",
      key: "status",
      render: (status) => <div className="price__box">{status}</div>,
    },
    {
      title: <p className="price__box">Price</p>,
      dataIndex: "price",
      key: "price",
      render: (price) => <div className="price__box">{price}</div>,
    },
    {
      title: <p className="price__box">Duration</p>,
      key: "duration",
      render: (_, record) => (
        <div className="price__box">{record.duration}</div>
      ),
    },
    {
      title: "Created",
      key: "created",
      render: (_, record) => (
        <div className="created__box">{record.created}</div>
      ),
    },
    {
      title: "",
      dataIndex: "address",
      render: (_, key) => {
        return (
          <div className="action__box">
            <button>
              <EditIcon />
            </button>

            <button onClick={() => handleDeleteRow(key.key - 1)}>
              <DeleteIcon />
            </button>
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default EditableTable;
