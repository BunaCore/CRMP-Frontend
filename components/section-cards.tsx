import { IconArrowUp, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="flex gap-4 px-4 overflow-x-auto *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 dark:*:data-[slot=card]:bg-card ">
      <Card className="@container/card flex-1 min-w-[12rem]">
        <CardHeader>
          <IconArrowUp/>
         
          <CardAction>
            <Badge variant="outline">
              <IconArrowUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2  font-light">
            Active Projects
                      </div>
          <div className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            8
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card flex-1 min-w-[12rem]">
        <CardHeader>
          
          
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2  font-light">
            Pending Approvals<IconTrendingDown className="size-4" />
          </div>
          <div className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            3
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card flex-1 min-w-[12rem]">
        <CardHeader>
          
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-light">
            Total Grant (ETB)<IconTrendingUp className="size-4" />
          </div>
          <div className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">2.5 m</div>
        </CardFooter>
      </Card>
      <Card className="@container/card flex-1 min-w-[12rem]">
        <CardHeader>
          
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 Deadlines this Week
">
            Deadlines this Week<IconTrendingUp className="size-4" />
          </div>
          <div className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">2</div>
        </CardFooter>
      </Card>
    </div>
  )
}
