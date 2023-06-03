import { useEffect, useState } from 'react'
import { Job } from '../types/job.type'

function useJob() {
  const [jobList, setJobList] = useState<Array<Job>>([])

  useEffect(() => {
    setJobList([
      {
        company: 'Starbucks',
        title: 'Barista',
        description:
          'This position contributes to Starbucks success by providing legendary customer service to all customers. This job creates the Starbucks Experience for our customers by providing customers with prompt service, quality beverages and products, and maintaining a clean and comfortable store environment. Models and acts in accordance with Starbucks guiding principles. Summary of Key Responsibilities Essential job functions include but are not limited to the following: · Acts with integrity, honesty and knowledge that promote the culture, values and mission of Starbucks. · Anticipates customer and store needs by constantly evaluating environment and customers for cues. · Communicates information to manager so that the team can respond as necessary to create the Third Place environment during each shift. · Contributes to positive team environment by recognizing alarms or changes in partner morale and performance and communicating them to the store manager. · Delivers legendary customer service to all customers by acting with a customer comes first attitude and connecting with the customer. Discovers and responds to customer needs. · Follows Starbucks operational policies and procedures, including those for cash handling and safety and security, to ensure the safety of all partners during each shift. · Maintains regular and punctual attendance',
        tags: ['#barista', '#sbux'],
      },
      {
        company: 'Toast Box',
        title: 'Hostess',
        description:
          'This position contributes to Starbucks success by providing legendary customer service to all customers. This job creates the Starbucks Experience for our customers by providing customers with prompt service, quality beverages and products, and maintaining a clean and comfortable store environment. Models and acts in accordance with Starbucks guiding principles. Summary of Key Responsibilities Essential job functions include but are not limited to the following: · Acts with integrity, honesty and knowledge that promote the culture, values and mission of Starbucks. · Anticipates customer and store needs by constantly evaluating environment and customers for cues. · Communicates information to manager so that the team can respond as necessary to create the Third Place environment during each shift. · Contributes to positive team environment by recognizing alarms or changes in partner morale and performance and communicating them to the store manager. · Delivers legendary customer service to all customers by acting with a customer comes first attitude and connecting with the customer. Discovers and responds to customer needs. · Follows Starbucks operational policies and procedures, including those for cash handling and safety and security, to ensure the safety of all partners during each shift. · Maintains regular and punctual attendance',
        tags: ['#toastbox', '#hostess'],
      },
      {
        company: '',
        title: 'Hostess',
        description:
          'This position contributes to Starbucks success by providing legendary customer service to all customers. This job creates the Starbucks Experience for our customers by providing customers with prompt service, quality beverages and products, and maintaining a clean and comfortable store environment. Models and acts in accordance with Starbucks guiding principles. Summary of Key Responsibilities Essential job functions include but are not limited to the following: · Acts with integrity, honesty and knowledge that promote the culture, values and mission of Starbucks. · Anticipates customer and store needs by constantly evaluating environment and customers for cues. · Communicates information to manager so that the team can respond as necessary to create the Third Place environment during each shift. · Contributes to positive team environment by recognizing alarms or changes in partner morale and performance and communicating them to the store manager. · Delivers legendary customer service to all customers by acting with a customer comes first attitude and connecting with the customer. Discovers and responds to customer needs. · Follows Starbucks operational policies and procedures, including those for cash handling and safety and security, to ensure the safety of all partners during each shift. · Maintains regular and punctual attendance',
        tags: ['#toastbox', '#hostess'],
      },
    ])
  }, [])
  return { jobList }
}
export default useJob
