import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface FormInput {
  projectName: string;
  description: string;
  projectMonitoring: string;
  startingDate: string;
  endDate: string;
}

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>(); // Apply the form type
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col justify-center py-3 px-6 rounded-e-lg gap-4 text-blue-950 md:w-3/4 m-auto"
    >
      <div className="flex items-center justify-center md:justify-normal">
        <Label htmlFor="projectName" className="w-1/4">
          Nom de projet
        </Label>
        <Input
          className="w-1/2"
          id="projectName"
          type="text"
          placeholder="Nom de projet"
          {...register("projectName", {
            required: "Le nom du projet est requis.",
            minLength: {
              value: 3,
              message: "Le nom du projet doit contenir au moins 3 caractères.",
            },
          })}
        />
      </div>
      {errors.projectName && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.projectName.message}
        </p>
      )}

      <div className="flex items-center justify-center md:justify-normal">
        <Label htmlFor="description" className="w-1/4">
          Description du projet
        </Label>
        <Textarea
          className="w-1/2"
          id="description"
          {...register("description", {
            required: "La description du projet est requise.",
            minLength: {
              value: 10,
              message: "La description doit contenir au moins 10 caractères.",
            },
          })}
        />
      </div>
      {errors.description && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.description.message}
        </p>
      )}

      <div className="flex items-center justify-center md:justify-normal">
        <Label htmlFor="projectMonitoring" className="w-1/4">
          Responsable de suivi
        </Label>
        <Input
          className="w-1/2"
          id="projectMonitoring"
          type="text"
          placeholder="Responsable de suivi"
          {...register("projectMonitoring", {
            required: "Le nom du responsable de suivi est requis.",
            minLength: {
              value: 3,
              message:
                "Le nom du responsable doit contenir au moins 3 caractères.",
            },
          })}
        />
      </div>
      {errors.projectMonitoring && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.projectMonitoring.message}
        </p>
      )}

      <div className="flex items-center justify-center md:justify-normal">
        <Label htmlFor="startingDate" className="w-1/4">
          Date début
        </Label>

        <Input
          className="w-1/2"
          id="startingDate"
          type="text"
          placeholder="dd-mm-yyyy"
          {...register("startingDate", {
            required: "La date de début est requise.",
            pattern: {
              value: /^\d{2}-\d{2}-\d{4}$/,
              message: "La date doit être au format DD-MM-YYYY.",
            },
          })}
        />
      </div>
      {errors.startingDate && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.startingDate.message}
        </p>
      )}

      <div className="flex items-center justify-center md:justify-normal">
        <Label htmlFor="endDate" className="w-1/4">
          Date fin
        </Label>

        <Input
          className="w-1/2"
          id="endDate"
          type="text"
          placeholder="dd-mm-yyyy"
          {...register("endDate", {
            required: "La date de fin est requise.",
            pattern: {
              value: /^\d{2}-\d{2}-\d{4}$/,
              message: "La date doit être au format DD-MM-YYYY.",
            },
          })}
        />
      </div>
      {errors.endDate && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.endDate.message}
        </p>
      )}

      <Button type="submit" className="w-3/4 m-auto md:ml-0 ">
        Valider
      </Button>
    </form>
  );
};

export default CreateProject;
