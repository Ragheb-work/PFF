import { Link } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Logo from "../assets/Logo.jpeg";

// Define the types for the form data
interface IFormInput {
  email: string;
  password: string;
}

const SignIn = () => {
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white flex flex-col justify-center  py-3 px-6 h-[500px] w-[45%] rounded-e-lg"
        >
          <div className="logo mb-12 mx-auto">
            <img src={Logo} alt="" />
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
          <Button type="submit" className="mt-4">
            Connexion
          </Button>
          <button
            type="button"
            className="mt-12 ml-2 text-[#4444ff] text-left text- hover:text-blue-950"
          >
            <Link to={`signUp`}>creéz un compte ici</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
