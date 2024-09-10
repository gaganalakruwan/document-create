// import { Outlet } from "react-router-dom";

import { useState } from "react";
import DropDown from "../../components/inputs/DropDown";
import CustomInput from "../../components/inputs/TextInput";
import MobileTextInput from "../../components/inputs/MobileTextInput";

const Main = () => {
  const options = [
    { value: "Option 1", label: "rd.u" },
    { value: "Option 2", label: ".ïm." },
    { value: "Option 3", label: "ó.uqj" },
  ];
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="items-center w-full flex flex-col justify-center">
      <div>
        <label className="from-neutral-700 font-bold text-5xl">meñ‚,a,</label>
      </div>
      <div className="max-w-fit">
        <form>
          {/* <CustomInput type={"text"} placeholder={"kqjr"} /> */}
          <DropDown
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            list={options}
            placeholder={"k.rh f;darkak"}
          />
        </form>

        <form>
          <label className="from-neutral-700 font-bold text-3xl">
            ú;a;slrejka we;=,;a lsÍu
          </label>
          <div>
            <CustomInput type={"text"} placeholder={"ku"} />
            <CustomInput type={"text"} placeholder={"wxlh"} />
            <CustomInput type={"text"} placeholder={",smskh 1"} />
            <CustomInput type={"text"} placeholder={",smskh 2"} />
            <CustomInput type={"text"} placeholder={",smskh 3"} />
            <CustomInput type={"text"} placeholder={"k.rh"} />
            <MobileTextInput type={"text"} placeholder={"ÿ'l wxlh"} />
          </div>
        </form>
        <form>
          <label className="from-neutral-700 font-bold text-3xl">
            wemlrejka we;=,;a lsÍu
          </label>
          <div>
            <CustomInput type={"text"} placeholder={"ku"} />
            <CustomInput type={"text"} placeholder={"wxlh"} />
            <CustomInput type={"text"} placeholder={",smskh 1"} />
            <CustomInput type={"text"} placeholder={",smskh 2"} />
            <CustomInput type={"text"} placeholder={",smskh 3"} />
            <CustomInput type={"text"} placeholder={"k.rh"} />
            <MobileTextInput type={"text"} placeholder={"ÿ'l wxlh"} />
          </div>
        </form>
        <form>
          <label className="from-neutral-700 font-bold text-3xl">
            we;=,;a lsÍu
          </label>
          <div>
            <CustomInput type={"text"} placeholder={"jákdlu"} />
            <CustomInput type={"text"} placeholder={"uqo, .sKqug ner l, Èkh"} />
            <CustomInput type={"text"} placeholder={"fmd<sh"} />
            <label className="from-neutral-700 font-bold text-2xl">
              f.jk ld,h{" "}
            </label>
            <div className="flex-row flex">
              <CustomInput type={"text"} placeholder={"wjqreÿ"} />
              <div className="w-1"/>
              <CustomInput type={"text"} placeholder={"udi"} />
            </div>
            <CustomInput type={"text"} placeholder={"jdrsl"} />
            <CustomInput type={"text"} placeholder={"uilg jdrslh"} />
            <CustomInput type={"text"} placeholder={"uq,q uqo,"} />
            <DropDown
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              list={options}
              placeholder={"iu: uKav,h"}
            />
            <CustomInput type={"text"} placeholder={"ysÕ Kh fYaIh .kkh l< Èkh"} />
            <CustomInput type={"text"} placeholder={"ysÕ Kh fYaIh "} />
            <CustomInput type={"text"} placeholder={"Kh uqo,g iïnkaO .sKqfï wxlh"} />
            <CustomInput type={"text"} placeholder={"tka;rjdis hjk ,o kS;S{"} />
            <CustomInput type={"text"} placeholder={"tka;rjdis hjk ,o Èkh"} />
            <CustomInput type={"text"} placeholder={"tÈkg ys`.j mej;s Kh uqo, yd fmd,sh"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
