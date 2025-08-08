import React, { useState } from "react";
import { Table, Input, Select } from "antd";
import leadsData from "../data/leadsData";
import "./Leads.css";

const { Search } = Input;
const { Option } = Select;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Submitted",
    dataIndex: "submitted",
    sorter: (a, b) => new Date(a.submitted) - new Date(b.submitted),
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      { text: "Pending", value: "Pending" },
      { text: "Reached Out", value: "Reached Out" },
    ],
    onFilter: (value, record) => record.status === value,
  },
  {
    title: "Country",
    dataIndex: "country",
    sorter: (a, b) => a.country.localeCompare(b.country),
  },
];

const Leads = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState();

  const filteredData = leadsData.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) &&
      (status ? lead.status === status : true)
  );

  return (
    <div className="leads-card">
      <div className="leads-header">
        <h3 className="leads-title">Leads</h3>
        <div className="leads-filters">
          <Search
            placeholder="Search"
            allowClear
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: 200 }}
            className="leads-search"
          />
          <Select
            placeholder="Status"
            allowClear
            onChange={setStatus}
            style={{ width: 140 }}
            className="leads-select"
          >
            <Option value="Pending">Pending</Option>
            <Option value="Reached Out">Reached Out</Option>
          </Select>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData.map((item) => ({ ...item, key: item.id }))}
        pagination={{ pageSize: 7, showSizeChanger: false }}
        className="leads-table"
      />
    </div>
  );
};

export default Leads;
