English Academia Markdown Cheatsheet
Headings

# Main Title (H1)

## Section Title (H2)

### Subsection (H3)

Emphasis

_italic_ or _italic_  
**bold** or **bold**  
~~strikethrough~~

Lists
Unordered

- Item 1
- Item 2
  - Subitem

Ordered

1. First item
2. Second item
3. Third item

Links

[Link text](https://example.com)

Images

![Alt text](../assets/image.jpg)

Blockquotes

> This is a quote.

Code
Inline code

Use the `code` tag.

Code blocks

function hello() {
console.log("Hello!");
}

Horizontal Rule

---

Front Matter (Top of every post)

---

title: Your Post Title
date: 2025-07-18
layout: layout.njk
tags: category1, category2

---

Tips

    Wrap lines at about 80 characters for readability in editors.

    Always leave a blank line between elements (like between paragraphs, lists, etc.).

    Keep your assets organized; images should be referenced relative to your Markdown file location.

    Preview your post with Eleventy’s dev server to check formatting live.
