import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import parse from "html-react-parser";

const parseJsonToHtml = (json) => {
  return parse(generateHTML(json, [Bold, Italic, Text, Paragraph, Document]));
};

export default parseJsonToHtml;
