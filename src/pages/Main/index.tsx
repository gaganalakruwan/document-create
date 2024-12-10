// import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import DropDown from "../../components/inputs/DropDown";
import CustomInput from "../../components/inputs/TextInput";
import MobileTextInput from "../../components/inputs/MobileTextInput";
import Modal from "react-modal";
import SaveButton from "../../components/buttons/SaveButton";
import { accusedType, bankType, cityType } from "../../type";
import { getBank, getCity, getLawyer, getSubBank } from "../../constant/api";
import Checkbox from "../../components/checkbox/Checkbox";
import MainFormModal from "../../components/mainFormModal/MainFormModal";

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

const Main = () => {
  const options = [
    { value: "Option 1", label: "rd.u" },
    { value: "Option 2", label: ".ïm." },
    { value: "Option 3", label: "ó.uqj" },
  ];
  const [selectedValue, setSelectedValue] = useState("");
  const [selectBank, setSelectBank] = useState("");
  const [selectSubBank, setSelectSubBank] = useState("");
  const [selectLawyer, setSelectLawyer] = useState("");
  const [gurentorsModalIsOpen, setGurentorsModalIsOpen] = useState(false);
  const [accusedModalIsOpen, setaccusedModalIsOpen] = useState(false);
  const [installmentModalIsOpen, setInstallmentModalIsOpen] = useState(false);
  const [creditModalIsOpen, setCreditModalIsOpen] = useState(false);
  const [outstandingModalIsOpen, setOutstandingModalIsOpen] = useState(false);
  const [mainFormOpen, setMainFormOpen] = useState(false);

  const [allGurentors, setAllGurentors] = useState<Array<accusedType>>([]);
  const [allAccused, setAllAccused] = useState<Array<accusedType>>([]);

  const initialFormState = {
    number: "",
    name: "",
    address1: "",
    address2: "",
    address3: "",
    addressNo: "",
    city: "",
    phoneNo: "",
  };
  const initialInstallmentFormState = {
    noOfInstallment: "",
    amount: "",
  };
  const initialCreditFormState = {
    amount: "",
    dateOfCredit: "",
  };
  const initialOutstandingFormState = {
    accountNo: "",
    creditBlance: "",
  };
  const initialMainFormState = {
    accountNo: "",
    valueOfPlaint: "",
    dateOfSignToAccount: "",
    interest: "",
    interestWithWord: "",
    yearsOfPayment: "",
    monthsOfPayment: "",
    totalAmount: "",
    settlementBoardCity: "",
    dateOfcalculationOfArriesLoan: "",
    letterOfDemandSendDate: "",
    arriesInterestAmount: "",
  };
  const [formDataGurentor, setFormDataGurentor] = useState(initialFormState);
  const [formDataAccused, setFormDataAccused] = useState(initialFormState);

  const [formDataInstallment, setFormDataInstallment] = useState(
    initialInstallmentFormState
  );
  const [formDataOutstanding, setFormDataOutstanding] = useState(
    initialOutstandingFormState
  );
  const [formDataCredit, setFormDataCredit] = useState(initialCreditFormState);
  const [formDataMain, setFormDataMain] = useState(initialMainFormState);

  const [allBanksOption, setAllBanksOption] = useState([]);
  const [allBanks, setAllBanks] = useState<Array<bankType>>([]);
  const [allSubBanksOption, setAllSubBanksOption] = useState([]);
  const [allSubBanks, setAllSubBanks] = useState([]);
  const [allLawyerOption, setAllLawyerOption] = useState([]);
  const [allLawyer, setAllLawyer] = useState([]);
  const [filterBank, setFilterBank] = useState<Array<bankType>>([]);
  const [filterSubBank, setFilterSubBank] = useState<Array<bankType>>([]);
  const [allCity, setAllCity] = useState<Array<cityType>>([]);
  const [installmentDetails, setInstallmentDetails] = useState([]);
  const [creditDetails, setCreditDetails] = useState([]);
  const [outstandingDetails, setOutstandingDetails] = useState([]);

  const [checkSavingAccount, setCheckSavingAccount] = useState(true);
  const [checkLoanApplyForm, setCheckLoanApplyForm] = useState(true);
  const [checkConditionLetter, setCheckConditionLetter] = useState(true);
  const [checkLoanAgreement, setCheckLoanAgreement] = useState(true);
  const [checkBailBond, setCheckBailBond] = useState(true); //apa oppuwa
  const [checkBill, setCheckBill] = useState(true);
  const [checkPromissNote, setCheckPromissNote] = useState(true);
  const [checkSettlementBord, setCheckSettlementBord] = useState(true);
  const [checkDescriptionOfInterest, setCheckDescriptionOfInterest] =
    useState(true);

  useEffect(() => {
    getCityData();
    getSubBankData();
    getLawyerData();
  }, []);
  useEffect(() => {
    let bank = allBanksOption.filter((a: any) => a.city == selectedValue);
    console.log(bank);
    if (bank.length > 0) {
      setFilterBank(bank);
    } else {
      setFilterBank([]);
    }
  }, [selectedValue]);
  useEffect(() => {
    let bank = allSubBanksOption.filter((a: any) => a.mainBank == selectBank);
    if (bank.length > 0) {
      setFilterSubBank(bank);
    } else {
      setFilterSubBank([]);
    }
  }, [selectBank]);

  const onChangeEventAccused = (event: any) => {
    const { name, value } = event.target; // Get the name and value from the input
    if (name == "phoneNo") {
      if (!/^\d*$/.test(value)) {
      } else {
        setFormDataAccused({
          ...formDataAccused, // Spread the existing formData
          [name]: value, // Update the specific field that changed
        });
      }
    } else {
      setFormDataAccused({
        ...formDataAccused, // Spread the existing formData
        [name]: value, // Update the specific field that changed
      });
    }
  };

  const onChangeEventGurentor = (event: any) => {
    const { name, value } = event.target; // Get the name and value from the input
    if (name == "phoneNo") {
      if (!/^\d*$/.test(value)) {
      } else {
        setFormDataGurentor({
          ...formDataGurentor, // Spread the existing formData
          [name]: value, // Update the specific field that changed
        });
      }
    } else {
      setFormDataGurentor({
        ...formDataGurentor, // Spread the existing formData
        [name]: value, // Update the specific field that changed
      });
    }
  };
  const onChangeEventInstallment = (event: any) => {
    const { name, value } = event.target; // Get the name and value from the input
    setFormDataInstallment({
      ...formDataInstallment, // Spread the existing formData
      [name]: value, // Update the specific field that changed
    });
  };
  const onChangeEventCredit = (event: any) => {
    const { name, value } = event.target; // Get the name and value from the input
    setFormDataCredit({
      ...formDataCredit, // Spread the existing formData
      [name]: value, // Update the specific field that changed
    });
  };
  const onChangeEventOutstanding = (event: any) => {
    const { name, value } = event.target; // Get the name and value from the input
    setFormDataOutstanding({
      ...formDataOutstanding, // Spread the existing formData
      [name]: value, // Update the specific field that changed
    });
  };
  const onChangeEventMain = (event: any) => {
    const { name, value } = event.target; // Get the name and value from the input
    setFormDataMain({
      ...formDataMain, // Spread the existing formData
      [name]: value, // Update the specific field that changed
    });
  };

  const getBankData = async (allCities: any) => {
    const response = await fetch(getBank, {
      method: "POST", // Or 'POST', depending on your API
      headers: {
        "Content-Type": "multipart/form-data'", // Use application/json or whatever your API expects
      },
      mode: "cors", // Ensure CORS mode is enabled
    });
    const result = await response.json();

    let arrayData: any[] = [];
    if (result.length > 0) {
      result.map((val: bankType, index: number) => {
        let data = {
          value: val.id,
          label: `${val.name} ${val.address_no} ${val.address1} ${val.address2} ${val.city}`,
          address:`${val.name} ${val.address_no} ${val.address1} ${val.address2} ${val.city}`,
          cityName:`${val.city}`,
          city: val.city_id,
        };
        arrayData.push(data);
      });
    }
    setAllBanks(result);
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

    let arrayData: any[] = [];
    if (result.length > 0) {
      result.map((val: bankType, index: number) => {
        let data = {
          value: val.id,
          label: `${val.bank_name} ${val.address_no} ${val.address} ${val.city}`,
          city: val.city_id,
          mainBank: val.main_bank_id,
        };
        arrayData.push(data);
      });
    }
    setAllSubBanks(result);
    setAllSubBanksOption(arrayData);
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

    let arrayData: any[] = [];
    if (result.length > 0) {
      result.map((val: bankType, index: number) => {
        let data = {
          value: val.id,
          label: `${val.initials} ${val.firstName} ${val.lastName}`,
          phoneNo: val.phoneNo,
          title: val.title,
        };
        arrayData.push(data);
      });
    }
    setAllLawyer(result);
    setAllLawyerOption(arrayData);
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
    if (result.length > 0) {
      await getBankData(result);
    }
    setAllCity(result);
    console.log(result);
  };

  const gurentorsModal = () => {
    return (
      <Modal
        isOpen={gurentorsModalIsOpen}
        onRequestClose={() => setGurentorsModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <label className="from-neutral-700 font-bold text-3xl text-red-600">
            wemlrejka we;=,;a lsÍu
          </label>
          <div>
            <CustomInput
              type={"text"}
              placeholder={"ku"}
              onChange={(e) => onChangeEventGurentor(e)}
              value={formDataGurentor.name}
              name={"name"}
            />
            <CustomInput
              type={"text"}
              placeholder={"wxlh"}
              name="addressNo"
              value={formDataGurentor.addressNo}
              onChange={(e) => onChangeEventGurentor(e)}
              custmStyle={"font-arial-rounded"}
            />
            <CustomInput
              type={"text"}
              placeholder={",smskh 1"}
              name="address1"
              value={formDataGurentor.address1}
              onChange={(e) => onChangeEventGurentor(e)}
            />
            <CustomInput
              type={"text"}
              placeholder={",smskh 2"}
              name="address2"
              value={formDataGurentor.address2}
              onChange={(e) => onChangeEventGurentor(e)}
            />
            <CustomInput
              type={"text"}
              placeholder={",smskh 3"}
              name="address3"
              value={formDataGurentor.address3}
              onChange={(e) => onChangeEventGurentor(e)}
            />
            <CustomInput
              type={"text"}
              placeholder={"k.rh"}
              name="city"
              value={formDataGurentor.city}
              onChange={(e) => onChangeEventGurentor(e)}
            />
            <MobileTextInput
              type={"text"}
              placeholder={"ÿ'l wxlh"}
              name="phoneNo"
              value={formDataGurentor.phoneNo}
              onChange={(e) => onChangeEventGurentor(e)}
            />
          </div>
          <SaveButton title="tl;= lrkak" onClick={() => saveGurentors()} />
        </form>
      </Modal>
    );
  };
  const accusedModal = () => {
    return (
      <Modal
        isOpen={accusedModalIsOpen}
        onRequestClose={() => setaccusedModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <label className="from-neutral-700 font-bold text-3xl text-red-600">
            ú;a;slrejka we;=,;a lsÍu
          </label>
          <div>
            <CustomInput
              type={"text"}
              placeholder={"ku"}
              onChange={(e) => onChangeEventAccused(e)}
              value={formDataAccused.name}
              name={"name"}
            />
            <CustomInput
              type={"text"}
              placeholder={"wxlh"}
              name="addressNo"
              value={formDataAccused.addressNo}
              onChange={(e) => onChangeEventAccused(e)}
              custmStyle={"font-arial-rounded"}
            />
            <CustomInput
              type={"text"}
              placeholder={",smskh 1"}
              name="address1"
              value={formDataAccused.address1}
              onChange={(e) => onChangeEventAccused(e)}
            />
            <CustomInput
              type={"text"}
              placeholder={",smskh 2"}
              name="address2"
              value={formDataAccused.address2}
              onChange={(e) => onChangeEventAccused(e)}
            />
            <CustomInput
              type={"text"}
              placeholder={",smskh 3"}
              name="address3"
              value={formDataAccused.address3}
              onChange={(e) => onChangeEventAccused(e)}
            />
            <CustomInput
              type={"text"}
              placeholder={"k.rh"}
              name="city"
              value={formDataAccused.city}
              onChange={(e) => onChangeEventAccused(e)}
            />
            <MobileTextInput
              type={"text"}
              placeholder={"ÿ'l wxlh"}
              name="phoneNo"
              value={formDataAccused.phoneNo}
              onChange={(e) => onChangeEventAccused(e)}
            />
          </div>
          <SaveButton title="tl;= lrkak" onClick={() => saveAccusedModal()} />
        </form>
      </Modal>
    );
  };
  const installmentModal = () => {
    return (
      <Modal
        isOpen={installmentModalIsOpen}
        onRequestClose={() => setInstallmentModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <label className="from-neutral-700 font-bold text-3xl text-red-600">
            jdßl ms,sn| úia;r we;=,;a lsÍu
          </label>
          <div>
            <CustomInput
              type={"text"}
              placeholder={"jdßl .Kk"}
              onChange={(e) => onChangeEventInstallment(e)}
              value={formDataInstallment.noOfInstallment}
              name={"noOfInstallment"}
            />
            <CustomInput
              type={"text"}
              placeholder={"uqo,"}
              name="amount"
              value={formDataInstallment.amount}
              onChange={(e) => onChangeEventInstallment(e)}
            />
          </div>
          <SaveButton
            title="tl;= lrkak"
            onClick={() => saveInstallmentModal()}
          />
        </form>
      </Modal>
    );
  };
  const creditModal = () => {
    return (
      <Modal
        isOpen={creditModalIsOpen}
        onRequestClose={() => setCreditModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <label className="from-neutral-700 font-bold text-3xl text-red-600">
            uqo,a ner l, we;=,;a lsÍu
          </label>
          <div>
            <CustomInput
              type={"text"}
              placeholder={"uqo,"}
              onChange={(e) => onChangeEventCredit(e)}
              value={formDataCredit.amount}
              name={"amount"}
            />
            <CustomInput
              type={"date"}
              placeholder={"ner l, Èkh"}
              name="dateOfCredit"
              value={formDataCredit.dateOfCredit}
              onChange={(e) => onChangeEventCredit(e)}
            />
          </div>
          <SaveButton title="tl;= lrkak" onClick={() => saveCreditModal()} />
        </form>
      </Modal>
    );
  };
  const outstandingModal = () => {
    return (
      <Modal
        isOpen={outstandingModalIsOpen}
        onRequestClose={() => setOutstandingModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <label className="from-neutral-700 font-bold text-3xl text-red-600">
            f.úh hq;= ysÕ Kh úia;rh
          </label>
          <div>
            <CustomInput
              type={"text"}
              placeholder={".sKqï wxlh"}
              onChange={(e) => onChangeEventOutstanding(e)}
              value={formDataOutstanding.accountNo}
              name={"accountNo"}
            />
            <CustomInput
              type={"text"}
              placeholder={"ysÕ fYaIh"}
              name="creditBlance"
              value={formDataOutstanding.creditBlance}
              onChange={(e) => onChangeEventOutstanding(e)}
            />
          </div>
          <SaveButton
            title="tl;= lrkak"
            onClick={() => saveOutstandingModal()}
          />
        </form>
      </Modal>
    );
  };

  const saveGurentors = () => {
    allGurentors.push(formDataGurentor);
    setTimeout(() => {
      setFormDataGurentor(initialFormState);
    }, 500);
    setGurentorsModalIsOpen(false);
  };
  const saveAccusedModal = () => {
    allAccused.push(formDataAccused);
    setTimeout(() => {
      setFormDataAccused(initialFormState);
    }, 500);
    setFormDataAccused(initialFormState);
  };
  const saveInstallmentModal = () => {
    installmentDetails.push(formDataInstallment);
    setTimeout(() => {
      setFormDataInstallment(initialInstallmentFormState);
    }, 500);
    setFormDataInstallment(initialInstallmentFormState);
  };
  const saveCreditModal = () => {
    creditDetails.push(formDataCredit);
    setTimeout(() => {
      setFormDataCredit(initialCreditFormState);
    }, 500);
    setFormDataCredit(initialCreditFormState);
  };
  const saveOutstandingModal = () => {
    outstandingDetails.push(formDataOutstanding);
    setTimeout(() => {
      setFormDataOutstanding(initialOutstandingFormState);
    }, 500);
    setFormDataOutstanding(initialOutstandingFormState);
  };

  const handleChangecheckBox = (event: any, type: string) => {
    switch (type) {
      case "SavingAccount":
        setCheckSavingAccount(!checkSavingAccount);
        break;
      case "LoanApplyForm":
        setCheckLoanApplyForm(!checkLoanApplyForm);
        break;
      case "ConditionLetter":
        setCheckConditionLetter(!checkConditionLetter);
        break;
      case "LoanAgreement":
        setCheckLoanAgreement(!checkLoanAgreement);
        break;
      case "BailBond":
        setCheckBailBond(!checkBailBond);
        break;
      case "Bill":
        setCheckBill(!checkBill);
        break;
      case "PromissNote":
        setCheckPromissNote(!checkPromissNote);
        break;
      case "SettlementBord":
        setCheckSettlementBord(!checkSettlementBord);
        break;
      case "Interest":
        setCheckDescriptionOfInterest(!checkDescriptionOfInterest);
        break;

      default:
        break;
    }
  };

  const saveAllData = () => {
    let paragraphData = {
      savingAcc: checkSavingAccount,
      loanApplyForm: checkLoanApplyForm,
      conditionLetter: checkConditionLetter,
      loanAgreement: checkLoanAgreement,
      bailBond: checkBailBond,
      bill: checkBill,
      promisNote: checkPromissNote,
      settlementBoard: checkSettlementBord,
      interestDescription: checkDescriptionOfInterest,
    };
    var formDataAll = new FormData();
    formDataAll.append("bankId", selectBank);
    formDataAll.append("subBankId", selectSubBank);
    formDataAll.append("dateOfSignToAccount", formDataMain.dateOfSignToAccount);
    formDataAll.append("accountNo", formDataMain.accountNo);
    formDataAll.append("valueOfPlaint", formDataMain.valueOfPlaint);
    formDataAll.append("interest", formDataMain.interest);
    formDataAll.append("interestWithWord", formDataMain.interestWithWord);
    formDataAll.append("yearsOfPayment", formDataMain.yearsOfPayment);
    formDataAll.append("monthsOfPayment", formDataMain.monthsOfPayment);
    formDataAll.append("totalAmount", formDataMain.totalAmount);
    formDataAll.append("settlementBoardCity", formDataMain.settlementBoardCity);
    formDataAll.append(
      "dateOfcalculationOfArriesLoan",
      formDataMain.dateOfcalculationOfArriesLoan
    );
    formDataAll.append("letterOfDemandSendLawyer", selectLawyer);
    formDataAll.append(
      "letterOfDemandSendDate",
      formDataMain.letterOfDemandSendDate
    );
    formDataAll.append(
      "arriesInterestAmount",
      formDataMain.arriesInterestAmount
    );
    formDataAll.append("gurantors", JSON.stringify(allGurentors));
    formDataAll.append("defendants", JSON.stringify(allAccused));
    formDataAll.append("paragraphDetails", JSON.stringify(paragraphData));
    formDataAll.append("bankDepositDetails", JSON.stringify(creditDetails));
    formDataAll.append(
      "installmentDetails",
      JSON.stringify(installmentDetails)
    );
    formDataAll.append(
      "balanceLoanDetails",
      JSON.stringify(outstandingDetails)
    );
    formDataAll.append("cortCityId", selectedValue);
  };
  return (
    <div className="items-center w-full flex flex-col justify-center ">
      {gurentorsModalIsOpen && gurentorsModal()}
      {accusedModalIsOpen && accusedModal()}
      {installmentModalIsOpen && installmentModal()}
      {creditModalIsOpen && creditModal()}
      {outstandingModalIsOpen && outstandingModal()}
      {mainFormOpen && (
        <MainFormModal
          isOpen={mainFormOpen}
          setIsOpen={setMainFormOpen}
          selectCity={allCity.filter((a)=>a.value==selectedValue)[0]?.label}
          selectBank={allBanksOption.filter((a)=>a.value==selectBank)[0]?.address}
          selectBankCity={allBanksOption.filter((a)=>a.value==selectBank)[0]?.cityName}
          mainFormData={formDataMain}
          allAccused={allAccused}
          allGurentors={allGurentors}
          creditDetails={creditDetails}
        />
      )}
      <div>
        <label className="from-neutral-700 font-bold text-5xl text-red-700">
          meñ‚,a,
        </label>
      </div>
      <div className=" bg-slate-200 w-full">
        <div className="w-1/2">
          <form>
            {/* <CustomInput type={"text"} placeholder={"kqjr"} /> */}
            <DropDown
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              list={allCity}
              placeholder={"k.rh f;darkak"}
            />
          </form>
          <form>
            {/* <CustomInput type={"text"} placeholder={"kqjr"} /> */}
            <DropDown
              selectedValue={selectBank}
              setSelectedValue={setSelectBank}
              list={filterBank}
              placeholder={"nexl=j f;darkak"}
            />
            <DropDown
              selectedValue={selectSubBank}
              setSelectedValue={setSelectSubBank}
              list={filterSubBank}
              placeholder={"Wm nexl=j f;darkak"}
            />
          </form>
        </div>
        <div className="mt-4">
          <label className="from-neutral-700 font-bold text-3xl text-blue-700">
            wjYH ,smsf.dKq f;darkak
          </label>
          <div className="ml-4">
            <Checkbox
              title="b;=reï .sKqu"
              isChecked={checkSavingAccount}
              handleCheckboxChange={(e) =>
                handleChangecheckBox(e, "SavingAccount")
              }
            />
            <Checkbox
              title="Kh whÿï m;%h"
              isChecked={checkLoanApplyForm}
              handleCheckboxChange={(e) =>
                handleChangecheckBox(e, "LoanApplyForm")
              }
            />
            <Checkbox
              title="fldkafoais ,smsh"
              isChecked={checkConditionLetter}
              handleCheckboxChange={(e) =>
                handleChangecheckBox(e, "ConditionLetter")
              }
            />
            <Checkbox
              title="Kh .súiqu"
              isChecked={checkLoanAgreement}
              handleCheckboxChange={(e) =>
                handleChangecheckBox(e, "LoanAgreement")
              }
            />
            <Checkbox
              title="wem Tmamqj"
              isChecked={checkBailBond}
              handleCheckboxChange={(e) => handleChangecheckBox(e, "BailBond")}
            />
            <Checkbox
              title="l=ú;dkaish"
              isChecked={checkBill}
              handleCheckboxChange={(e) => handleChangecheckBox(e, "Bill")}
            />
            <Checkbox
              title="fmdfrdkaÿ fkdaÜgqj"
              isChecked={checkPromissNote}
              handleCheckboxChange={(e) =>
                handleChangecheckBox(e, "PromissNote")
              }
            />
            <Checkbox
              title="iu; uKav,h"
              isChecked={checkSettlementBord}
              handleCheckboxChange={(e) =>
                handleChangecheckBox(e, "SettlementBord")
              }
            />
            <Checkbox
              title="fmd<S úia;rh"
              isChecked={checkDescriptionOfInterest}
              handleCheckboxChange={(e) => handleChangecheckBox(e, "Interest")}
            />
          </div>
        </div>
        <div className="mt-5 ml-5 mr-5">
          <div className="flex flex-row items-center">
            <label className="from-neutral-700 font-bold text-2xl text-blue-700">
              ú;a;slrejka we;=,;a lsrSu
            </label>
          </div>
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
            {allAccused.map((val, key) => {
              return (
                <tr key={key} className="grid grid-cols-8">
                  <td>{key + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.addressNo}</td>
                  <td>{val.address1}</td>
                  <td>{val.address2}</td>
                  <td>{val.address3}</td>
                  <td>{val.phoneNo}</td>
                  <td>{val.city}</td>
                </tr>
              );
            })}
          </table>
          <SaveButton
            title="tl;= lrkak"
            onClick={() => setaccusedModalIsOpen(true)}
          />
        </div>

        <div className="mt-5 ml-5 mr-5">
          <label className="from-neutral-700 font-bold text-2xl text-blue-700">
            wemlrejka úia;r we;=,;a lsrSu
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
            {allGurentors.map((val, key) => {
              return (
                <tr key={key} className="grid grid-cols-8">
                  <td>{key + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.addressNo}</td>
                  <td>{val.address1}</td>
                  <td>{val.address2}</td>
                  <td>{val.address3}</td>
                  <td>{val.phoneNo}</td>
                  <td>{val.city}</td>
                </tr>
              );
            })}
          </table>
          <SaveButton
            title="tl;= lrkak"
            onClick={() => setGurentorsModalIsOpen(true)}
          />
        </div>

        <form className="mt-10">
          <label className="from-neutral-700 font-bold text-3xl text-blue-700">
            wfkl=;a úia;r we;=,;a lsÍu
          </label>
          <div>
            <CustomInput
              type={"text"}
              placeholder={".sKqï wxlh"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.accountNo}
              name={"accountNo"}
            />
            <CustomInput
              type={"text"}
              placeholder={"kvqfõ jákdlu"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.valueOfPlaint}
              name={"valueOfPlaint"}
              custmStyle={"font-arial-rounded"}
            />
            <CustomInput
              type={"date"}
              placeholder={".sKqug w;aika l, Èkh"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.dateOfSignToAccount}
              name={"dateOfSignToAccount"}
              custmStyle={"font-arial-rounded"}
            />
            <CustomInput
              type={"text"}
              placeholder={"fmd<sh"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.interest}
              name={"interest"}
            />
            <CustomInput
              type={"text"}
              placeholder={"fmd,sh jpkfhka"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.interestWithWord}
              name={"interestWithWord"}
            />
            <label className="from-neutral-700 font-bold text-2xl text-blue-700">
              .sKqug uqo,a nerlsÍu ms,sn| úia;r
            </label>
            <table className="grid">
              <tr className="grid grid-cols-4">
                <th></th>
                <th>uqo,</th>
                <th>uqo,a ner l, Èkh</th>
                <th></th>
              </tr>
              {creditDetails.map((val, key) => {
                return (
                  <tr key={key} className="grid grid-cols-4">
                    <td>{key + 1}</td>
                    <td>{val.amount}</td>
                    <td>{val.dateOfCredit}</td>
                    <td></td>
                  </tr>
                );
              })}
            </table>
            <SaveButton
              title="tl;= lrkak"
              onClick={() => setCreditModalIsOpen(true)}
            />
            <div />
            <label className="from-neutral-700 font-bold text-2xl text-blue-700">
              f.jk ld,h{" "}
            </label>
            <div className="flex-row flex">
              <CustomInput
                type={"number"}
                placeholder={"wjqreÿ"}
                onChange={(e) => onChangeEventMain(e)}
                value={formDataMain.yearsOfPayment}
                name={"yearsOfPayment"}
              />
              <div className="w-1" />
              <CustomInput
                type={"number"}
                placeholder={"udi"}
                onChange={(e) => onChangeEventMain(e)}
                value={formDataMain.monthsOfPayment}
                name={"monthsOfPayment"}
              />
            </div>
            <label className="from-neutral-700 font-bold text-2xl text-blue-700">
              jdßl ms,sn| úia;r
            </label>
            <table className="grid">
              <tr className="grid grid-cols-4">
                <th></th>
                <th>jdßl .Kk</th>
                <th>uqo,</th>
                <th></th>
              </tr>
              {installmentDetails.map((val, key) => {
                return (
                  <tr key={key} className="grid grid-cols-4">
                    <td>{key + 1}</td>
                    <td>{val.noOfInstallment}</td>
                    <td>{val.amount}</td>
                    <td></td>
                  </tr>
                );
              })}
            </table>
            <SaveButton
              title="tl;= lrkak"
              onClick={() => setInstallmentModalIsOpen(true)}
            />
            <CustomInput
              type={"text"}
              placeholder={"khg .;a uq,q uqo,"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.totalAmount}
              name={"totalAmount"}
            />
            <CustomInput
              type={"text"}
              placeholder={"iu: uKav,h"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.settlementBoardCity}
              name={"totalAmount"}
            />

            <CustomInput
              type={"date"}
              placeholder={"ysÕ Kh fYaIh .kkh l< Èkh"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.dateOfcalculationOfArriesLoan}
              name={"dateOfcalculationOfArriesLoan"}
              custmStyle={"font-arial-rounded"}
            />

            <label className="from-neutral-700 font-bold text-2xl text-blue-700">
              ysÕ Kh úia;rh
            </label>
            <table className="grid">
              <tr className="grid grid-cols-4">
                <th></th>
                <th>.sKqï wxlh</th>
                <th>Kh fYaIh</th>
                <th></th>
              </tr>
              {outstandingDetails.map((val, key) => {
                return (
                  <tr key={key} className="grid grid-cols-4">
                    <td>{key + 1}</td>
                    <td>{val.accountNo}</td>
                    <td>{val.creditBlance}</td>
                    <td></td>
                  </tr>
                );
              })}
            </table>
            <SaveButton
              title="tl;= lrkak"
              onClick={() => setOutstandingModalIsOpen(true)}
            />
            <DropDown
              selectedValue={selectLawyer}
              setSelectedValue={setSelectLawyer}
              list={allLawyerOption}
              placeholder={"tka;rjdis hjk ,o kS;S{"}
            />
            <CustomInput
              type={"date"}
              placeholder={"tka;rjdis hjk ,o Èkh"}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.letterOfDemandSendDate}
              name={"letterOfDemandSendDate"}
              custmStyle={"font-arial-rounded"}
            />
            <CustomInput
              type={"text"}
              placeholder={"ys.j mj;sk fmd,sh "}
              onChange={(e) => onChangeEventMain(e)}
              value={formDataMain.arriesInterestAmount}
              name={"arriesInterestAmount"}
            />
          </div>
        </form>
        <div className="gap-3 flex flex-row items-center justify-center">
          <SaveButton
            title="mqkrEmkh n,kak"
            onClick={() => setMainFormOpen(true)}
          />
          <div className="p-5" />
          <SaveButton
            title=".nvd lrkak"
            // onClick={() => setInstallmentModalIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
