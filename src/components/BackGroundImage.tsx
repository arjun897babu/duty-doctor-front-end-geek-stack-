import { FC, ReactNode } from 'react';
import backGroundImage from '/doc-app-background.png'

const BackGroundImage: FC<{ children: ReactNode }> = ({ children }) => {
    let background_image_path = {
        backgroundImage: `url(${backGroundImage})`,
    };
    return (
        <div
            className='bg-cover bg-no-repeat bg-center h-screen w-full flex justify-center items-center'
            style={background_image_path}
        >
            <div className="card bg-white px:2 sm:px-6 sm:py-10 h-[574px]">
                <div className="card-body w-[300px] sm:w-[363px] p-[1rem]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BackGroundImage