// Components
import Button from '@/components/shared/Button';

// Images
import SignupBackgroundImage from "@/assets/icons/Signupbackground.png";

export default function SignUp() {
    return (
        <div className="mt-[140px] mb-[140px] relative py-[140px]">
            <div className="customContainer  ">

                <div className="flex items-center gap-32 justify-between">
                    {/* Left side */}
                    <div className="bg-[#CBE4E8] hidden sm:flex items-center lg:block lg:items-stretch w-full h-full lg:w-auto absolute left-0 z-10">
                        <img className="w-[40%] lg:w-full" src={SignupBackgroundImage} alt="SignupbackgroundImage"/>
                    </div>
                    {/* Left side */}
                    <div className="hidden sm:block"></div>

                    {/*  Right side   */}
                    <div className="w-full sm:w-[320px]  relative z-20">
                        <p className="text-4xl font-medium">Log in to Exclusive</p>
                        <p className="font-medium text-base mt-6">Enter your details below</p>
                        <div className="flex flex-col gap-10 mt-[48px]">
                            <div>
                                <input className="w-full outline-none bg-transparent pb-2 border-b border-black/40" type="text" placeholder="Email or Phone Number"/>
                            </div>

                            <div>
                                <input className="w-full outline-none bg-transparent pb-2 border-b border-black/40" type="password" placeholder="Password"/>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-start sm:items-center justify-between mt-10">
                            <Button
                                title="Log In"
                                classNames="bg-red-900 text-white px-[48px] py-[16px]"
                            />
                            <p className="cursor-pointer text-red-900 text-base font-normal">Forget password?</p>
                        </div>
                    </div>
                    {/*  Right side   */}
                </div>

            </div>
        </div>
    )
}