import { useCallback, useState } from 'react'
import axios from 'axios'
import Modal from '../components/Modal'
import useJob from '../services/jobs.service'
import { Job } from '../types/job.type'
import { User } from '../types/user.type'

export function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { jobList } = useJob()
  const [selectedJob, setJob] = useState<Job>({
    company: '',
    description: '',
    thumbnail: '',
    title: '',
    tags: [],
  })

  const applyJob = useCallback(
    async (user: User) => {
      await axios.post(
        'https://eweh471soh.execute-api.ap-southeast-1.amazonaws.com/apply',
        {
          name: user.name,
          address: user.address,
          phone: user.phone,
          email: user.email,
          emailTo: user.emailTo,
          occupation: selectedJob.title,
          company: selectedJob.company,
        }
      )
    },
    [selectedJob.company, selectedJob.title]
  )

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {jobList.map((job) => (
          <div
            className="max-w-xl overflow-hidden rounded p-5 shadow-lg"
            key={job.title}
          >
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
                <span
                  className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              className="focus:shadow-outline mt-5 w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
              onClick={() => {
                setShowModal(true)
                setJob(job)
              }}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
      {showModal && <Modal setShowModal={setShowModal} applyJob={applyJob} />}
    </div>
  )
}
export default Home
