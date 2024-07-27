import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ButtonGoogle } from "./components/button-google";

export default function LoginPage() {
  function handleSumbit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    console.log(form);
  }

  return (
    <main className="w-full h-dvh grid place-content-center">
      <Card className="min-h-[360px] min-w-[400px] rounded-lg py-6 px-4">
        <form className="flex flex-col gap-y-3">
          <Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              required
            />
          </Label>

          <Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
              required
            />
          </Label>
          <Button className="w-full" variant="outline" type="submit">
            Iniciar sesión
          </Button>
        </form>
        <ButtonGoogle />
      </Card>
    </main>
  );
}
