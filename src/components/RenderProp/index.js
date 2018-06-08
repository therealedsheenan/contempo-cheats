import React from "react";
import { Spin, Select, List } from "antd";

import SelectList from "./SelectList";

const RenderProp = () => (
  <div style={{ marginTop: 20 }}>
    <h3>Select box List</h3>
    <SelectList url="https://jsonplaceholder.typicode.com/photos">
      {({ list, isLoading, selectedItem, handleSelectItem }) => (
        <div>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            list.length && (
              <div>
                <Select
                  style={{ width: 200 }}
                  onChange={v => handleSelectItem(v)}
                  defaultValue={list[0].id}
                >
                  {list.map(l => (
                    <Select.Option value={l.id} key={l.id}>
                      {l.title}
                    </Select.Option>
                  ))}
                </Select>
                <div>
                  {Object.keys(selectedItem) && (
                    <div>
                      <h5>{selectedItem.title}</h5>
                      <img src={selectedItem.thumbnailUrl} alt="" />
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </SelectList>
    <hr />
    <h3>List type</h3>
    <SelectList url="https://jsonplaceholder.typicode.com/photos">
      {({ list, isLoading }) => (
        <div>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            list.length && (
              <List
                size="large"
                bordered
                dataSource={list}
                renderItem={item => (
                  <List.Item>
                    {item.title} - {item.url}
                  </List.Item>
                )}
              />
            )
          )}
        </div>
      )}
    </SelectList>
  </div>
);

export default RenderProp;
