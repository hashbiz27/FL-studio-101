import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

interface LessonBodyProps {
  content: string
}

export default function LessonBody({ content }: LessonBodyProps) {
  return (
    <div
      className="
        prose prose-gray dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-base prose-h3:mt-6 prose-h3:mb-3
        prose-p:leading-relaxed prose-p:my-4
        prose-li:my-1
        prose-code:before:content-none prose-code:after:content-none
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800
        prose-code:text-studio-500 dark:prose-code:text-studio-400
        prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.85em]
        prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-5
        prose-pre:rounded-xl prose-pre:overflow-hidden
        prose-table:text-sm
        prose-thead:border-b prose-thead:border-gray-200 dark:prose-thead:border-gray-700
        prose-th:bg-gray-50 dark:prose-th:bg-gray-800/60 prose-th:font-semibold prose-th:py-2 prose-th:px-3
        prose-td:py-2 prose-td:px-3
        prose-tr:border-b prose-tr:border-gray-100 dark:prose-tr:border-gray-800
        prose-img:rounded-xl prose-img:shadow-md
        prose-strong:text-gray-900 dark:prose-strong:text-gray-100
        prose-a:text-studio-500 dark:prose-a:text-studio-400 prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-studio-500 prose-blockquote:bg-studio-500/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1
      "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeSlug]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
