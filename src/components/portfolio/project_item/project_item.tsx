import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../ui/carousel";
import { Card, CardContent } from "../../ui/card";
import ActionButton from "../../ui/actionbutton";
import GitHubIcon from "../../svg/github_icon";
import "./project_item.css";

export type ProjectItemProps = {
  name: string;
  description: string;
  images: string[];
  github?: string;
  demo?: string;
};

const ProjectItem = (props: ProjectItemProps) => {
  const { name, description, images, github, demo } = props;
  return (
    <>
      <div className="rounded-md overflow-hidden hover:shadow-md outline outline-[0.2px] outline-gray-200  transition bg-white">
        <Carousel className="w-full  p-0 m-0">
          <CarouselContent>
            {images.map((item, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video overflow-y-hidden w-full items-center justify-center p-0">
                    <img className="w-full" src={item} alt={name} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 disabled:hidden" />
          <CarouselNext className="right-2 disabled:hidden" />
        </Carousel>
        <div className="px-6 py-4">
          <div className="flex flex-row justify-between items-baseline">
            <div className="font-bold text-xl mb-2">{name}</div>
            <div className="flex flex-row gap-2">
              {github && (
                <div className="no-padding-div">
                  <ActionButton link={github} className=" bg-black">
                    <GitHubIcon className="" fill="white" />
                    <div className="text-sm font-mono text-white">GitHub</div>
                  </ActionButton>
                </div>
              )}
              {demo && (
                <div className="no-padding-div">
                  <ActionButton link={github} className=" bg-black">
                    <GitHubIcon className="" fill="white" />
                    <div className="text-sm font-mono text-white">Demo</div>
                  </ActionButton>
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-700 text-base line-clamp-5">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;