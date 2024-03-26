import styles from '../style/Education.module.css';

const Education = () => {
  return (
    <section className={styles.education}>
      <h2>教育经历</h2>
      <p>
        <span>
          <time>2014年</time>~<time>2018年</time>
        </span>
        <span> 巢湖学院</span>
      </p>
    </section>
  );
};

export default Education
