import { AiOutlineMessage } from "react-icons/ai"
import { MdVerified } from "react-icons/md"
import { RiHome6Line } from "react-icons/ri"
import { ActionButton } from "./Button"

const ProfileSummary = () => {
    return (
        <>
            <div className="card bg-base-100 shadow-xl ">
                <div className="card-body p-6">
                    <div className="p-4 text-center">
                        <div className="w-full profile-progress">
                            <div className="avatar ">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-center justify-center text-center">
                            <h2 className="card-title font-bold text-indigo-900 capitalize">
                                Vinith Babu <MdVerified />
                            </h2>
                            <h2 className="font-thin capitalize">Duty doctor</h2>
                            <h2 className="font-thin capitalize">@hospital name</h2>
                            <ActionButton text="complete profile" />
                        </div>
                    </div>


                    <div className="card-body bg-base-200 p-3 rounded-2xl w-full ">
                        <h2 className="card-title font-bold text-left text-lg">Profile performance</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col p-2 gap-1">
                                <h2 className="text-sm font-normal">Search <br /> appearances</h2>
                                <span className="text-indigo-900">20 &gt;</span>

                            </div>
                            <div className="flex flex-col p-2 gap-1">
                                <h2 className="text-sm font-normal">Recruiter <br /> actions</h2>
                                <span className="text-indigo-900">15  &gt;</span>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>
                    <ul className='p-0 m-0 flex gap-2 flex-col w-full'>
                        <li className='rounded-full p-2 bg-slate-100 flex justify-start items-center gap-2'><RiHome6Line size={30} /><span>My Home</span></li>
                        <li className='p-2 flex justify-start items-center gap-2'><AiOutlineMessage size={30} /><span>Message</span></li>
                        <li className='p-2 flex justify-start items-center gap-2'><RiHome6Line size={30} /><span>Duties</span></li>
                        <li className='p-2 flex justify-start items-center gap-2'><RiHome6Line size={30} /><span>Wish List</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProfileSummary