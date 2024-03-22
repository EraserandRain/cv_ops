import styles from './style/Bio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faMicroblog } from '@fortawesome/free-brands-svg-icons';

const Bio = () => {
  return (
    <section className={styles.bio}>
      <h2>基本概况</h2>
      <img src="/images/me.jpg" alt="" width="100" height="100" />
      <p>男 | 25岁 | 运维开发工程师 | 上海</p>
      <p>手机</p>
      <p>邮箱</p>
      <p>
        <FontAwesomeIcon icon={faGithub} />【
        <a href="https://eraserandrain.github.io/">GitHub</a>】 ： 坚持耕耘，坚持输出。
      </p>
      <p>
        <FontAwesomeIcon icon={faMicroblog} />【
        <a href="https://eraserandrain.github.io/">Blog</a>】 ： 基于 <strong>Vuepress</strong> + <strong>Github-pages</strong> 搭建的个人博客
      </p>
    </section>
  );
};

export default Bio
