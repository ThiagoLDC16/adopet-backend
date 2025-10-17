"use client"

import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { MapPin, Calendar, User, FileText, Camera, Clock } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Report } from "../types/report.types"

interface ReportDetailsDialogProps {
  report: Report | null
  open: boolean
  onClose: () => void
}

export function ReportDetailsDialog({ report, open, onClose }: ReportDetailsDialogProps) {
  if (!report) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Detalhes da Denúncia
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 max-h-[70vh]">
          <div className="space-y-6">
            {/* Informações Básicas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informações da Denúncia</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Denunciante:</span>
                  <span>{report.anonymous ? "Anônimo" : report.userName}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Data:</span>
                  <span>{format(new Date(report.createdAt), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Localização:</span>
                  <span>{report.location}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    report.status === 'investigating' ? 'bg-blue-100 text-blue-800' :
                    report.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {report.status === 'pending' ? 'Pendente' :
                     report.status === 'investigating' ? 'Em Investigação' :
                     report.status === 'resolved' ? 'Resolvido' :
                     report.status}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-medium text-sm">Descrição:</span>
                <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                  {report.description}
                </p>
              </div>
            </div>

            <Separator />

            {/* Mídia */}
            {report.media && report.media.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Mídia Anexada
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {report.media.map((media, index) => (
                    <div key={index} className="space-y-2">
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        {media.type.startsWith('image/') ? (
                          <img
                            src={media.url}
                            alt={`Mídia ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={media.url}
                            controls
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {media.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            {report.timeline && report.timeline.length > 0 && (
              <>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Linha do Tempo</h3>
                  <div className="space-y-3">
                    {report.timeline.map((event, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${
                            event.type === 'created' ? 'bg-blue-500' :
                            event.type === 'investigating' ? 'bg-yellow-500' :
                            event.type === 'resolved' ? 'bg-green-500' :
                            'bg-gray-500'
                          }`} />
                          {index < report.timeline!.length - 1 && (
                            <div className="w-0.5 h-8 bg-border mt-1" />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{event.title}</span>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(event.date), "dd/MM/yyyy HH:mm")}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}