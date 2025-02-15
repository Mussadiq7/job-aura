import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const SignUp = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const closeModal = () => setOpen(false);

  const onSubmit = (data) => {
    setVerificationSuccess(true);
    setTimeout(() => {
      closeModal();
      navigate('/dashboard', { state: { name: data.name } });
    }, 2000);
  };

  return (
    <>
      <Transition appear show={open || false}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl font-semibold leading-6 text-gray-900 mb-4'
                  >
                    Verify Credentials
                  </Dialog.Title>

                  {verificationSuccess ? (
                    <div className="text-green-600 text-center py-4">
                      Verification Successful!
                    </div>
                  ) : (
                    <form
                      className='w-full flex flex-col gap-5'
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <TextInput
                        name='name'
                        label='Full Name'
                        placeholder='Enter your full name'
                        type='text'
                        register={register("name", {
                          required: "Full name is required",
                        })}
                        error={errors.name ? errors.name.message : ""}
                      />

                      <TextInput
                        name='ApaarID'
                        label='APAAR ID'
                        placeholder='1234-****-****'
                        type='text'
                        register={register("ApaarID", {
                          required: "Apaar ID is required!",
                        })}
                        error={errors.ApaarID ? errors.ApaarID.message : ""}
                      />

                      <TextInput
                        name='securityPin'
                        label='Security PIN'
                        placeholder='Enter your Security PIN'
                        type='password'
                        register={register("securityPin", {
                          required: "Security PIN is required!",
                        })}
                        error={errors.securityPin ? errors.securityPin.message : ""}
                      />

                      <div className='mt-2'>
                        <CustomButton
                          type='submit'
                          containerStyles={`inline-flex justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white outline-none hover:bg-blue-800 w-full`}
                          title="Verify"
                        />
                      </div>
                    </form>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignUp;
