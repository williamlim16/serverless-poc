import { AiOutlineCloseCircle } from 'react-icons/ai'
/* eslint-disable jsx-a11y/label-has-associated-control */

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
function Modal({ setShowModal }: Props) {
  return (
    <div className="fixed top-0 left-0  w-full">
      <div className="flex items-center justify-center">
        <div className=" w-full max-w-xl ">
          <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
            <div className="flex justify-end">
              <AiOutlineCloseCircle
                onClick={() => setShowModal(false)}
                className="text-3xl"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Name
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Email
                <input
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Address
                <input
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Phone
                <input
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="button"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Modal
