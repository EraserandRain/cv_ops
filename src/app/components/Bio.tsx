import styles from '../style/Bio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMicroblog } from '@fortawesome/free-brands-svg-icons';
import { StrongText } from '../TextComponents';
import Image from 'next/image';


const Bio = () => {
  return (
    <section className={styles.bio}>
      <h2>基本概况</h2>
      <Image src="/images/me.jpg" alt="" width={100} height={100} />
      <p>男 | 27岁 | 运维开发工程师 | 上海</p>
      <p>手机：13856185908</p>
      <p>邮箱：eraserandrain@gmail.com | 1349291258@qq.com</p>
      <p>
        <FontAwesomeIcon icon={faGithub} />【
        <a href="https://github.com/EraserandRain">GitHub</a>】 ： 坚持耕耘，坚持输出。
      </p>
      <p>
        <FontAwesomeIcon icon={faMicroblog} />【
        <a href="https://eraserandrain.github.io/">Blog</a>】 ： 基于 <StrongText value="Vuepress" />+<StrongText value="Github Pages" />搭建的个人博客
      </p>
    </section>
  );
};

export default Bio
