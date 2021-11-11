import React from "react"
import Lang from "../services/lang"
import { Modal } from "@mui/material"
import { useFormContext } from "react-hook-form"
import AppContext from "../services/context"
import { getAgencyInfo } from "../services/api"

export default function AuthAgencyInfo() {
  const [open, setOpen] = React.useState(false)
  const methods = useFormContext()
  const [options, setOptions] = React.useState([])
  const [selected, setSelected] = React.useState(null)
  const { appState } = React.useContext(AppContext)
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
    let result = await getAgencyInfo(e.target.value)
    if (!result) return
    setOptions(result.data)
  }
  //
  return (
    <div className="px-5 py-7">
      <label className="label">
        <span className="label-text">{Lang.findAgency}</span>
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
      {/**/}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="-translate-x-1/2 -translate-y-1/2 p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
          <div className="card bg-base-200">
            <div className="px-5 py-7 boroder-b">
              {/**/}
              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">{Lang.searchBusinessName}</span>
                </label>
                <input
                  type="text"
                  className="input input-ghost w-full"
                  onChange={onChange}
                />
              </div>
              {/**/}
              <div className="border rounded-lg py-2 mt-8 mb-5 text-sm w-full overflow-y-scroll h-72  ">
                {options.map((item, index) => (
                  <button
                    key={index}
                    className={
                      "px-3 py-2 w-full" +
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
