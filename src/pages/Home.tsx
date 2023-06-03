import { useState } from 'react'
import Modal from '../components/Modal'
import useJob from '../services/jobs.service'

export function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { jobList } = useJob()

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {jobList.map((job) => (
          <div className="max-w-xl overflow-hidden rounded p-5 shadow-lg">
            <img
              className="max-h-80 w-full object-cover"
              src={job.thumbnail}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{job.title}</div>
              <div className="mb-2 text-xl ">{job.company}</div>
              <p className="text-base text-gray-700">{job.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {job.tags?.map((tag) => (
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
            <button
              className="focus:shadow-outline mt-5 w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
              onClick={() => {
                setShowModal(true)
              }}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  )
}
export default Home
