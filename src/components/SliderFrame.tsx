import { FC } from "react"
import JobSummaryCard from "./JobSummaryCard"

const SliderFrame: FC<{ sliderTitle: 'Dutys' | 'Recommended jobs for you' | 'Immediate jobs', }> = ({ sliderTitle }) => {
    return (
        <>
            <div className="card rounded-3xl border w-ful p-2">
                <div className="flex justify-between p-2">
                    <h5 className="card-title font-bold capitalize">{sliderTitle}</h5>
                    <span className="capitalize text-sm font-semibold text-indigo-900">view all</span>
                </div>
                <div className="divider"></div>
                <div className="w-full">
                    <div className="carousel gap-2 max-w-xl ">
                        <div className="carousel-item gap-3">
                            {
                                Array.from({ length: 4 }, (_, index) => {
                                    return <JobSummaryCard key={index + 1} />
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SliderFrame