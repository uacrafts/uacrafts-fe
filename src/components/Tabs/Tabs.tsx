import React, { useEffect, useState } from "react";
import styles from "./Tabs.module.scss";
import { Link } from "react-scroll";

interface Tab {
  id: number;
  label: string;
  sectionId: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const updateOffset = () => {
      const screenWidth = window.innerWidth;

      // calculate offset based on screen dimensions
      const newOffset = screenWidth < 768 ? -170 : -116;

      setOffset(newOffset);
    };

    // Initial update
    updateOffset();
  }, []);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <Link
            to={tab.sectionId}
            offset={offset}
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => setActiveTab(tabs[index].id)}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
