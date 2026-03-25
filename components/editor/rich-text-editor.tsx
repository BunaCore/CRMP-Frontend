"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
} from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: value || "<p></p>",
    immediatelyRender: false,

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="w-full rounded-md border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-[#101922] overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-3 py-2 border-b border-[#cfdbe7] dark:border-gray-600 bg-[#f6f7f8] dark:bg-[#253341]">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <Bold size={16} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <Italic size={16} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <UnderlineIcon size={16} />
        </button>

        <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1" />

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <List size={16} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <ListOrdered size={16} />
        </button>
      </div>

      {/* Editor Area */}
      <EditorContent
        editor={editor}
        className="prose prose-sm dark:prose-invert max-w-none p-4 min-h-[250px] w-full text-sm text-[#0d141b] dark:text-white outline-none"
      />
    </div>
  );
}
