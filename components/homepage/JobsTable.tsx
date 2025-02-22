"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import JobsData from "../data/JobsData";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export default function JobsTable(props: { title: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 tems-center mb-5 gap-4 lg:gap-32">
          <h4 className="col-span-1 lg:col-span-6 primary text-3xl lg:text-4xl text-center lg:text-start font-bold">
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
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            {JobsData.map((list: any) => (
              <TableRow key={list.id}>
                <TableCell>{list.position}</TableCell>
                <TableCell>{list.totalHiring}</TableCell>
                <TableCell>{list.salary}</TableCell>
                <TableCell className="">
                  <span
                    className={`flex items-center gap-2 ${
                      list.status === "Close" ? "text-danger" : "text-green-700"
                    }`}
                  >
                    {list.status === "Close" ? (
                      <MdCancel />
                    ) : (
                      <IoIosCheckmarkCircle />
                    )}
                    {list.status}
                  </span>
                </TableCell>
                <TableCell className="flex gap-2 items-center">
                  <Button size="sm" radius="sm" onPress={onOpen}>
                    View Detail
                  </Button>
                  <Button size="sm" radius="sm" color="primary">
                    Apply
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Position Detail</ModalHeader>
              <ModalBody>Body content</ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Close</Button>
                <Button color="primary">Apply Now</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
