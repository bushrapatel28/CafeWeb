import { CoffeeShopPresentation } from "../components/CoffeeShopPresentation";
import "../index.css";

const meta = {
  title: "Components/CoffeeShopPresentation",
  component: CoffeeShopPresentation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "coffee-light",
      values: [
        { name: "coffee-light", value: "#F9F5F1" },
        { name: "coffee", value: "#4A3520" },
      ],
    },
  },
};

export default meta;

export const Default = {
  render: (args) => <CoffeeShopPresentation {...args} />,
  args: {},
};

export const CoverSectionOnly = {
  render: () => (
    <div className="bg-[#F9F5F1] min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A3520] mb-6">
            Coffee Shop Mobile App
          </h1>
          <p className="text-lg md:text-xl text-[#6B5D4E] max-w-2xl">
            A delightful mobile experience for coffee lovers to browse, order,
            and enjoy their favorite brews
          </p>
        </div>
      </div>
    </div>
  ),
  args: {},
};

export const PreviewSectionOnly = {
  render: () => (
    <div className="bg-[#F9F5F1] min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A3520] mb-8 text-center">
            App Preview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={`/images/tempo-image-20250311T16${index}000000Z.png`}
                  alt={`Coffee app screen ${index}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  args: {},
};

export const MockupSectionOnly = {
  render: () => (
    <div className="bg-[#4A3520] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">On Device</h2>
        <div className="flex justify-center">
          <img
            src="/images/tempo-image-20250312T131641000Z.png"
            alt="Coffee app on mobile device"
            className="w-full max-w-4xl rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  ),
  args: {},
};

export const AssetsSectionOnly = {
  render: () => (
    <div className="bg-[#F9F5F1] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#4A3520] mb-12 text-center">
          Style Guide & Assets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#4A3520]">
              Color Palette
            </h3>
            <div className="flex flex-wrap gap-4">
              {["#4A3520", "#6B5D4E", "#A87C5B", "#D4A76A", "#F9F5F1"].map(
                (color) => (
                  <div key={color} className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full mb-2"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-sm text-gray-700">{color}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#4A3520]">
              Typography
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-4xl font-bold text-[#4A3520]">Heading 1</h4>
                <p className="text-sm text-gray-500">Poppins Bold / 36px</p>
              </div>
              <div>
                <h4 className="text-3xl font-semibold text-[#4A3520]">
                  Heading 2
                </h4>
                <p className="text-sm text-gray-500">Poppins SemiBold / 30px</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#4A3520]">
                  Body Text
                </h4>
                <p className="text-sm text-gray-500">Poppins Regular / 16px</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-[#4A3520]">
            App Icons & Illustrations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img
              src="/images/tempo-image-20250312T161102406Z.png"
              alt="Coffee app icon"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/tempo-image-20250311T170448553Z.png"
              alt="Coffee illustration"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/tempo-image-20250311T165631240Z.png"
              alt="Coffee beans illustration"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/tempo-image-20250311T164512741Z.png"
              alt="Coffee cup illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  args: {},
};
