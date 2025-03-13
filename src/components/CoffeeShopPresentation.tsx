import React from "react";

/**
 * CoffeeShopPresentation Component
 *
 * A presentation component for a coffee shop mobile app design showcase.
 * Displays different sections including cover, preview, on mockup, and assets.
 */
const CoffeeShopPresentation: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Grid layout for the presentation sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Cover Section */}
        <SectionContainer
          title="Cover"
          subtitle="Cover/Preview"
          studioName="NAM Design Studio"
        >
          <div className="w-full h-[900px] flex justify-center items-center bg-coffee-light">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797761862-node-417%3A698-1741797760828.png"
              alt="Coffee Shop Mobile App Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </SectionContainer>

        {/* Preview Section */}
        <SectionContainer
          title="Preview"
          subtitle="Screen Preview"
          studioName="NAM Design Studio"
        >
          <div className="w-full h-[900px] relative bg-coffee-light flex justify-center items-center overflow-hidden">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797759552-node-426%3A241-1741797758849.png"
              alt="Coffee Shop App Screen 1"
              className="w-[345px] h-[747px] absolute left-1/4 transform -translate-x-1/2 shadow-[2px_5px_60px_0px_rgba(3,5,15,0.14)]"
            />
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797758565-node-426%3A240-1741797758035.png"
              alt="Coffee Shop App Screen 2"
              className="w-[345px] h-[747px] absolute left-3/4 transform -translate-x-1/2 shadow-[5px_2px_60px_0px_rgba(3,5,15,0.04)]"
            />
          </div>
        </SectionContainer>

        {/* On Mockup Section */}
        <SectionContainer
          title="On Mockup"
          subtitle="On Mockup"
          studioName="NAM Design Studio"
          fullWidth={true}
        >
          <div className="w-full h-[1872px] bg-coffee-light flex justify-center items-center">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797757018-node-426%3A239-1741797745613.png"
              alt="Coffee Shop App on Mockup"
              className="w-full h-full object-cover"
            />
          </div>
        </SectionContainer>

        {/* Assets Section */}
        <SectionContainer
          title="Assets"
          subtitle="Assets, Style Guide & Image"
          studioName="NAM Design Studio"
          fullWidth={true}
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797743711-node-417%3A645-1741797743196.png"
              alt="Asset"
              className="w-full h-[1612px] object-cover"
            />
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797742863-node-417%3A644-1741797741941.png"
              alt="Images"
              className="w-full h-[1612px] object-cover"
            />
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797741524-node-417%3A643-1741797741027.png"
              alt="Typography"
              className="w-full h-[1612px] object-cover"
            />
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797740732-node-417%3A642-1741797740089.png"
              alt="Color"
              className="w-full h-[1612px] object-cover"
            />
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

interface SectionContainerProps {
  title: string;
  subtitle: string;
  studioName: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * SectionContainer Component
 *
 * A reusable container for each section of the presentation.
 * Includes a header with title, navigation, and studio name.
 */
const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  subtitle,
  studioName,
  children,
  fullWidth = false,
}) => {
  return (
    <div className={`flex flex-col ${fullWidth ? "col-span-full" : ""}`}>
      {/* Header Section with gradient strip */}
      <div className="h-[352px] bg-[#fdfdff] flex-col">
        {/* Gradient strip */}
        <div className="h-3 bg-coffee"></div>

        {/* Content area */}
        <div className="h-[340px] px-20 pt-16 pb-[72px] flex flex-col gap-24">
          {/* Top navigation bar */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <img
                src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C61569309-1741797744304-node-417%3A651-1741797743942.png"
                alt="NAM Design Logo"
                className="w-9 h-9 rounded-lg"
              />

              {/* Navigation path */}
              <div className="flex items-start gap-2">
                <div className="text-[#242424] text-2xl font-normal font-urbanist leading-loose">
                  Coffee Shop Mobile App
                </div>
                <div className="text-[#242424] text-2xl font-normal font-inter leading-loose">
                  -&gt;
                </div>
                <div className="text-[#242424] text-2xl font-medium font-urbanist leading-loose">
                  {title}
                </div>
              </div>
            </div>

            {/* Studio name */}
            <div className="text-[#242424] text-xl font-medium font-urbanist leading-[30px]">
              {studioName}
            </div>
          </div>

          {/* Section title */}
          <div className="flex">
            <div className="flex flex-col gap-5 max-w-[1444px]">
              <div className="flex items-center gap-4">
                <h1 className="text-[#242424] text-6xl font-semibold font-urbanist leading-[72px]">
                  {subtitle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      {children}
    </div>
  );
};

export default CoffeeShopPresentation;
