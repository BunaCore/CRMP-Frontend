import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className=" border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                
                </div>
                <Input id="password" 
                type="password" 
                required  
                className=" border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
/>

              </Field>
                <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline text-[#13DAEC]"
                  >
                    Forgot your password?
                  </a>
              <Field>
                <Button type="submit" className="bg-[#13DAEC] ">SignIn</Button>
              </Field>
              <div className="flex items-center justify-center gap-3 mt-4">
  
  <div className="flex-1 h-[1px] bg-gray-400"></div>

  <span className="text-gray-700 font-semibold text-sm">or</span>

  <div className="flex-1 h-[1px] bg-gray-400"></div>
</div>
             
              <FieldDescription className="text-center">
                Not Registered? <a href="#" className="text-[#13DAEC] ">Sign up</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/group.png"
              alt="Image"
              className="absolute  h-full w-full object-cover "
            />
          </div>
        </CardContent>
      </Card>
 
    </div>
  )
}
