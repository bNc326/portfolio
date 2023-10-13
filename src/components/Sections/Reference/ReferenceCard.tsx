import { IconType } from "react-icons/lib";
import { BiSitemap, BiRightArrowAlt } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";
interface Props {
  title: string;
  jobs: string;
  siteMap: Array<string>;
  images: Array<string>;
  techStack: Array<{ icon?: IconType; text: string }>;
  demoLink: string;
  isAdmin?: boolean;
  workingProgress?: boolean;
}

const ReferenceCard: React.FC<Props> = (props) => {
  return (
    <div className="w-full h-full flex flex-col tablet:flex-row gap-4">
      <div className="text-dark w-full flex flex-col  gap-12">
        <AnimationOnScroll
          animatePreScroll={false}
          animateOnce
          animateIn="animate__fadeInUp"
          className="flex flex-col"
        >
          <h2 className="text-dynamicTitle font-bold">{props.title}</h2>
          {props.workingProgress && (
            <p className="text-dynamicTimelineTitle">(Fejlesztés alatt)</p>
          )}
          <h3 className="text-dynamicDesc font-medium">{props.jobs}</h3>
        </AnimationOnScroll>
        <div className="flex flex-col gap-2">
          <p className="text-dynamicTitle3 flex gap-2 items-center font-bold">
            Feladatok
            <span>
              <BiSitemap size={32} />
            </span>
          </p>
          <ul className="text-dynamicDesc ">
            {props.siteMap.map((list, index) => (
              <AnimationOnScroll
                key={index}
                animatePreScroll={false}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <p className="">{list}</p>
              </AnimationOnScroll>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-dynamicTitle3 flex gap-2 items-center font-bold">
            Tech Stack
            <span>
              <BsStack size={24} />
            </span>
          </p>
          <div className="text-dynamicTimelineTitle font-semibold flex flex-wrap gap-2">
            {props.techStack.map((stack, index) => (
              <AnimationOnScroll
                key={index}
                animatePreScroll={false}
                animateOnce
                animateIn="animate__fadeInUp"
                className="flex gap-1 items-center w-max border-2 border-dark rounded-full px-2"
              >
                {stack.icon ? <stack.icon size={32} /> : ""} {stack.text}
              </AnimationOnScroll>
            ))}
          </div>
        </div>
        <a
          href={props.demoLink}
          target="_blank"
          className="flex flex-col justify-start gap-2"
        >
          <button className="bg-dark rounded-lg p-2 w-1/3 text-white text-dynamicBtn flex justify-center gap-1 items-center hover:opacity-70 transition-all ease-in-out duration-300">
            Demo{" "}
            <span>
              <BiRightArrowAlt size={32} />
            </span>
          </button>
          {props.isAdmin && (
            <ul>
              <li>
                <span className="font-semibold">Demo felhasználó:</span> demo
              </li>
              <li>
                <span className="font-semibold">Demo jelszó:</span> demo123
              </li>
            </ul>
          )}
        </a>
      </div>
      <AnimationOnScroll
        animatePreScroll={false}
        animateOnce
        animateIn="animate__fadeInUp"
        className="w-full h-full flex justify-center gap-4"
      >
        <img
          src={props.images[0]}
          alt="Iphone 12 Mockup"
          className=" h-full max-h-dynamicMockup drop-shadow-md"
        />
        <img
          src={props.images[1]}
          alt="Iphone 12 Mockup"
          className=" h-full max-h-dynamicMockup drop-shadow-md"
        />
      </AnimationOnScroll>
    </div>
  );
};

export default ReferenceCard;
