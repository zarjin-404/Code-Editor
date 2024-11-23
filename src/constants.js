export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `
function greet(name) {
\t// Template literal is preferred over string concatenation
\tconsole.log(\`Hello, \${name}!\`);
}

greet("Jewel");
`,
  typescript: `
interface Params {
\tname: string;
}

function greet(data: Params) {
\t// Template literal is preferred over string concatenation
\tconsole.log(\`Hello, \${data.name}!\`);
}

greet({ name: "Jewel" });
`,
  python: `
def greet(name: str) -> None:
\t# f-string is preferred over string concatenation
\tprint(f"Hello, {name}!")

greet("Jewel")
`,
  java: `
public class Main {
\tpublic static void main(String[] args) {
\t\tString name = "Jewel";
\t\tSystem.out.printf("Hello, %s!%n", name);
\t}
}
`,
  csharp: `
using System;

namespace HelloWorld
{
\tclass Program
\t{
\t\tstatic void Main(string[] args)
\t\t{
\t\t\tstring name = "Jewel";
\t\t\tConsole.WriteLine($"Hello, {name}!");
\t\t}
\t}
}
`,
  php: `<?php

function greet(string $name): void {
\t// Using type declaration and return type
\techo "Hello, {$name}!";
}

greet("Jewel");
`,
};
