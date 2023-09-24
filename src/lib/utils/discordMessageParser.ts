const formattingDirectives = [
    {
        regex: /\*\*([^\*\*]+)\*\*/g,
        replacement: '<b>$1</b>',
    },
    {
        regex: /__([^__]+)__/g,
        replacement: '<u>$1</u>',
    },
    {
        regex: /\*([^\*]+)\*/g,
        replacement: '<em>$1</em>',
    },
    {
        regex: /_([^_]+)_/g,
        replacement: '<em>$1</em>',
    },
    {
        regex: /`([^`]+)`/g,
        replacement: '<code class="p-s">$1</code>',
    },
    {
        regex: /<:([a-zA-Z0-9_]+):([0-9]+)>/g,
        replacement: `<img class="emoji-text" src="https://cdn.discordapp.com/emojis/$2.png" alt="$1" />`
    }
];

export function discordMessageParse(content: string) {
    formattingDirectives.forEach(directive => {
        content = content.replace(directive.regex, directive.replacement);
    });
    return content;
}