import { useState } from "react";
import InputField from "../inputs/inputField";

interface IMinerForm {
  fullName: string;
  phoneNumber: string;
  state: string;
  lga: string;
  ward: string;
  address: string;
  experience: string;
  company: string;
  guarantor: string;
  guarantorPhone: string;
}

type InputeHandlerKeys =
  | "fullname"
  | "state"
  | "phoneNumber"
  | "lga"
  | "ward"
  | "address"
  | "experience"
  | "company"
  | "guarantor"
  | "gurantorPhone";

const NewMinerForm = () => {
  const [minerFormInput, setMinerFormInput] = useState<IMinerForm>({
    fullName: "",
    phoneNumber: "",
    state: "",
    lga: "",
    ward: "",
    address: "",
    experience: "",
    company: "",
    guarantor: "",
    guarantorPhone: "",
  });

  const handleUpdateFormInput = (key: InputeHandlerKeys, value: string) => {
    setMinerFormInput((prevInput) => {
      const inputCopy: IMinerForm = { ...prevInput, [key]: value };
      return inputCopy;
    });
  };

  return (
    <div>
      <InputField
        value={minerFormInput.fullName}
        onChange={(e) => handleUpdateFormInput("fullname", e.target.value)}
        required
        placeholder="Muhammadu Kudu"
        label="Full Name"
      />
      <InputField
        value={minerFormInput.phoneNumber}
        onChange={(e) => handleUpdateFormInput("phoneNumber", e.target.value)}
        required
        placeholder="Muhammadu Kudu"
        label="8012345678"
        type="tel"
      />
    </div>
  );
};

export default NewMinerForm;
