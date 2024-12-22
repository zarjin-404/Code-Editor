export const LANGUAGE_VERSIONS = {
  javascript: '18.15.0',
  typescript: '5.0.3',
  python: '3.10.0',
  java: '15.0.2',
  csharp: '6.12.0',
  php: '8.2.3',
};

export const CODE_SNIPPETS = {
  javascript: `
// Simple greeting function in JavaScript
function greet(name) {
\t// Using modern template literal syntax
\tconsole.log(\`✨ Hello, \${name}! Welcome to JavaScript ✨\`);
}

// Call the function with a friendly greeting
greet("Jewel");
`,
  typescript: `
// Define strongly-typed interface
interface Params {
\tname: string;
}

// Type-safe greeting function
function greet(data: Params) {
\t// Using template literal for string interpolation
\tconsole.log(\`🎉 Hello, \${data.name}! Welcome to TypeScript 🎉\`);
}

// Call with type-checked parameter
greet({ name: "Jewel" });
`,
  python: `
# Modern Python greeting with type hints
def greet(name: str) -> None:
\t# Using f-string for clean string interpolation
\tprint(f"🐍 Hello, {name}! Welcome to Python 🐍")

# Call the function
greet("Jewel")
`,
  java: `
// Main class for Java program
public class Main {
\t// Entry point of the program
\tpublic static void main(String[] args) {
\t\t// Define name and print greeting
\t\tString name = "Jewel";
\t\tSystem.out.printf("☕ Hello, %s! Welcome to Java ☕%n", name);
\t}
}
`,
  csharp: `
using System;

// C# program namespace
namespace HelloWorld
{
\t// Main program class
\tclass Program
\t{
\t\t// Program entry point
\t\tstatic void Main(string[] args)
\t\t{
\t\t\t// Define name and display greeting
\t\t\tstring name = "Jewel";
\t\t\tConsole.WriteLine($"🎯 Hello, {name}! Welcome to C# 🎯");
\t\t}
\t}
}
`,
  php: `<?php

// Strongly-typed PHP greeting function
function greet(string $name): void {
\t// Using string interpolation
\techo "🐘 Hello, {$name}! Welcome to PHP 🐘\\n";
}

// Call the function
greet("Jewel");
`,
};
