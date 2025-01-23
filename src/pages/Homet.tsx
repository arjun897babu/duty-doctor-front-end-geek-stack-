import { IoIosNotifications } from 'react-icons/io'
import duty_doctor_log from '../assets/duty-doctor.svg'
import { Link, useNavigate } from 'react-router-dom'
import { dutyDoctorPath } from '../constants/endponts'
import { IoPersonSharp } from 'react-icons/io5'
import BlogCard from '../components/BlogCard'
import ProfileSummary from '../components/ProfileSummary'
import { useEffect, useState } from 'react'
import UseDocState from '../customhooks/UseDocState'
import Footer from '../components/Footer'

const Home = () => {

    const { doctorState } = UseDocState();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!doctorState.isAuthed) {
            navigate(dutyDoctorPath.login, { replace: true })
        }
    }, [doctorState]);

    if (!doctorState.isAuthed) return

    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className={`navbar  w-full md:p-5  sm:justify-between fixed z-50  ${isScrolled ? 'glass bg-transparent' : 'bg-base-100'}`}>
                        <div className="flex-none sm:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost absolute left-2 top-2 z-10 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-9 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="ml-12 sm:ml-8 mx-4 flex-shrink-0 h-12 w-64">
                            <img className="object-contain h-full w-full" src={duty_doctor_log} alt="Logo" />
                        </div>
                        <div className="hidden flex-none md:block">
                            <ul className="menu menu-horizontal gap-2 text-lg font-medium leading-6">
                                {/* navigation menu links */}
                                <li><Link to={dutyDoctorPath.home}>Home</Link></li>
                                <li><Link to={dutyDoctorPath.home}>Academy</Link></li>
                                <li><Link to={dutyDoctorPath.home}>Docs</Link></li>
                                <li className=''>
                                    <label className="flex items-center gap-2 focus:outline-none focus:bg-transparent hover:bg-transparent ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                fillRule="evenodd"
                                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <input
                                            type="text"
                                            className="grow focus:outline-none"
                                            placeholder="Search jobs here"
                                        />
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden flex-none md:block">
                            <ul className="flex gap-4 mr-8 ">
                                {/* navigation menu links */}
                                <li className='w-12 h-12 flex justify-center items-center'>
                                    <Link to={dutyDoctorPath.home}><IoIosNotifications size={30} color='#1D267E' /></Link>
                                </li>
                                <li className='border rounded-full w-12 h-12 flex justify-center items-center'>
                                    <Link to={dutyDoctorPath.home}><IoPersonSharp size={30} color='#1D267E' /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* page contents*/}
                    <div className="pt-[calc(7rem+10px)] grid grid-cols-[1fr_2fr_1fr] gap-2 justify-items-center bg-base-100 ">
                        {/* left  */}
                        <div className="hidden md:block">
                            <ProfileSummary />
                        </div>

                        {/* middle  */}
                        <div className=" bg-gray-300 px-4 ">Middle Section</div>

                        {/* right  */}
                        <div className=" flex-col gap-2 hidden md:flex">
                            <div className="card-body p-5 bg-white border rounded-xl shadow-xl">
                                <h2 className="card-title ">Where are you in your job
                                    search journey?</h2>
                                <ul className='p-0 m-0 flex gap-2  flex-col'>
                                    <li className='rounded-full p-2 bg-slate-100 flex items-center text-left'>Actively searching jobs</li>
                                    <li className='rounded-full p-2 bg-slate-100 flex items-center text-left'>Preparing for interviews</li>
                                    <li className='rounded-full p-2 bg-slate-100 flex items-center text-left'>Received a job offer</li>
                                    <li className='rounded-full p-2 bg-slate-100 flex items-center text-left'>Casually exploring jobs</li>
                                </ul>
                            </div>
                            <BlogCard />

                        </div>
                    </div>
                    <Footer />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4 ">
                        {/* Sidebar titles for mobile screen */}
                        <div className="mt-7">
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home