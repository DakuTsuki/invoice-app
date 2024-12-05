import { sql } from "drizzle-orm";

import { db } from "@/db";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createAction } from "@/app/action";


export default async function Home() {
  return (
    <main className="flex flex-col items-baseline justify-center  gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-left">Create Invoice</h1>
      </div>

      <form action={createAction} className="grid gap-4 max-w-xs">
        <div>
          <Label className="block mb-2 font-semibold text-small" htmlFor="name">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label
            className="block mb-2 font-semibold text-small"
            htmlFor="email"
          >
            Billing Email
          </Label>
          <Input id="name" name=" email" type="email" />
        </div>
        <div>
          <Label
            className="block mb-2 font-semibold text-small"
            htmlFor="value"
          >
            Value
          </Label>
          <Input id="name" name=" value" type="text" />
        </div>
        <div>
          <Label
            className="block mb-2 font-semibold text-small"
            htmlFor="description"
          >
            Description
          </Label>
          <Textarea name="description" id="description"></Textarea>
        </div>
        <div>
          <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
}
