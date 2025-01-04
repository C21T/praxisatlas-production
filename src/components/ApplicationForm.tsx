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

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    owners: "",
    website: "",
    practiceType: "",
    kvSeats: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div id="apply" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionTitle title="Jetzt beantragen" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Jetzt Gütesiegel beantragen
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Füllen Sie das Formular aus, um den Antragsprozess zu starten
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="owners">Name(n) des/der Praxisinhaber</Label>
              <Input
                id="owners"
                placeholder="Dr. Max Mustermann, Dr. Maria Musterfrau"
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
            >
              Antrag absenden
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};