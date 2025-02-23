import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import React from "react";

interface Job {
  id: number;
  position: string;
  salary: string;
  description: string;
  responsibility?: string;
}

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
}

export default function JobsModal({ isOpen, onClose, job }: JobModalProps) {
  if (!job) return null;
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onClose} size="5xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="font-bold">
                Position: {job.position}
              </ModalHeader>
              <ModalBody className="font-bold">Salary: {job.salary}</ModalBody>
              <ModalBody className="job-modal-content">
                {job.description && (
                  <div dangerouslySetInnerHTML={{ __html: job.description }} />
                )}
                {job?.responsibility && (
                  <div
                    dangerouslySetInnerHTML={{ __html: job?.responsibility }}
                    className="job-responsibility"
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
