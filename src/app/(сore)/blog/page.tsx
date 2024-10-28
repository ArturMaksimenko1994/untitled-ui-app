import styles from "./blog.module.scss"
import ArticleNews from "@/ui/articles/ArticleNews/ArticleNews";

const PageBlog = () => {

  return (
    <section className={styles.news}>
      <div className="container">
        <h2 className="h4">Все записи в блоге</h2>
        <div className={styles.news__row}>

          <ArticleNews
            link="#"
            title="PM mental models"
            description="Mental models are simple expressions of complex processes or relationships."
            imageSrc="https://www.serconsrus.ru/app/uploads/2024/10/dsc08556-1-1-1200x929.jpg.webp"
            alt="Новость"
            author="Demi Wilkinson"
            date="16 Jan 2025"
            tags={["Product"]}
          />

          <ArticleNews
            link="#"
            title="PM mental models"
            description="Mental models are simple expressions of complex processes or relationships."
            imageSrc="https://www.serconsrus.ru/app/uploads/2024/10/photo_2024-10-07_13-00-25-880x586.jpg.webp"
            alt="Новость"
            author="Demi Wilkinson"
            date="16 Jan 2025"
            tags={["Product"]}
          />

          <ArticleNews
            link="#"
            title="PM mental models"
            description="Mental models are simple expressions of complex processes or relationships."
            imageSrc="https://www.serconsrus.ru/app/uploads/2024/09/8f9nfn2px368-880x635.jpg.webp"
            alt="Новость"
            author="Demi Wilkinson"
            date="16 Jan 2025"
            tags={["Product"]}
          />
        </div>
      </div>
    </section>
  );
};

export default PageBlog;