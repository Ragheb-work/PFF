import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  hireDate: string;
}
const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col justify-center py-3 px-6 rounded-e-lg gap-4 text-blue-950 md:w-3/4 m-auto"
    >
      <div className="flex items-center justify-center md:justify-normal">
        <Label className="w-1/4">Nom</Label>
        <Input
          className="w-1/2"
          type="text"
          placeholder="Nom"
          {...register("firstName", {
            required: "Le nom d'utilisateur est requis.",
            minLength: {
              value: 3,
              message:
                "Le nom d'utilisateur doit contenir au moins 3 caractères.",
            },
          })}
        />
      </div>
      {errors.firstName && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.firstName.message}
        </p>
      )}
      <div className="flex items-center justify-center md:justify-normal">
        <Label className="w-1/4">Prénom</Label>
        <Input
          className="w-1/2"
          type="text"
          placeholder="Prénom"
          {...register("lastName", {
            required: "Le prénom d'utilisateur est requis.",
            minLength: {
              value: 3,
              message:
                "Le prénom d'utilisateur doit contenir au moins 3 caractères.",
            },
          })}
        />
      </div>
      {errors.lastName && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.lastName.message}
        </p>
      )}

      <div className="flex items-center justify-center md:justify-normal">
        <Label className="w-1/4">Email</Label>
        <Input
          className="w-1/2"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "L'addresse email est requis.",
          })}
        />
      </div>
      {errors.email && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.email.message}
        </p>
      )}

      <div className="flex items-center justify-center md:justify-normal">
        <Label className="w-1/4">Mot de passe</Label>
        <Input
          className="w-1/2"
          type="password"
          placeholder="Mot de passe"
          {...register("password", {
            required: "Le mot de passe est requis.",
            minLength: {
              value: 8,
              message: "Le mot de passe doit contenir au moins 8 caractères.",
            },
          })}
        />
      </div>
      {errors.password && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.password.message}
        </p>
      )}

      <div className="flex items-center justify-center md:justify-normal">
        <Label className="w-1/4">Date de récrutement</Label>
        <Input
          className="w-1/2"
          type="text"
          placeholder="Date de récrutement"
          {...register("hireDate", {
            required: "La date de récrutement est requise.",
            pattern: {
              value: /^\d{2}-\d{2}-\d{4}$/,
              message: "La date de récrutement doit être au format DD-MM-YYYY.",
            },
          })}
        />
      </div>
      {errors.hireDate && (
        <p className="text-red-500 text-xs md:text-sm">
          {errors.hireDate.message}
        </p>
      )}
      <Button type="submit" className="w-3/4 m-auto md:ml-0">
        Valider
      </Button>
    </form>
  );
};

export default AddUser;
