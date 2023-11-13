import React from "react";
import { Collapse } from "antd";
import { AddIcon, CircleArrowIcon, GrayArrowIcon } from "@/assets/icons";
import CircleEditIcon from "@/assets/icons/circleEditIcon";

const CourseAccord = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const genExtra = () => (
    <div className="accordion__actions">
      <GrayArrowIcon style={{ transform: "rotateZ(180deg)" }} />
      <GrayArrowIcon />
      <CircleEditIcon />
      <AddIcon />
    </div>
  );
  const items = [
    {
      key: "1",
      label: "1. Kompyuter bilan tanishish",
      children: (
        <div className="accordion__inner">
          <p>1. Kompyuter va uning qurilmalari</p>
          <br />
          <p>2. Kompyuter va uning qurilmalari</p>
          <br />
          <p>3. Kompyuter va uning qurilmalari</p>
          <br />
          <p>4. Kompyuter va uning qurilmalari</p>
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "2",
      label: "2. Kompyuter bilan tanishish",
      children: (
        <div className="accordion__inner">
          <p>1. Kompyuter va uning qurilmalari</p>
          <br />
          <p>2. Kompyuter va uning qurilmalari</p>
          <br />
          <p>3. Kompyuter va uning qurilmalari</p>
          <br />
          <p>4. Kompyuter va uning qurilmalari</p>
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "3",
      label: "3. Kompyuter bilan tanishish",
      children: (
        <div className="accordion__inner">
          <p>1. Kompyuter va uning qurilmalari</p>
          <br />
          <p>2. Kompyuter va uning qurilmalari</p>
          <br />
          <p>3. Kompyuter va uning qurilmalari</p>
          <br />
          <p>4. Kompyuter va uning qurilmalari</p>
        </div>
      ),
      extra: genExtra(),
    },
  ];
  return (
    <>
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? (
            <CircleArrowIcon />
          ) : (
            <CircleArrowIcon style={{ transform: "rotateZ(180deg)" }} />
          )
        }
        defaultActiveKey={["0"]}
        onChange={onChange}
        items={items}
      />
    </>
  );
};
export default CourseAccord;
