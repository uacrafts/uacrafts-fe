import styles from "./SectionTitle.module.scss"

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className={styles.sectionTitle}>
            <h2>{title}</h2>
        </div>
    );
};

export default SectionTitle;