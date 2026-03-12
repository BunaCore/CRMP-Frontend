import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Home, FileText, Layers, Image, Wind } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">ASTU CRMP</h1>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Home</span>
          <span>/</span>
          <span>My Proposals</span>
          <span>/</span>
          <span className="text-foreground">New Proposal</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Progress Steps */}
            <div className="flex items-center gap-8 py-4">
              {[1, 2, 3, 4].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${step === 2 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {step}
                  </div>
                  {index < 3 && (
                    <div className="w-16 h-[2px] bg-muted mx-2" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <span className="w-8 text-center">Draft</span>
              <span className="w-8 text-center">Team</span>
              <span className="w-8 text-center">Draft</span>
              <span className="w-8 text-center">Review</span>
            </div>

            {/* Build Your Research Team */}
            <Card>
              <CardHeader>
                <CardTitle>Build Your Research Team</CardTitle>
                <CardDescription>
                  Search for registered ASTU faculty members or students to add them to your proposal. 
                  Ensure you have at least one Co-PI if required by the grant guidelines.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add New Member */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Add New Member</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Search User</label>
                    <Input 
                      placeholder="Name, email, or ASTU ID..." 
                      className="max-w-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assign Role</label>
                    <div className="flex gap-2 max-w-md">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Co-Investigator" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pi">Principal Investigator</SelectItem>
                          <SelectItem value="copi">Co-PI</SelectItem>
                          <SelectItem value="ra">Research Assistant</SelectItem>
                          <SelectItem value="coinv">Co-Investigator</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button>+ Add to Team</Button>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Current Team */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Current Team (2)</h3>
                  
                  {/* Team Members */}
                  <div className="space-y-4">
                    {/* Dr. Abebe Kebede */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-primary/10 text-primary">AK</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">Dr. Abebe Kebede</h4>
                            <p className="text-sm text-primary">Principal Investigator</p>
                            <p className="text-sm text-muted-foreground">Dept. of Electrical Engineering</p>
                            <p className="text-sm text-muted-foreground">debe@astu.edu</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Sara Tadesse */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-primary/10 text-primary">ST</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">Sara Tadesse</h4>
                            <p className="text-sm text-primary">Co-PI</p>
                            <p className="text-sm text-muted-foreground">Dept. of Computer Science</p>
                            <p className="text-sm text-muted-foreground">sara.tadesse@astu.edu</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tigist Haile */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-primary/10 text-primary">TH</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">Tigist Haile</h4>
                            <p className="text-sm text-primary">Research Assistant</p>
                            <p className="text-sm text-muted-foreground">School of Applied Sciences</p>
                            <p className="text-sm text-muted-foreground">tigist.haile@astu.edu</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end">
                  <Button size="lg">
                    Next: Project Budget →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Pages Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm">A49494</span>
                  <Badge>100%</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Show in exports</p>
              </CardContent>
            </Card>

            {/* Layers Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Layers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Body",
                  "Section to be done",
                  "Rectangle 7",
                  "Section - Budget Utilization Card",
                  "image 15",
                  "Body",
                  "Dashboard Grid",
                  "Body",
                  "Image 14",
                  "PI Dashboard",
                  "collaboration workspace",
                  "Section 1",
                ].map((layer, i) => (
                  <p key={i} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                    {layer}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Variables/Styles Card */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Variables</span>
                  <span className="text-sm text-muted-foreground">Styles</span>
                </div>
                <Separator className="my-3" />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Export</span>
                  <Button variant="outline" size="sm">
                    0.75x PNG
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weather Widget */}
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-center gap-3">
                <Wind className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">High winds</p>
                  <p className="text-sm text-muted-foreground">In 1 hour</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}