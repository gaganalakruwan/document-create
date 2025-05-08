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
  installmentDetails: any;
  outstandingDetails: any;
  selectLawyer: any;
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
    settlementBoardDate: string;
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
    padding: "20px",
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
  installmentDetails,
  outstandingDetails,
  selectLawyer,
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

  const getGurentorsCombined = () => {
    if (allAccused.length == 1) {
      return `${allAccused.length + 1} ú;a;slre`;
    } else {
      let totalGur = "";
      allGurentors.map((item, index) => {
        totalGur += `${allAccused.length + 1 + index} ${
          index < allGurentors.length - 2
            ? '"'
            : index < allGurentors.length - 1
            ? " yd "
            : "ú;a;slrejka"
        }`;
      });

      return totalGur;
    }
  };

  const combinedBothAccuGur = () => {
    const concatArray = allAccused.concat(allGurentors);
    if (concatArray.length > 0) {
      if (concatArray.length == 1) {
        return `1 jk ú;a;slre`;
      } else {
        let totalGur = "";
        concatArray.map((item, index) => {
          totalGur += `${index + 1} ${
            index < concatArray.length - 2
              ? '" '
              : index < concatArray.length - 1
              ? " yd "
              : "ú;a;slrejkag"
          }`;
        });

        return totalGur;
      }
    }
  };

  const totalInstallments = installmentDetails.reduce(
    (acc, item) => acc + parseFloat(item.noOfInstallment),
    0
  );
  const getInstalmentCombine = () => {
    return (
      <div>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`j¾I ${
            mainFormData.dateOfSignToAccount
          } jk osk ${getAccusedCombined()}f.a b,a,Su u; meñKs,sldr nexl=j tlS ${selectBankCity} YdLdj u.ska wjqreoaolg ishhg ${
            mainFormData.interestWithWord
          }`}
        </label>
        <label className="font-medium text-lg text-black self-end">
          {`(${mainFormData.interest}%)`}
        </label>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`ne.ska jq fmd<shla iu. fyda meñKs,sldr nexl=fõ idudkH jHdmdrsl lghq;= j,oS jrskajr kshu lrkq ,nk fjk;a fyda jeâukla m%udKj, fmd<shla u; jir ${
            mainFormData.yearsOfPayment
          } ${
            mainFormData.monthsOfPayment
              ? "udi " + mainFormData.monthsOfPayment
              : ""
          } we;=<; udisl jdrsl ${totalInstallments} lska hqla;j uilg `}
        </label>
        {installmentDetails.map((item, index) => {
          return (
            <>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`re'`}</label>
              <label className="font-medium text-lg text-black self-end font-arial-rounded">
                {parseFloat(item.amount).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{" "}
                x {item.noOfInstallment}
                {index < installmentDetails.length - 1 ? ", " : ""}
              </label>
            </>
          );
        })}
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`ne.ska f.jd wjika lrk f,i re'`}
        </label>

        <label className="font-medium text-lg text-black self-end font-arial-rounded">
          {parseFloat(mainFormData.totalAmount).toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}{" "}
          /-
        </label>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {` uqo,la zzme 05ZZ  jYfhka  ,l=Kq fldg fuu meñKs,af,a fldgila f,i bosrsm;a lrk Kh .súiqfï fmdfrdka¥ iy fldkafoais j,g wkql=,j ${getAccusedCombined()}g Khg oS we;' `}
        </label>
      </div>
    );
  };

  const reciptParaCombine = () => {
    return (
      <div>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`${getAccusedCombined()} úiska tlS re `}
        </label>
        <label className="font-medium text-lg text-black self-end">
          {`${parseFloat(mainFormData.totalAmount).toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })} /- `}
        </label>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`l Kh uqo, jdrsl ${creditDetails.length}lska ,nd.;a njg ;yjqre flfrk Kh l=ú;dkaisj, iy;sl msgm;a `}
        </label>
        {creditDetails.length == 1 ? (
          <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
            zzme 07ZZ
          </label>
        ) : (
          creditDetails.map((item, index) => {
            return (
              <>
                <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                  zzme 07 -
                </label>
                <label className="font-medium text-lg text-black self-end font-arial-rounded">
                  {String.fromCharCode(65 + index)}
                </label>
                <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                  {`ZZ${index != creditDetails.length - 1 ? '"' : " "}`}
                </label>
              </>
            );
          })
        )}
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`jYfhka ,l=Kq lr bosrsm;a lrkq ,nk w;r tu.ska ${getAccusedCombined()} Kh uqo, h:d mrsos ,nd f.k we;s nj ;yjqre jk fyhska th meñKs,af,a fldgila f,i Ndr.kakd fuka meñKs,slre .re wêlrKfhka wheo isá'`}
        </label>
      </div>
    );
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
  const getCreditDetailsFor11thPara = () => {
    return outstandingDetails.length == 1 ? (
      <div>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`kuq;a j¾I ${
            mainFormData.dateOfcalculationOfArriesLoan
          } osk jkúg ${getAccusedCombined()} úiska ,nd .kakd ,o Kh uqo,ska fkdmshjd mj;sk ysÕ Kh fYaIh remsh,a
          `}
        </label>
        <label className="font-medium text-lg text-black self-end">{`${outstandingDetails[0].creditBlance}`}</label>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`la fõ' ta nj ;yjqre lsrSug meñKs,sldr nexl=j yd ú;a;slrejka w;r Kh uqo,g iïnkaO wxl `}
        </label>
        <label>{`${outstandingDetails[0].accountNo}`}</label>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`.sKqfï ksis f,i iy;sl l, .sKqï m%ldYhla zzme 09ZZ  jYfhkao tys f.úh hq;= fYaIh oelafjk igyk zzme 09-`}</label>
        <label>A</label>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`zz jYfhkao ,l=Kq lr bosrsm;a lrkq ,nk w;r th meñKs,af,a fldgila f,i Ndr.kakd fuka meñKs,slre .re wêlrKfhka wheo isá'`}</label>
      </div>
    ) : outstandingDetails.length > 1 ? (
      <div>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`kuq;a j¾I ${
            mainFormData.dateOfcalculationOfArriesLoan
          } osk jkúg ${getAccusedCombined()} úiska ,nd .kakd ,o
          `}
        </label>
        {outstandingDetails.map((item, index) => {
          return (
            <>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`${
                index + 1
              } jk Kh uqo,ska fkdmshjd mj;sk ysÕ Kh fYaIh remsh,a `}</label>
              <label className="font-medium text-lg text-black self-end">{`${item.creditBlance}`}</label>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                {`la o ${index < outstandingDetails.length - 1 ? `"` : `fú'`}`}
              </label>

              {/* <label className="font-medium text-lg text-black self-end font-arial-rounded">
                {String.fromCharCode(65 + index)}
              </label>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                {`la `}
              </label> */}
            </>
          );
        })}
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`ta nj ;yjqre lsrSug meñKs,sldr nexl=j yd ú;a;slrejka w;r `}
        </label>
        {outstandingDetails.map((item, index) => {
          return (
            <>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`${
                index + 1
              } jk Kh uqo,g iïnkaO wxl `}</label>
              <label>{`${item.accountNo} `}</label>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`.sKqfï ksis f,i iy;sl l, .sKqï m%ldYhla zzme 10 - `}</label>
              <label className="font-medium text-lg text-black self-end font-arial-rounded">
                {String.fromCharCode(65 + index)}
              </label>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`zz jYfhkao tys f.úh hq;= fYaIh oelafjk igyk zzme 10 - `}</label>
              <label className="font-medium text-lg text-black self-end font-arial-rounded">
                {String.fromCharCode(65 + index)} - 1
              </label>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{` jYfhkao${
                index < outstandingDetails.length - 1 ? `" ` : ``
              }`}</label>
            </>
          );
        })}
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{` ,l=Kq lr bosrsm;a lrkq ,nk w;r th meñKs,af,a fldgila f,i Ndr.kakd fuka meñKs,slre .re wêlrKfhka wheo isá'`}</label>
      </div>
    ) : (
      <div></div>
    );
  };

  const get12ParaPetitionCopuCount = () => {
    const concatArray = allAccused.concat(allGurentors);
    if (concatArray.length > 0) {
      if (concatArray.length == 1) {
        return `zzme 10-1ZZ`;
      } else {
        let totalGur = "";
        concatArray.map((item, index) => {
          totalGur += `zzme 10-${index + 1}ZZ${
            index < concatArray.length - 1 ? '"' : " "
          }`;
        });

        return totalGur;
      }
    }
  };
  const get12ParaPostBillCount = () => {
    const concatArray = allAccused.concat(allGurentors);
    return (
      concatArray.length > 0 &&
      (concatArray.length == 1 ? (
        <>
          <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`zzme 10-`}</label>
          <label className="font-medium text-lg text-black self-end font-arial-rounded">
            {String.fromCharCode(65)}
          </label>
          <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`ZZ`}</label>
        </>
      ) : (
        concatArray.map((item, index) => {
          return (
            <>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`zzme 10-`}</label>
              <label className="font-medium text-lg text-black self-end font-arial-rounded">
                {String.fromCharCode(65 + index)}
              </label>
              <label className="font-medium text-lg text-black self-end font-fm-bindumathi">{`ZZ ${
                index < concatArray.length - 1 ? '"' : " "
              }`}</label>
            </>
          );
        })
      ))
    );
  };

  const generate12thPara = () => {
    return (
      <div>
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`by; lS ${combinedBothAccuGur()} fkdfhla úg fkdfhla whqrska by; lS Kh uqo, yd fmd,sh f.jk f,i okajd isáh;a ú;a;slrejka úiska tlS uqo,a f.ùu meyer yer we;s nj lshd isák meñKs,slre" ú;a;slref.ka meñKs,slre fj; whúh hq;= uq,a uqo, iy Bg wod, fmd,sho fjk;a w;sf¾l .dia;=o jYfhka whúh hq;= iïmQ¾K uqo, f.jk f,i okajñka ${
            mainFormData?.letterOfDemandSendDate
          } Èke;sj ú;a;slrejka fj; kS;S{ ${selectLawyer} u.ska tka;rjdis hjk ,o nj;a" tlS tka;rjdisj,g ms<s;=re f,i ú;a;slrejka úiska uqo,ska fldgila ;ekam;a l, kuq;a kej;;a tka;rjdisfhka b,a¨ï l, uq¨ Kh uqo, f.ùu fÉ;kdkaú;j 
          iy$fyda wioaNdù f,i meyeryer iy$fyda u.yer we;s nj;a lshd isà' lreKq tfia fyhska tlS tka;rjdisfha ioyka uq¨ uqo, ú;a;slrejka úiska f.ùug neoS fkdue; hkak m%ldY lsrSfuka ú;a;slrejka m%;snkaOkh ù we;s nj meñKs,slre ;jÿrg;a m%ldY lr isàhs' ú;a;slrejkag hejQ tlS 2023-08-29 Èk orK tka;rjdisj, i;H msgm;a ms<sfj,ska
          ${get12ParaPetitionCopuCount()}f,i;a Bg wod, ,shmÈxÑ ;eme,a NdKav l=ú;dkaish iy ;eme,a ßisÜm;a ,ehsia;=fõ i;H msgm;a ms<sfj,ska `}
        </label>
        {get12ParaPostBillCount()}
        <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
          {`f,i ,l=Kq lr fuu meñKs,a,g wuqKd fuu meñKs,af,a wjYH fldgia f,i wheo fï iu\`. bÈßm;a lr th meñKs,af,a fldgila f,i Ndr.kakd f,i meñKs,slre .re wêlrKfhka wheo  isà'`}
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
      <form className="flex flex-col items-center p-5">
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
          <li className="font-medium text-lg text-black">
            <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
              {`tlS Kh whÿï m;%h ,eîfuka miq tu Kh b,a,Su i,ld n,d Kh uqo,g wod,j fldkafoais ,smshla ${getAccusedCombined()} fj; ,ndfok ,o w;r tlS ${getAccusedCombined()} tu fldkafoaisj,g hg;aj Kh uqo, ,nd.ekSug ish tl\`.;djh olajñka tls fldkafoais ,smsh w;aika fldg wdmiq nexl=jg ndrfok ,§'  tlS fldkafoais ,smsfha iy;sl msgm;la zzme 04Z jYfhka ,l=Kq lr bosrsm;a lrkq ,nk w;r tu.ska ${getAccusedCombined()} tys i|yka fldkafoaisj,g hg;aj Kh uqo, ,nd .ekSug  tl\`. jq nj ;yjqre jk fyhska th meñKs,af,a fldgila f,i Ndr.kakd fuka meñKs,slre .re wêlrKfhka wheo isá'`}
            </label>
          </li>
          <li className="font-medium text-lg text-black">
            {getInstalmentCombine()}
          </li>
          <li className="font-medium text-lg text-black">
            <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
              {`meñKs,sldr nexl=fõ jeâ wdrCIs;Ndjh ioyd ${getGurentorsCombined()} fuu meñKs,af,a fldgila f,i óg hd lr zzme 06ZZ jYfhka ,l=Kq fldg we;s ,shú,a, u; meñKs,sldr nexl=jg ${getAccusedCombined()} fjkqfjka wemlrejka jYfhka neoS isáug fmdfrdka¥ jk w;r" hï f,ilska tlS ${getAccusedCombined()}
              úiska tu uqo, f.ùu meyer yersh fyd;a fyda fkdf.jqjfyd;a ${getAccusedCombined()} fjkqfjka f.ùug kshñ; uqo, by; lS .súiqu mrso ${getGurentorsCombined()} úiska f.ùug fmdfrdka¥j we;' tls .súiqu mrsos"`}
            </label>
            <ol>
              <li className="font-medium text-lg text-black">
                <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                  ^w& tla Khl Khlrejkag fyda wemlrejkag tlaj fyda fjka fjkaj
                  kvqjla mejrSu fyda wemlrejkag úreoaOj uqs,sl jYfhka kvaqjla
                  bosrsm;a lsrsfï ksoyi meñKs,slreg ;sfnk njg ú;a;slrejka okakd
                  njg tl. ù we;.
                </label>
              </li>
              <li className="font-medium text-lg text-black">
                <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                  ^wd& uq,sl jYfhka Khlrejkag úreoaOj kvqjla bosrsm;a lrk f,i
                  fyda tu Khlrejkaf.a f.úh hq;= uqo,a w;ayrsk f,i meñKs,slref.ka
                  b,a,Sug Tjqkag ;sfnk whs;sjdislï w;ayer we;
                </label>
              </li>
              <li className="font-medium text-lg text-black">
                <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                  ^we& wemlrejkag wh;a ish¿u whs;sjdislï yd m%fhdack ke;fyd;a
                  kS;sfhka ,eì we;s ish¿u myiqlï w;ayer we;
                </label>
              </li>
              <li className="font-medium text-lg text-black">
                <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
                  {`^wE&	${getAccusedCombined()}g úreoaOj kvqjla bosrsm;a lsrsug fmr ${getGurentorsCombined()}g  úreoaOj kvq mjrkq ,eìfï whs;sho we;=<;aj Khlrejka jYfhka by; f.ùï j,g neoS isák njg tl. ù we;`}
                </label>
              </li>
            </ol>
          </li>
          <li className="font-medium text-lg text-black">
            {reciptParaCombine()}
          </li>
          <li className="font-medium text-lg text-black">
            <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
              {`wu;r iq/l=ula jYfhka b,a¨ úg whl, yels fmdfrdka¥ fkdaágqjla ,ndf.k we;s w;r tys iy;sl msgm; zzme 08ZZ  jYfhka ,l=Kq fldg bosrsm;a lrkq ,nk w;r tu.ska by; lreKq ;j¥rg;a ikd: jk fyhska th meñKs,af,a fldgila f,i Ndr.kakd fuka meñKs,slre .re wêlrKfhka wheo isá`}
            </label>
          </li>
          <li className="font-medium text-lg text-black">
            <label className="font-medium text-lg text-black self-end font-fm-bindumathi">
              {`ú;A;slrejka Kh f.ùu meyer yersu ksid Kh wdmiq whlr .ekSu msksi ${mainFormData.settlementBoardCity} iu: uKav,h fj; b,a,Sula l, w;r Tjqka tysoSo Kh f.ùug tl. fkdjq fyhska ${mainFormData.settlementBoardDate} oske;sj iu: uKav,h úiska ksl=;a l< ksrjq,a fkdlsrsfï iy;slh zzme 10ZZ jYfhka  ,l=Kq fldg bosrsm;a lr we;s w;r th meñKs,af,a fldgila f,i Ndr.kakd f,i meñKs,slre .re wêlrKfhka wheo  isà'`}
            </label>
          </li>
          <li className="font-medium text-lg text-black">
            {getCreditDetailsFor11thPara()}
          </li>
          <li className="font-medium text-lg text-black">
            {generate12thPara()}
          </li>
        </ol>
      </form>
    </Modal>
  );
};

export default MainFormModal;
