import React from "react"
import Lang from "../services/lang"
//
export default function PurchaseRequestView() {
  return (
    <div>
      <div className="my-4 p-10 card bg-base-200">
        <div className="form-control flex-row">
          <span className="label label-text mr-4">{Lang.purchaseType}</span>
          <label
            htmlFor="sale"
            className="cursor-pointer label justify-start mr-4"
          >
            <input
              id="sale"
              type="radio"
              name="opt"
              className="radio"
              value="a"
            />
            <span className="label-text ml-2">{Lang.sale}</span>
          </label>
          {/**/}
          <label
            htmlFor="buy"
            className="cursor-pointer label justify-start mr-4"
          >
            <input
              id="buy"
              type="radio"
              name="opt"
              className="radio"
              value="b"
            />
            <span className="label-text ml-2">{Lang.buy}</span>
          </label>
        </div>
        {/**/}
        <div className="form-control flex-grow pr-8">
          <label className="label">
            <span className="label-text">{Lang.title}</span>
          </label>
          <input
            type="text"
            placeholder={Lang.title}
            className="input input-ghost w-full"
          />
        </div>
        {/**/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">{Lang.content}</span>
          </label>
          <textarea
            placeholder={Lang.content}
            className="textarea input-ghost h-24"
          />
        </div>
        {/**/}
        <div className="mt-8 flex flex-row-reverse">
          <button className="btn btn-primary">{Lang.send}</button>
        </div>
      </div>
    </div>
  )
}
