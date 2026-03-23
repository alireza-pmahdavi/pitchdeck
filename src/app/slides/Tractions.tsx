import React, { useEffect, useState } from 'react';
import { SlideLayout } from '@/app/components/SlideLayout';
import { motion } from 'motion/react';
import { GlassCard } from '@/app/components/GlassCard';
import { ChevronDown } from 'lucide-react';

export function TractionsSlide() {
  const [metrics, setMetrics] = useState([
    { title: "LTV", value: "€10.60" },
    { title: "CAC", value: "€1.44" },
    { title: "ARPU", value: "€2.86" },
    { title: "Average Churn Rate", value: "27.41%" },
    { title: "Total Active Customers (December)", value: "149" },
    { title: "LTC:CAC Ratio", value: "7.36:1" },
    { title: "Conversion Rate", value: "19.58%" },
    { title: "TTV (Platform Volume)", value: "€35,541.14" },
    { title: "Take Rate", value: "28.54%" },
    { title: "Gross Income", value: "€8,000.55" },
    { title: "Total Cost", value: "€7,595.41" },
    { title: "Gross Margin", value: "5.06%" },
    { title: "MRR (December)", value: "€492.33" },
    { title: "ARR", value: "€5,907.95" },
    { title: "Average MoM", value: "373.21%" },
    { title: "Cash in Bank", value: "€7,595.41" },
    { title: "Runway", value: "Sustainable (profitable)" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-panel.caasify.com/webhook/46d5f7a6-12b0-4b0e-9ba4-f5f930ed55be');
        const json = await response.json();
        
        console.log('API Response:', json); // Debug log
        
        if (json.data && Array.isArray(json.data)) {
          const formattedMetrics = json.data.map((item: any) => {
            let formattedValue = String(item.Value);
            const val = Number(item.Value);
            const isNum = !isNaN(val) && typeof item.Value === 'number';

            // Currency formatting
            if (['LTV', 'CAC', 'ARPU', 'TTV (Platform Volume)', 'Gross Income', 'Total Cost', 'MRR (December)', 'ARR', 'Cash in Bank'].includes(item.Title) && isNum) {
               formattedValue = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(val);
            } 
            // Percentage formatting
            else if (['Average Churn Rate', 'Conversion Rate', 'Take Rate', 'Gross Margin', 'Average MoM'].includes(item.Title) && isNum) {
               formattedValue = new Intl.NumberFormat('en-IE', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);
            } 
            // String formatting cleanup
            else if (item.Title === 'Runway') {
               formattedValue = String(item.Value).replace(/\n/g, ' ');
            }

            return {
              title: item.Title,
              value: formattedValue
            };
          });
          
          console.log('Formatted Metrics:', formattedMetrics); // Debug log
          setMetrics(formattedMetrics);
        }
      } catch (error) {
        console.error("Failed to fetch traction metrics:", error);
      }
    };

    fetchData();
  }, []);

  const midPoint = Math.ceil(metrics.length / 2);
  const leftMetrics = metrics.slice(0, midPoint);
  const rightMetrics = metrics.slice(midPoint);

  const MetricTable = ({ data, className = "" }: { data: typeof metrics, className?: string }) => (
    <GlassCard className={`p-0 overflow-hidden ${className}`}>
      <div className="bg-[#0c356a]/50 p-4 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2 font-bold text-white">
          Title <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 font-bold text-white">
          Value <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      <div className="flex flex-col">
        {data.map((metric, index) => (
          <div 
            key={index} 
            className={`flex justify-between items-center p-3 px-4 border-b border-white/5 hover:bg-white/5 transition-colors text-sm md:text-base ${index % 2 === 0 ? 'bg-white/0' : 'bg-white/[0.02]'}`}
          >
            <span className="text-white/90 font-medium">{metric.title}</span>
            <span className="text-white font-bold">{metric.value}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );

  return (
    <SlideLayout title="Tractions" pageNumber={11} totalPages={14}>
      <div className="w-full min-h-full flex flex-col items-center justify-start md:justify-center pt-12 pb-32 md:pt-0 md:pb-24">
        <motion.div 
          className="w-full max-w-6xl px-6 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Debug Info - Remove this later */}
          <div className="mb-4 text-white/50 text-xs">
            Total Metrics: {metrics.length} | Left: {leftMetrics.length} | Right: {rightMetrics.length}
          </div>
          
          {/* Mobile View - Single List */}
          <div className="md:hidden">
            <MetricTable data={metrics} />
          </div>

          {/* Desktop View - Split Lists */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <MetricTable data={leftMetrics} className="h-full" />
            <MetricTable data={rightMetrics} className="h-full" />
          </div>
        </motion.div>
        
        {/* Spacer for navigation buttons */}
        <div className="h-24 w-full shrink-0" />
      </div>
    </SlideLayout>
  );
}