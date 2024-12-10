import React from "react";
import SaveButton from "../buttons/SaveButton";
import Modal from "react-modal";

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  selectCity: string;
  selectBank: string;
  selectBankCity: string;
  allAccused: any;
  allGurentors: any;
  creditDetails: any;
  mainFormData: {
    accountNo: string;
    valueOfPlaint: string;
    dateOfSignToAccount: string;
    interest: string;
    interestWithWord: string;
    yearsOfPayment: string;
    monthsOfPayment: string;
    totalAmount: string;
    settlementBoardCity: string;
    dateOfcalculationOfArriesLoan: string;
    letterOfDemandSendDate: string;
    arriesInterestAmount: string;
  };
};

const customStyles = {
  content: {
    top: "35%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "100vh",
  },
};

const MainFormModal = ({
  isOpen,
  setIsOpen,
  selectCity,
  mainFormData,
  selectBank,
  allAccused,
  allGurentors,
  selectBankCity,
  creditDetails,
}: Props) => {
  const getcombineOFAccusedGurentors = () => {
    const displayArray: any = [];

    allAccused.map((item, index) => {
      let data = {
        displayItem: `${item.name}`,
        address: `${item.address1 + '"'}${
          item.address2 && item.address2 + '"'
        } ${item.address3 && item.address3 + '"'} ${item.city}`,
        addressNo: `${item.addressNo}`,
        phoneNo: `ÿ'wx' ${item.phoneNo}`,
      };
      displayArray.push(data);
    });
    allGurentors.map((item, index) => {
      let data = {
        displayItem: `${item.name}`,
        address: `${item.address1 + '"'}${
          item.address2 && item.address2 + '"'
        } ${item.address3 && item.address3 + '"'} ${item.city}`,
        addressNo: `${item.addressNo}`,
        phoneNo: `ÿ'wx' ${item.phoneNo}`,
      };
      displayArray.push(data);
    });
    return displayArray;
  };

  const getAccusedCombined = () => {
    if (allAccused.length == 1) {
      return "1 jk ú;a;slre";
    } else {
      let totalAccu = "";
      allAccused.map((item, index) => {
        totalAccu += `${index + 1} jk ú;a;slre${
          index < allAccused.length - 2
            ? '"'
            : index < allAccused.length - 1
            ? " yd "
            : ""
        }`;
      });

      return totalAccu;
    }
  };
  const getCreditDetailsFor3rdPara = () => {
    return (
      <div>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`by; ${getAccusedCombined()} m%dfoaYSh ixj¾Ok nexl=j ${selectBankCity} YdLdfõ wxl ${
            mainFormData.accountNo
          } orK .sKqu wdrïN lr mj;ajdf.k f.dia we;' ta nj ikd: lsrSu msKsi meñKs,sldr nexl=fõ rd.u YdLdfõ tlS wxl orK  .sKqfï i;H cdhd msgm;la zzme 02ZZ hkqfjkao 
              tys `}
        </label>
        {creditDetails.map((item, index) => {
          return (
            <>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`${item.dateOfCredit} jk oskg wod,j .sKqug Kh uqo, nerl, igyk zzme 02-`}</label>
              <label className="font-medium text-lg text-black self-end font-arial-rounded">
                {String.fromCharCode(65 + index)}
              </label>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                {`ZZ jYfhkao `}
              </label>
            </>
          );
        })}
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`,l=Kq lr fuu  meñKs,a,g wuqKd fuu meñKs,af,au wjYH fldgila f,i wheo fï iu\`. bÈßm;a  lrñ'`}
        </label>
      </div>
    );
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
      //   className="min-w-fit mr-10 ml-10 p-5 bg-white"
    >
      <form className="flex flex-col items-center">
        <label className="from-neutral-700 font-bold text-3xl text-red-600">
          wdo¾Y f,alkh
        </label>
        <label className="font-bold text-lg text-black">
          <u>meñKs,a,</u>
        </label>
        <label className="font-bold text-lg text-black">
          <u>{`${selectCity} iq¿ ysñlï wêlrKfha oSh'`}</u>
        </label>
        <div className="flex flex-col w-full">
          <label className="font-medium text-lg text-black">
            {`kvq wxlh (- `}
          </label>
          <label className="font-medium text-lg text-black">
            {`meñKs,af,a Èkh (- `}
          </label>
          <label className="font-medium text-lg text-black">
            {`ysñlfï iajNdjh (- uqo,a$iq¿ ysñlï`}
          </label>
          <label className="font-medium text-lg text-black">
            {`jákdlu   (-re'`}
            <label className="font-medium text-lg text-black font-arial-rounded">
              {`${parseFloat(mainFormData.valueOfPlaint).toLocaleString(
                undefined,
                { maximumFractionDigits: 2 }
              )}`}
            </label>
          </label>
        </div>
        <div className="flex flex-col w-100 self-end">
          <label className="font-bold text-lg text-black">
            <u>{`m%dfoaYSh ixj¾Ok nexl=j'`}</u>
          </label>
          <label className="font-medium text-lg text-black">
            {`wxl 933" kqjr mdr" fjouq,a," le,Ksh hk ia:dkfha ish ,shdmosxÑ ld¾hd,h fukau m%Odk ld¾hd,ho mj;ajdf.k hkq ,nk by; ku i|yka nexl=j ish YdLd ld¾hd,hla ${selectBank} orK ia:dkfha mj;ajdf.k hkq ,nhs`}
          </label>
          <label className="font-arial-rounded font-medium text-lg text-black">
            {`0112035454`}
          </label>
          <label className="font-semibold text-lg text-black self-end">
            <u>{`meñKs,slre`}</u>
          </label>
          <label className="font-medium text-lg text-black">{`-tÈßj-`}</label>
          <ol
            style={{ listStyleType: "decimal" }}
            className="font-arial-rounded"
          >
            {getcombineOFAccusedGurentors().map((questionlist) => (
              <li className="font-medium text-lg text-black">
                <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                  {questionlist.displayItem}
                </label>
                <div className="flex flex-row">
                  <label className="font-arial-rounded font-medium text-lg text-black self-end">
                    {`${questionlist.addressNo}, `}
                  </label>
                  <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                    {` ${questionlist.address}`}
                  </label>
                </div>

                <label className="font-medium text-lg text-black font-fm-bindumathi">
                  {questionlist.phoneNo}
                </label>
              </li>
            ))}
          </ol>
          <label className="font-semibold text-lg text-black self-end">
            <u>{`ú;a;slrejka`}</u>
          </label>
        </div>
        <label className="font-medium text-lg text-black">
          {`kS;s{ fyauka; m%kdkaÿ uy;d u.ska fmkS isák by; ku ioyka meñKs,slref.a meñKs,af,a fufia i|yka fõ'`}
        </label>
        <ol style={{ listStyleType: "decimal" }} className="font-arial-rounded">
          <li className="font-medium text-lg text-black">
            <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
              {`meñKs,slre Y%S ,xld uy nexl=fõ uQ,H uKav,fha, úêúOdk hgf;a 2008 wxl 41 orK m%dfoaYsh ixj¾Ok nexl=j mkf;a 01 Wm j.ka;sh iy wdKavql%u jHjia:dfõ 44^2& j.ka;s m%ldrj wxl 1652$5 iy`}
            </label>
            <label className="font-medium text-lg text-black self-end">
              {" "}
              2010.05.03{" "}
            </label>
            <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
              {`osk orK .eiá m;%h wkqj h:d mßÈ ixia:d.; lr we;a;djQo" 1988 wxl 30 nexl= mkf;a w¾:dkql+, h:d mßÈ  n,m;%,dNs úfYaIs; nexl=jls' ;u ,shdmÈxÑ ld¾hd,h iy$fyda m%Odk jHdmdr ia:dkh by; i\`oyka ,smskfha msysgd we;a;djQo" tys ${selectBankCity} YdLd ld¾hd,h fuu .re wêlrKfha m%dfoaYSh n,iSudj  we;=,; msysgd we;a;djQo" m%dfoaYSh ixj¾Ok nexl=j kñka kvq mejrSug fyda mejreï ,eìug fyda n,h,;a fyda whs;shla we;s ia:dms; ffk;sl mqoa.,Ndjh iys; wdh;khls' ta nj ikd: lsrSu msKsi meñKs,sldr nexl=fõ nexl= n,m;%fha i;H cdhd msgm;la zzme 01ZZ hkqfjka ,l=Kq lr fuu  meñKs,a,g wuqKd fuu meñKs,af,au wjYH fldgila f,i wheo fï iu\`. bÈßm;a  lrñ'`}
            </label>
          </li>
          <li className="font-medium text-lg text-black">
            <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
              {`fuu kvqjg wod, .súiqu yg f.k we;af;a o u;= lshfjk kvq ksñ;a; Wmph ù we;af;a o fuu .re wêlrK n, iSudj we;=,; neúka fuu kvqj wid ;Skaoq lsrsfï wêlrK n,h fuu .re wêlrKh i;= nj f.!rjfhka m%ldY lr isáñ'`}
            </label>
          </li>
          <li className="font-medium text-lg text-black">
            {getCreditDetailsFor3rdPara()}
          </li>
          <li className="font-medium text-lg text-black">
            <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
              {`tlS .sKqu mj;ajdf.k hk w;r;=r iajlSh wd¾Ólh yd$fyda iudc ;;a;ajh ;jÿrg;a Yla;su;aa lr.ekSu i|yd ${getAccusedCombined()} meñKs,sldr nexl=fjka Kh uqo,la whÿï l< w;r tlS Kh whÿï m;%fha i;H cdhd msgm;la zzme 03ZZ hkqfjka ,l=Kq lr fuu  meñKs,a,g wuqKd fuu meñKs,af,au wjYH fldgila f,i wheo fï iu\`. bÈßm;a  lrñ'`}
            </label>
          </li>
        </ol>
      </form>
    </Modal>
  );
};

export default MainFormModal;
