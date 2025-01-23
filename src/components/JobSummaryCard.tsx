import { ActionButton, Callbutton } from "./Button"

const JobSummaryCard = () => {
    return (
        <>
            <div className="card px-3 bg-white w-full border">
                <div className="flex w-full p-4 justify-between gap-4 items-center">
                    <div className="h-16 w-16 rounded-xl p-3 border ">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/4dd1/ba24/aef405178de0d1a4107b2f3acb234e59?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ez9jnN13xSfxSaYKkt3fk8B81HXZS~C1XDx95MyVS3KOBtA424o-t2dpcbEmhp4z-FpZYpp5xBCQVrSW66Fdr~AqmtLl01tWTDFWIemQsgvyOKOLOZLIrEpzrAxn052Y7tmsKQVZO4ODwOIWJyFeB9WbZG-L1SQdCg0wVV8df8nsxxr8TGKlCL2zV2dZd-gMAGXu5syepfbEPyhdF5SK8F1dAmGabGkIlnbPwok-fHn8dOkoTdUgMehcQs6akKcujm6JkSG0ytFIKdqB81wSF8rLL4uB0yub2~~LmUQPXFgerBPO3XlpSS5iPMTNT3LS8HmGNonFujiwSiTUUG0YcQ__"
                            alt="Shoes"
                            className="object-contain h-full w-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-wide">
                            Duty Doctor / Medical Officer
                        </span>
                        <span className="font-thin text-sm ">
                            Kovai Medical Center and Hospitals
                        </span>
                    </div>
                </div>

                <div className="flex gap-3 p-3 text-sm tracking-wide">
                    
                    <p className="text-left break-words max-w-sm">
                        We are seeking experienced Doctors with a minimum
                        of 5+ years of clinical experience to join now. read more
                    </p>
                </div>
                <div className="flex  p-1 w-full justify-between ">
                    <Callbutton text="direct call" />
                    <ActionButton text="apply now" />
                </div>

            </div>
        </>
    )
}

export default JobSummaryCard