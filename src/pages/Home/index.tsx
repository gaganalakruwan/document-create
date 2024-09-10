// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import DropDown from "../../components/inputs/DropDown";
import MobileTextInput from "../../components/inputs/MobileTextInput";
import CustomInput from "../../components/inputs/TextInput";
import SaveButton from "../../components/buttons/SaveButton";
import Modal from "react-modal";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Home = () => {
  const options = [
    { value: "Option 1", label: "rd.u" },
    { value: "Option 2", label: ".ïm." },
    { value: "Option 3", label: "ó.uqj" },
  ];
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];
  const [selectedValue, setSelectedValue] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [bankModalIsOpen, setBankModalIsOpen] = useState(false);

  const openModal=()=> {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const openBankModal=()=>{
    setBankModalIsOpen(true);
  }
  const closeBankModal=()=>{
    setBankModalIsOpen(false);
  }
  return (
    <div className="items-center w-full flex flex-col justify-center ">
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           <label className="from-neutral-700 font-bold text-2xl mb-5 flex">
              k.r úia;rh we;=,;a lrkak
            </label>
          <CustomInput type={"text"} placeholder={"k.rh"} />

          <SaveButton title="we;=,;a lrkak" onClick={()=>closeModal()}/>
        </Modal>
      </div>
      <div>
        <Modal
          isOpen={bankModalIsOpen}
          onRequestClose={openBankModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           <label className="from-neutral-700 font-bold text-2xl mb-5 flex">
           nexl= úia;rh we;=,;a lrkak
            </label>
          <CustomInput type={"text"} placeholder={"ku"} />
          <CustomInput type={"text"} placeholder={"wxlh"} />
          <CustomInput type={"text"} placeholder={",smsk wxlh"} />
          <CustomInput type={"text"} placeholder={",smskh 1"} />
          <CustomInput type={"text"} placeholder={",smskh 2"} />
          <CustomInput type={"text"} placeholder={",smskh 3"} />
          <MobileTextInput type={"text"} placeholder={"ÿ'l wxlh"} />
          <DropDown
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            list={options}
            placeholder={"k.rh f;darkak"}
          />

          <SaveButton title="we;=,;a lrkak" onClick={()=>closeBankModal()}/>
        </Modal>
      </div>
      <div>
        <label className="from-neutral-700 font-bold text-5xl">
          uq,sl f;dr;=re we;=,;a lsrSu
        </label>
      </div>
      <div className="w-full flex">
        <div className="mt-5 ml-5 mr-5 w-1/4">
          <div className="flex flex-row items-center">
            <label className="from-neutral-700 font-bold text-2xl">
              k.rh we;=,;a lsrSu
            </label>
            {/* <div className="bg-cyan-500 rounded-md items-center justify-center flex ml-3">
              <FontAwesomeIcon icon="plus" className="p-2 from-slate-200" color="white" />
            </div> */}
          </div>
          <table className="grid">
            <tr className="grid grid-cols-2">
              <th>wxlh</th>
              <th>k.rh</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key} className="grid grid-cols-2">
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                </tr>
              );
            })}
          </table>

          <SaveButton title="tl;= lrkak" onClick={()=>openModal()}/>

          
        </div>

        <div className="mt-5 bg-orange-400 ml-5 mr-5 w-3/4">
          <label className="from-neutral-700 font-bold text-2xl">
            nexl= úia;r we;=,;a lsrSu
          </label>
          <table className="grid">
            <tr className="grid grid-cols-8">
              <th>wxlh</th>
              <th>ku</th>
              <th>,smsk wxlh</th>
              <th>,smskh 1</th>
              <th>,smskh 2</th>
              <th>,smskh 3</th>
              <th>ÿ'l wxlh</th>
              <th>k.rh</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key} className="grid grid-cols-2">
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                </tr>
              );
            })}

          </table>
          <SaveButton title="tl;= lrkak" onClick={()=>setBankModalIsOpen(true)}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
