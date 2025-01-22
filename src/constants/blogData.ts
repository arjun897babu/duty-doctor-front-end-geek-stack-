import workwise from '/workwise.png'
import searchSvg from '../assets/search-icon.svg'

export const blogData: Record<string, { title: string, image: string, content: string }> = {
    blog1: {
        title: 'How to Coach Managers on Effectively Leading Gen Z Employees',
        image: workwise,
        content: `Generation Z, the digital natives
                        entering the workforce, bring unique
                        qualities, from an entrepreneurial
                        mindset to a strong preference for
                        financial stability.` 
    },
    blog2: {
        title: `How to Coach Managers on
                Effectively Leading Gen
                Z Employees`,
        image: searchSvg,
        content: `Generation Z, the digital natives
                entering the workforce, bring unique
                qualities, from an entrepreneurial
                mindset to a strong preference for
                financial stability.`
    }
}