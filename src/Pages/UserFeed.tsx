import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const project = {
  id: 1,
  name: "New Website Development",
  startingDate: "2024-01-01",
  endingDate: "2024-06-01",
  status: "In Progress",
  description: "Developing a new company website.",
  manager: "Alice Johnson",
  monitor: "Bob Smith",
  tasks: [
    {
      name: "Design UI",
      status: "Completed",
      description: "create figma mockups",
      employee: "Midou sehli",
      taskManager: "ragheb smary",
      startingDate: "99/99/2099",
      endingDate: "99/99/2099",
    },
    {
      name: "Develop Backend",
      status: "In Progress",
      description: "create API",
      employee: "Midou sehli",
      taskManager: "ragheb smary",
      startingDate: "99/99/2099",
      endingDate: "99/99/2099",
    },
    {
      name: "Testing",
      status: "Pending",
      description: "test the website ",
      employee: "Midou sehli",
      taskManager: "Ragheb smary",
      startingDate: "99/99/2099",
      endingDate: "99/99/2099",
    },
  ],
};

const UserFeed = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-950 text-center font-semibold">
        Mes Projets
      </h1>

      <div className="mt-8">
        {/* Header Row */}
        <div className="grid grid-cols-5 gap-8 font-bold text-left shad p-2 mb-4 rounded-md">
          <span>Project Name</span>
          <span>Start Date</span>
          <span>End Date</span>
          <span>Status</span>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="shad px-2 rounded-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {/* Values Row */}
              <div className="grid grid-cols-5 gap-8 text-left">
                <span>{project.name}</span>
                <span>{project.startingDate}</span>
                <span>{project.endingDate}</span>
                <span>{project.status}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div>
                <p>
                  <strong className=" text-blue-950 text-lg">
                    Description:
                  </strong>
                  {project.description}
                </p>
                <p>
                  <strong className=" text-blue-950 text-lg">
                    Project Manager:
                  </strong>
                  {project.manager}
                </p>
                <p>
                  <strong className=" text-blue-950 text-lg">
                    Project Monitor:
                  </strong>
                  {project.monitor}
                </p>

                <div>
                  <Separator className="mt-6 shad" />

                  <h4 className="font-bold  my-3 text-blue-950 text-2xl">
                    Tasks :
                  </h4>
                  <ul className="list-disc pl-5">
                    {project.tasks.map((task, index) => (
                      <li key={index} className="shad p-2 my-1">
                        <strong className="mb-16">{task.name}</strong>
                        <ul className="list-disc pl-5 ml-4">
                          <li className="my-4">
                            <strong> Status:</strong> {task.status}
                          </li>
                          <li className=" mb-4 ">
                            <strong> Description:</strong> {task.description}
                          </li>
                          <li className=" mb-4 ">
                            <strong> Employee:</strong> {task.employee}
                          </li>
                          <li className=" mb-4 ">
                            <strong> Task manager:</strong> {task.taskManager}
                          </li>
                          <li className=" mb-4 ">
                            <strong> Starting:</strong> {task.startingDate}
                          </li>
                          <li className=" mb-4 ">
                            <strong> Ending:</strong> {task.endingDate}
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default UserFeed;
