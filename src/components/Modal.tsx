/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { User } from '../types/user.type'

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  applyJob: (user: User) => Promise<void>
}
function Modal({ setShowModal, applyJob }: Props) {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [userData, setUserData] = useState<User>({
    address: '',
    email: '',
    emailTo: '',
    name: '',
    phone: '',
  })

  function onChange(
    target: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setUserData((prevState) => {
      return {
        ...prevState,
        [target]: event.target.value,
      }
    })
  }

  const apply = useCallback(async () => {
    try {
      if (isLoading) return
      setLoading(true)
      await applyJob(userData)
      toast.success('Successfully applied for this job!')
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message)
      } else {
        toast.error(error as string)
      }
    } finally {
      setLoading(false)
    }
  }, [isLoading, applyJob, userData])

  return (
    <div className="fixed top-0 left-0  w-full">
      <div className="flex items-center justify-center">
        <div className=" w-full max-w-xl ">
          <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
            <div className="flex justify-end">
              <AiOutlineCloseCircle
                onClick={() => {
                  setShowModal(false)
                }}
                className="text-3xl"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Name
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                  onChange={(ev) => onChange('name', ev)}
                  value={userData.name}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Email
                <input
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                  onChange={(ev) => onChange('email', ev)}
                  value={userData.email}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Address
                <input
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                  onChange={(ev) => onChange('address', ev)}
                  value={userData.address}
                />
              </label>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Email To (debug)
                <input
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                  onChange={(ev) => onChange('emailTo', ev)}
                  value={userData.emailTo}
                />
              </label>
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Phone
                <input
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                  onChange={(ev) => onChange('phone', ev)}
                  value={userData.phone}
                />
              </label>
            </div>
            <div className="flex w-full items-center justify-between">
              <button
                className={`focus:shadow-outline w-full
                 rounded bg-blue-500 py-2 px-4 font-bold 
                 text-white hover:bg-blue-700 focus:outline-none disabled:bg-opacity-40 ${
                   isLoading ? 'cursor-not-allowed' : ''
                 }`}
                type="button"
                disabled={isLoading}
                onClick={async () => {
                  await apply()
                }}
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
