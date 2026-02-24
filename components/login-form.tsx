import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen scale-110",
        className
      )}
      {...props}
    >
      <Card className="w-[640px] h-[530px] overflow-hidden p-0 ">
        <CardContent className="grid p-0 md:grid-cols-2 h-full">

          <div className="bg-muted relative hidden md:block md:order-1">
            <img
              src="/Building.png"
              alt="Image"
              className="absolute h-full w-full object-cover"
            />
          </div>

          <div className="md:order-2 scale-85">
            <form className="p-6 md:p-8">
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-xs">Enter your details to signin</p>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  />
                </Field>

                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-2 hover:underline text-[#13DAEC]"
                >
                  Forgot your password?
                </a>

                <Field>
                  <Button type="submit" className="bg-[#13DAEC] w-full">
                    SignIn
                  </Button>
                </Field>

                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="flex-1 h-[1px] bg-gray-400"></div>
                  <span className="text-gray-700 font-semibold text-sm">or</span>
                  <div className="flex-1 h-[1px] bg-gray-400"></div>
                </div>

                <FieldDescription className="text-center">
                  Not Registered?{" "}
                  <a href="#" className="text-[#13DAEC]">
                    Sign up
                  </a>
                </FieldDescription>
              </FieldGroup>
            </form>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}