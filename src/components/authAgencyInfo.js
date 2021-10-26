import React from "react"
import Lang from "../services/lang"
import { Modal } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { NSDI_URL } from "../services/config"
import AppContext from "../services/context"
import { getBusinessInfo } from "../services/api"

export default function AuthAgencyInfo() {
  const [open, setOpen] = React.useState(false)
  const methods = useFormContext()
  const [options, setOptions] = React.useState([])
  const [selected, setSelected] = React.useState(null)
  const { appState } = React.useContext(AppContext)
  const nsdi_url = NSDI_URL(appState.appSettings.nsdi_key)
  //
  const onSelect = async (e) => {
    if (!selected) return
    await methods.setValue("business_name", selected.bsnmCmpnm, {
      shouldValidate: true
    })
    await methods.setValue("business_representative", selected.brkrNm, {
      shouldValidate: true
    })
    await methods.setValue("brokerage_record_no", selected.jurirno, {
      shouldValidate: true
    })
    await methods.setValue(
      "legal_address",
      `${selected.ldCodeNm} ${selected.ldCode}`,
      { shouldValidate: true }
    )
    await setOpen(false)
  }
  //
  const onChange = async (e) => {
    nsdi_url.searchParams.set("bsnmCmpnm", e.target.value)
    let result = await getBusinessInfo(nsdi_url)
    if (result.length === 0) return
    setOptions(result)
  }
  //
  return (
    <div className="px-5 pt-3 pb-5">
      <label className="label">
        <span className="label-text text-xl font-bold">{Lang.findAgency}</span>
      </label>
      <div className="mb-8">
        <button
          className="btn btn-primary w-full text-center"
          onClick={() => setOpen(true)}
        >
          <span className="label-text">{Lang.startFindingAgency}</span>
        </button>
      </div>
      {/**/}
      <div className="form-control flex-grow">
        <label className="label">
          <span className="label-text">{Lang.businessName}</span>
        </label>
        <input
          disabled
          type="text"
          className="input input-ghost w-full"
          {...methods.register("business_name", { required: true })}
        />
      </div>
      {/**/}
      <div className="form-control flex-grow">
        <label className="label">
          <span className="label-text">{Lang.businessRepresentative}</span>
        </label>
        <input
          disabled
          type="text"
          className="input input-ghost w-full"
          {...methods.register("business_representative", { required: true })}
        />
      </div>
      {/**/}
      <div className="form-control flex-grow">
        <label className="label">
          <span className="label-text">{Lang.brokerageRecordNo}</span>
        </label>
        <input
          disabled
          type="text"
          className="input input-ghost w-full"
          {...methods.register("brokerage_record_no", { required: true })}
        />
      </div>
      {/**/}
      <div className="form-control flex-grow">
        <label className="label">
          <span className="label-text">{Lang.legalAddress}</span>
        </label>
        <input
          disabled
          type="text"
          className="input input-ghost w-full"
          {...methods.register("legal_address", { required: true })}
        />
      </div>
      <hr className="mt-10 mb-6 border-gray-400" />
      {/**/}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="-translate-x-1/2 -translate-y-1/2 p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
          <div className="card bg-base-200">
            <div className="px-5 py-7 boroder-b">
              {/**/}
              <h2 className="text-2xl font-bold">중개사무소 조회</h2>
              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">{Lang.searchBusinessName}</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="ex)팔자마케 부동산 중개 사무소"
                  onChange={onChange}
                />
              </div>
                <ul className="text-xs list-outside bg-rose-200 my-5">
                  <li>
                    &#8226; 중개사무소 사업자 상호명을 통해 구각 정보포털의 부동산 중개업 정보에 등록된 정보를 검색할 수 있습니다.
                  </li>
                  <li>
                    &#8226; 중개사무소가 검색되지 않을 경우 1588-9816으로 문의주세요
                  </li>
                </ul>
              {/**/}
              <div className="border rounded-lg py-2 mb-5 text-sm w-full overflow-y-scroll h-72  ">
                {options.map((item, index) => (
                  <button
                    key={index}
                    className={
                      "px-3 py-2 w-full hover:bg-gray-400 hover:text-white hover:font-bold" +
                      (selected?.bsnmCmpnm === item.bsnmCmpnm
                        ? " text-white bg-gray-500"
                        : "")
                    }
                    onClick={(e) => setSelected(item)}
                  >
                    {item.bsnmCmpnm}
                  </button>
                ))}
              </div>
              {/**/}
            </div>
            <div className="px-5 py-7">
              <button
                className="btn btn-primary w-full text-center"
                onClick={onSelect}
              >
                {Lang.confirm}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
