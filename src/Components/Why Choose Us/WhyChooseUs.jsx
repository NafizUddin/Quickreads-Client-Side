import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { AiOutlineTeam } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="my-14">
      <h1 className="text-center text-5xl text-primary font-bold">
        Why Choose Us
      </h1>
      <div className="flex items-center py-7 w-1/3 mx-auto">
        <div className="w-1/2 h-1 bg-primary"></div>
        <div className="w-6 h-6 bg-primary transform rotate-45"></div>
        <div className="w-1/2 h-1 bg-primary"></div>
      </div>
      <p className="md:max-w-xl md:mx-auto mx-6 text-gray-500 text-center dark:text-white">
        Choose us to embark on a literary journey like no other, where knowledge
        meets inspiration, and imagination knows no bounds.
      </p>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1200"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-7 md:mx-8 xl:mx-0 mb-8 mt-12"
      >
        <div className="card">
          <div className="text-primary text-6xl flex justify-center items-center">
            <AiOutlineTeam></AiOutlineTeam>
          </div>
          <div className="items-center text-center mt-5">
            <h2 className="text-xl font-bold h-[57px] mb-2">
              Extensive Library Expertise
            </h2>
            <p>
              Our team is comprised of dedicated professionals with years of
              experience in library management. We understand the unique
              challenges and needs of libraries, ensuring you receive tailored
              solutions that work for you.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="text-primary text-6xl flex justify-center items-center">
            <FaRegLightbulb></FaRegLightbulb>
          </div>
          <div className=" items-center text-center mt-5">
            <h2 className="text-xl font-bold h-[57px] mb-2">
              Cutting-Edge Technology
            </h2>
            <p>
              We stay at the forefront of library management technology. Our
              solutions incorporate the latest innovations to streamline your
              operations, enhance user experiences, and keep your library in
              sync with the digital age.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="text-primary text-6xl flex justify-center items-center">
            <RiCustomerService2Line></RiCustomerService2Line>
          </div>
          <div className=" items-center text-center mt-5 ">
            <h2 className="text-xl font-bold h-[57px] mb-2">
              Personalized Customer Support
            </h2>
            <p>
              We pride ourselves on offering top-notch customer service. Your
              library&apos;s success is our priority, and our team is always
              ready to provide you with the assistance and guidance you need, no
              matter the issue.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="text-primary text-6xl flex justify-center items-center">
            <FaHandshake></FaHandshake>
          </div>
          <div className=" items-center text-center mt-5">
            <h2 className="text-xl font-bold h-[57px] mb-2">
              Community-Centric Approach
            </h2>
            <p>
              We prioritize community engagement and collaboration. Our
              solutions are designed to foster a sense of belonging and
              community within your library, creating an environment that
              encourages learning, interaction, and the sharing of knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
