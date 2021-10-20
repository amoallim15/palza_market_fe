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
    <div className="px-5 py-7 border-b">
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        {Lang.findAgency}
      </label>
      <button
        className="mb-5 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        onClick={() => setOpen(true)}
      >
        {Lang.startFindingAgency}
      </button>
      {/**/}
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        {Lang.businessName}
      </label>
      <input
        disabled
        type="text"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        {...methods.register("business_name", { required: true })}
      />
      {/**/}
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        {Lang.businessRepresentative}
      </label>
      <input
        disabled
        type="text"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        {...methods.register("business_representative", { required: true })}
      />
      {/**/}
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        {Lang.brokerageRecordNo}
      </label>
      <input
        disabled
        type="text"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        {...methods.register("brokerage_record_no", { required: true })}
      />
      {/**/}
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        {Lang.legalAddress}
      </label>
      <input
        disabled
        type="text"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        {...methods.register("legal_address", { required: true })}
      />
      {/**/}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="-translate-x-1/2 -translate-y-1/2 p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7 boroder-b">
              {/**/}
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {Lang.searchBusinessName}
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                onChange={onChange}
              />
              {/**/}
              <div className="border rounded-lg py-2 mt-1 mb-5 text-sm w-full overflow-y-scroll h-72  ">
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
                className="mb-5 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
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
