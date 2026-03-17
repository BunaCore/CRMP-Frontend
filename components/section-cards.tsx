"use client"

import {
  IconArrowUp,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="
      px-4 lg:px-6
      grid gap-4
      sm:grid-cols-2
      lg:grid-cols-4
    ">

      {/* CARD 1 */}
      <Card className="flex flex-col justify-between bg-gradient-to-t from-primary/5 to-card shadow-xs">
        <CardHeader className="flex flex-row items-center justify-between">
          <IconArrowUp className="size-5 text-muted-foreground" />

          <CardAction>
            <Badge variant="outline" className="flex items-center gap-1">
              <IconArrowUp className="size-3" />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-light text-muted-foreground">
            Active Projects
          </div>

          <div className="text-2xl lg:text-3xl font-semibold tabular-nums">
            8
          </div>
        </CardFooter>
      </Card>

      {/* CARD 2 */}
      <Card className="flex flex-col justify-between bg-gradient-to-t from-primary/5 to-card shadow-xs">
        <CardHeader className="flex flex-row items-center justify-end">
          <CardAction>
            <Badge variant="outline" className="flex items-center gap-1">
              <IconTrendingDown className="size-3" />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-light text-muted-foreground">
            Pending Approvals
            <IconTrendingDown className="size-4" />
          </div>

          <div className="text-2xl lg:text-3xl font-semibold tabular-nums">
            3
          </div>
        </CardFooter>
      </Card>

      {/* CARD 3 */}
      <Card className="flex flex-col justify-between bg-gradient-to-t from-primary/5 to-card shadow-xs">
        <CardHeader className="flex flex-row items-center justify-end">
          <CardAction>
            <Badge variant="outline" className="flex items-center gap-1">
              <IconTrendingUp className="size-3" />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-light text-muted-foreground">
            Total Grant (ETB)
            <IconTrendingUp className="size-4" />
          </div>

          <div className="text-2xl lg:text-3xl font-semibold tabular-nums">
            2.5M
          </div>
        </CardFooter>
      </Card>

      {/* CARD 4 */}
      <Card className="flex flex-col justify-between bg-gradient-to-t from-primary/5 to-card shadow-xs">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl lg:text-3xl font-semibold">
            4.5%
          </CardTitle>

          <CardAction>
            <Badge variant="outline" className="flex items-center gap-1">
              <IconTrendingUp className="size-3" />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-light text-muted-foreground">
            Deadlines this Week
            <IconTrendingUp className="size-4" />
          </div>

          <div className="text-2xl lg:text-3xl font-semibold tabular-nums">
            2
          </div>
        </CardFooter>
      </Card>

    </div>
  )
}