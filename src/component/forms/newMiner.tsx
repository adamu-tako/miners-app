import { useEffect, useState } from "react";
import InputField from "../inputs/inputField";
import SelectInput from "../inputs/selectInput";
import { lgaList, wards } from "../../utils/constants";
import PrimaryButton from "../buttons/primaryButton";
import CheckInput from "../inputs/checkInput";
import { IMinerForm } from "../../types/miners";
import { createMiners, uploadPhoto } from "../../api";
import { useAppDispatch } from "../../store/hooks";
import { toggleToastOpen } from "../../store/slices/uiState";
import FileInput from "../inputs/customFIleSelect";
import { isDev } from "../../api/getCurrentHost";

type InputeHandlerKeys =
  | "fullName"
  | "state"
  | "phoneNumber"
  | "lga"
  | "ward"
  | "address"
  | "experience"
  | "companyName"
  | "guarantor"
  | "guarantorPhone";

const NewMinerForm = () => {
  const [wardList, setWardList] = useState<{ label: string; value: string }[]>(
    []
  );
  const [continueAdding, setContinueAdding] = useState<boolean>(false);
  const [minerFormInput, setMinerFormInput] = useState<IMinerForm>({
    fullName: "",
    phoneNumber: "",
    state: "Niger State",
    lga: "",
    ward: "",
    address: "",
    experience: "",
    companyName: "",
    guarantor: "",
    guarantorPhone: "",
  });
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<File>();

  const handleUpdateFormInput = (key: InputeHandlerKeys, value: string) => {
    setMinerFormInput((prevInput) => {
      const inputCopy: IMinerForm = { ...prevInput, [key]: value };
      return inputCopy;
    });
  };

  const handleImageUpload = (file: File | undefined) => {
    setImage(file);
  };

  const handleMinerCreation = async () => {
    try {
      const { data: minerData } = await createMiners(minerFormInput);

      if (minerData) {
        const { minerId } = minerData;
        dispatch(
          toggleToastOpen({
            label: "Miner created successfully",
            type: "SUCCESS",
          })
        );

        if (image) {
          const uploadDetails = await uploadPhoto(
            { key: "minerId", minerId },
            image
          );

          if (uploadDetails.data.success) {
            dispatch(
              toggleToastOpen({
                label: "Image uploaded successfully",
                type: "SUCCESS",
              })
            );
          } else {
            dispatch(
              toggleToastOpen({ label: "Something went wrong", type: "ERROR" })
            );
          }
        }

        if (continueAdding) {
          setMinerFormInput({
            fullName: "",
            phoneNumber: "",
            state: "Niger State",
            lga: "",
            ward: "",
            address: "",
            experience: "",
            companyName: "",
            guarantor: "",
            guarantorPhone: "",
          });
        } else {
          window.location.reload();
        }
      } else {
        // Handle error when miner creation fails
        dispatch(
          toggleToastOpen({ label: "Something went wrong", type: "ERROR" })
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (isDev()) {
        console.error("Error in handleMinerCreation:", error);
      }
      dispatch(
        toggleToastOpen({
          label: error.response.data.message,
          type: "ERROR",
        })
      );
    }
  };

  useEffect(() => {
    setWardList(wards[minerFormInput.lga as keyof typeof wards]);
  }, [minerFormInput.lga]);

  return (
    <div className="h-full flex flex-col max-h-full">
      <div className="overflow-auto pr-2 max-h-[80vh]">
        <InputField
          value={minerFormInput.fullName}
          onChange={(e) => handleUpdateFormInput("fullName", e.target.value)}
          required
          placeholder="Muhammadu Kudu"
          label="Full Name"
        />
        <InputField
          value={minerFormInput.phoneNumber}
          onChange={(e) => handleUpdateFormInput("phoneNumber", e.target.value)}
          required
          placeholder="8012345678"
          label="Phone Number"
          type="tel"
        />
        <InputField
          value={minerFormInput.state}
          onChange={(e) => handleUpdateFormInput("state", e.target.value)}
          required
          placeholder="Niger state"
          label="State"
          type="tel"
        />
        <div className="flex my-2 gap-4">
          <SelectInput
            value={minerFormInput.phoneNumber}
            onChange={(e) => handleUpdateFormInput("lga", e.target.value)}
            placeholder="Select ward"
            label="Local Government"
            options={lgaList}
          />
          <SelectInput
            value={minerFormInput.phoneNumber}
            onChange={(e) => handleUpdateFormInput("ward", e.target.value)}
            placeholder="Select ward"
            label="Ward"
            options={wardList ?? []}
          />
        </div>
        <InputField
          value={minerFormInput.address}
          onChange={(e) => handleUpdateFormInput("address", e.target.value)}
          required
          placeholder="Enter your state"
          label="Permanent Address"
        />
        <InputField
          value={minerFormInput.experience}
          onChange={(e) => handleUpdateFormInput("experience", e.target.value)}
          required
          placeholder="12"
          label="Years of working experience"
        />
        <InputField
          value={minerFormInput.companyName}
          onChange={(e) => handleUpdateFormInput("companyName", e.target.value)}
          required
          placeholder="Company name"
          label="Mining Company"
        />
        <InputField
          value={minerFormInput.guarantor}
          onChange={(e) => handleUpdateFormInput("guarantor", e.target.value)}
          required
          placeholder="Guarantor Name"
          label="Guarantor"
        />
        <InputField
          value={minerFormInput.guarantorPhone}
          onChange={(e) =>
            handleUpdateFormInput("guarantorPhone", e.target.value)
          }
          required
          placeholder="8012345678"
          label="Guarantor Phone Number"
          type="tel"
        />
        <FileInput
          label="Upload Picture"
          onChange={(e) => handleImageUpload(e.target?.files?.[0])}
          value={image as File}
          setValue={() => setImage(undefined)}
        />
      </div>
      <div className="flex justify-between py-4">
        <CheckInput
          value={continueAdding}
          onChange={() => setContinueAdding(!continueAdding)}
          label="Create new after submit"
        />
        <PrimaryButton label="Create Miner" handleClick={handleMinerCreation} />
      </div>
    </div>
  );
};

export default NewMinerForm;
