import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Star } from "lucide-react";

interface Supplier {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  rating: number;
  specialties: string[];
  image: string;
  description: string;
}

interface SuppliersProps {
  suppliers?: Supplier[];
  title?: string;
}

const defaultSuppliers: Supplier[] = [
  {
    id: "s1",
    name: "Ethiopian Coffee Co.",
    location: "Addis Ababa, Ethiopia",
    phone: "+251-11-123-4567",
    email: "contact@ethiopiancoffee.com",
    rating: 4.8,
    specialties: ["Yirgacheffe", "Sidamo", "Harrar"],
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=300&h=200",
    description:
      "Premium Ethiopian coffee beans sourced directly from local farmers in the highlands.",
  },
  {
    id: "s2",
    name: "Colombian Highlands",
    location: "Medellín, Colombia",
    phone: "+57-4-234-5678",
    email: "info@colombianhighlands.com",
    rating: 4.9,
    specialties: ["Supremo", "Excelso", "Huila"],
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300&h=200",
    description:
      "High-altitude Colombian beans with exceptional flavor profiles and sustainable farming practices.",
  },
  {
    id: "s3",
    name: "Java Bean Traders",
    location: "Jakarta, Indonesia",
    phone: "+62-21-345-6789",
    email: "sales@javabeantraders.com",
    rating: 4.6,
    specialties: ["Sumatra", "Java", "Sulawesi"],
    image:
      "https://images.unsplash.com/photo-1559525839-d9d1df7cb6b9?auto=format&fit=crop&q=80&w=300&h=200",
    description:
      "Authentic Indonesian coffee beans with rich, earthy flavors and full-bodied characteristics.",
  },
  {
    id: "s4",
    name: "Costa Rica Estates",
    location: "San José, Costa Rica",
    phone: "+506-2234-5678",
    email: "orders@costaricaestates.com",
    rating: 4.7,
    specialties: ["Tarrazú", "Tres Ríos", "Brunca"],
    image:
      "https://images.unsplash.com/photo-1587734361993-0490df9a90e7?auto=format&fit=crop&q=80&w=300&h=200",
    description:
      "Premium Costa Rican coffee from volcanic soil regions, known for bright acidity and clean finish.",
  },
];

const Suppliers = ({
  suppliers = defaultSuppliers,
  title = "Our Coffee Bean Suppliers",
}: SuppliersProps) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We partner with premium coffee suppliers from around the world to
          bring you the finest beans, sourced directly from coffee-growing
          regions with a commitment to quality and sustainability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suppliers.map((supplier) => (
            <Card
              key={supplier.id}
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                <img
                  src={supplier.image}
                  alt={supplier.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {supplier.name}
                </CardTitle>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {supplier.rating}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    {supplier.location}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    {supplier.phone}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 truncate">
                    {supplier.email}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">
                    Specialties:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {supplier.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {supplier.description}
                </p>

                <Button
                  className="w-full mt-4 bg-primary hover:bg-primary/90"
                  onClick={() => console.log(`Contact ${supplier.name}`)}
                >
                  Contact Supplier
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
