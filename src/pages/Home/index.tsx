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
  getLawyer,
  insertBank,
  saveBank,
  saveCity,
  saveLawyer,
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

const Home = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bankModalIsOpen, setBankModalIsOpen] = useState(false);
  const [bankName, setBankName] = useState("");

  const initialFormState = {
    initials: "",
    firstName: "",
    lastName: "",
    address2: "",
    phoneNo: "",
  };
  const list = [
    { value: "1", label: "uy;d" },
    { value: "2", label: "uy;añh" },
    { value: "3", label: "fukúh" },
  ];
  const [formData, setFormData] = useState(initialFormState);

  const [allTitles, setAllTitles] = useState(list);
  const [selectedTitle, setSelectedTitle] = useState("1");
  const [allLawyers, setAllLawyers] = useState([]);
  const [allCity, setAllCity] = useState<Array<cityType>>([]);

  useEffect(() => {
    getLawyerData();
    getCityData();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  const openBankModal = () => {
    setBankModalIsOpen(true);
  };
  const closeBankModal = () => {
    setBankModalIsOpen(false);
  };

  const getSelectedLabel = () => {
    const selectedOption = list.find(
      (option) => option.value == selectedTitle
    );
    return selectedOption ? selectedOption.label : "Not Found";
  };

  const insertCity = async () => {
    var formData = new FormData();
    formData.append("city", bankName);

    const response = await fetch(saveCity, {
      method: "POST", // Or 'POST', depending on your API
      body: formData,
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response;
    console.log("..........", result);
    getCityData();
    setBankName("");
    closeModal();
  };
  const insertLawyer = async () => {
    var formDataAll = new FormData();
    formDataAll.append("mainData", JSON.stringify(formData));
    formDataAll.append("title", getSelectedLabel());

    const response = await fetch(saveLawyer, {
      method: "POST", // Or 'POST', depending on your API
      body: formDataAll,
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response;
    getLawyerData();
    setBankName("");
    closeBankModal();
  };
  const getLawyerData = async () => {
    const response = await fetch(getLawyer, {
      method: "POST", // Or 'POST', depending on your API
      headers: {
        "Content-Type": "multipart/form-data'", // Use application/json or whatever your API expects
      },
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response.json();
    if (result.length > 0) {
      setAllLawyers(result);
    } else {
      setAllLawyers([]);
    }
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

  const filterCityName = (id: string) => {
    console.log(">>>>>>..", id);
    const city = allCity.filter((a) => a.value == id);
    if (city.length > 0) {
      return city[0].label;
    } else {
      return "";
    }
  };
  return (
    <div className="items-center w-full flex flex-col justify-center ">
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <label className="from-neutral-700 font-bold text-2xl mb-5 flex text-red-700">
            k.r úia;rh we;=,;a lrkak
          </label>
          <CustomInput
            type={"text"}
            placeholder={"k.rh"}
            value={bankName}
            onChange={(e: any) => setBankName(e.target.value)}
          />

          <SaveButton title="we;=,;a lrkak" onClick={() => insertCity()} />
        </Modal>
      </div>
      <div>
        <Modal
          isOpen={bankModalIsOpen}
          onRequestClose={closeBankModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <label className="from-neutral-700 font-bold text-2xl mb-5 flex text-red-700">
              {`kS;s{hskaf.a úia;rh we;=,;a lrkak`}
            </label>
            <CustomInput
              type={"text"}
              placeholder={"uq,l=re"}
              onChange={(e) => onChangeEvent(e)}
              value={formData.initials}
              name={"initials"}
            />
            <CustomInput
              type={"text"}
              placeholder={"uq,a ku"}
              name="firstName"
              value={formData.firstName}
              onChange={(e) => onChangeEvent(e)}
            />
            <CustomInput
              type={"text"}
              placeholder={"wjidk ku"}
              name="lastName"
              value={formData.lastName}
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
              selectedValue={selectedTitle}
              setSelectedValue={setSelectedTitle}
              list={allTitles}
              placeholder={"wduka;%Kh"}
            />
            <SaveButton title="we;=,;a lrkak" onClick={() => insertLawyer()} />
          </div>
        </Modal>
      </div>
      <div>
        <label className="from-neutral-700 font-bold text-5xl text-red-600">
          uq,sl f;dr;=re we;=,;a lsrSu
        </label>
      </div>
      <div className="w-full flex">
        <div className="mt-5 ml-5 mr-5 w-1/4">
          <div className="flex flex-row items-center">
            <label className="from-neutral-700 font-bold text-2xl text-blue-700">
              k.rh we;=,;a lsrSu
            </label>
            {/* <div className="bg-cyan-500 rounded-md items-center justify-center flex ml-3">
              <FontAwesomeIcon icon="plus" className="p-2 from-slate-200" color="white" />
            </div> */}
          </div>
          <table className="grid">
            <tr className="grid grid-cols-3">
              <th>wxlh</th>
              <th>k.rh</th>
              <th></th>
            </tr>
            {allCity.map((val, key) => {
              return (
                <tr key={key} className="grid grid-cols-3">
                  <td>{key}</td>
                  <td>{val.label}</td>
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

          <SaveButton title="tl;= lrkak" onClick={() => openModal()} />
        </div>

        <div className="mt-5 ml-5 mr-5 w-3/4">
          <label className="from-neutral-700 font-bold text-2xl text-blue-700">
            {`kS;s{hskaf.a úia;r we;=,;a lsrSu`}
          </label>
          <table className="grid">
            <tr className="grid grid-cols-7">
              <th>wxlh</th>
              <th>uq,l=re</th>
              <th>uq,a ku</th>
              <th>wjidk ku</th>
              <th>ÿ'l wxlh</th>
              <th>wduka;%Kh</th>
              <th></th>
            </tr>
            {allLawyers.map((val, key) => {
              return (
                <tr key={key} className="grid grid-cols-7">
                  <td>{key + 1}</td>
                  <td>{val.initials}</td>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.phoneNo}</td>
                  <td>{val.title}</td>
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
      </div>
    </div>
  );
};

export default Home;

// profile eka balanna one log unama,
// masa 3ka paysheet balanna
// leave request karanna,leave eke status eka balanaganna
// leave balance eka balanna
// wadata enawada nadda kiyana eka mark karanna. meka web eke na
