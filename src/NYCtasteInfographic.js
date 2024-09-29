import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Globe, ShoppingBag, Users, Truck, DollarSign, Award, Target } from 'lucide-react';

const NYCtasteInfographic = () => {
  const [activeSection, setActiveSection] = useState(null);

  const cuisineData = [
    { name: 'Middle Eastern', value: 20 },
    { name: 'Latin American', value: 20 },
    { name: 'Asian', value: 20 },
    { name: 'European', value: 15 },
    { name: 'African', value: 15 },
    { name: 'Fusion', value: 10 },
  ];

  const goals = [
    { title: "Expand Product Range", description: "Launch more cultural foods and specialty items." },
    { title: "Revenue Growth", description: "Target $500,000 in first-year revenue." },
    { title: "Marketing Strategy", description: "Leverage influencers and digital platforms to increase brand visibility." },
    { title: "Nationwide Shipping", description: "Implement robust logistics to reach customers across the U.S." },
  ];

  const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#E7B9FF'];

  const Section = ({ title, icon: Icon, children, id }) => (
    <motion.div
      className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 mb-8 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveSection(activeSection === id ? null : id)}
      layout
    >
      <motion.h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-800">
        <Icon className="mr-2" /> {title}
      </motion.h2>
      <AnimatePresence>
        {activeSection === id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <motion.h1 
        className="text-6xl font-bold mb-6 text-center text-white shadow-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        NYCtaste
      </motion.h1>
      <motion.p
        className="text-2xl text-center text-white shadow-text mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Bringing NYC's Diverse Flavors to Doorsteps Nationwide
      </motion.p>

      <Section title="Our Mission" icon={Globe} id="mission">
        <p className="text-lg mb-4">
          NYCtaste brings the vibrant flavors of NYC's diverse food scene to doorsteps nationwide. 
          From Middle Eastern sweets to Latin American delicacies, our curated selection celebrates 
          the rich tapestry of the city's cuisine.
        </p>
      </Section>

      <Section title="Culinary Diversity" icon={ShoppingBag} id="cuisine">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={cuisineData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {cuisineData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Section>

      <Section title="Our Goals" icon={Target} id="goals">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal, index) => (
            <motion.div 
              key={goal.title}
              className="bg-indigo-100 p-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-2">{goal.title}</h3>
              <p>{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Marketing Strategy" icon={Users} id="marketing">
        <ul className="list-disc pl-5 space-y-2">
          <li>Leverage 20+ influencers for product launch</li>
          <li>Targeted social media campaigns</li>
          <li>Email marketing to 5000+ subscribers</li>
          <li>Participation in cultural food events</li>
          <li>Partnerships with food bloggers and local chefs</li>
        </ul>
      </Section>

      <Section title="Expansion Plan" icon={Truck} id="expansion">
        <div className="space-y-4">
          {['Q4 2024: Launch e-commerce platform', 'Q2 2025: Expand to key NYC supermarkets', 'Q4 2025: Establish nationwide shipping', 'Q2 2026: Explore franchising opportunities'].map((step, index) => (
            <motion.div 
              key={step}
              className="flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="rounded-full bg-indigo-500 text-white p-2 mr-4">{index + 1}</div>
              <div>{step}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Investment Opportunity" icon={DollarSign} id="investment">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <motion.div 
            className="bg-green-100 p-4 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-2xl">$10,000</h3>
            <p>Seeking for 10% equity</p>
          </motion.div>
          <motion.div 
            className="bg-blue-100 p-4 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-2xl">$500,000</h3>
            <p>Projected first-year revenue</p>
          </motion.div>
        </div>
        <p className="text-center text-lg mt-4">
          Join us as we redefine how America experiences the tastes of NYC, one delicious bite at a time.
        </p>
      </Section>
    </div>
  );
};

export default NYCtasteInfographic;