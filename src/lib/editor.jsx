import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/github.css";
import "quill-mention";

const fullToolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ align: [] }],
  ["blockquote", "code-block"],
  ["link", "image", "video"],
  ["clean"],
];

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: fullToolbarOptions,
    syntax: true,
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@", "#"],
      source: (searchTerm, renderItem) => {
        const values = [
          { id: 1, value: "JohnDoe" },
          { id: 2, value: "ReactJS" },
          { id: 3, value: "QuillEditor" },
          { id: 4, value: "SyntaxHighlight" },
        ];
        const matches = values.filter((item) =>
          item.value.includes(searchTerm)
        );
        renderItem(matches, searchTerm);
      },
    },
    clipboard: { matchVisual: false },
  };

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        placeholder="Start typing here..."
      />
    </div>
  );
};

export default RichTextEditor;
