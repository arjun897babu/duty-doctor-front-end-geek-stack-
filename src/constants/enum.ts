
export const selectListValues: Record<string, string[]> = Object.freeze({
    degree: ["MBBS", "PG", "Fellowship", "Super Speciality"],
    country: ["USA", "Canada", "India", "Australia", 'China', 'Singapore'],
    instituteName: ["Dr. B. R. Ambedkar Medical College", "Rajendra Institute of Medical Science", "Central Institute of Psychiatry", "Harvard Medical School",
        "Johns Hopkins University School of Medicine", "University of Cambridge School of Clinical Medicine",
        "Imperial College School of Medicine", "McGill University Faculty of Medicine and Health Sciences",],
    pgDegree: ["MD", "MS", "DM", "MCh"],
    speciality: ["Cardiology", "Neurology", "Orthopedics"],
    fellowShip: ["Sports Medicine", "Aesthetic Medicine", "Robotic Surgery", "Pain Management", "Fetal Medicine", "Critical Care"],
    completion: ['Yes', 'No'],
    year: ['1st year', '2nd year', '3rd year', '4th year', '5th year', '6th year', '7th year']
})
export enum ResponseStatus {
    SUCCESS = 'Success',
    ERROR = 'Error',
}
export enum DoctorDegree {
    MBBS = 'MBBS',
    PG = 'PG',
    SUPER_SPECIALITY = "Super Speciality",
    FELLOWSHIP = 'Fellowship'
}

