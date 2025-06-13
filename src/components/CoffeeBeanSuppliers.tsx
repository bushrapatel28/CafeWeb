import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Globe, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Supplier {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  specialties: string[];
  rating: number;
  description: string;
  image: string;
  certifications: string[];
}

interface CoffeeBeanSuppliersProps {
  suppliers?: Supplier[];
}

const defaultSuppliers: Supplier[] = [
  {
    id: "s1",
    name: "Highland Coffee Farms",
    location: "Guatemala, Central America",
    phone: "+502 1234-5678",
    email: "info@highlandcoffee.gt",
    website: "www.highlandcoffee.gt",
    specialties: ["Arabica", "Organic", "Single Origin"],
    rating: 4.8,
    description:
      "Family-owned farm specializing in high-altitude grown Arabica beans with exceptional flavor profiles. Committed to sustainable farming practices and fair trade.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=400&h=300",
    certifications: ["Fair Trade", "Organic", "Rainforest Alliance"],
  },
  {
    id: "s2",
    name: "Ethiopian Heritage Beans",
    location: "Yirgacheffe, Ethiopia",
    phone: "+251 11 123-4567",
    email: "contact@ethiopianheritage.et",
    website: "www.ethiopianheritage.et",
    specialties: ["Heirloom Varieties", "Natural Process", "Light Roast"],
    rating: 4.9,
    description:
      "Preserving traditional Ethiopian coffee cultivation methods while delivering the finest heirloom varieties with unique floral and fruity notes.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400&h=300",
    certifications: ["Direct Trade", "Organic"],
  },
  {
    id: "s3",
    name: "Colombian Mountain Co.",
    location: "Huila, Colombia",
    phone: "+57 1 234-5678",
    email: "sales@colombianmountain.co",
    website: "www.colombianmountain.co",
    specialties: ["Supremo Grade", "Washed Process", "Medium Roast"],
    rating: 4.7,
    description:
      "Premium Colombian coffee from the mountainous regions of Huila, known for producing beans with perfect balance and rich chocolate undertones.",
    image:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=400&h=300",
    certifications: ["Fair Trade", "UTZ Certified"],
  },
  {
    id: "s4",
    name: "Java Island Estates",
    location: "Java, Indonesia",
    phone: "+62 21 1234-5678",
    email: "info@javaisland.id",
    website: "www.javaisland.id",
    specialties: ["Robusta", "Full Body", "Dark Roast"],
    rating: 4.6,
    description:
      "Traditional Indonesian coffee estate producing full-bodied beans with earthy flavors and low acidity, perfect for espresso blends.",
    image:
      "https://images.unsplash.com/photo-1559525839-d9d1df7cb6b9?auto=format&fit=crop&q=80&w=400&h=300",
    certifications: ["Sustainable Agriculture", "Direct Trade"],
  },
];

const CoffeeBeanSuppliers = ({
  suppliers = defaultSuppliers,
}: CoffeeBeanSuppliersProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Coffee Bean Suppliers
              </h1>
              <p className="text-lg text-gray-600">
                Meet our trusted partners who source the finest coffee beans
                from around the world
              </p>
            </div>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="px-6 py-2"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Suppliers Grid */}
      <div className="container mx-auto px-4 py-12">
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
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{supplier.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {supplier.name}
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{supplier.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {supplier.description}
                </p>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {supplier.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-amber-100 text-amber-800"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
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

                {/* Contact Information */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900">
                    Contact Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{supplier.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{supplier.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
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
    </div>
  );
};

export default CoffeeBeanSuppliers;
