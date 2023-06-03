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
        thumbnail:
          'https://images.unsplash.com/photo-1507226983735-a838615193b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      },
      {
        company: 'Toast Box',
        title: 'Waitress',
        description: `
Greeting guests and taking drink and food orders
Staying attentive to the needs of guests in the dining area
Delivering food from the kitchen to the guests
Ensuring the food order is made correctly by kitchen staff and looks presentable for guests
Following health code standards with regards to the handling of food
Performing shift duties like delivering racks of cups to the service station, rolling silverware, pre-bussing tables, wiping tables and removing debris and more
        `,
        tags: ['#toastbox', '#hostess'],
        thumbnail:
          'https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3687&q=80',
      },
      {
        company: 'Waku Ghin',
        title: 'Chef',
        description: ` Job Description:
- Preparing and brewing for all types of coffees and beverages
- Preparation of the grinder and espresso machine on a daily basis
- Follow all company drink recipes and procedures to ensure and maintain consistency and quality
- Constantly learning and improving on brewing methods, beverage blends, and presentation techniques to improve quality of company products
- Ensure proper housekeeping and proper maintenance of all equipment
- Providing excellent customer service
- Any other ad-hoc duties as assigned

Job Requirements:
- Barista skills is a must with experience in handling manual coffee machines
- Strong passion with a keen interest to work in a caf?? environment
- Committed in achieving customer satisfaction and service excellence
- Team player and able to work in a fast-paced environment
- Positive attitude with a pleasant personality
- Candidates with more experience will be considered for a Senior role

Compensation:
- 6 days work week
- Daily 9.5 hrs + 1 hour meal break
- Working location: Jewel`,
        tags: ['#toastbox', '#hostess'],
        thumbnail:
          'https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      },
    ])
  }, [])
  return { jobList }
}
export default useJob
