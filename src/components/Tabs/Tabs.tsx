import React, { useState } from "react";
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

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <Link
            to={tab.sectionId}
            offset={-116}
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
