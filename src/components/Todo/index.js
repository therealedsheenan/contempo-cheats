import React from "react";
import { List, Input, Button, Icon } from "antd";

import Todo from "./Todo";

const Todos = () => (
  <div>
    <Todo>
      {({ todoTyping, newTodo, todos, addTodo, removeTodo, resetStates }) => (
        <div>
          <Button onClick={resetStates}>Reset</Button>
          <Input.Group>
            <Input onChange={todoTyping} value={newTodo} />
            <Button type="primary" onClick={addTodo}>
              Submit
            </Button>
          </Input.Group>
          <List
            style={{ marginTop: 30 }}
            bordered
            dataSource={todos}
            renderItem={item => (
              <List.Item>
                <Icon
                  onClick={removeTodo.bind(this, item)}
                  style={{ color: "red" }}
                  type="close-circle-o"
                />{" "}
                {item}
              </List.Item>
            )}
          />
        </div>
      )}
    </Todo>
  </div>
);

export default Todos;
