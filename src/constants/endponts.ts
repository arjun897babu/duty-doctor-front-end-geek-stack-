export const apiEndPoint = Object.freeze({
    getOTP:'/doctor/mail/send',
    login: '/doctor/login',
    register: '/doctor/register',
    getProfile: '/doctor/:userId',
    logout: '/doctor/logout',
    sendMail: '/mail/send',
    verifyMail: '/mail/verify',
});

export const dutyDoctorPath = Object.freeze({
    home: '/',
    login: '/login',
    register: '/register',
    register2: '/register2',
    verify: '/verify',
})