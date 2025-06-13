import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

interface InfoSectionProps {
  hours?: {
    day: string;
    hours: string;
  }[];
  address?: string;
  phone?: string;
}

const InfoSection = ({
  hours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 6:00 PM" },
  ],
  address = "123 Coffee Street, Beantown, ST 12345",
  phone = "(555) 123-4567",
}: InfoSectionProps) => {
  return (
    <section className="w-full py-16 px-4 bg-stone-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
                <MapPin className="h-6 w-6" />
                Location & Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-700">Address</h3>
                  <p className="text-gray-600">{address}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-700">Phone</h3>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    {phone}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
                <Clock className="h-6 w-6" />
                Hours of Operation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium text-gray-700">
                      {item.day}
                    </span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
