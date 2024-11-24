import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ content }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <ReactMarkdown className="prose">{content}</ReactMarkdown>
    </div>
  );
}

export async function getStaticPaths() {
  const blogsDir = path.join(process.cwd(), 'src/blogs');
  const filenames = fs.readdirSync(blogsDir);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'src/blogs', `${params.slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');

  return {
    props: { content },
  };
}
