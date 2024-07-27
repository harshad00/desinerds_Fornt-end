import UserCard from '../components/RoomMate/UserCard'
import Button from '../components/RoomMate/Button'
import { userDetail } from './userdetail'
import MatchCard from '../components/Matches/MatchCard'
import {details} from '../components/Matches/list'
import { useNavigate, useParams } from 'react-router'


const UserPage = () => {
    const getId=useParams();
    console.log(getId.id);
    

    const navigate = useNavigate();
    return (
        <div className='p-5 md:p-20'>
            <div className='flex flex-col md:flex-row justify-between'>
                <UserCard name={userDetail.name} img={userDetail.img} age={"20"} profession={"Student"} />
                <Button className='mt-5 md:mt-0 ' />
            </div>
            <div className="px-5 md:px-10 mt-10">
                <h1 className='text-xl md:text-2xl font-semibold text-purple-700'>About</h1>
                <p className='mt-2'>{userDetail.about}</p>
            </div>
            <div className="px-5 md:px-10 mt-10">
                <h1 className='text-xl md:text-2xl font-semibold text-purple-700'>Daily Routine</h1>
                <p className='mt-2'>{userDetail.dailyRoutine}</p>
            </div>
            <div className="px-5 md:px-10 mt-10">
                <h1 className='text-xl md:text-2xl font-semibold text-purple-700'>Interest</h1>
                <div className='flex flex-wrap gap-2 md:gap-5 mt-5'>
                    {userDetail.interests.map((item, index) => (
                        <div className='bg-gray-200 px-2 py-1 md:px-4 md:py-2 rounded-lg' key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-5 md:px-10 mt-10">
                <div className="px-5 md:px-10 mt-10 flex justify-between mx-2 md:mx-4">
                    <h1 className='text-xl md:text-2xl font-semibold text-purple-700'>Matches</h1>
                    <h1 className='text-xl md:text-2xl font-semibold text-purple-700 cursor-pointer' onClick={() => navigate('/matches')}>View All</h1>
                </div>
                <div className='flex flex-wrap gap-5 mt-5 md:mt-10'>
                    {details.slice(0, 4).map((detail, index) => (
                        <MatchCard key={index} details={detail} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserPage
