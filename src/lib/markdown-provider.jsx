import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ content }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ ...props }) => (
          <h1
            {...props}
            className="text-3xl pt-4 pb-2 font-extrabold text-white"
          >
            {props.children}
          </h1>
        ),
        h2: ({ ...props }) => (
          <h2
            {...props}
            className="text-2xl pt-4 pb-2 font-semibold text-white"
          >
            {props.children}
          </h2>
        ),
        h3: ({ ...props }) => (
          <h3 {...props} className="text-xl pt-4 pb-2 font-semibold text-white">
            {props.children}
          </h3>
        ),
        h4: ({ ...props }) => (
          <h4 {...props} className="text-lg pt-4 pb-2 font-semibold text-white">
            {props.children}
          </h4>
        ),
        h5: ({ ...props }) => (
          <h5 {...props} className="text-md pt-4 pb-2 font-semibold text-white">
            {props.children}
          </h5>
        ),
        h6: ({ ...props }) => (
          <h6 {...props} className="text-sm pt-4 pb-2 font-semibold text-white">
            {props.children}
          </h6>
        ),
        p: ({ ...props }) => (
          <p
            {...props}
            className="text-sm mb-1 md:text-base leading-relaxed text-white"
          >
            {props.children}
          </p>
        ),
        ol: ({ ...props }) => (
          <ol
            {...props}
            className="list-decimal text-sm md:text-base ml-4 space-y-1 text-white"
          />
        ),
        ul: ({ ...props }) => (
          <ul
            {...props}
            className="list-disc text-sm md:text-base ml-4 space-y-1 text-white"
          />
        ),
        a: ({ ...props }) => (
          <a
            {...props}
            className="text-sky-500 hover:text-blue-500 underline"
          />
        ),
        pre: ({ ...props }) => (
          <code>
            <pre
              {...props}
              className="border-[8px] border-red-900 bg-zinc-900 text-white p-4 my-4 rounded overflow-x-auto"
            />
          </code>
        ),
        code: ({ ...props }) => (
          <code
            {...props}
            className="bg-zinc-900 text-white rounded px-2 py-1"
          />
        ),
        table: ({ ...props }) => (
          <div className="overflow-x-auto my-4">
            <table
              {...props}
              className="border-collapse border border-zinc-700 text-white"
            />
          </div>
        ),
        thead: ({ ...props }) => (
          <thead {...props} className="bg-zinc-800">
            {props.children}
          </thead>
        ),
        tbody: ({ ...props }) => (
          <tbody {...props} className="divide-y divide-zinc-700">
            {props.children}
          </tbody>
        ),
        th: ({ ...props }) => (
          <th
            {...props}
            className="border border-dotted border-sky-600 font-bold text-sky-600 px-3 py-2"
          />
        ),
        td: ({ ...props }) => (
          <td
            {...props}
            className="border border-dotted border-sky-600 px-3 py-2 text-white"
          />
        ),
        hr: ({ ...props }) => (
          <hr {...props} className="border-zinc-600 my-2 text-sky-300" />
        ),

        blockquote: ({ ...props }) => (
          <blockquote
            {...props}
            className="bg-rose-950 rounded-r-sm pt-2 pb-1 px-4 border-l-[10px] border-red-900 my-2 text-white"
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownRenderer;
