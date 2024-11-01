import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface FormInput {
  projets: string;
  taskName: string;
  description: string;
  projectMonitoring: string;
  startingDate: string;
  endDate: string;
  employee: string;
}
const CreateTache = () => {
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
      <div className="flex items-center justify-center md:justify-normal ">
        <Label className="w-1/4">Mes Projets</Label>
        <Select
          {...register("projets", {
            required: "Veuillez sélectionner un projet.",
          })}
        >
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder="Projets" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Projets 1</SelectItem>
            <SelectItem value="dark">Projets 2</SelectItem>
            <SelectItem value="system">Projets 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {errors.projets && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.projets.message}
        </p>
      )}
      <Separator className="shad w-3/4 " />

      <div className="flex items-center justify-center md:justify-normal">
        <Label htmlFor="taskName" className="w-1/4">
          Nom du tache
        </Label>
        <Input
          className="w-1/2"
          id="taskName"
          type="text"
          placeholder="Nom du tache"
          {...register("taskName", {
            required: "Le nom du tache est requis.",
            minLength: {
              value: 3,
              message: "Le nom du tache doit contenir au moins 3 caractères.",
            },
          })}
        />
      </div>
      {errors.taskName && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.taskName.message}
        </p>
      )}

      <div className="flex items-center justify-center md:justify-normal">
        <Label htmlFor="description" className="w-1/4">
          Description du tache
        </Label>
        <Textarea
          className="w-1/2"
          id="description"
          {...register("description", {
            required: "La description du tache est requise.",
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
        <Label htmlFor="employeur" className="w-1/4">
          Employeur
        </Label>
        <Input
          className="w-1/2"
          id="employeur"
          type="text"
          placeholder="Employeur"
          {...register("employee", {
            required: "Le nom de l'employeur est requis.",
            minLength: {
              value: 3,
              message:
                "Le nom de l'employeur doit contenir au moins 3 caractères.",
            },
          })}
        />
      </div>
      {errors.employee && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.employee.message}
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
          placeholder="2020-01-30"
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
          placeholder="2020-01-30"
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
      <Button type="submit" className="w-3/4 m-auto md:ml-0">
        Valider
      </Button>
    </form>
  );
};

export default CreateTache;
