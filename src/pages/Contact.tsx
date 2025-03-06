// Components
import Button from '@/components/shared/Button';

// Icons
import phoneIcon from '@/assets/icons/icons-phone.png';
import emailIcon from '@/assets/icons/icons-mail.png';

export default function Contact() {
    return (
        <div className="mt-[140px] mb-[140px]">
            <div className="customContainer">
                <div className="flex lg:flex-row flex-col  items-stretch gap-[30px] justify-between">
                    {/*  Left side */}
                    <div className="shadow-lg p-10 flex flex-col gap-8">
                        <div className="pb-[31px] border-b border-black/20">
                            <div className="flex items-center gap-4">
                                <div>
                                    <img className="cursor-pointer" src={phoneIcon} alt="phoneIcon"/>
                                </div>
                                <p className="text-base font-medium">Call To Us</p>
                            </div>

                            <p className="text-sm font-normal mt-6">We are available 24/7, 7 days a week.</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img src={emailIcon} alt="emailIcon"/>
                                </div>
                                <p className="text-base font-medium">Write to us</p>
                            </div>
                            <p className="text-sm font-normal mt-6">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="text-sm font-normal mt-6">Emails: example@gmail.com</p>
                        </div>
                    </div>
                    {/*  Left side */}


                    {/*  Right side */}
                    <div className="shadow-lg p-10">
                        <div>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <input className="bg-[#F5F5F5] w-full text-base px-4 py-[13px] outline-none" type="text" placeholder="Your Name"/>
                                <input className="bg-[#F5F5F5] w-full text-base px-4 py-[13px] outline-none" type="email" placeholder="Your Email"/>
                                <input className="bg-[#F5F5F5] w-full text-base px-4 py-[13px] outline-none" type="number" placeholder="Your Phone"/>
                            </div>
                        </div>
                        <div>
                            <textarea name="message" id="userMessage" className="resize-none bg-[#F5F5F5] mt-8 p-4 w-full outline-none  h-[207px]" placeholder="Your Massage"></textarea>
                        </div>
                        <div className="mt-8 flex items-center justify-end">
                            <Button classNames="px-[48px] py-[16px] bg-[#DB4444] text-white" title="Send Massage" />
                        </div>
                    </div>
                    {/*  Right side */}


                </div>
            </div>
        </div>
    )
}