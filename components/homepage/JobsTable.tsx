"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export default function JobsTable(props: { title: string }) {
  return (
    <div className="mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 tems-center mb-5 gap-4 lg:gap-32">
        <h4 className="col-span-1 lg:col-span-6 primary text-4xl font-bold">
          {props.title}
        </h4>
        <div className="flex gap-2 items-center col-span-1 lg:col-span-6">
          <Input
            label="Search jobs by title"
            type="search"
            className="w-full"
            size="sm"
          />
          <Button size="lg" radius="sm" color="primary">
            Search
          </Button>
        </div>
      </div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>POSITION</TableColumn>
          <TableColumn>TOTAL HIRING</TableColumn>
          <TableColumn>SALARY</TableColumn>
          <TableColumn>AVAIBILITY</TableColumn>
          <TableColumn>ACTION</TableColumn>
          <TableColumn>{""}</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Software Engineer I</TableCell>
            <TableCell>2</TableCell>
            <TableCell>NPR 60000</TableCell>
            <TableCell>Closed</TableCell>
            <TableCell>View Detail</TableCell>
            <TableCell>Apply</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Technical Lead</TableCell>
            <TableCell>2</TableCell>
            <TableCell>NPR 120000</TableCell>
            <TableCell>1 Available</TableCell>
            <TableCell>View Detail</TableCell>
            <TableCell>Apply</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
