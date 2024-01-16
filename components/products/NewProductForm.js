import React from 'react'
import MyInput, { MySelect, MyTextArea } from "@/components/01-Utils/Formik";

import { Form, Formik } from "formik";

const NewProductForm = () => {
    return (
        <div className="w-11/12  flex flex-col mx-auto ">
            <Formik
            // validationSchema={
            //   newPropertyForm
            //     ? selectedInspectorAnswer === "owner"
            //       ? propertyFormValidationForInspector
            //       : propertyFormValidation
            //     : false

            // initialValues={formInitialValues}
            // onSubmit={newPropertyForm ? submitPropertyForm : submitEditPropertyForm}
            >
                {() => (
                    <Form className="flex-col space-y-4 w-full flex">
                        <div className="grid w-full gap-4">
                            <div className="flex flex-col w-full space-y-1">
                                <MyInput
                                    className="border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                    name="title"
                                    label="Property Name"
                                />
                            </div>


                            <div className="flex flex-col gap-4">
                                <div className="flex md:flex-row md:gap-x-3 flex-col gap-4">
                                    <div className="flex flex-col w-full">
                                        <MyInput
                                            className="border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                            name="inspect_agent_firstname"
                                            label="Inspector First Name"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <MyInput
                                            className="border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                            name="inspect_agent_lastname"
                                            label="Inspector Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="flex md:flex-row md:gap-x-3 flex-col gap-4">
                                    <div className="flex flex-col w-full space-y-1">
                                        <MyInput
                                            className="border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                            name="inspect_agent_number"
                                            label="Inspector Phone Number"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full space-y-1">
                                        <MyInput
                                            className="border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                            name="inspect_agent_email"
                                            label="Inspector Email"
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* Location and Environment */}
                            <div className="flex md:flex-row md:gap-x-3 flex-col gap-4">
                                <div className="flex flex-col w-full space-y-1">
                                    <MyInput
                                        className="border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                        name="landmark"
                                        label="Landmark (Nearest Bus stop)"
                                    />
                                </div>
                                <div className="flex flex-col w-full space-y-1">
                                    <MySelect
                                        selectClassName="bg-white border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                        name="environment"
                                        label="Environment"

                                    />
                                </div>
                            </div>
                            {/* Price and Property Status */}
                            <div className="flex md:flex-row md:gap-x-3 flex-col gap-4">
                                <div className="flex flex-col w-full space-y-1">
                                    <MySelect
                                        selectClassName="bg-white border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                        name="listing_type"
                                        label="Listing Type"

                                    />
                                </div>
                                <div className="flex flex-col w-full space-y-1">
                                    <label className="mylabel" htmlFor="purpose">
                                        Purpose
                                    </label>
                                    <select
                                        className="bg-white border border-gray-200 rounded-sm p-2 rounded-2 w-full h-10"
                                    >
                                    </select>

                                </div>

                                <div className="flex flex-col w-full space-y-1 relative">
                                    <div className="absolute top-10 left-4">₦</div>
                                    <MyInput
                                        className="border border-gray-200 rounded-sm pl-8 rounded-2 w-full h-10"
                                        type="number"
                                        name="price"
                                        label="Price"
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col w-full h-40 space-y-1">
                                <MyTextArea
                                    className="border resize-none border-gray-200 rounded-sm p-2 rounded-2 w-full"
                                    name="details"
                                    label="Details"
                                />
                            </div>
                            <div className="flex flex-col w-full space-y-1">
                                <label className="mylabel">Features</label>
                                <div className="relative w-full flex">
                                    <input
                                        name="features"
                                        // value={typedPropertyFeature}
                                        // onChange={(e) => setTypedPropertyFeature(e.target.value)}
                                        className="bg-white border border-gray-200 !rounded-sm p-2 w-full h-10"
                                    />
                                    <button
                                        type="button"
                                        // onClick={addTypedPropertyToPropertyFeatures}
                                        className="bg-blue-800 absolute h-fit w-fit px-3 py-2  rounded-sm text-xs text-white right-1 inset-y-0 my-auto"
                                    >
                                        Add
                                    </button>
                                </div>



                            </div>
                            <div className="flex flex-col h-40 w-full space-y-1">
                                <MyTextArea
                                    className="border border-gray-200 resize-none rounded-sm p-2 rounded-2 w-full h-10"
                                    name="address"
                                    label="Adress"
                                />
                            </div>
                        </div>

                        {/* Start Property Video Features */}
                        <div className="space-y-1">
                            <h4 className="font-medium text-gray-600">Add property video:</h4>
                            <div>

                                <div className="flex flex-row justify-between pb-6">
                                    <button
                                        type="submit"
                                        className="cursor-pointer flex ml-auto w-16 relative rounded-sm shadow-md bg-blue-600 text-secondary-50 items-center px-3 py-1.5 font-bold"
                                    >
                                        save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>

                )}
            </Formik>
        </div>
    )
}

export default NewProductForm