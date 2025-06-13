import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Globe, Star } from "lucide-react";

interface Supplier {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  specialty: string[];
  rating: number;
  description: string;
  image: string;
  certifications: string[];
}

interface SuppliersProps {
  suppliers?: Supplier[];
  title?: string;
}

const defaultSuppliers: Supplier[] = [
  {
    id: "s1",
    name: "Highland Coffee Farms",
    location: "Guatemala, Central America",
    phone: "+502 1234-5678",
    email: "info@highlandcoffee.gt",
    website: "www.highlandcoffee.gt",
    specialty: ["Arabica", "Organic", "Single Origin"],
    rating: 4.8,
    description:
      "Family-owned farm producing premium Arabica beans at high altitude. Known for their sustainable farming practices and exceptional quality control.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=400&h=300",
    certifications: ["Fair Trade", "Organic", "Rainforest Alliance"],
  },
  {
    id: "s2",
    name: "Ethiopian Heritage Co-op",
    location: "Yirgacheffe, Ethiopia",
    phone: "+251 11 123-4567",
    email: "contact@ethiopianheritage.et",
    website: "www.ethiopianheritage.et",
    specialty: ["Heirloom Varieties", "Natural Process", "Floral Notes"],
    rating: 4.9,
    description:
      "Cooperative of small-scale farmers preserving traditional Ethiopian coffee varieties. Specializes in naturally processed beans with unique floral characteristics.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400&h=300",
    certifications: ["Fair Trade", "Direct Trade", "Women's Cooperative"],
  },
  {
    id: "s3",
    name: "Colombian Mountain Estates",
    location: "Huila, Colombia",
    phone: "+57 1 234-5678",
    email: "sales@colombianmountain.co",
    website: "www.colombianmountain.co",
    specialty: ["Supremo Grade", "Washed Process", "High Altitude"],
    rating: 4.7,
    description:
      "Premium coffee estate located in the Colombian Andes. Produces consistently high-quality beans with excellent balance and clarity.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400&h=300",
    certifications: [
      "Specialty Coffee Association",
      "UTZ Certified",
      "Carbon Neutral",
    ],
  },
  {
    id: "s4",
    name: "Sumatra Sustainable Growers",
    location: "North Sumatra, Indonesia",
    phone: "+62 61 123-4567",
    email: "info@sumatrasustainable.id",
    website: "www.sumatrasustainable.id",
    specialty: ["Mandheling", "Semi-Washed", "Full Body"],
    rating: 4.6,
    description:
      "Sustainable coffee producer focusing on traditional Sumatran processing methods. Known for full-bodied beans with earthy characteristics.",
    image:
      "https://images.unsplash.com/photo-1559525839-d9d1df7cb6b9?auto=format&fit=crop&q=80&w=400&h=300",
    certifications: ["Organic", "Bird Friendly", "Sustainable Agriculture"],
  },
];

const Suppliers = ({
  suppliers = defaultSuppliers,
  title = "Our Coffee Bean Suppliers",
}: SuppliersProps) => {
  return (
    <section className="w-full py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with exceptional coffee growers from around the world who
            share our commitment to quality, sustainability, and fair trade
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {suppliers.map((supplier) => (
            <Card
              key={supplier.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={supplier.image}
                  alt={supplier.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{supplier.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {supplier.name}
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{supplier.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {supplier.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {supplier.specialty.map((spec, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-amber-100 text-amber-800"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {supplier.certifications.map((cert, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-green-200 text-green-700"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{supplier.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{supplier.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 sm:col-span-2">
                      <Globe className="h-4 w-4" />
                      <span>{supplier.website}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
