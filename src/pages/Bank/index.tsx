// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useCallback, useEffect, useState } from "react";
import DropDown from "../../components/inputs/DropDown";
import MobileTextInput from "../../components/inputs/MobileTextInput";
import CustomInput from "../../components/inputs/TextInput";
import SaveButton from "../../components/buttons/SaveButton";
import Modal from "react-modal";
import {
  getBank,
  getCity,
  getSubBank,
  saveBank,
  saveCity,
  saveSubBank,
} from "../../constant/api";
import { bankType, cityType } from "../../type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "100vh",
  },
};

const Bank = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [bankModalIsOpen, setBankModalIsOpen] = useState(false);
  const [subBankModalIsOpen, setSubBankModalIsOpen] = useState(false);
  const [bankName, setBankName] = useState("");

  const initialFormState = {
    name: "",
    number: "",
    address1: "",
    address2: "",
    addressNo: "",
    cityId: "",
    phoneNo: "",
  };
  const initialFormStateSubBank = {
    name: "",
    addressNo: "",
    address: "",
    phoneNo: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formDataSubBank, setFormDataSubBank] = useState(
    initialFormStateSubBank
  );
  const [allBanks, setAllBanks] = useState<Array<bankType>>([]);
  const [allSubBank, setAllSubBank] = useState([]);
  const [allBanksOption, setAllBanksOption] = useState<Array<bankType>>([]);
  const [selectBank, setSelectBank] = useState("");
  const [allCity, setAllCity] = useState<Array<cityType>>([]);

  useEffect(() => {
    getBankData();
    getCityData();
    getSubBankData();
  }, []);

  const closeBankModal = () => {
    setBankModalIsOpen(false);
  };
  const closeSubBankModal = () => {
    setSubBankModalIsOpen(false);
  };

  const insertBank = async () => {
    var formDataAll = new FormData();
    formDataAll.append("mainData", JSON.stringify(formData));
    formDataAll.append("city", selectedValue);

    console.log(">>>>>>", selectedValue.valueOf());
    console.log(">>>>>>", formData);

    const response = await fetch(saveBank, {
      method: "POST", // Or 'POST', depending on your API
      body: formDataAll,
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response;
    console.log("..........", result);
    getBankData();
    setBankName("");
    closeBankModal();
  };
  const insertSubBank = async () => {
    var formDataAll = new FormData();
    formDataAll.append("mainData", JSON.stringify(formDataSubBank));
    formDataAll.append("bankId", selectBank);

    const response = await fetch(saveSubBank, {
      method: "POST", // Or 'POST', depending on your API
      body: formDataAll,
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response.text();
    console.log("..........", result);
    getSubBankData();
    setBankName("");
    closeSubBankModal();
  };
  const getBankData = async () => {
    const response = await fetch(getBank, {
      method: "POST", // Or 'POST', depending on your API
      headers: {
        "Content-Type": "multipart/form-data'", // Use application/json or whatever your API expects
      },
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response.json();
    setAllBanks(result);

    let arrayData: any[] = [];
    if (result.length > 0) {
      result.map((val: bankType, index: number) => {
        let data = {
          value: val.id,
          label: `${val.name} ${val.address1} ${val.address2}`,
          city: val.city_id,
        };
        arrayData.push(data);
        if (index == 0) {
          setSelectBank(val.id);
        }
      });
    }
    setAllBanksOption(arrayData);
  };
  const getSubBankData = async () => {
    const response = await fetch(getSubBank, {
      method: "POST", // Or 'POST', depending on your API
      headers: {
        "Content-Type": "multipart/form-data'", // Use application/json or whatever your API expects
      },
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response.json();
    setAllSubBank(result);
  };
  const getCityData = async () => {
    const response = await fetch(getCity, {
      method: "POST", // Or 'POST', depending on your API
      headers: {
        "Content-Type": "multipart/form-data'", // Use application/json or whatever your API expects
      },
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response.json();
    setAllCity(result);
    console.log(result);
  };

  const onChangeEvent = useCallback((event: any) => {
    const { name, value } = event.target; // Get the name and value from the input

    // Allow only digits for the "phoneNo" field
    if (name === "phoneNo" && !/^\d*$/.test(value)) {
      return; // Exit if value contains non-digit characters
    }

    // Update the specific field in formData
    setFormData((prevData) => ({
      ...prevData, // Spread the existing formData
      [name]: value, // Update the specific field that changed
    }));
  }, []);
  const onChangeEventSubBank = useCallback((event: any) => {
    const { name, value } = event.target; // Get the name and value from the input

    // Allow only digits for the "phoneNo" field
    if (name === "phoneNo" && !/^\d*$/.test(value)) {
      return; // Exit if value contains non-digit characters
    }

    // Update the specific field in formData
    setFormDataSubBank((prevData) => ({
      ...prevData, // Spread the existing formData
      [name]: value, // Update the specific field that changed
    }));
  }, []);

  const filterCityName = (id: string) => {
    console.log(">>>>>>..", id);
    const city = allCity.filter((a) => a.value == id);
    if (city.length > 0) {
      return city[0].label;
    } else {
      return "";
    }
  };

  const bankModal = () => {
    return (
      <Modal
        isOpen={bankModalIsOpen}
        onRequestClose={closeBankModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <label className="from-neutral-700 font-bold text-2xl mb-5 flex text-red-700">
            nexl= úia;rh we;=,;a lrkak
          </label>
          <CustomInput
            type={"text"}
            placeholder={"ku"}
            onChange={(e) => onChangeEvent(e)}
            value={formData.name}
            name={"name"}
          />
          <CustomInput type={"text"} placeholder={"wxlh"} name="number" />
          <CustomInput
            type={"text"}
            placeholder={",smsk wxlh"}
            name="address_no"
            value={formData.addressNo}
            onChange={(e) => onChangeEvent(e)}
          />
          <CustomInput
            type={"text"}
            placeholder={",smskh 1"}
            name="address1"
            value={formData.address1}
            onChange={(e) => onChangeEvent(e)}
          />
          <CustomInput
            type={"text"}
            placeholder={",smskh 2"}
            name="address2"
            value={formData.address2}
            onChange={(e) => onChangeEvent(e)}
          />
          <MobileTextInput
            type={"text"}
            placeholder={"ÿ'l wxlh"}
            name="phoneNo"
            value={formData.phoneNo}
            onChange={(e) => onChangeEvent(e)}
          />
          <DropDown
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            list={allCity}
            placeholder={"k.rh f;darkak"}
          />
          <SaveButton title="we;=,;a lrkak" onClick={() => insertBank()} />
        </div>
      </Modal>
    );
  };
  const subBankModal = () => {
    return (
      <Modal
        isOpen={subBankModalIsOpen}
        onRequestClose={closeSubBankModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <label className="from-neutral-700 font-bold text-2xl mb-5 flex text-red-700">
            Wm nexl= úia;rh we;=,;a lrkak
          </label>
          <DropDown
            selectedValue={selectBank}
            setSelectedValue={setSelectBank}
            list={allBanksOption}
            placeholder={"m%Odk nexl=j f;darkak"}
          />
          <CustomInput
            type={"text"}
            placeholder={"ku"}
            onChange={(e) => onChangeEventSubBank(e)}
            value={formDataSubBank.name}
            name={"name"}
          />
          <CustomInput
            type={"text"}
            placeholder={",smsk wxlh"}
            name="addressNo"
            value={formDataSubBank.addressNo}
            onChange={(e) => onChangeEventSubBank(e)}
          />
          <CustomInput
            type={"text"}
            placeholder={",smskh"}
            name="address"
            value={formDataSubBank.address}
            onChange={(e) => onChangeEventSubBank(e)}
          />
          <CustomInput
            type={"text"}
            placeholder={"k.rh"}
            name="city"
            value={formDataSubBank.city}
            onChange={(e) => onChangeEventSubBank(e)}
          />
          <MobileTextInput
            type={"text"}
            placeholder={"ÿ'l wxlh"}
            name="phoneNo"
            value={formDataSubBank.phoneNo}
            onChange={(e) => onChangeEventSubBank(e)}
          />
          <SaveButton title="we;=,;a lrkak" onClick={() => insertSubBank()} />
        </div>
      </Modal>
    );
  };
  return (
    <div className="items-center w-full flex flex-col justify-center ">
      {bankModalIsOpen && bankModal()}
      {subBankModalIsOpen && subBankModal()}
      <div>
        <label className="from-neutral-700 font-bold text-5xl text-red-600">
          nexl= f;dr;=re we;=,;a lsrSu
        </label>
      </div>
      <div className="w-full">
        <div className="mt-5 ml-5 mr-5">
          <label className="from-neutral-700 font-bold text-2xl text-blue-700">
            nexl= úia;r we;=,;a lsrSu
          </label>
          <table className="grid">
            <tr className="grid grid-cols-8">
              <th>wxlh</th>
              <th>ku</th>
              <th>,smsk wxlh</th>
              <th>,smskh 1</th>
              <th>,smskh 2</th>
              <th>ÿ'l wxlh</th>
              <th>k.rh</th>
              <th></th>
            </tr>
            {allBanks.map((val, key) => {
              return (
                <tr key={key} className="grid grid-cols-8">
                  <td>{key + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.address_no}</td>
                  <td>{val.address1}</td>
                  <td>{val.address2}</td>
                  <td>{val.phone_no}</td>
                  <td>{filterCityName(val.city_id)}</td>
                  <td>
                    <FontAwesomeIcon
                      color="red"
                      icon="fa fa-times-circle"
                      onClick={() => alert("Do you want to delete")}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
          <SaveButton
            title="tl;= lrkak"
            onClick={() => setBankModalIsOpen(true)}
          />
        </div>
        <div className="mt-10 ml-5 mr-5">
          <label className="from-neutral-700 font-bold text-2xl text-blue-700">
            Wm nexl= úia;r we;=,;a lsrSu
          </label>
          <table className="grid">
            <tr className="grid grid-cols-8">
              <th>wxlh</th>
              <th>ku</th>
              <th>m%Odk nexl=j</th>
              <th>,smsk wxlh</th>
              <th>,smskh 2</th>
              <th>ÿ'l wxlh</th>
              <th>k.rh</th>
              <th></th>
            </tr>
            {allSubBank.map((val, key) => {
              return (
                <tr key={key} className="grid grid-cols-8">
                  <td>{key + 1}</td>
                  <td>{val.bank_name}</td>
                  <td>{val.main_bank_name}</td>
                  <td>{val.address_no}</td>
                  <td>{val.address}</td>
                  <td>{val.phone_no}</td>
                  <td>{val.city}</td>
                  <td>
                    <FontAwesomeIcon
                      color="red"
                      icon="fa fa-times-circle"
                      onClick={() => alert("Do you want to delete")}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
          <SaveButton
            title="tl;= lrkak"
            onClick={() => setSubBankModalIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Bank;
