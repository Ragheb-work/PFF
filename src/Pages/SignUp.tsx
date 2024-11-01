import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// Define the types for the form data
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  hireDate: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>(); // Apply the form type

  // Define the submit handler type
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="bg-[#000000f2] w-screen h-screen">
      <div className="flex justify-center items-center h-screen w-3/4 m-auto">
        <div className="left bg-[#1F1F1F] rounded-s-lg p-8 w-1/2 h-[500px]">
          <h1 className="text-5xl">Bienvenue </h1>
          <p className="text-2xl mt-3">
            Créez un compte et commencez à travailler avec votre collège
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white flex flex-col justify-center  py-3 px-6 h-[500px] w-[45%] rounded-e-lg"
        >
          <div className="">
            <Label htmlFor="firstName">Prénom</Label>
            <Input
              id="firstName"
              type="text"
              {...register("firstName", {
                required: "Ce champ est obligatoire",
                minLength: { value: 3, message: "Minimum 3 char" },
              })}
            />
            {errors.firstName && (
              <span className="text-[#dc3545] text-sm mt-3">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div className="">
            <Label htmlFor="lastName">Nom</Label>
            <Input
              id="lastName"
              type="text"
              {...register("lastName", {
                required: "Ce champ est obligatoire",
                minLength: { value: 3, message: "Minimum 3 char" },
              })}
            />
            {errors.lastName && (
              <span className="text-[#dc3545] text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>

          <div className="">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Ce champ est obligatoire" })}
            />
            {errors.email && (
              <span className="text-[#dc3545] text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.password && (
              <span className="text-[#dc3545] text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="">
            <Label htmlFor="date">Date de récrutement</Label>
            <Input
              id="date"
              type="date"
              {...register("hireDate", {
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.hireDate && (
              <span className="text-[#dc3545] text-sm">
                {errors.hireDate.message}
              </span>
            )}
          </div>

          <Button type="submit">Valider</Button>
        </form>
      </div>
    </div>
  );
}
