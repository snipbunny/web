import { Form, useActionData } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";

import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export async function action({ request }: ActionFunctionArgs) {
  return null;
}

export default function Register() {
  const actionData = useActionData<typeof action>();

  return (
    <Form method="POST">
      <div className="space-y-1">
        <Label htmlFor="username">Username:</Label>
        <Input id="username" name="username" placeholder="jeepies" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email:</Label>
        <Input id="email" name="email" placeholder="jeepies@snipbunny.com" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          type="password"
          name="email"
          placeholder="**********"
        />
      </div>
      <Button className="w-full" type="submit">
        Sign up
      </Button>
    </Form>
  );
}
