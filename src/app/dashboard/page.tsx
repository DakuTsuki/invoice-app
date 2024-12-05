
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CirclePlus } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center  gap-6 text-center max-w-5xl mx-auto my-12">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-bold text-left">Invoice</h1>
  <p>
    <Button className="inline-flex gap-2" variant={"ghost"} asChild>
      <Link href="/invoices/new">
      <CirclePlus className="h-4 w-4"/>
      Create Invoice</Link>
    </Button>
  </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="p-4  text-left font-medium">
              <span className="font-semibold">04/12/2024</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span className="font-semibold">Dakutsuki</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span className="">demomega9@gmail.com</span>
            </TableCell>
            <TableCell className="p-4 text-center">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="p-4 text-right">
              <span className="font-semibold">$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
