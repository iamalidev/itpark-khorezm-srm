import { CheckIcon, PenIcon, TrashIcon } from "@/assets/icons";
import { Button, Empty, Input } from "antd";
import React from "react";

const Todo = () => {
  const addAlert = () => {
    alert("");
  };

  return (
    <div className="todo">
      <div className="todo__top">
        <Input
          className="todo__input"
          placeholder="Add a task"
          allowClear
          onPressEnter={addAlert}
        />
        <Button className="todo__btn">+ Add</Button>
      </div>
      <div className="todo__bottom">
        <div className="todo__notdone">
          <div className="todo__notdone-box">
            Lorem ipsum dolor sit amet consectetur elit
            <div className="todo__actions">
              <CheckIcon />
              <PenIcon />
              <TrashIcon />
            </div>
          </div>
          <div className="todo__notdone-box">
            Lorem ipsum dolor sit amet consectetur elit
            <div className="todo__actions">
              <CheckIcon />
              <PenIcon />
              <TrashIcon />
            </div>
          </div>
          <div className="todo__notdone-box">
            Lorem ipsum dolor sit amet consectetur elit
            <div className="todo__actions">
              <CheckIcon />
              <PenIcon />
              <TrashIcon />
            </div>
          </div>
        </div>
        <div className="todo__done">
          <div className="todo__done-box">
            Lorem ipsum dolor sit amet consectetur elit
            <div className="todo__actions">
              <TrashIcon gray={"#000"} />
            </div>
          </div>
          <div className="todo__done-box">
            Lorem ipsum dolor sit amet consectetur elit
            <div className="todo__actions">
              <TrashIcon gray={"#000"} />
            </div>
          </div>
          <div className="todo__done-box">
            Lorem ipsum dolor sit amet consectetur elit
            <div className="todo__actions">
              <TrashIcon gray={"#000"} />
            </div>
          </div>
          <div className="todo__done-box">
            Lorem ipsum dolor sit amet consectetur elit
            <div className="todo__actions">
              <TrashIcon gray={"#000"} />
            </div>
          </div>
          <div className="todo__done-box">
            Lorem ipsum dolor sit amet consectetur elit
            <div className="todo__actions">
              <TrashIcon gray={"#000"} />
            </div>
          </div>
        </div>
      </div>
      {/* <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> */}
    </div>
  );
};

export default Todo;
