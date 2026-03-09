import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2 } from "lucide-react"

export function BudgetUtilization() {
  return (
    <Card className="w-full rounded-xl border bg-muted/30 ">
      <CardContent className="p-6 space-y-6">

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">Budget Utilization</h2>
          </div>

         
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-muted-foreground tracking-wide">
              SPENT
            </p>
            <p className="text-2xl font-bold">
              5.4M <span className="text-muted-foreground text-lg">ETB</span>
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground tracking-wide">
              TOTAL
            </p>
            <p className="text-lg font-semibold">8.2M ETB</p>
          </div>
        </div>

        {/* Progress */}
        <Progress value={65.8} className="h-3 " />

        {/* Bottom row */}
        <div className="flex items-center justify-between text-sm">
          <p className="text-muted-foreground">65.8% consumed</p>

          <div className="flex items-center gap-2 text-green-600">
       
       
          </div>
        </div>

      </CardContent>
    </Card>
  )
}