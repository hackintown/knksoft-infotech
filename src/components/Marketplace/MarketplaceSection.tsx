"use client";
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState, useCallback } from 'react';
import { MARKETPLACE_TABS } from '@/constants/marketplace';
import { MarketplaceCard } from './MarketplaceCard';
import { containerVariants, itemVariants } from '@/animations/marketplace';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';

export const MarketplaceSection = () => {
  const [activeTab, setActiveTab] = useState('product-order');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleTabChange = useCallback((value: string) => {
    if (!isDesktop) {
      setActiveTab(value);
    }
  }, [isDesktop]);

  const handleTabHover = useCallback((value: string) => {
    if (isDesktop) {
      setActiveTab(value);
    }
  }, [isDesktop]);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Innovative Solutions For Every Marketplace Vision
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We specialize in transforming innovative marketplace concepts into successful realities. 
          Our team of experts has a wealth of experience and expertise to craft a tailored marketplace 
          solution that aligns perfectly with your vision.
        </p>

        <Tabs 
          defaultValue="product-order" 
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-[#f5f5f5] rounded-full w-fit mx-auto border border-gray-200 p-0.5">
            {MARKETPLACE_TABS.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                onMouseEnter={() => handleTabHover(tab.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {MARKETPLACE_TABS.map((tab) => (
            <TabsContent 
              key={tab.id} 
              value={tab.id}
              className="focus-visible:outline-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  {tab.items.map((item, index) => (
                    <MarketplaceCard 
                      key={item.name}
                      item={item}
                      variants={itemVariants}
                      custom={index}
                    />
                  ))}
                </motion.div>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative rounded-2xl overflow-hidden hidden lg:block"
                >
                  <Image
                    src={tab.tabImage}
                    alt={`${tab.label} illustration`}
                    fill
                    className="max-w-[550px]"
                    priority
                  />
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}; 