import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { useToast } from "@/components/ui/use-toast";

// Replace YOUR_FORM_ID with the actual form ID provided by Formspark
const FORMSPARK_ACTION_URL = "https://submit-form.com/YOUR_FORM_ID";

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    owners: "",
    website: "",
    practiceType: "",
    kvSeats: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _redirect: window.location.href,
        }),
      });

      if (response.ok) {
        toast({
          title: "Antrag erfolgreich gesendet",
          description: "Wir werden uns in Kürze bei Ihnen melden.",
        });
        setFormData({
          owners: "",
          website: "",
          practiceType: "",
          kvSeats: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="apply" className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionTitle title="Jetzt beantragen" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Jetzt Gütesiegel beantragen
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Füllen Sie das Formular aus, um den Antragsprozess zu starten. Dies stellt noch keinen Kauf dar. Ihr Antrag wird zunächst geprüft und im Falle eines positiven Ergebnisses erhalten Sie von uns einen Link zur Bezahlung. Im Anschluss erhalten Sie das Praxisatlas Gütesiegel.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="owners">Name(n) des/der Praxisinhaber(in)</Label>
              <Input
                id="owners"
                placeholder="Dr. Musterfrau, Dr. Mustermann"
                value={formData.owners}
                onChange={(e) =>
                  setFormData({ ...formData, owners: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Praxiswebsite</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://www.ihre-praxis.de"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2 relative">
              <Label htmlFor="practiceType">Art der Praxis</Label>
              <Select
                value={formData.practiceType}
                onValueChange={(value) =>
                  setFormData({ ...formData, practiceType: value })
                }
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Wählen Sie die Art Ihrer Praxis" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg z-50">
                  <SelectItem value="single">Einzelpraxis</SelectItem>
                  <SelectItem value="group">BAG/ÜBAG</SelectItem>
                  <SelectItem value="mvz">MVZ in ärztlicher Hand</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {formData.practiceType === "mvz" && (
              <div className="space-y-2">
                <Label htmlFor="kvSeats">Anzahl KV-Sitze</Label>
                <Input
                  id="kvSeats"
                  type="number"
                  min="1"
                  placeholder="3"
                  value={formData.kvSeats}
                  onChange={(e) =>
                    setFormData({ ...formData, kvSeats: e.target.value })
                  }
                  required={formData.practiceType === "mvz"}
                />
              </div>
            )}
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-primary hover:bg-primary-light"
              disabled={submitting}
            >
              {submitting ? "Wird gesendet..." : "Antrag absenden"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};