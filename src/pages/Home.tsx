import { useState } from 'react'
import Modal from '../components/Modal'

export function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="max-w-xl overflow-hidden rounded p-5 shadow-lg">
          <img
            className="w-full"
            src="https://picsum.photos/1000/750"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Starbuckks</div>
            <p className="text-base text-gray-700">
              This position contributes to Starbucks success by providing
              legendary customer service to all customers. This job creates the
              Starbucks Experience for our customers by providing customers with
              prompt service, quality beverages and products, and maintaining a
              clean and comfortable store environment. Models and acts in
              accordance with Starbucks guiding principles. Summary of Key
              Responsibilities Essential job functions include but are not
              limited to the following: · Acts with integrity, honesty and
              knowledge that promote the culture, values and mission of
              Starbucks. · Anticipates customer and store needs by constantly
              evaluating environment and customers for cues. · Communicates
              information to manager so that the team can respond as necessary
              to create the Third Place environment during each shift. ·
              Contributes to positive team environment by recognizing alarms or
              changes in partner morale and performance and communicating them
              to the store manager. · Delivers legendary customer service to all
              customers by acting with a customer comes first attitude and
              connecting with the customer. Discovers and responds to customer
              needs. · Follows Starbucks operational policies and procedures,
              including those for cash handling and safety and security, to
              ensure the safety of all partners during each shift. · Maintains
              regular and punctual attendance
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #barista
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #part-time
            </span>
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
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  )
}
export default Home
