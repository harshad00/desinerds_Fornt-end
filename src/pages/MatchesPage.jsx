import { details } from "../components/Matches/list"
import MatchCard from "../components/Matches/MatchCard"

const MatchesPage = () => {

  return (
    <div className="p-20">
    <h1 className="text-3xl font-semibold text-purple-700 mb-4 px-10"> All Matches Profile</h1>

    <div className="flex flex-wrap justify-between  gap-6" >
    {
        details.map((detail,index)=>(
            <MatchCard key={index} details={detail}/>
         ))
    }
    </div>
    </div>
  )
}

export default MatchesPage