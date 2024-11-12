// app/(core)/blog/page.tsx
import styles from "./blog.module.scss";
import ArticleNews from "@/ui/articles/ArticleNews/ArticleNews";

interface Post {
  id: string;
  title: string;
  description: string;
  picture: string;
  author_post: string;
  link: string;
  createdAt: string;
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://672ccd21fd89797156404092.mockapi.io/v1/blog', {
      next: { revalidate: 60 }, // Опционально: для ISR (инкрементальной генерации)
    });

    if (!res.ok) {
      throw new Error(`Ошибка HTTP: ${res.status}`);
    }

    const posts: Post[] = await res.json();

    // Логирование данных для проверки
    console.log('Полученные данные:', posts);

    // Возвращаем данные без изменений
    return posts;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return [];
  }
}

const PageBlog = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <section className={styles.news}>
        <div className="container">
          <h2 className="h4">Все записи в блоге</h2>
          <div className={styles.news__row}>
            {posts.map((post) => (
              <ArticleNews
                key={post.id}
                link={post.link} // Используем ссылку из данных
                title={post.title}
                description={post.description} // Описание из данных
                imageSrc={post.picture}
                alt={post.title}
                author={post.author_post}
                date={new Date(post.createdAt).toLocaleDateString()} // Форматируем дату
                tags={post.tags || []}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageBlog;
